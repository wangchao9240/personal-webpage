'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

/**
 * Individual floating code symbol
 */
function FloatingSymbol({
  symbol,
  position,
  color,
  speed,
}: {
  symbol: string;
  position: [number, number, number];
  color: string;
  speed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = position[1];

  useFrame((state) => {
    if (!meshRef.current) return;

    // Slow vertical drift
    const time = state.clock.getElapsedTime();
    meshRef.current.position.y = initialY + Math.sin(time * speed) * 0.5;

    // Slow rotation
    meshRef.current.rotation.z = Math.sin(time * speed * 0.5) * 0.1;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <Text
        fontSize={0.5}
        color={color}
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.02}
        outlineColor="#000000"
      >
        {symbol}
      </Text>
    </mesh>
  );
}

/**
 * Rotating particle system with code symbols
 */
function ParticleField() {
  const groupRef = useRef<THREE.Group>(null);

  const symbols = useMemo(
    () => ['{', '}', '[', ']', '<', '>', ';', ',', '(', ')', '=', '+', 'React', 'Vue', 'Node.js', 'Express', 'Koa', 'Java', 'Graphql', 'Vercel', 'Git', 'Hello World'],
    []
  );

  const colors = useMemo(
    () => ['#00d9ff', '#bd93f9', '#50fa7b'],
    []
  );

  // Generate random positions for symbols
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 40; i++) {
      temp.push({
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 10,
        ] as [number, number, number],
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: 0.2 + Math.random() * 0.3,
      });
    }
    return temp;
  }, [symbols, colors]);

  // Slow rotation of entire field
  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += 0.0005;
  });

  return (
    <group ref={groupRef}>
      {particles.map((particle, i) => (
        <FloatingSymbol key={i} {...particle} />
      ))}
    </group>
  );
}

/**
 * Geometric Code Background Component
 *
 * Displays animated 3D floating code symbols using Three.js
 * with React Three Fiber. Provides visual depth and motion
 * for the Hero section.
 *
 * Features:
 * - 40 floating code symbols
 * - Subtle rotation and drift animations
 * - Cyan, purple, and green color scheme
 * - Performance optimized with useMemo
 */
export function GeometricBackground() {
  return (
    <div
      className="absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* Gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg-hero via-[#0a0e1a] to-[#050810]" />

      {/* Three.js Canvas */}
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        gl={{
          antialias: false, // Disable for performance
          alpha: true,
          powerPreference: 'high-performance',
        }}
        dpr={[1, 1.5]} // Limit pixel ratio for performance
      >
        <ambientLight intensity={0.5} />
        <ParticleField />
      </Canvas>
    </div>
  );
}


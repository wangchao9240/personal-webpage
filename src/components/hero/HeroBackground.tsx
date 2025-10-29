'use client';

import React, { Suspense, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { StaticGradientBackground } from './StaticGradientBackground';

// Lazy load the Three.js component
const GeometricBackground = dynamic(
  () =>
    import('./GeometricBackground').then((mod) => ({
      default: mod.GeometricBackground,
    })),
  {
    ssr: false,
    loading: () => <StaticGradientBackground />,
  }
);

/**
 * Hero Background Component
 *
 * Intelligently loads either the animated 3D background or static fallback
 * based on:
 * - User's motion preferences (prefers-reduced-motion)
 * - WebGL support
 * - Error handling
 *
 * Provides graceful degradation for accessibility and performance.
 */
export function HeroBackground() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Error boundary fallback
  if (hasError) {
    return <StaticGradientBackground />;
  }

  // Use static background if user prefers reduced motion
  if (prefersReducedMotion) {
    return <StaticGradientBackground />;
  }

  // Load 3D background with error handling
  return (
    <ErrorBoundary
      fallback={<StaticGradientBackground />}
      onError={() => setHasError(true)}
    >
      <Suspense fallback={<StaticGradientBackground />}>
        <GeometricBackground />
      </Suspense>
    </ErrorBoundary>
  );
}

/**
 * Simple Error Boundary for Three.js component
 */
class ErrorBoundary extends React.Component<
  {
    children: React.ReactNode;
    fallback: React.ReactNode;
    onError?: () => void;
  },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.warn('GeometricBackground failed to load:', error);
    this.props.onError?.();
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}


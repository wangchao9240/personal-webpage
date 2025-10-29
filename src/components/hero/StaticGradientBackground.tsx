'use client';

import React from 'react';

/**
 * Static Gradient Background Component
 *
 * Fallback background when Three.js is not available or
 * when user prefers reduced motion.
 *
 * Provides a visually appealing gradient alternative to
 * the animated geometric background.
 */
export function StaticGradientBackground() {
  return (
    <div
      className="absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg-hero via-[#0a0e1a] to-[#050810]" />

      {/* Geometric accent shapes */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-geo-primary opacity-5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-geo-secondary opacity-5 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-geo-tertiary opacity-5 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />

      {/* Code symbol decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 text-6xl text-geo-primary font-mono">
          {'{'}
        </div>
        <div className="absolute top-40 right-32 text-5xl text-geo-secondary font-mono">
          {'}'}
        </div>
        <div className="absolute bottom-32 left-1/3 text-4xl text-geo-tertiary font-mono">
          {'<'}
        </div>
        <div className="absolute bottom-20 right-20 text-6xl text-geo-primary font-mono opacity-50">
          {'>'}
        </div>
      </div>
    </div>
  );
}


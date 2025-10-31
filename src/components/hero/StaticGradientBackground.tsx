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
      {/* Base gradient - White for light mode, dark gradient for dark mode */}
      <div className="absolute inset-0 bg-white dark:bg-gradient-to-br dark:from-[#0a0e1a] dark:via-[#0a0e1a] dark:to-[#050810]" />

      {/* Geometric accent shapes - Very subtle in light mode */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse
        bg-[rgba(14,165,233,0.05)] dark:bg-[#00d9ff] dark:opacity-5" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl animate-pulse [animation-delay:1s]
        bg-[rgba(139,92,246,0.05)] dark:bg-[#bd93f9] dark:opacity-5" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full blur-3xl animate-pulse [animation-delay:2s]
        bg-[rgba(16,185,129,0.05)] dark:bg-[#50fa7b] dark:opacity-5" />

      {/* Code symbol decorations - Matching theme colors */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-20 left-20 text-6xl font-mono
          text-[#0EA5E9] dark:text-[#00d9ff]">
          {'{'}
        </div>
        <div className="absolute top-40 right-32 text-5xl font-mono
          text-[#8B5CF6] dark:text-[#bd93f9]">
          {'}'}
        </div>
        <div className="absolute bottom-32 left-1/3 text-4xl font-mono
          text-[#10B981] dark:text-[#50fa7b]">
          {'<'}
        </div>
        <div className="absolute bottom-20 right-20 text-6xl font-mono opacity-50
          text-[#0EA5E9] dark:text-[#00d9ff]">
          {'>'}
        </div>
      </div>
    </div>
  );
}


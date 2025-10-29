'use client';

import React from 'react';
import { TerminalWindow } from '@/components/hero/TerminalWindow';
import { TypewriterText } from '@/components/hero/TypewriterText';
import { generateSkillsCodeString } from '@/data/skills';
import { scrollToSection } from '@/lib/utils';

/**
 * Hero Section Component
 *
 * The main hero section of the portfolio featuring:
 * - Terminal window with typewriter effect
 * - Run Code button for navigation
 *
 * Note: The animated geometric code background is now a global background
 * applied at the page level, not specific to this section.
 *
 * Design: Code Aesthetics - Dark theme with terminal aesthetic
 */
export function HeroSection() {
  const codeString = generateSkillsCodeString();

  return (
    <section
      id="hero"
      className="hero-section relative min-h-screen flex items-center justify-center px-4"
      aria-label="Hero section - Developer introduction"
    >
      {/* Content Layer */}
      <div className="hero-content relative z-10 max-w-3xl w-full">
        {/* Terminal Window with Typewriter Effect */}
        <TerminalWindow>
          <TypewriterText text={codeString} speed={50} delay={300} />
        </TerminalWindow>

        {/* Run Button - Scrolls to About section */}
        <div className="flex justify-center mt-10">
          <button
            className="run-button group relative px-8 py-3 border-2 border-btn-primary text-btn-primary font-semibold text-base uppercase tracking-wider rounded-lg transition-all duration-200 hover:bg-btn-primary hover:text-black hover:shadow-button hover:-translate-y-0.5 active:translate-y-0"
            onClick={() => scrollToSection('about', -90)}
            aria-label="Scroll to About section"
          >
            <span className="flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              Run Code
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}


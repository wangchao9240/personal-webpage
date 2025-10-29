'use client';

import React from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Card } from '@/components/ui/Card';

/**
 * About Section Component
 *
 * Displays a concise value proposition introducing the candidate's
 * expertise and focus areas. Designed to be scanned quickly by recruiters.
 *
 * Design Specifications (from mockup):
 * - Section title: "About" (32px, bold, #f3f4f6)
 * - Card container: #0d1117 bg, #30363d border, 12px radius
 * - Text: Fira Code monospace, 18px, #9ca3af
 * - Line height: 1.75 (loose/relaxed)
 * - Letter spacing: 0.025em (tracking-wide)
 * - Hover effect: cyan border glow + enhanced shadow
 *
 * Content Focus:
 * - 6+ years experience
 * - React, Vue, modern JavaScript
 * - Performance optimization
 * - Clean code principles
 *
 * @example
 * ```tsx
 * <AboutSection />
 * ```
 */
export function AboutSection() {
  return (
    <SectionWrapper id="about" title="About">
      <Card>
        <p className="font-mono text-lg leading-loose tracking-wide text-[#9ca3af]">
          Creative problem solver with 6+ years of front-end development experience. 
          I specialize in transforming complex requirements into elegant, user-friendly 
          web applications. Proficient in React, Vue, and modern JavaScript ecosystem, 
          with a strong focus on performance optimization and clean code.
        </p>
      </Card>
    </SectionWrapper>
  );
}


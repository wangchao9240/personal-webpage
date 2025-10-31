'use client';

import React from 'react';
import { motion } from 'framer-motion';

/**
 * Props for the SectionWrapper component
 */
export interface SectionWrapperProps {
  /** Section ID for navigation */
  id: string;
  /** Section title */
  title: string;
  /** Section content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Whether to show the title (default: true) */
  showTitle?: boolean;
  /** Custom title size (default: text-3xl) */
  titleSize?: string;
}

/**
 * SectionWrapper Component
 *
 * A wrapper component that provides consistent layout, spacing, and scroll
 * animations for all content sections (About, Skills, Experience).
 *
 * Features:
 * - Section ID for navigation system integration
 * - Consistent section title styling
 * - Scroll reveal animation (fade + slide up)
 * - Max-width container (1152px / max-w-6xl)
 * - Consistent vertical spacing between sections
 *
 * Design Specifications:
 * - Max width: 1152px (max-w-6xl)
 * - Horizontal padding: 32px (px-8)
 * - Section gap: 64px (gap-16 / mb-16)
 * - Title: 32px, bold, #f3f4f6
 * - Animation: fade in + slide up (30px) on scroll
 *
 * @example
 * ```tsx
 * <SectionWrapper id="about" title="About">
 *   <Card>
 *     <p>About content...</p>
 *   </Card>
 * </SectionWrapper>
 * ```
 */
export function SectionWrapper({
  id,
  title,
  children,
  className = '',
  showTitle = true,
  titleSize = 'text-3xl',
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={`mb-16 w-full ${className}`.trim()}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-100px' }}
      aria-labelledby={`${id}-title`}
    >
      {showTitle && (
        <motion.h2
          id={`${id}-title`}
          className={`mb-4 sm:mb-6 font-bold tracking-tight text-2xl sm:${titleSize}
            text-[#0F172A] dark:text-[#f3f4f6]`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>
      )}
      {children}
    </motion.section>
  );
}


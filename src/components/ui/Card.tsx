'use client';

import React from 'react';
import { motion } from 'framer-motion';

/**
 * Props for the Card component
 */
export interface CardProps {
  /** Card content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Whether to show hover effects (default: true) */
  hover?: boolean;
  /** Whether to animate the card on mount */
  animate?: boolean;
}

/**
 * Card Component
 *
 * A reusable card container with consistent styling across all content sections.
 * Features dark theme design with subtle shadows and optional hover effects.
 *
 * Design Specifications:
 * - Background: #0d1117 (dark gray)
 * - Border: 1px solid #30363d (medium gray)
 * - Border radius: 12px (rounded-xl)
 * - Padding: 24px (p-6)
 * - Shadow: 0 4px 12px rgba(0, 0, 0, 0.3)
 * - Hover shadow: 0 8px 24px with cyan glow
 *
 * @example
 * ```tsx
 * <Card>
 *   <p>Your content here</p>
 * </Card>
 * ```
 *
 * @example With hover disabled
 * ```tsx
 * <Card hover={false}>
 *   <p>Static card without hover effects</p>
 * </Card>
 * ```
 */
export function Card({ 
  children, 
  className = '', 
  hover = true,
  animate = false 
}: CardProps) {
  const baseClasses = `w-full rounded-xl border p-6 transition-all duration-300
    border-[#E2E8F0] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.1)]
    dark:border-[#30363d] dark:bg-[#0d1117] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)]`;
  
  const hoverClasses = hover 
    ? 'hover:border-[#0EA5E9] hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)] dark:hover:border-[#00d9ff]/50 dark:hover:shadow-[0_8px_24px_rgba(6,208,249,0.1)]' 
    : '';

  const combinedClasses = `${baseClasses} ${hoverClasses} ${className}`.trim();

  if (animate) {
    return (
      <motion.div
        className={combinedClasses}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: '-50px' }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={combinedClasses}>
      {children}
    </div>
  );
}


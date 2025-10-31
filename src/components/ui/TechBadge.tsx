'use client';

import React from 'react';
import { IconType } from 'react-icons';
import { motion } from 'framer-motion';

/**
 * Props for the TechBadge component
 */
export interface TechBadgeProps {
  /** The icon component from React Icons */
  icon: IconType;
  /** The technology name to display */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
}

/**
 * TechBadge Component
 *
 * A pill-shaped badge displaying a technology icon and name.
 * Used in the Skills section to showcase technical proficiencies.
 *
 * Design Specifications:
 * - Background: rgba(0, 217, 255, 0.1) - subtle cyan tint
 * - Border: 1px solid rgba(0, 217, 255, 0.3) - cyan border
 * - Border radius: 6px
 * - Padding: 8px 12px
 * - Icon: 20px × 20px, cyan (#00d9ff)
 * - Text: 14px, medium weight, cyan (#00d9ff)
 * - Gap between icon and text: 8px
 * - Hover: slightly brighter background, scale 1.05
 *
 * @example
 * ```tsx
 * import { FaReact } from 'react-icons/fa';
 *
 * <TechBadge icon={FaReact} label="React" />
 * ```
 */
export function TechBadge({ 
  icon: Icon, 
  label, 
  onClick,
  className = '' 
}: TechBadgeProps) {
  const baseClasses = 
    `inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium transition-all duration-200
    bg-[rgba(14,165,233,0.1)] border-[rgba(14,165,233,0.3)] text-sky-800
    dark:bg-[#00d9ff]/10 dark:border-[#00d9ff]/30 dark:text-[#00d9ff]`;
  
  const hoverClasses = 
    'hover:bg-[rgba(14,165,233,0.15)] hover:border-[rgba(14,165,233,0.5)] dark:hover:bg-[#00d9ff]/15 dark:hover:border-[#00d9ff]/50';

  const interactiveClasses = onClick 
    ? 'cursor-pointer active:scale-95' 
    : '';

  const combinedClasses = `${baseClasses} ${hoverClasses} ${interactiveClasses} ${className}`.trim();

  return (
    <motion.button
      className={combinedClasses}
      onClick={onClick}
      disabled={!onClick}
      type="button"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`${label} technology`}
    >
      <Icon className="h-5 w-5" aria-hidden="true" />
      <span>{label}</span>
    </motion.button>
  );
}


'use client';

import React from 'react';
import { useScrollSpy, type SectionId } from '@/hooks/useScrollSpy';
import { scrollToSection } from '@/lib/utils';

/**
 * Navigation item configuration
 */
interface NavItem {
  id: SectionId;
  label: string;
  ariaLabel: string;
}

/**
 * Default navigation items for the portfolio
 */
const NAV_ITEMS: NavItem[] = [
  {
    id: 'hero',
    label: 'Home',
    ariaLabel: 'Navigate to Home section',
  },
  {
    id: 'about',
    label: 'About',
    ariaLabel: 'Navigate to About section',
  },
  {
    id: 'skills',
    label: 'Skills',
    ariaLabel: 'Navigate to Skills section',
  },
  {
    id: 'experience',
    label: 'Experience',
    ariaLabel: 'Navigate to Experience section',
  },
  {
    id: 'projects',
    label: 'Projects',
    ariaLabel: 'Navigate to Projects section',
  },
];

/**
 * Floating Navigation Component
 *
 * A fixed-position navigation menu displayed as circular dots on the right side
 * of the viewport. The active section is highlighted with a larger, glowing dot.
 * Hover over dots to reveal section labels.
 *
 * Features:
 * - Scroll spy integration for active section tracking
 * - Smooth scroll on click
 * - Hover labels with slide-in animation
 * - Keyboard accessible
 * - ARIA labels for screen readers
 *
 * Design:
 * - Position: Fixed right side, vertically centered
 * - Inactive dots: 10px, gray
 * - Hover dots: 12px, lighter gray
 * - Active dot: 14px, cyan with glow
 * - Labels: Dark background, white text
 *
 * @example
 * ```tsx
 * <FloatingNav />
 * ```
 */
export function FloatingNav() {
  const activeSection = useScrollSpy({ offset: 200 });

  const handleClick = (sectionId: SectionId, event: React.MouseEvent) => {
    event.preventDefault();
    scrollToSection(sectionId, -90);
  };

  const handleKeyDown = (sectionId: SectionId, event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      scrollToSection(sectionId, -90);
    }
  };

  return (
    <nav
      className="fixed top-1/2 right-8 z-50 -translate-y-1/2"
      aria-label="Page section navigation"
      role="navigation"
    >
      <ul className="flex flex-col items-center gap-4">
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;

          return (
            <li key={item.id} className="group relative">
              {/* Navigation Dot */}
              <button
                onClick={(e) => handleClick(item.id, e as any)}
                onKeyDown={(e) => handleKeyDown(item.id, e)}
                aria-label={item.ariaLabel}
                aria-current={isActive ? 'page' : undefined}
                className={`
                  block rounded-full transition-all duration-300 ease-out
                  ${
                    isActive
                      ? 'h-3.5 w-3.5 bg-[#00d9ff] opacity-100 shadow-[0_0_8px_rgba(0,217,255,0.5)]'
                      : 'h-2.5 w-2.5 bg-[#6b7280] opacity-60 hover:h-3 hover:w-3 hover:bg-[#9ca3af] hover:opacity-90'
                  }
                  focus:outline-none focus:ring-2 focus:ring-[#00d9ff] focus:ring-offset-2 focus:ring-offset-[#0a0e1a]
                `}
              />

              {/* Hover Label */}
              <span
                className="
                  pointer-events-none absolute top-1/2 right-full mr-3 -translate-y-1/2
                  whitespace-nowrap rounded border border-white/10
                  bg-[rgba(17,24,39,0.95)] px-3 py-1.5
                  text-sm font-medium text-[#f9fafb]
                  opacity-0 transition-opacity duration-200
                  group-hover:opacity-100
                "
                aria-hidden="true"
              >
                {item.label}
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}


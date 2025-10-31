'use client';

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

/**
 * ThemeToggle Component
 * 
 * A button that toggles between light and dark mode with smooth icon transition.
 * Shows sun icon in light mode and moon icon in dark mode.
 * 
 * Features:
 * - Smooth rotation animation when toggling
 * - Accessible with ARIA labels
 * - Keyboard navigation support
 * - Icon changes based on current theme
 * 
 * Design:
 * - Light mode: Sun icon, sky blue on hover
 * - Dark mode: Moon icon, cyan on hover
 * - 40px x 40px clickable area
 * - 20px icon size
 * 
 * @example
 * ```tsx
 * <ThemeToggle />
 * ```
 */
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className="
        flex h-10 w-10 items-center justify-center rounded-lg
        transition-all duration-300 ease-out
        bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-[#0EA5E9]
        dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-cyan-400
        focus:outline-none focus:ring-2 focus:ring-[#0EA5E9] focus:ring-offset-2
        focus:ring-offset-white dark:focus:ring-offset-slate-900
      "
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        // Sun Icon (Light Mode)
        <svg
          className="h-5 w-5 transition-transform duration-300 hover:rotate-45"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        // Moon Icon (Dark Mode)
        <svg
          className="h-5 w-5 transition-transform duration-300 hover:rotate-12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
    </button>
  );
}


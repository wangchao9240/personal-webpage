'use client';

import React from 'react';

/**
 * Contact information for the header
 */
const CONTACT_INFO = {
  email: 'chasenwang1026@outlook.com',
  linkedin: 'https://www.linkedin.com/in/chasen-wang-b6621b318/',
  github: 'https://github.com/wangchao9240',
};

/**
 * Header Component
 *
 * Fixed header with semi-transparent glassmorphism background containing
 * contact icons (Email, LinkedIn, GitHub) on the right side.
 *
 * Features:
 * - Fixed positioning at top of page
 * - Glassmorphism effect (backdrop blur + semi-transparent background)
 * - Contact icons with hover effects
 * - Keyboard accessible
 * - External links open in new tab
 *
 * Design:
 * - Height: 70px
 * - Background: rgba(10, 14, 26, 0.85) with 10px backdrop blur
 * - Icons: 20px size, gray default, cyan on hover
 * - Spacing: 20px between icons, 32px from right edge
 *
 * @example
 * ```tsx
 * <Header />
 * ```
 */
export function Header() {
  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-50
        flex h-[60px] sm:h-[70px] w-full items-center justify-end
        border-b border-[rgba(48,54,61,0.3)]
        bg-[rgba(10,14,26,0.85)]
        px-4 sm:px-6 md:px-8 shadow-lg backdrop-blur-[10px]
      "
      role="banner"
      aria-label="Site header with contact information"
    >
      <div className="flex items-center gap-3 sm:gap-4 md:gap-5" aria-label="Contact links">
        {/* Email Icon */}
        <a
          href={`mailto:${CONTACT_INFO.email}`}
          aria-label="Send me an email"
          className="
            text-[#d1d5db] opacity-90 transition-all duration-200
            hover:scale-110 hover:text-[#00d9ff] hover:opacity-100
            focus:outline-none focus:ring-2 focus:ring-[#00d9ff] focus:ring-offset-2 focus:ring-offset-[#0a0e1a]
          "
        >
          {/* Material Icons - Mail */}
          <svg
            className="h-4 w-4 sm:h-5 sm:w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
        </a>

        {/* LinkedIn Icon */}
        <a
          href={CONTACT_INFO.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View my LinkedIn profile"
          className="
            text-[#d1d5db] opacity-90 transition-all duration-200
            hover:scale-110 hover:text-[#00d9ff] hover:opacity-100
            focus:outline-none focus:ring-2 focus:ring-[#00d9ff] focus:ring-offset-2 focus:ring-offset-[#0a0e1a]
          "
        >
          <svg
            className="h-4 w-4 sm:h-5 sm:w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>

        {/* GitHub Icon */}
        <a
          href={CONTACT_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View my GitHub profile"
          className="
            text-[#d1d5db] opacity-90 transition-all duration-200
            hover:scale-110 hover:text-[#00d9ff] hover:opacity-100
            focus:outline-none focus:ring-2 focus:ring-[#00d9ff] focus:ring-offset-2 focus:ring-offset-[#0a0e1a]
          "
        >
          <svg
            className="h-4 w-4 sm:h-5 sm:w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.852 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
            />
          </svg>
        </a>
      </div>
    </header>
  );
}


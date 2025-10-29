'use client';

import React from 'react';

/**
 * Props for the TerminalWindow component
 */
export interface TerminalWindowProps {
  /** Content to display inside the terminal */
  children: React.ReactNode;
  /** Optional CSS class name */
  className?: string;
  /** Terminal title (default: "Terminal") */
  title?: string;
}

/**
 * Terminal Window Component
 *
 * Displays content in a terminal-style window with macOS traffic light dots
 * and a dark, code-aesthetic design.
 *
 * @example
 * ```tsx
 * <TerminalWindow title="bash">
 *   <TypewriterText content={codeContent} />
 * </TerminalWindow>
 * ```
 */
export function TerminalWindow({
  children,
  className = '',
  title = 'Terminal',
}: TerminalWindowProps) {
  return (
    <div
      className={`terminal-window bg-terminal rounded-xl shadow-terminal overflow-hidden ${className}`}
    >
      {/* Terminal Header */}
      <div className="terminal-header flex items-center px-4 h-10 bg-terminal-header border-b border-terminal-border">
        {/* macOS Traffic Light Dots */}
        <div className="flex items-center gap-2">
          <div
            className="w-3 h-3 rounded-full bg-dot-red"
            aria-label="Close"
          ></div>
          <div
            className="w-3 h-3 rounded-full bg-dot-yellow"
            aria-label="Minimize"
          ></div>
          <div
            className="w-3 h-3 rounded-full bg-dot-green"
            aria-label="Maximize"
          ></div>
        </div>

        {/* Terminal Title */}
        <div className="flex-1 text-center text-sm text-terminal-muted font-mono">
          {title}
        </div>

        {/* Spacer to keep title centered */}
        <div className="w-[68px]" aria-hidden="true"></div>
      </div>

      {/* Terminal Content */}
      <div className="terminal-content p-6 font-mono text-terminal-green text-lg leading-relaxed">
        {children}
      </div>
    </div>
  );
}


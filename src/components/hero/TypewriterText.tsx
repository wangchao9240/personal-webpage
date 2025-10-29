'use client';

import React from 'react';
import { useTypewriter } from '@/hooks/useTypewriter';

/**
 * Props for the TypewriterText component
 */
export interface TypewriterTextProps {
  /** The code text to type out */
  text: string;
  /** Typing speed in milliseconds per character (default: 50) */
  speed?: number;
  /** Initial delay before typing starts (default: 0) */
  delay?: number;
  /** Whether to show a blinking cursor (default: true) */
  showCursor?: boolean;
}

/**
 * Typewriter Text Component
 *
 * Displays text with a typewriter animation effect and optional blinking cursor.
 * Designed for code content with syntax highlighting support.
 *
 * @example
 * ```tsx
 * <TypewriterText
 *   text={codeString}
 *   speed={50}
 *   showCursor={true}
 * />
 * ```
 */
export function TypewriterText({
  text,
  speed = 50,
  delay = 0,
  showCursor = true,
}: TypewriterTextProps) {
  const { displayedText, isComplete } = useTypewriter({ text, speed, delay });

  return (
    <pre className="whitespace-pre-wrap font-mono">
      <code>
        {displayedText}
        {showCursor && (
          <span
            className={`inline-block w-2 h-5 ml-0.5 bg-cursor-color ${
              isComplete ? 'animate-cursor-blink' : ''
            }`}
            aria-hidden="true"
          >
            {!isComplete && '█'}
          </span>
        )}
      </code>
    </pre>
  );
}

/**
 * Syntax-highlighted TypewriterText Component
 *
 * Displays code with syntax highlighting and typewriter effect.
 * This version applies color coding to code elements.
 *
 * @example
 * ```tsx
 * <SyntaxHighlightedTypewriter
 *   code={skillsObject}
 *   speed={50}
 * />
 * ```
 */
export interface SyntaxHighlightedTypewriterProps {
  /** Raw code string to display */
  code: string;
  /** Typing speed (default: 50ms) */
  speed?: number;
  /** Initial delay (default: 300ms) */
  delay?: number;
}

export function SyntaxHighlightedTypewriter({
  code,
  speed = 50,
  delay = 300,
}: SyntaxHighlightedTypewriterProps) {
  const { displayedText, isComplete } = useTypewriter({
    text: code,
    speed,
    delay,
  });

  // Simple syntax highlighting for JavaScript object
  const highlightSyntax = (text: string) => {
    // This is a basic implementation
    // In production, consider using a library like Prism.js or highlight.js
    return text
      .split('\n')
      .map((line, i) => {
        let highlightedLine = line;

        // Highlight keywords (const, let, var)
        highlightedLine = highlightedLine.replace(
          /\b(const|let|var)\b/g,
          '<span class="text-keyword">$1</span>'
        );

        // Highlight strings
        highlightedLine = highlightedLine.replace(
          /'([^']*)'/g,
          '<span class="text-string">\'$1\'</span>'
        );

        // Highlight property names (before :)
        highlightedLine = highlightedLine.replace(
          /(\w+)(?=\s*:)/g,
          '<span class="text-property">$1</span>'
        );

        // Highlight brackets and punctuation
        highlightedLine = highlightedLine.replace(
          /([{}\[\]:,])/g,
          '<span class="text-secondary">$1</span>'
        );

        return (
          <div key={i} dangerouslySetInnerHTML={{ __html: highlightedLine }} />
        );
      });
  };

  return (
    <pre className="whitespace-pre font-mono text-terminal-green">
      <code>
        {highlightSyntax(displayedText)}
        <span
          className={`inline-block w-2 h-5 ml-0.5 bg-cursor-color ${
            isComplete ? 'animate-cursor-blink' : ''
          }`}
          aria-hidden="true"
        >
          █
        </span>
      </code>
    </pre>
  );
}


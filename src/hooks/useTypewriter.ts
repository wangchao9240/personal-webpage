'use client';

import { useState, useEffect } from 'react';

/**
 * Options for the useTypewriter hook
 */
export interface UseTypewriterOptions {
  /** The complete text to type out */
  text: string;
  /** Milliseconds per character (default: 50) */
  speed?: number;
  /** Initial delay before typing starts in milliseconds (default: 0) */
  delay?: number;
}

/**
 * Return type for useTypewriter hook
 */
export interface UseTypewriterReturn {
  /** The currently displayed text (progressively typed) */
  displayedText: string;
  /** Whether the typing animation is complete */
  isComplete: boolean;
}

/**
 * Custom hook for typewriter effect
 *
 * Creates a typewriter animation that progressively reveals text
 * character by character at a specified speed.
 *
 * @param options - Configuration options for the typewriter effect
 * @returns Object containing displayedText and isComplete status
 *
 * @example
 * ```tsx
 * const { displayedText, isComplete } = useTypewriter({
 *   text: "Hello, World!",
 *   speed: 50,
 *   delay: 500
 * });
 * ```
 */
export function useTypewriter({
  text,
  speed = 50,
  delay = 0,
}: UseTypewriterOptions): UseTypewriterReturn {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Reset state when text changes
    setDisplayedText('');
    setIsComplete(false);

    // Handle empty text
    if (!text) {
      setIsComplete(true);
      return;
    }

    let currentIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const typeNextCharacter = () => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
        timeoutId = setTimeout(typeNextCharacter, speed);
      } else {
        setIsComplete(true);
      }
    };

    // Start typing after initial delay
    timeoutId = setTimeout(typeNextCharacter, delay);

    // Cleanup function
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [text, speed, delay]);

  return { displayedText, isComplete };
}


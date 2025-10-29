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
 * Token type for syntax highlighting
 */
interface Token {
  text: string;
  type: 'keyword' | 'variable' | 'property' | 'string' | 'punctuation' | 'whitespace';
}

/**
 * Tokenize code string into typed segments for syntax highlighting
 */
function tokenizeCode(code: string): Token[] {
  const tokens: Token[] = [];
  let remaining = code;

  while (remaining.length > 0) {
    let matched = false;

    // Match keywords (const, let, var)
    const keywordMatch = remaining.match(/^(const|let|var)\b/);
    if (keywordMatch) {
      tokens.push({ text: keywordMatch[0], type: 'keyword' });
      remaining = remaining.slice(keywordMatch[0].length);
      matched = true;
      continue;
    }

    // Match strings in quotes
    const stringMatch = remaining.match(/^'[^']*'/);
    if (stringMatch) {
      tokens.push({ text: stringMatch[0], type: 'string' });
      remaining = remaining.slice(stringMatch[0].length);
      matched = true;
      continue;
    }

    // Match property names (word followed by colon)
    const propertyMatch = remaining.match(/^(\w+)(?=\s*:)/);
    if (propertyMatch) {
      tokens.push({ text: propertyMatch[0], type: 'property' });
      remaining = remaining.slice(propertyMatch[0].length);
      matched = true;
      continue;
    }

    // Match variable names (after const/let/var, before =)
    const variableMatch = remaining.match(/^(\w+)(?=\s*=)/);
    if (variableMatch && tokens.length > 0 && tokens[tokens.length - 1]?.type === 'keyword') {
      tokens.push({ text: variableMatch[0], type: 'variable' });
      remaining = remaining.slice(variableMatch[0].length);
      matched = true;
      continue;
    }

    // Match punctuation and brackets
    const punctMatch = remaining.match(/^([{}\[\]:,=;()])/);
    if (punctMatch) {
      tokens.push({ text: punctMatch[0], type: 'punctuation' });
      remaining = remaining.slice(punctMatch[0].length);
      matched = true;
      continue;
    }

    // Match whitespace (including newlines)
    const whitespaceMatch = remaining.match(/^(\s+)/);
    if (whitespaceMatch) {
      tokens.push({ text: whitespaceMatch[0], type: 'whitespace' });
      remaining = remaining.slice(whitespaceMatch[0].length);
      matched = true;
      continue;
    }

    // If no pattern matched, take one character as punctuation
    if (!matched) {
      tokens.push({ text: remaining[0], type: 'punctuation' });
      remaining = remaining.slice(1);
    }
  }

  return tokens;
}

/**
 * Get CSS class for token type
 */
function getTokenClass(type: Token['type']): string {
  switch (type) {
    case 'keyword':
      return 'text-keyword'; // Pink
    case 'variable':
      return 'text-terminal-green'; // Terminal green
    case 'property':
      return 'text-property'; // Light green
    case 'string':
      return 'text-string'; // Yellow
    case 'punctuation':
      return 'text-secondary'; // Gray
    case 'whitespace':
      return '';
    default:
      return 'text-terminal-green';
  }
}

/**
 * Typewriter Text Component with Syntax Highlighting
 *
 * Displays code with typewriter animation effect and syntax highlighting.
 * Colors are applied as characters are typed, matching the design mockup.
 *
 * Color scheme:
 * - Keywords (const): Pink (#ff79c6)
 * - Variables (skills): Terminal green (#00ff41)
 * - Properties (frontend, backend): Light green (#50fa7b)
 * - Strings ('React', 'Vue'): Yellow (#f1fa8c)
 * - Punctuation ({, }, [, ]): Gray (#8b949e)
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

  // Tokenize the full text for reference
  const tokens = React.useMemo(() => tokenizeCode(text), [text]);

  // Calculate which tokens to display based on current character count
  const renderTokens = () => {
    let charCount = 0;
    const elements: React.ReactNode[] = [];

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      const tokenLength = token.text.length;

      if (charCount >= displayedText.length) {
        // We've rendered all displayed characters
        break;
      }

      if (charCount + tokenLength <= displayedText.length) {
        // Render entire token
        const className = getTokenClass(token.type);
        elements.push(
          <span key={i} className={className}>
            {token.text}
          </span>
        );
        charCount += tokenLength;
      } else {
        // Render partial token
        const partialText = token.text.slice(0, displayedText.length - charCount);
        const className = getTokenClass(token.type);
        elements.push(
          <span key={i} className={className}>
            {partialText}
          </span>
        );
        charCount += partialText.length;
        break;
      }
    }

    return elements;
  };

  return (
    <pre className="whitespace-pre-wrap font-mono text-[18px] leading-[1.6]">
      <code>
        {renderTokens()}
        {showCursor && (
          <span
            className={`inline-block w-[2px] h-5 ml-0.5 bg-cursor-color ${
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


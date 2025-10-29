/**
 * Utility Functions
 *
 * General-purpose utility functions used across the application.
 */

/**
 * Scrolls smoothly to a section by ID
 *
 * @param sectionId - The ID of the section to scroll to (without #)
 * @param offset - Optional offset in pixels (default: -80 for fixed header)
 *
 * @example
 * ```tsx
 * <button onClick={() => scrollToSection('about')}>
 *   Go to About
 * </button>
 * ```
 */
export function scrollToSection(sectionId: string, offset: number = -80): void {
  const element = document.getElementById(sectionId);

  if (!element) {
    console.warn(`Element with id "${sectionId}" not found`);
    return;
  }

  // Calculate position with offset
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset + offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
}

/**
 * Formats a number with commas
 *
 * @example formatNumber(1000) // "1,000"
 */
export function formatNumber(num: number): string {
  return num.toLocaleString();
}

/**
 * Clamps a number between min and max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Debounces a function call
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}


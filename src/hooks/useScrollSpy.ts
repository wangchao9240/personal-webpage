import { useState, useEffect } from 'react';

/**
 * Section ID type for scroll spy
 */
export type SectionId = 'hero' | 'about' | 'skills' | 'experience' | 'projects';

/**
 * Options for useScrollSpy hook
 */
export interface UseScrollSpyOptions {
  /**
   * Array of section IDs to track
   * @default ['hero', 'about', 'skills', 'experience', 'projects']
   */
  sectionIds?: SectionId[];
  
  /**
   * Offset from top of viewport to consider a section active (in pixels)
   * Accounts for fixed header height and provides better UX by activating earlier
   * @default 200
   */
  offset?: number;
  
  /**
   * Throttle delay for scroll event (in milliseconds)
   * @default 100
   */
  throttleMs?: number;
}

/**
 * Custom hook to track which section is currently active based on scroll position
 *
 * @description
 * This hook uses IntersectionObserver and scroll position to determine which section
 * is currently visible in the viewport. It's optimized for performance with throttling
 * and passive event listeners.
 *
 * @param options - Configuration options for scroll spy behavior
 * @returns The ID of the currently active section
 *
 * @example
 * ```tsx
 * function Navigation() {
 *   const activeSection = useScrollSpy({ offset: 100 });
 *
 *   return (
 *     <nav>
 *       {sections.map(section => (
 *         <a
 *           key={section}
 *           className={activeSection === section ? 'active' : ''}
 *           href={`#${section}`}
 *         >
 *           {section}
 *         </a>
 *       ))}
 *     </nav>
 *   );
 * }
 * ```
 */
export function useScrollSpy(options: UseScrollSpyOptions = {}): SectionId {
  const {
    sectionIds = ['hero', 'about', 'skills', 'experience', 'projects'],
    offset = 200,
    throttleMs = 100,
  } = options;

  const [activeSection, setActiveSection] = useState<SectionId>('hero');

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    /**
     * Calculate which section is currently active
     */
    const handleScroll = () => {
      // Throttle scroll events for performance
      if (timeoutId) {
        return;
      }

      timeoutId = setTimeout(() => {
        timeoutId = undefined as any;

        const scrollPosition = window.scrollY + offset;
        let currentSection: SectionId = 'hero';

        // Iterate through sections to find the active one
        for (const sectionId of sectionIds) {
          const element = document.getElementById(sectionId);
          if (!element) continue;

          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = top + window.scrollY;
          const elementBottom = bottom + window.scrollY;

          // Check if scroll position is within this section
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            currentSection = sectionId;
            break;
          }

          // If we're past all sections, keep the last one active
          if (scrollPosition >= elementTop) {
            currentSection = sectionId;
          }
        }

        setActiveSection(currentSection);
      }, throttleMs);
    };

    // Initial check
    handleScroll();

    // Add passive scroll listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [sectionIds, offset, throttleMs]);

  return activeSection;
}

/**
 * Alternative implementation using IntersectionObserver
 * More performant but less precise for scroll position tracking
 *
 * @deprecated Use useScrollSpy instead for better control
 */
export function useScrollSpyObserver(
  sectionIds: SectionId[] = ['hero', 'about', 'skills', 'experience', 'projects']
): SectionId {
  const [activeSection, setActiveSection] = useState<SectionId>('hero');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Trigger when section is in middle of viewport
      threshold: 0,
    };

    sectionIds.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (!element) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(sectionId);
          }
        });
      }, observerOptions);

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionIds]);

  return activeSection;
}


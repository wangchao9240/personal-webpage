'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Options for the Intersection Observer
 */
export interface UseIntersectionObserverOptions {
  /** Root element for intersection (default: viewport) */
  root?: Element | null;
  /** Margin around root (default: '0px') */
  rootMargin?: string;
  /** Threshold(s) for intersection (default: 0) */
  threshold?: number | number[];
  /** Whether to freeze on first intersection (default: false) */
  freezeOnceVisible?: boolean;
}

/**
 * Custom hook for Intersection Observer API
 *
 * Detects when an element enters or exits the viewport.
 * Useful for scroll-triggered animations and lazy loading.
 *
 * @param options - Configuration options for the observer
 * @returns Tuple of [ref, entry] where ref is attached to target element
 *
 * @example
 * ```tsx
 * const [ref, entry] = useIntersectionObserver({
 *   threshold: 0.5,
 *   freezeOnceVisible: true
 * });
 *
 * return (
 *   <div ref={ref}>
 *     {entry?.isIntersecting && <p>Element is visible!</p>}
 *   </div>
 * );
 * ```
 */
export function useIntersectionObserver<T extends Element = HTMLDivElement>(
  options: UseIntersectionObserverOptions = {}
): [React.RefObject<T | null>, IntersectionObserverEntry | null] {
  const {
    root = null,
    rootMargin = '0px',
    threshold = 0,
    freezeOnceVisible = false,
  } = options;

  const elementRef = useRef<T>(null);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);

  const frozen = entry?.isIntersecting && freezeOnceVisible;

  useEffect(() => {
    const element = elementRef.current;
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || !element || frozen) {
      return;
    }

    const observerCallback: IntersectionObserverCallback = (entries) => {
      const [entry] = entries;
      setEntry(entry);
    };

    const observerOptions: IntersectionObserverInit = {
      root,
      rootMargin,
      threshold,
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [root, rootMargin, threshold, frozen]);

  return [elementRef, entry];
}

/**
 * Simplified hook that returns only the visibility state
 *
 * @param options - Configuration options
 * @returns Tuple of [ref, isVisible]
 *
 * @example
 * ```tsx
 * const [ref, isVisible] = useInView({ threshold: 0.5 });
 *
 * return <div ref={ref}>{isVisible ? 'Visible!' : 'Not visible'}</div>;
 * ```
 */
export function useInView<T extends Element = HTMLDivElement>(
  options: UseIntersectionObserverOptions = {}
): [React.RefObject<T | null>, boolean] {
  const [ref, entry] = useIntersectionObserver<T>(options);
  return [ref, entry?.isIntersecting ?? false];
}


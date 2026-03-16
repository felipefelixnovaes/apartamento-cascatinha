'use client';

import { useEffect, useRef } from 'react';
import { trackScrollDepth } from '@/lib/analytics';

/**
 * Hook that tracks scroll depth milestones (25%, 50%, 75%, 100%).
 * Each milestone fires only once per page session.
 */
export function useScrollTracking() {
  const fired = useRef<Set<number>>(new Set());

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;

      const percent = Math.round((scrollTop / docHeight) * 100);

      const milestones = [25, 50, 75, 100] as const;
      for (const m of milestones) {
        if (percent >= m && !fired.current.has(m)) {
          fired.current.add(m);
          trackScrollDepth(m);
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
}

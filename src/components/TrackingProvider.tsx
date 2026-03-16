'use client';

import { useEffect } from 'react';
import { captureUTMs } from '@/lib/utm';
import { useScrollTracking } from '@/hooks/useScrollTracking';

/**
 * Client-side tracking provider that initializes UTM capture
 * and scroll tracking on mount.
 */
export default function TrackingProvider({ children }: { children: React.ReactNode }) {
  useScrollTracking();

  useEffect(() => {
    captureUTMs();
  }, []);

  return <>{children}</>;
}

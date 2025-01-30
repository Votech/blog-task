import { useCallback, useEffect, useState } from 'react';

// Use for conditional render on mobile/desktop
export default function useMobileVersion(width: number): boolean {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback(
    (e: MediaQueryListEvent) => setTargetReached(e.matches),
    [],
  );

  useEffect(() => {
    if (typeof window.matchMedia === 'function') {
      const media = window.matchMedia(`(max-width: ${width}px)`);
      media.onchange = updateTarget;

      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(true);
      }

      return () => {
        media.onchange = null;
      };
    }
  }, [updateTarget, width]);

  return targetReached;
}

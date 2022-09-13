import { useEffect, useState } from 'react';

const MOBILE_LAYOUT_BREAKPOINT = 768;

export const useIsMobile = (mobileBreakpoint = MOBILE_LAYOUT_BREAKPOINT) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(`screen and (min-width: ${mobileBreakpoint}px)`);

    setIsMobile((prevIsMobile) => !(media.matches !== prevIsMobile ? media.matches : prevIsMobile));

    const listener = () => setIsMobile(!media.matches);

    window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  }, [mobileBreakpoint]);

  return isMobile;
};

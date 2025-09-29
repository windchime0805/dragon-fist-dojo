import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

const SmoothScroll = () => {
  const lenisRef = useRef<Lenis | null>(null);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const reduce = typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduce) return;

    const lenis = new Lenis({
      // tune to taste
      duration: 1.1,
      smoothWheel: true,
      gestureOrientation: 'vertical',
    });
    lenisRef.current = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId.current = requestAnimationFrame(raf);
    };
    rafId.current = requestAnimationFrame(raf);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return null;
};

export default SmoothScroll;

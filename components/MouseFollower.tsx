import { useEffect, useRef, useState } from 'react';

const MouseFollower = () => {
  const [visible, setVisible] = useState(false);

  const smoothRef = useRef<HTMLDivElement | null>(null);
  const instantRef = useRef<HTMLDivElement | null>(null);

  // Latest pointer position (not in state to avoid re-renders)
  const target = useRef({ x: 0, y: 0 });
  const smooth = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);
  const running = useRef(false);

  useEffect(() => {
    let reduceMotion = false;
    let coarsePointer = false;
    try {
      reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      coarsePointer = window.matchMedia('(pointer: coarse)').matches;
    } catch {
      // ignore
    }

    if (coarsePointer) {
      // Disable on touch devices
      setVisible(false);
      return;
    }

    const tick = () => {
      // Lerp only the smooth layer
      const lerp = reduceMotion ? 1 : 0.22; // 1 disables smoothing
      smooth.current.x += (target.current.x - smooth.current.x) * lerp;
      smooth.current.y += (target.current.y - smooth.current.y) * lerp;

      if (smoothRef.current) {
        smoothRef.current.style.transform = `translate3d(${smooth.current.x}px, ${smooth.current.y}px, 0)`;
      }
      if (instantRef.current) {
        instantRef.current.style.transform = `translate3d(${target.current.x}px, ${target.current.y}px, 0)`;
      }

      const dx = Math.abs(target.current.x - smooth.current.x);
      const dy = Math.abs(target.current.y - smooth.current.y);
      const needsMore = dx + dy > 0.2 && visible;
      if (needsMore) {
        rafId.current = requestAnimationFrame(tick);
      } else {
        running.current = false;
      }
    };

    const ensureRunning = () => {
      if (!running.current) {
        running.current = true;
        rafId.current = requestAnimationFrame(tick);
      }
    };

    const onMove = (e: PointerEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (!visible) setVisible(true);
      if (!reduceMotion) ensureRunning(); else tick();
    };

    const onLeave = () => {
      setVisible(false);
    };

    document.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);

    return () => {
      document.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
      if (rafId.current) cancelAnimationFrame(rafId.current);
      running.current = false;
    };
  }, [visible]);

  // Always render but toggle visibility via opacity only (no position transitions)
  return (
    <>
      {/* Smoothed aura (glow + trail) */}
      <div
        ref={smoothRef}
        className="fixed left-0 top-0 pointer-events-none z-40"
        style={{
          opacity: visible ? 1 : 0,
          transition: 'opacity 120ms ease-out',
          willChange: 'transform, opacity',
        }}
      >
        <div className="relative">
          {/* Main glow */}
          <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: 0, top: 0 }}>
            <div className="w-10 h-10 rounded-full bg-primary/30 blur-md animate-pulse" />
          </div>
          {/* Trail */}
          <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: 0, top: 0 }}>
            <div className="w-8 h-8 rounded-full bg-gradient-dragon opacity-40 blur-sm" />
          </div>
        </div>
      </div>

      {/* Instant core (no smoothing, zero-lag) */}
      <div
        ref={instantRef}
        className="fixed left-0 top-0 pointer-events-none z-50"
        style={{ willChange: 'transform' }}
      >
        <div className="relative">
          <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: 0, top: 0 }}>
            <div className="w-1 h-1 rounded-full bg-primary" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MouseFollower;
import { useEffect, useRef } from "react";

/**
 * Faint glowing dot cursor with a smooth trailing blur.
 * Disabled on touch devices and when the user prefers reduced motion.
 */
export const GlowCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;
    let raf = 0;
    let visible = false;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!visible) {
        visible = true;
        dotRef.current?.style.setProperty("opacity", "1");
        trailRef.current?.style.setProperty("opacity", "1");
      }
    };

    const onLeave = () => {
      visible = false;
      dotRef.current?.style.setProperty("opacity", "0");
      trailRef.current?.style.setProperty("opacity", "0");
    };

    const loop = () => {
      tx += (x - tx) * 0.14;
      ty += (y - ty) * 0.14;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${tx}px, ${ty}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseout", onLeave);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={trailRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-16 w-16 rounded-full opacity-0 blur-2xl transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--cyan-accent) / 0.35), transparent 70%)",
        }}
      />
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full opacity-0 transition-opacity duration-300"
        style={{
          background: "hsl(var(--cyan-accent) / 0.9)",
          boxShadow:
            "0 0 8px hsl(var(--cyan-accent) / 0.9), 0 0 22px hsl(var(--cyan-accent) / 0.5)",
        }}
      />
    </>
  );
};

export default GlowCursor;

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let lenis: Lenis | null = null;

/** The active Lenis instance, or null when smooth scroll is disabled. */
export const getLenis = () => lenis;

/** Jump to a position, going through Lenis when it is running. */
export const scrollToTop = (smooth = false) => {
  if (lenis) lenis.scrollTo(0, { immediate: !smooth });
  else window.scrollTo({ top: 0, behavior: smooth ? "smooth" : "auto" });
};

/**
 * Site-wide inertial scrolling (Lenis) driven by the GSAP ticker so that
 * ScrollTrigger animations stay in sync with the smoothed scroll position.
 */
export const SmoothScroll = () => {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      autoRaf: false,
      // Let dialogs, menus and scroll areas scroll natively.
      prevent: (node) =>
        !!node.closest?.('[role="dialog"], [role="menu"], [role="listbox"], [data-radix-scroll-area-viewport]'),
    });
    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => lenis?.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  return null;
};

export default SmoothScroll;

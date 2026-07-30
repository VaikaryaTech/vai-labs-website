import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Reveals every <section> with a smooth upward slide plus a quick neon
 * scan-line sweep as it scrolls into view.
 */
export const SectionReveal = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) el.classList.add("section-revealed");
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    const attach = () => {
      document.querySelectorAll<HTMLElement>("main section, section").forEach((el) => {
        if (el.dataset.sectionReveal) return;
        el.dataset.sectionReveal = "true";
        el.classList.add("section-reveal");
        observer.observe(el);
      });
    };

    const id = window.setTimeout(attach, 50);
    attach();

    return () => {
      window.clearTimeout(id);
      observer.disconnect();
      document.querySelectorAll<HTMLElement>(".section-reveal").forEach((el) => {
        delete el.dataset.sectionReveal;
        el.classList.remove("section-reveal", "section-revealed");
      });
    };
  }, [location.pathname]);

  return null;
};

export default SectionReveal;

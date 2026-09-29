import { useEffect, useState } from "react";
import { getLenis } from "@/components/SmoothScroll";

interface Props {
  items: { id: string; label: string }[];
}

/** Sticky in-page navigation for long pages; highlights the section in view. */
export const SectionNav = ({ items }: Props) => {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-120px 0px -55% 0px" }
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  const jump = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(el, { offset: -112, duration: 1.1 });
    else window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 112, behavior: "smooth" });
  };

  return (
    <nav aria-label="On this page" className="sticky top-16 z-40 border-y border-border bg-background/90 backdrop-blur-xl">
      <div className="container mx-auto flex gap-1 overflow-x-auto px-6 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            onClick={() => jump(id)}
            aria-current={active === id ? "true" : undefined}
            className={`shrink-0 rounded-full px-3.5 py-1.5 text-sm transition-colors ${
              active === id ? "bg-foreground text-background" : "text-foreground/60 hover:bg-muted hover:text-foreground"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default SectionNav;

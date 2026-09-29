import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { getLenis } from "@/components/SmoothScroll";
import studioDashboard from "@/assets/showcase/studio-dashboard.webp";
import studioOrchestrator from "@/assets/showcase/studio-orchestrator.webp";
import regulatory from "@/assets/showcase/regulatory-shield-showcase.webp";
import patent from "@/assets/showcase/patent-shield-showcase.webp";
import biosim from "@/assets/showcase/biosimilarity-showcase.webp";
import deepresearch from "@/assets/showcase/deepresearch-showcase.webp";
import analyticsTracing from "@/assets/showcase/analytics-tracing.webp";
import analyticsUsage from "@/assets/showcase/analytics-usage-dashboard.webp";

gsap.registerPlugin(ScrollTrigger);

type Shot = { src: string; alt: string; title: string; caption: string };

const DEFAULT_SET: Shot[] = [
  { src: studioDashboard, alt: "KOGNIX AI Studio — Workspace Dashboard", title: "Studio Dashboard", caption: "Unified workspace analytics — apps, datasets, plugins & usage at a glance" },
  { src: studioOrchestrator, alt: "KOGNIX AI Studio — AI Orchestrator", title: "AI Orchestrator", caption: "Organize agents, workflows & chatflows across R&D, Commercial and Regulatory" },
  { src: regulatory, alt: "Regulatory Shield — SOP Change Control Auditor", title: "Regulatory Shield", caption: "SOP Change Control Auditor" },
  { src: patent, alt: "GPL-1 Patent Infringement Detector — USPTO Live Search", title: "Bio-Peptide Patent Shield", caption: "GPL-1 Patent Infringement Detector" },
  { src: biosim, alt: "Computational Biosimilarity Target De-Risking", title: "Biosimilarity De-Risking", caption: "Computational Target Analysis" },
  { src: deepresearch, alt: "KOGNIX DeepResearch workspace", title: "DeepResearch", caption: "Multi-source Evidence Synthesis" },
];

const ANALYTICS_SET: Shot[] = [
  { src: analyticsTracing, alt: "KOGNIX Analytics — LLM Tracing workspace", title: "LLM Tracing", caption: "End-to-end trace visibility for every LLM call, retrieval & agent step" },
  { src: analyticsUsage, alt: "KOGNIX AI Usage Dashboard", title: "Usage Dashboard", caption: "Real-time traces, observations & score analytics across environments" },
];

interface Props {
  title?: React.ReactNode;
  subtitle?: string;
  eyebrow?: string;
  /** Limit to these titles, in the given order of the set. */
  only?: string[];
  set?: "default" | "analytics";
  className?: string;
}

/** Browser-style frame so screenshots read as real product UI, shown uncropped. */
const Frame = ({ shot, children, onExpand }: { shot: Shot; children: React.ReactNode; onExpand: () => void }) => (
  <div className="overflow-hidden rounded-xl border border-border bg-card shadow-[0_30px_60px_-30px_hsl(220_40%_10%/0.35)]">
    <div className="flex items-center gap-3 border-b border-border bg-muted/60 px-4 py-2.5">
      <span className="flex gap-1.5" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
      </span>
      <span className="truncate font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
        KOGNIX · {shot.title}
      </span>
      <button
        type="button"
        onClick={onExpand}
        className="ml-auto inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:bg-background hover:text-foreground"
      >
        <Maximize2 className="h-3.5 w-3.5" /> Expand
      </button>
    </div>
    <div className="relative aspect-[16/9] bg-black">{children}</div>
  </div>
);

export const ProductShowcase = ({
  title = "See the KOGNIX ecosystem in action",
  subtitle = "Production-grade AI workspaces engineered for regulated enterprises.",
  eyebrow = "Product tour",
  only,
  set = "default",
  className = "",
}: Props) => {
  const source = set === "analytics" ? ANALYTICS_SET : DEFAULT_SET;
  const shots = only ? source.filter((s) => only.includes(s.title)) : source;

  const pinRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  // Desktop: pin the viewer and let scroll step through the screenshots.
  useLayoutEffect(() => {
    if (!pinRef.current || shots.length < 2) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      ScrollTrigger.create({
        trigger: pinRef.current,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          const p = self.progress * shots.length;
          setActive(Math.min(Math.floor(p), shots.length - 1));
          setProgress(p);
        },
      });
    });
    return () => mm.revert();
  }, [shots.length]);

  const jumpTo = (i: number) => {
    const el = pinRef.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const span = el.offsetHeight - window.innerHeight;
    const target = top + (span * (i + 0.5)) / shots.length;
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(target, { duration: 1 });
    else window.scrollTo({ top: target, behavior: "smooth" });
  };

  // Lightbox keyboard navigation.
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setLightbox((i) => (i === null ? i : (i + 1) % shots.length));
      if (e.key === "ArrowLeft") setLightbox((i) => (i === null ? i : (i - 1 + shots.length) % shots.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, shots.length]);

  const header = (
    <div className="container mx-auto px-6">
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">{eyebrow}</p>
      <h2 className="mt-6 max-w-3xl text-balance text-3xl font-medium leading-tight tracking-[-0.02em] md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{subtitle}</p>
    </div>
  );

  const shown = lightbox === null ? null : shots[lightbox];

  return (
    <section data-motion className={`border-t border-border bg-background ${className}`}>
      <div className="pt-24 lg:pt-32">{header}</div>

      {/* Desktop: pinned tour */}
      <div ref={pinRef} className="relative hidden lg:block" style={{ height: `${shots.length * 75 + 25}vh` }}>
        <div className="sticky top-0 flex h-screen items-center">
          <div className="container mx-auto grid grid-cols-12 items-center gap-10 px-6 pt-16">
            <ol className="col-span-4 border-t border-border">
              {shots.map((s, i) => {
                const fill = Math.min(Math.max(progress - i, 0), 1);
                const isActive = i === active;
                return (
                  <li key={s.title} className="border-b border-border">
                    <button type="button" onClick={() => jumpTo(i)} className="group w-full py-5 text-left">
                      <div className="flex items-baseline gap-4">
                        <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                        <span
                          className={`text-lg font-medium tracking-tight transition-colors ${
                            isActive ? "text-foreground" : "text-foreground/40 group-hover:text-foreground/70"
                          }`}
                        >
                          {s.title}
                        </span>
                      </div>
                      <div
                        className={`grid transition-all duration-500 ${
                          isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <p className="overflow-hidden pl-9 pt-2 text-sm leading-relaxed text-muted-foreground">
                          {s.caption}
                        </p>
                      </div>
                      <span className="mt-4 ml-9 block h-px bg-border">
                        <span
                          className="block h-full origin-left bg-primary"
                          style={{ transform: `scaleX(${fill})` }}
                        />
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>

            <div className="col-span-8">
              <Frame shot={shots[active]} onExpand={() => setLightbox(active)}>
                {shots.map((s, i) => (
                  <img
                    key={s.title}
                    src={s.src}
                    alt={s.alt}
                    loading={i === 0 ? "eager" : "lazy"}
                    onClick={() => setLightbox(i)}
                    className={`absolute inset-0 h-full w-full cursor-zoom-in object-contain transition-all duration-700 ease-out ${
                      i === active ? "scale-100 opacity-100" : "scale-[1.02] opacity-0"
                    }`}
                  />
                ))}
              </Frame>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile & tablet: swipeable cards */}
      <div className="pb-24 pt-12 lg:hidden">
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {shots.map((s, i) => (
            <figure key={s.title} className="w-[85vw] max-w-xl shrink-0 snap-center">
              <Frame shot={s} onExpand={() => setLightbox(i)}>
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  onClick={() => setLightbox(i)}
                  className="absolute inset-0 h-full w-full object-contain"
                />
              </Frame>
              <figcaption className="mt-4">
                <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                <span className="ml-3 font-medium">{s.title}</span>
                <span className="mt-1 block text-sm text-muted-foreground">{s.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <div className="hidden pb-8 lg:block" />

      {/* Lightbox */}
      <Dialog open={lightbox !== null} onOpenChange={(o) => !o && setLightbox(null)}>
        <DialogContent className="max-w-[min(96vw,1600px)] gap-0 overflow-hidden rounded-xl border-border p-0 sm:rounded-xl">
          {shown && (
            <>
              <div className="flex items-center gap-3 border-b border-border bg-muted/60 px-4 py-3 pr-12">
                <DialogTitle className="text-sm font-medium">{shown.title}</DialogTitle>
                <span className="hidden truncate text-sm text-muted-foreground sm:inline">— {shown.caption}</span>
                <span className="ml-auto font-mono text-xs text-muted-foreground">
                  {lightbox! + 1} / {shots.length}
                </span>
              </div>
              <div className="relative bg-black">
                <img src={shown.src} alt={shown.alt} className="max-h-[80vh] w-full object-contain" />
                {shots.length > 1 && (
                  <>
                    <button
                      type="button"
                      aria-label="Previous screenshot"
                      onClick={() => setLightbox((lightbox! - 1 + shots.length) % shots.length)}
                      className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-foreground shadow transition-colors hover:bg-background"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      aria-label="Next screenshot"
                      onClick={() => setLightbox((lightbox! + 1) % shots.length)}
                      className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-foreground shadow transition-colors hover:bg-background"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProductShowcase;

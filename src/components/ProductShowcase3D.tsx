import { useEffect, useRef, useState } from "react";
import regulatory from "@/assets/regulatory-shield-showcase.png.asset.json";
import patent from "@/assets/patent-shield-showcase.png.asset.json";
import biosim from "@/assets/biosimilarity-showcase.png.asset.json";
import deepresearch from "@/assets/deepresearch-showcase.png.asset.json";
import analyticsTracing from "@/assets/analytics-tracing.png.asset.json";
import analyticsUsage from "@/assets/analytics-usage-dashboard.png.asset.json";
import studioDashboard from "@/assets/studio-dashboard.png.asset.json";
import studioOrchestrator from "@/assets/studio-orchestrator.png.asset.json";

const ASSET_BASE = "https://id-preview--45e7cdcb-ec4a-4532-9e54-30a521cfc568.lovable.app";
const cdn = (u: string) => (u.startsWith("http") ? u : `${ASSET_BASE}${u}`);

type Mockup = {
  src: string;
  alt: string;
  title: string;
  caption: string;
};

const ALL: Mockup[] = [
  { src: cdn(studioDashboard.url), alt: "KOGNIX AI Studio — Workspace Dashboard", title: "Studio Dashboard", caption: "Unified workspace analytics — apps, datasets, plugins & usage at a glance" },
  { src: cdn(studioOrchestrator.url), alt: "KOGNIX AI Studio — AI Orchestrator", title: "AI Orchestrator", caption: "Organize agents, workflows & chatflows across R&D, Commercial and Regulatory" },
  { src: cdn(regulatory.url), alt: "Regulatory Shield — SOP Change Control Auditor", title: "Regulatory Shield", caption: "SOP Change Control Auditor" },
  { src: cdn(patent.url), alt: "GPL-1 Patent Infringement Detector — USPTO Live Search", title: "Bio-Peptide Patent Shield", caption: "GPL-1 Patent Infringement Detector" },
  { src: cdn(biosim.url), alt: "Computational Biosimilarity Target De-Risking", title: "Biosimilarity De-Risking", caption: "Computational Target Analysis" },
  { src: cdn(deepresearch.url), alt: "KOGNIX DeepResearch workspace", title: "DeepResearch", caption: "Multi-source Evidence Synthesis" },
];

const ANALYTICS: Mockup[] = [
  { src: cdn(analyticsTracing.url), alt: "KOGNIX Analytics — LLM Tracing workspace", title: "LLM Tracing", caption: "End-to-end trace visibility for every LLM call, retrieval & agent step" },
  { src: cdn(analyticsUsage.url), alt: "KOGNIX AI Usage Dashboard", title: "Usage Dashboard", caption: "Real-time traces, observations & score analytics across environments" },
];

interface Props {
  title?: React.ReactNode;
  subtitle?: string;
  only?: string[];
  set?: "default" | "analytics";
  className?: string;
}

const DEFAULT_TITLE = (
  <>
    See{" "}
    <span className="bg-[image:var(--gradient-kognix)] bg-clip-text text-transparent">
      KOGNIX
    </span>{" "}
    <span className="text-glow-cyan">AI Ecosystem</span>, in Action
  </>
);

export const ProductShowcase3D = ({
  title = DEFAULT_TITLE,
  subtitle = "Production-grade AI workspaces engineered for regulated enterprises.",
  only,
  set = "default",
  className = "",
}: Props) => {
  const source = set === "analytics" ? ANALYTICS : ALL;
  const items = only ? source.filter((m) => only.includes(m.title)) : source;

  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0); // 0..items.length-1

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // total scrollable distance for the pinned section
      const total = el.offsetHeight - vh;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const p = total > 0 ? (scrolled / total) * (items.length - 1) : 0;
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [items.length]);

  const active = Math.round(progress);
  const current = items[Math.min(Math.max(active, 0), items.length - 1)];

  // Section height: one viewport per image so scroll feels iPhone-like
  const sectionHeight = `${items.length * 100}vh`;

  return (
    <section
      ref={sectionRef}
      className={`relative bg-background ${className}`}
      style={{ height: sectionHeight }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col">
        {/* Neon background glow */}
        <div className="absolute inset-0 -z-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(circle at 20% 30%, rgba(139,92,246,0.18), transparent 55%), radial-gradient(circle at 80% 70%, rgba(59,130,246,0.18), transparent 55%)",
            }}
          />
        </div>

        <div className="container mx-auto px-6 pt-16 pb-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-2">{title}</h2>
          <p className="text-base md:text-lg text-muted-foreground">{subtitle}</p>
        </div>

        {/* Stacked iPhone-like deck */}
        <div className="relative flex-1 flex items-center justify-center px-6 z-10">
          <div
            className="relative w-full max-w-3xl"
            style={{ perspective: "2000px", height: "min(62vh, 560px)" }}
          >
            {items.map((m, i) => {
              const offset = i - progress; // negative => already passed, positive => upcoming
              const isPast = offset < -0.5;
              // Visible stack range
              const clamped = Math.max(-1, Math.min(offset, 4));
              const translateY = clamped < 0
                ? clamped * 110 // swipe up & away
                : clamped * 18; // stacked below
              const scale = clamped < 0
                ? 1 + clamped * 0.05
                : 1 - clamped * 0.06;
              const rotate = clamped < 0 ? clamped * -8 : 0;
              const opacity = clamped < -1 ? 0 : clamped > 3 ? 0 : 1;
              const z = items.length - Math.abs(Math.round(offset));

              return (
                <div
                  key={i}
                  className="absolute inset-0 transition-all duration-500 ease-out will-change-transform"
                  style={{
                    transform: `translateY(${translateY}%) scale(${scale}) rotate(${rotate}deg)`,
                    opacity,
                    zIndex: z,
                    pointerEvents: isPast ? "none" : "auto",
                  }}
                >
                  {/* Glow */}
                  <div className="absolute inset-0 -z-10 flex items-center justify-center">
                    <div
                      className="w-[90%] h-[90%] rounded-full blur-3xl opacity-60"
                      style={{
                        background:
                          i % 2 === 0
                            ? "radial-gradient(circle, rgba(139,92,246,0.45), transparent 65%)"
                            : "radial-gradient(circle, rgba(34,211,238,0.40), transparent 65%)",
                      }}
                    />
                  </div>
                  <div
                    className="h-full w-full rounded-[2rem] p-[6px] bg-gradient-to-br from-white/80 via-white/30 to-white/10 ring-1 ring-white/20"
                    style={{
                      boxShadow:
                        "0 40px 80px -20px rgba(99,102,241,0.55), 0 25px 50px -15px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.15)",
                    }}
                  >
                    <div className="h-full w-full rounded-[1.6rem] overflow-hidden bg-black ring-1 ring-white/10 flex items-center justify-center">
                      <img
                        src={m.src}
                        alt={m.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Caption + progress dots */}
        <div className="relative z-10 pb-10 pt-4 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-foreground transition-all duration-300">
            {current.title}
          </h3>
          <p className="text-sm md:text-base text-muted-foreground mt-1">{current.caption}</p>
          <div className="mt-4 flex items-center justify-center gap-2">
            {items.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? "w-8 bg-primary" : "w-2 bg-muted-foreground/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase3D;

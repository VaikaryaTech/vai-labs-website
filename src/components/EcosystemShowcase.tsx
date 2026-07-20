import { useState } from "react";
import regulatory from "@/assets/regulatory-shield-showcase.png.asset.json";
import patent from "@/assets/patent-shield-showcase.png.asset.json";
import biosim from "@/assets/biosimilarity-showcase.png.asset.json";
import deepresearch from "@/assets/deepresearch-showcase.png.asset.json";
import studioDashboard from "@/assets/studio-dashboard.png.asset.json";
import studioOrchestrator from "@/assets/studio-orchestrator.png.asset.json";

const ASSET_BASE = "https://id-preview--45e7cdcb-ec4a-4532-9e54-30a521cfc568.lovable.app";
const cdn = (u: string) => (u.startsWith("http") ? u : `${ASSET_BASE}${u}`);

type Item = { title: string; caption: string; src: string; alt: string };

const ITEMS: Item[] = [
  { title: "Studio Dashboard", caption: "Unified workspace analytics — apps, datasets, plugins & usage at a glance", src: cdn(studioDashboard.url), alt: "KOGNIX AI Studio — Workspace Dashboard" },
  { title: "AI Orchestrator", caption: "Organize agents, workflows & chatflows across R&D, Commercial and Regulatory", src: cdn(studioOrchestrator.url), alt: "KOGNIX AI Studio — AI Orchestrator" },
  { title: "Regulatory Shield", caption: "SOP Change Control Auditor", src: cdn(regulatory.url), alt: "Regulatory Shield workspace" },
  { title: "Patent Shield", caption: "GPL-1 Patent Infringement Detector — USPTO live search", src: cdn(patent.url), alt: "Patent Infringement Detector" },
  { title: "Biosimilarity De-Risking", caption: "Computational biosimilarity target de-risking", src: cdn(biosim.url), alt: "Biosimilarity workspace" },
  { title: "DeepResearch", caption: "Multi-source evidence synthesis", src: cdn(deepresearch.url), alt: "KOGNIX DeepResearch workspace" },
];

interface Props {
  title?: React.ReactNode;
  subtitle?: string;
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

export const EcosystemShowcase = ({
  title = DEFAULT_TITLE,
  subtitle = "Production-grade AI workspaces engineered for regulated enterprises.",
  className = "",
}: Props) => {
  const [active, setActive] = useState(0);
  const current = ITEMS[active];

  return (
    <section className={`relative bg-background py-24 overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 -z-0 pointer-events-none opacity-70"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, rgba(139,92,246,0.18), transparent 55%), radial-gradient(circle at 80% 70%, rgba(34,211,238,0.18), transparent 55%)",
        }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-3">{title}</h2>
          <p className="text-base md:text-lg text-muted-foreground">{subtitle}</p>
        </div>

        {/* Tab bar */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
          {ITEMS.map((it, i) => {
            const isActive = i === active;
            return (
              <button
                key={it.title}
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                className={`relative px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 border-l-4 ${
                  isActive
                    ? "bg-primary/15 text-foreground border-l-[hsl(var(--cyan-accent))] border-y border-r border-y-[hsl(var(--cyan-accent))]/50 border-r-[hsl(var(--cyan-accent))]/50 shadow-[0_0_18px_hsl(var(--cyan-accent)/0.5)]"
                    : "glass border-l-transparent border-y-white/10 border-r-white/10 text-muted-foreground hover:text-foreground hover:border-l-primary/60"
                }`}
              >
                {it.title}
              </button>
            );
          })}
        </div>

        {/* Preview */}
        <div className="max-w-6xl mx-auto">
          <div
            key={active}
            className="relative rounded-[1.75rem] p-[6px] bg-gradient-to-br from-white/60 via-white/20 to-white/5 ring-1 ring-white/20 animate-[ecosystem-fade_300ms_ease-in_both]"
            style={{
              boxShadow:
                "0 0 0 1px hsl(var(--cyan-accent) / 0.35), 0 30px 80px -20px rgba(99,102,241,0.45), 0 20px 50px -15px rgba(0,0,0,0.55)",
            }}
          >
            <div className="rounded-[1.4rem] overflow-hidden bg-black ring-1 ring-white/10 aspect-[16/9]">
              <a href={current.src} target="_blank" rel="noopener noreferrer" className="block w-full h-full cursor-zoom-in">
                <img src={current.src} alt={current.alt} className="w-full h-full object-cover" loading="lazy" />
              </a>
            </div>
          </div>
          <div className="text-center mt-6" key={`cap-${active}`}>
            <h3 className="text-xl md:text-2xl font-bold animate-[ecosystem-fade_300ms_ease-in_both]">{current.title}</h3>
            <p className="text-sm md:text-base text-muted-foreground mt-1 animate-[ecosystem-fade_300ms_ease-in_both]">{current.caption}</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ecosystem-fade {
          0% { opacity: 0; transform: scale(0.98); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>

    </section>
  );
};

export default EcosystemShowcase;

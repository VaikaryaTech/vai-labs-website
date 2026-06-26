import regulatory from "@/assets/regulatory-shield-showcase.png.asset.json";
import patent from "@/assets/patent-shield-showcase.png.asset.json";
import biosim from "@/assets/biosimilarity-showcase.png.asset.json";
import deepresearch from "@/assets/deepresearch-showcase.png.asset.json";
import analyticsTracing from "@/assets/analytics-tracing.png.asset.json";
import analyticsUsage from "@/assets/analytics-usage-dashboard.png.asset.json";

// Lovable CDN assets are served from this origin; using an absolute URL
// ensures images resolve on custom domains (e.g. vailabs.in) as well.
const ASSET_BASE = "https://id-preview--45e7cdcb-ec4a-4532-9e54-30a521cfc568.lovable.app";
const cdn = (u: string) => (u.startsWith("http") ? u : `${ASSET_BASE}${u}`);

type Mockup = {
  src: string;
  alt: string;
  title: string;
  caption: string;
  tilt: string; // tailwind arbitrary transform
};

const ALL: Mockup[] = [
  {
    src: cdn(regulatory.url),
    alt: "Regulatory Shield — SOP Change Control Auditor",
    title: "Regulatory Shield",
    caption: "SOP Change Control Auditor",
    tilt: "md:[transform:rotateY(-18deg)_rotateX(8deg)_rotateZ(-2deg)]",
  },
  {
    src: cdn(patent.url),
    alt: "GPL-1 Patent Infringement Detector — USPTO Live Search",
    title: "Bio-Peptide Patent Shield",
    caption: "GPL-1 Patent Infringement Detector",
    tilt: "md:[transform:rotateY(16deg)_rotateX(8deg)_rotateZ(2deg)]",
  },
  {
    src: cdn(biosim.url),
    alt: "Computational Biosimilarity Target De-Risking",
    title: "Biosimilarity De-Risking",
    caption: "Computational Target Analysis",
    tilt: "md:[transform:rotateY(-14deg)_rotateX(10deg)_rotateZ(-1deg)]",
  },
  {
    src: cdn(deepresearch.url),
    alt: "KOGNIX DeepResearch workspace",
    title: "DeepResearch",
    caption: "Multi-source Evidence Synthesis",
    tilt: "md:[transform:rotateY(14deg)_rotateX(10deg)_rotateZ(1deg)]",
  },
];

const ANALYTICS: Mockup[] = [
  {
    src: cdn(analyticsTracing.url),
    alt: "KOGNIX Analytics — LLM Tracing workspace",
    title: "LLM Tracing",
    caption: "End-to-end trace visibility for every LLM call, retrieval & agent step",
    tilt: "md:[transform:rotateY(-16deg)_rotateX(8deg)_rotateZ(-2deg)]",
  },
  {
    src: cdn(analyticsUsage.url),
    alt: "KOGNIX AI Usage Dashboard",
    title: "Usage Dashboard",
    caption: "Real-time traces, observations & score analytics across environments",
    tilt: "md:[transform:rotateY(16deg)_rotateX(8deg)_rotateZ(2deg)]",
  },
];

interface Props {
  title?: string;
  subtitle?: string;
  /** Filter to a subset of mockups by title */
  only?: string[];
  /** Which preset set of mockups to render */
  set?: "default" | "analytics";
  className?: string;
}

export const ProductShowcase3D = ({
  title = "See KOGNIX in Action",
  subtitle = "Production-grade AI workspaces engineered for regulated enterprises.",
  only,
  set = "default",
  className = "",
}: Props) => {
  const source = set === "analytics" ? ANALYTICS : ALL;
  const items = only ? source.filter((m) => only.includes(m.title)) : source;

  return (
    <section className={`relative py-24 overflow-hidden bg-background ${className}`}>
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

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-muted-foreground">{subtitle}</p>
        </div>

        <div
          className="grid gap-12 md:gap-16 md:grid-cols-2 max-w-6xl mx-auto"
          style={{ perspective: "2000px" }}
        >
          {items.map((m, i) => (
            <div key={i} className="relative">
              {/* Per-card glow */}
              <div className="absolute inset-0 -z-10 flex items-center justify-center">
                <div
                  className="w-[110%] h-[110%] rounded-full blur-3xl opacity-60"
                  style={{
                    background:
                      i % 2 === 0
                        ? "radial-gradient(circle, rgba(139,92,246,0.45), transparent 65%)"
                        : "radial-gradient(circle, rgba(34,211,238,0.40), transparent 65%)",
                  }}
                />
              </div>

              <div
                className={`relative mx-auto w-full transition-transform duration-700 ease-out ${m.tilt} hover:md:[transform:rotateY(0deg)_rotateX(0deg)]`}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div
                  className="rounded-2xl p-[6px] bg-gradient-to-br from-white/80 via-white/30 to-white/10 ring-1 ring-white/20"
                  style={{
                    boxShadow:
                      "0 40px 80px -20px rgba(99,102,241,0.55), 0 25px 50px -15px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.15)",
                  }}
                >
                  <div className="rounded-xl overflow-hidden bg-black ring-1 ring-white/10">
                    <img
                      src={m.src}
                      alt={m.alt}
                      className="w-full h-auto block"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div
                  className="absolute left-1/2 -translate-x-1/2 -bottom-8 w-[75%] h-8 rounded-[50%] blur-2xl opacity-60"
                  style={{
                    background:
                      "radial-gradient(ellipse, rgba(0,0,0,0.7), transparent 70%)",
                  }}
                />
              </div>

              <div className="mt-10 text-center">
                <h3 className="text-xl font-bold text-foreground">{m.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{m.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase3D;

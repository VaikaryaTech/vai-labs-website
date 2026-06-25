import heroImage from "@/assets/hero-workflow.png";
import showcaseAsset from "@/assets/regulatory-shield-showcase.png.asset.json";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(260_60%_25%/0.3),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(12_100%_50%/0.2),transparent_50%)]" />

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-slide-in">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Forge Your Future:{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                What You'll Engineer
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Unleash the potential of intelligent orchestration and cognitive AI to fundamentally reshape your enterprise.
            </p>

            <img
              src={heroImage}
              alt="AI Workflow Intelligence Network"
              className="hidden"
            />
          </div>

          {/* Right visual — 3D device mockup */}
          <div className="relative" style={{ perspective: "1800px" }}>
            {/* Neon glow background */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center">
              <div
                className="w-[120%] h-[120%] rounded-full blur-3xl opacity-70"
                style={{
                  background:
                    "radial-gradient(circle at 30% 40%, rgba(139,92,246,0.55), transparent 60%), radial-gradient(circle at 70% 60%, rgba(59,130,246,0.55), transparent 60%)",
                }}
              />
            </div>

            <div
              className="relative animate-float mx-auto w-full max-w-[640px] transition-transform duration-700 ease-out md:[transform:rotateY(-22deg)_rotateX(10deg)_rotateZ(-2deg)] hover:md:[transform:rotateY(-12deg)_rotateX(6deg)_rotateZ(-1deg)]"
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
                    src={showcaseAsset.url}
                    alt="KOGNIX AI Studio — Regulatory Shield workflow"
                    className="w-full h-auto block"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Floor reflection / shadow */}
              <div
                className="absolute left-1/2 -translate-x-1/2 -bottom-10 w-[80%] h-10 rounded-[50%] blur-2xl opacity-60"
                style={{ background: "radial-gradient(ellipse, rgba(0,0,0,0.7), transparent 70%)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

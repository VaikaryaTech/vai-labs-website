import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export type Phase = {
  number: string;
  title: string;
  duration: string;
  description: string;
  points: string[];
};

interface Props {
  phases: Phase[];
}

export const PhaseStack = ({ phases }: Props) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = el.offsetHeight - vh;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const p = total > 0 ? (scrolled / total) * (phases.length - 1) : 0;
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [phases.length]);

  const active = Math.round(progress);

  return (
    <div
      ref={sectionRef}
      className="relative"
      style={{ height: `${phases.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <div
          className="relative w-full max-w-3xl mx-auto px-6"
          style={{ perspective: "2000px" }}
        >
          <div className="relative w-full" style={{ height: "min(70vh, 560px)" }}>
            {phases.map((phase, i) => {
              const offset = i - progress;
              const isPast = offset < -0.5;
              const clamped = Math.max(-1, Math.min(offset, 4));
              const translateY = clamped < 0 ? clamped * 110 : clamped * 4;
              const scale = clamped < 0 ? 1 + clamped * 0.05 : 1 - clamped * 0.05;
              const rotate = clamped < 0 ? clamped * -8 : 0;
              const opacity = clamped < -1 ? 0 : clamped > 3 ? 0 : 1;
              const z = phases.length - Math.abs(Math.round(offset));

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
                  <Card className="h-full p-8 md:p-10 bg-gradient-card border-border shadow-2xl overflow-auto">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-6xl font-bold text-primary/25">
                        {phase.number}
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                          {phase.title}
                        </h3>
                        <span className="text-sm text-primary font-semibold">
                          Duration: {phase.duration}
                        </span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-base md:text-lg">
                      {phase.description}
                    </p>
                    <div className="space-y-3 pt-4 border-t border-border">
                      {phase.points.map((point, k) => (
                        <div key={k} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <p className="text-sm md:text-base text-muted-foreground">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {phases.map((_, i) => (
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
    </div>
  );
};

export default PhaseStack;

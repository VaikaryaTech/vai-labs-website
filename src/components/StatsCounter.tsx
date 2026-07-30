import { useEffect, useRef, useState } from "react";

type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
};

const STATS: Stat[] = [
  { value: 100, suffix: "%", label: "Air-Gapped Deployments" },
  { value: 10, suffix: "x", label: "Faster Knowledge Workflows" },
  { value: 99.9, suffix: "%", decimals: 1, label: "Platform Reliability" },
  { value: 40, suffix: "+", label: "Enterprise Use Cases" },
];

const DURATION = 1600;

const Counter = ({ stat, active }: { stat: Stat; active: boolean }) => {
  const [display, setDisplay] = useState(0);
  const [flash, setFlash] = useState(false);
  const frame = useRef<number>();

  useEffect(() => {
    if (!active) {
      setDisplay(0);
      setFlash(false);
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(stat.value);
      return;
    }
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / DURATION, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(stat.value * eased);
      if (p < 1) {
        frame.current = requestAnimationFrame(tick);
      } else {
        setFlash(true);
        window.setTimeout(() => setFlash(false), 700);
      }
    };
    frame.current = requestAnimationFrame(tick);
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [active, stat.value]);

  const formatted = display.toLocaleString(undefined, {
    minimumFractionDigits: stat.decimals ?? 0,
    maximumFractionDigits: stat.decimals ?? 0,
  });

  return (
    <div className="glass rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1">
      <div
        className={`text-neon-gradient text-5xl lg:text-6xl font-bold tabular-nums leading-none ${
          flash ? "stat-flash" : ""
        }`}
      >
        {stat.prefix}
        {formatted}
        {stat.suffix}
      </div>
      <p className="mt-4 text-sm uppercase tracking-[0.18em] text-muted-foreground">
        {stat.label}
      </p>
    </div>
  );
};

export const StatsCounter = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="sr-only">Key Performance Metrics</h2>
        <div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {STATS.map((stat) => (
            <Counter key={stat.label} stat={stat} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
};

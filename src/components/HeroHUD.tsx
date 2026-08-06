/**
 * HeroHUD — decorative sci-fi HUD / hologram layer for the homepage hero.
 * Pure SVG + CSS animation (no WebGL, no JS loop). Sits behind hero copy.
 */

const NODES = [
  { x: 12, y: 22 },
  { x: 26, y: 14 },
  { x: 38, y: 30 },
  { x: 62, y: 18 },
  { x: 76, y: 28 },
  { x: 88, y: 16 },
  { x: 16, y: 62 },
  { x: 30, y: 76 },
  { x: 44, y: 66 },
  { x: 58, y: 80 },
  { x: 72, y: 68 },
  { x: 86, y: 78 },
];

const LINKS: [number, number][] = [
  [0, 1],
  [1, 2],
  [3, 4],
  [4, 5],
  [6, 7],
  [7, 8],
  [8, 9],
  [9, 10],
  [10, 11],
  [2, 8],
  [3, 10],
];

const LABELS = [
  { text: "AIR-GAPPED AI ACTIVE", top: "16%", left: "5%" },
  { text: "ON-PREM LLM · READY", top: "30%", right: "6%" },
  { text: "VECTOR INDEX · SYNCED", bottom: "26%", left: "6%" },
  { text: "EGRESS · 0.00 KB/S", bottom: "16%", right: "7%" },
  { text: "SOVEREIGN RUNTIME", top: "52%", left: "3%" },
];

export const HeroHUD = () => {
  return (
    <div className="hero-hud pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Panning coordinate grid */}
      <div className="hero-hud-grid absolute inset-0" />

      {/* Scanning sweep */}
      <div className="hero-hud-sweep absolute inset-y-0 w-1/3" />

      {/* Corner brackets */}
      <span className="hero-hud-bracket absolute left-4 top-24 h-16 w-16 border-l border-t" />
      <span className="hero-hud-bracket absolute right-4 top-24 h-16 w-16 border-r border-t" />
      <span className="hero-hud-bracket absolute bottom-8 left-4 h-16 w-16 border-b border-l" />
      <span className="hero-hud-bracket absolute bottom-8 right-4 h-16 w-16 border-b border-r" />

      {/* Node / link network */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <g className="hero-hud-net">
          {LINKS.map(([a, b], i) => (
            <line
              key={i}
              x1={NODES[a].x}
              y1={NODES[a].y}
              x2={NODES[b].x}
              y2={NODES[b].y}
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </g>
        <g className="hero-hud-nodes">
          {NODES.map((n, i) => (
            <circle
              key={i}
              cx={n.x}
              cy={n.y}
              r="0.45"
              style={{ animationDelay: `${(i % 6) * 0.6}s` }}
            />
          ))}
        </g>
      </svg>

      {/* Concentric orbit rings (hologram feel) */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="hero-hud-orbit block h-[36rem] w-[36rem] rounded-full" />
        <span className="hero-hud-orbit hero-hud-orbit-slow absolute inset-0 m-auto block h-[26rem] w-[26rem] rounded-full" />
      </div>

      {/* Data labels */}
      {LABELS.map((l, i) => (
        <span
          key={l.text}
          className="hero-hud-label absolute hidden md:block"
          style={{ ...l, animationDelay: `${i * 0.9}s` }}
        >
          <span className="hero-hud-tick" />
          {l.text}
        </span>
      ))}
    </div>
  );
};

export default HeroHUD;

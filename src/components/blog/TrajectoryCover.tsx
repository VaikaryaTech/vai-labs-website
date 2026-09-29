const STAGES = [
  { year: "2025", label: "AI assistants" },
  { year: "2026", label: "Task agents" },
  { year: "2027", label: "Collaborative agents" },
  { year: "2028", label: "Agent ecosystems" },
  { year: "2029", label: "The new normal" },
];

const X0 = 860;
const DX = 160;
const Y0 = 470;
const DY = 88;

/**
 * Cover art for "The Accelerated Trajectory of Enterprise AI": the article's
 * five-stage roadmap drawn as a rising step line. Always dark so overlaid text stays legible.
 */
export const TrajectoryCover = ({ className = "" }: { className?: string }) => {
  const points = STAGES.map((_, i) => ({ x: X0 + i * DX, y: Y0 - i * DY }));
  // Each rise ends *at* a node, so the vertical segments never cross the labels above the nodes.
  const path = points
    .map((p, i) => (i === 0 ? `M ${p.x - 120} ${p.y}` : `H ${p.x} V ${p.y}`))
    .join(" ")
    .concat(` H ${points[points.length - 1].x + 90}`);

  return (
    <svg
      viewBox="0 0 1600 686"
      preserveAspectRatio="xMaxYMid slice"
      className={`h-full w-full bg-[#0e1219] ${className}`}
      role="img"
      aria-label="Five-stage roadmap of enterprise AI adoption from 2025 to 2029"
    >
      <defs>
        <pattern id="tc-dots" width="32" height="32" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="#ffffff" opacity="0.08" />
        </pattern>
        <radialGradient id="tc-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#f97316" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="tc-line" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
          <stop offset="70%" stopColor="#ffffff" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
      </defs>

      <rect width="1600" height="686" fill="url(#tc-dots)" />

      {/* Year guides */}
      {points.map((p, i) => (
        <line key={`g${i}`} x1={p.x} x2={p.x} y1={p.y + 18} y2={600} stroke="#ffffff" strokeOpacity="0.07" strokeDasharray="2 6" />
      ))}

      {/* Figure label */}
      <text x="440" y="72" fill="#ffffff" fillOpacity="0.5" fontFamily="Geist Mono, monospace" fontSize="15" letterSpacing="3">
        FIG. 01 — ENTERPRISE AI ADOPTION, 2025–2029
      </text>

      <circle cx={points[4].x} cy={points[4].y} r="130" fill="url(#tc-glow)" />

      <path
        d={path}
        fill="none"
        stroke="url(#tc-line)"
        strokeWidth="2.5"
        strokeLinejoin="round"
        pathLength={1}
        strokeDasharray="1"
        className="animate-[tc-draw_2.4s_cubic-bezier(0.65,0,0.35,1)_both] motion-reduce:animate-none"
      />

      {points.map((p, i) => {
        const last = i === points.length - 1;
        return (
          <g
            key={STAGES[i].year}
            className="animate-in fade-in fill-mode-both duration-700 motion-reduce:animate-none"
            style={{ animationDelay: `${400 + i * 350}ms` }}
          >
            <circle cx={p.x} cy={p.y} r={last ? 9 : 6} fill={last ? "#f97316" : "#0e1219"} stroke={last ? "#f97316" : "#ffffff"} strokeOpacity={last ? 1 : 0.8} strokeWidth="2" />
            {last && <circle cx={p.x} cy={p.y} r="18" fill="none" stroke="#f97316" strokeOpacity="0.4" />}
            <text x={p.x} y={p.y - 44} textAnchor="middle" fill={last ? "#f97316" : "#ffffff"} fillOpacity={last ? 1 : 0.55} fontFamily="Geist Mono, monospace" fontSize="15" letterSpacing="2">
              {STAGES[i].year}
            </text>
            <text x={p.x} y={p.y - 22} textAnchor="middle" fill="#ffffff" fillOpacity={last ? 0.95 : 0.75} fontFamily="Geist, sans-serif" fontSize="17">
              {STAGES[i].label}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

export default TrajectoryCover;

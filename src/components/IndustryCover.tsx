import { useEffect, useState } from "react";

export type IndustryFigure = {
  /** Short caption, e.g. "Finance & Banking". */
  name: string;
  /** Four document/data sources the industry feeds in. */
  sources: string[];
  /** Three outcomes KOGNIX produces. */
  outputs: string[];
};

const BG = "#0e1219";
const ORANGE = "#f97316";
const W = 1600;
const H = 700;

const SRC_X = 150;
const OUT_X = 1150;
const CARD_W = 300;
const CARD_H = 64;
const CORE = { x: 800, y: 370, w: 250, h: 132 };

const srcY = (i: number) => 196 + i * 100;
const outY = (i: number) => 246 + i * 100;

/**
 * On-brand cover for industry pages: the industry's own data flowing into KOGNIX inside
 * the customer's perimeter, and the outcomes coming out. Always dark, like the blog covers.
 */
export const IndustryCover = ({ figure }: { figure: IndustryFigure }) => {
  const [animate, setAnimate] = useState(false);
  useEffect(
    () =>
      setAnimate(
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      ),
    [],
  );

  const inPaths = figure.sources.map((_, i) => {
    const x1 = SRC_X + CARD_W;
    const y1 = srcY(i) + CARD_H / 2;
    const x2 = CORE.x - CORE.w / 2;
    return `M ${x1} ${y1} C ${x1 + 140} ${y1}, ${x2 - 140} ${CORE.y}, ${x2} ${CORE.y}`;
  });
  const outPaths = figure.outputs.map((_, i) => {
    const x1 = CORE.x + CORE.w / 2;
    const y2 = outY(i) + CARD_H / 2;
    return `M ${x1} ${CORE.y} C ${x1 + 140} ${CORE.y}, ${OUT_X - 140} ${y2}, ${OUT_X} ${y2}`;
  });

  const card = (
    x: number,
    y: number,
    text: string,
    kind: "in" | "out",
    key: string,
  ) => (
    <g key={key}>
      <rect
        x={x}
        y={y}
        width={CARD_W}
        height={CARD_H}
        rx="12"
        fill="#ffffff"
        fillOpacity="0.04"
        stroke="#ffffff"
        strokeOpacity="0.14"
      />
      {kind === "in" ? (
        // document glyph
        <g
          transform={`translate(${x + 22} ${y + 18})`}
          stroke="#ffffff"
          strokeOpacity="0.55"
          fill="none"
          strokeWidth="1.5"
        >
          <path d="M0 0 H14 L20 6 V28 H0 Z" />
          <path d="M5 12 H15 M5 17 H15 M5 22 H11" />
        </g>
      ) : (
        <circle cx={x + 32} cy={y + CARD_H / 2} r="5" fill={ORANGE} />
      )}
      <text
        x={x + 60}
        y={y + CARD_H / 2 + 6}
        fill="#ffffff"
        fillOpacity="0.85"
        fontFamily="Geist, sans-serif"
        fontSize="17"
      >
        {text}
      </text>
    </g>
  );

  return (
    <>
      <MobileFlow figure={figure} />
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        className="hidden h-full w-full md:block"
        style={{ background: BG }}
        role="img"
        aria-label={`${figure.name}: ${figure.sources.join(", ")} flow into KOGNIX inside your infrastructure, producing ${figure.outputs.join(", ")}.`}
      >
        <defs>
          <pattern
            id="ic-dots"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="1" fill="#ffffff" opacity="0.07" />
          </pattern>
          <radialGradient id="ic-glow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor={ORANGE} stopOpacity="0.35" />
            <stop offset="100%" stopColor={ORANGE} stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width={W} height={H} fill="url(#ic-dots)" />

        {/* Perimeter */}
        <rect
          x="80"
          y="110"
          width="1440"
          height="530"
          rx="24"
          fill="none"
          stroke="#ffffff"
          strokeOpacity="0.22"
          strokeDasharray="4 8"
        />
        <text
          x="110"
          y="148"
          fill="#ffffff"
          fillOpacity="0.45"
          fontFamily="Geist Mono, monospace"
          fontSize="14"
          letterSpacing="3"
        >
          YOUR INFRASTRUCTURE
        </text>
        <text
          x="1490"
          y="148"
          textAnchor="end"
          fill={ORANGE}
          fillOpacity="0.9"
          fontFamily="Geist Mono, monospace"
          fontSize="14"
          letterSpacing="3"
        >
          0 BYTES LEAVE
        </text>

        {/* Caption */}
        <text
          x="80"
          y="66"
          fill="#ffffff"
          fillOpacity="0.5"
          fontFamily="Geist Mono, monospace"
          fontSize="15"
          letterSpacing="3"
        >
          {`FIG. — ${figure.name.toUpperCase()} WITH KOGNIX`}
        </text>

        {/* Flows */}
        {[...inPaths, ...outPaths].map((d, i) => (
          <g key={d}>
            <path
              d={d}
              fill="none"
              stroke={i >= inPaths.length ? ORANGE : "#ffffff"}
              strokeOpacity={i >= inPaths.length ? 0.55 : 0.25}
              strokeWidth="1.5"
            />
            {animate && (
              <circle r="4" fill={i >= inPaths.length ? ORANGE : "#ffffff"}>
                <animateMotion
                  dur="2.4s"
                  repeatCount="indefinite"
                  path={d}
                  begin={`${(i * 0.37) % 2.4}s`}
                />
              </circle>
            )}
          </g>
        ))}

        {/* Core */}
        <circle cx={CORE.x} cy={CORE.y} r="190" fill="url(#ic-glow)" />
        <rect
          x={CORE.x - CORE.w / 2}
          y={CORE.y - CORE.h / 2}
          width={CORE.w}
          height={CORE.h}
          rx="18"
          fill="#ffffff"
        />
        <text
          x={CORE.x}
          y={CORE.y + 2}
          textAnchor="middle"
          fill={BG}
          fontFamily="Geist, sans-serif"
          fontWeight="600"
          fontSize="28"
          letterSpacing="4"
        >
          KOGNIX
        </text>
        <text
          x={CORE.x}
          y={CORE.y + 30}
          textAnchor="middle"
          fill={BG}
          fillOpacity="0.6"
          fontFamily="Geist Mono, monospace"
          fontSize="12"
          letterSpacing="2.5"
        >
          SOURCE-GROUNDED AI
        </text>

        {/* Column labels */}
        <text
          x={SRC_X}
          y="182"
          fill="#ffffff"
          fillOpacity="0.45"
          fontFamily="Geist Mono, monospace"
          fontSize="13"
          letterSpacing="2.5"
        >
          YOUR DATA
        </text>
        <text
          x={OUT_X}
          y="232"
          fill="#ffffff"
          fillOpacity="0.45"
          fontFamily="Geist Mono, monospace"
          fontSize="13"
          letterSpacing="2.5"
        >
          OUTCOMES
        </text>

        {figure.sources.map((s, i) => card(SRC_X, srcY(i), s, "in", `s${i}`))}
        {figure.outputs.map((o, i) => card(OUT_X, outY(i), o, "out", `o${i}`))}
      </svg>
    </>
  );
};

/** Phones: the same story stacked vertically, readable at small sizes. */
const MobileFlow = ({ figure }: { figure: IndustryFigure }) => (
  <div className="px-6 py-10 text-white md:hidden" style={{ background: BG }}>
    <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em]">
      <span className="text-white/50">Your infrastructure</span>
      <span style={{ color: ORANGE }}>0 bytes leave</span>
    </div>
    <div className="mt-4 rounded-2xl border border-dashed border-white/20 p-4">
      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/45">
        Your data
      </p>
      <ul className="mt-2 grid grid-cols-2 gap-2">
        {figure.sources.map((s) => (
          <li
            key={s}
            className="rounded-lg border border-white/15 bg-white/[0.04] px-3 py-2 text-xs text-white/85"
          >
            {s}
          </li>
        ))}
      </ul>
      <div aria-hidden="true" className="mx-auto h-6 w-px bg-white/25" />
      <div
        className="rounded-xl bg-white px-4 py-3 text-center"
        style={{ color: BG }}
      >
        <p className="text-lg font-semibold tracking-[0.2em]">KOGNIX</p>
        <p className="font-mono text-[9px] uppercase tracking-[0.18em] opacity-60">
          Source-grounded AI
        </p>
      </div>
      <div
        aria-hidden="true"
        className="mx-auto h-6 w-px"
        style={{ background: ORANGE, opacity: 0.6 }}
      />
      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/45">
        Outcomes
      </p>
      <ul className="mt-2 space-y-2">
        {figure.outputs.map((o) => (
          <li
            key={o}
            className="flex items-center gap-2.5 rounded-lg border border-white/15 bg-white/[0.04] px-3 py-2 text-xs text-white/85"
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: ORANGE }}
            />
            {o}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default IndustryCover;

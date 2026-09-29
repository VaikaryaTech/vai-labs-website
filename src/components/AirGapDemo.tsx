import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";

const EXTERNAL = [
  { y: 90, label: "Public LLM APIs" },
  { y: 200, label: "Cloud storage" },
  { y: 310, label: "Vendor telemetry" },
];

const KOGNIX = { x: 250, y: 200 };
const TEAM = { x: 100, y: 95 };
const DATA = { x: 100, y: 305 };
const PERIMETER_X = 400;

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const Node = ({
  x,
  y,
  label,
  sub,
  strong,
  dim,
}: {
  x: number;
  y: number;
  label: string;
  sub?: string;
  strong?: boolean;
  dim?: boolean;
}) => (
  <g
    className="transition-opacity duration-500"
    style={{ opacity: dim ? 0.3 : 1 }}
  >
    <rect
      x={x - 70}
      y={y - 24}
      width={140}
      height={48}
      rx={10}
      className={strong ? "fill-foreground" : "fill-background stroke-border"}
      strokeWidth={1}
    />
    <text
      x={x}
      y={sub ? y - 3 : y + 4}
      textAnchor="middle"
      className={`text-[12px] font-medium ${strong ? "fill-background" : "fill-foreground"}`}
    >
      {label}
    </text>
    {sub && (
      <text
        x={x}
        y={y + 13}
        textAnchor="middle"
        className={`font-mono text-[9px] uppercase tracking-wider ${strong ? "fill-background/70" : "fill-muted-foreground"}`}
      >
        {sub}
      </text>
    )}
  </g>
);

/**
 * Interactive diagram: switch the internet off and watch KOGNIX keep answering,
 * because every request already stays inside the customer's perimeter.
 */
export const AirGapDemo = () => {
  const [online, setOnline] = useState(true);
  const [answers, setAnswers] = useState(1284);
  const [reduced] = useState(prefersReducedMotion);

  useEffect(() => {
    const id = window.setInterval(() => setAnswers((n) => n + 1), 1600);
    return () => window.clearInterval(id);
  }, []);

  const teamPath = `M ${TEAM.x + 70} ${TEAM.y} C ${TEAM.x + 120} ${TEAM.y}, ${KOGNIX.x - 60} ${KOGNIX.y - 40}, ${KOGNIX.x - 70} ${KOGNIX.y - 10}`;
  const dataPath = `M ${DATA.x + 70} ${DATA.y} C ${DATA.x + 120} ${DATA.y}, ${KOGNIX.x - 60} ${KOGNIX.y + 40}, ${KOGNIX.x - 70} ${KOGNIX.y + 10}`;

  return (
    <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
      <div className="lg:col-span-4">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
          Try it
        </p>
        <h2
          data-split
          className="mt-6 text-balance text-3xl font-medium leading-tight tracking-[-0.02em] md:text-5xl"
        >
          Pull the plug. It keeps working.
        </h2>
        <p data-reveal className="mt-6 max-w-md text-muted-foreground">
          KOGNIX never depends on the outside world. Switch the internet off and
          your team keeps getting answers — because nothing was leaving your
          perimeter in the first place.
        </p>

        <label
          data-reveal
          className="mt-10 flex w-fit cursor-pointer items-center gap-4 rounded-full border border-border py-2 pl-5 pr-2"
        >
          <span className="font-mono text-xs uppercase tracking-[0.12em]">
            Internet:{" "}
            <span className={online ? "text-foreground" : "text-primary"}>
              {online ? "On" : "Off"}
            </span>
          </span>
          <Switch
            checked={online}
            onCheckedChange={setOnline}
            aria-label="Toggle internet connection"
          />
        </label>
      </div>

      <div data-reveal className="min-w-0 lg:col-span-8">
        <div className="-mx-6 overflow-x-auto px-6 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden">
          <div className="min-w-[540px] rounded-2xl border border-border bg-muted/30 p-4 sm:min-w-0 md:p-6">
            <svg
              viewBox="0 0 620 400"
              className="h-auto w-full"
              role="img"
              aria-label="Diagram of KOGNIX running inside your perimeter"
            >
              {/* Perimeter */}
              <rect
                x={16}
                y={16}
                width={PERIMETER_X - 16}
                height={368}
                rx={16}
                className="fill-background/60 stroke-foreground/30"
                strokeDasharray="4 6"
              />
              <text
                x={34}
                y={42}
                className="fill-muted-foreground font-mono text-[10px] uppercase tracking-widest"
              >
                Your perimeter
              </text>
              <text
                x={PERIMETER_X + 24}
                y={42}
                className="fill-muted-foreground font-mono text-[10px] uppercase tracking-widest"
              >
                Public internet
              </text>

              {/* External links */}
              {EXTERNAL.map((ext) => {
                const path = `M ${KOGNIX.x + 70} ${KOGNIX.y} C ${KOGNIX.x + 130} ${KOGNIX.y}, ${PERIMETER_X + 20} ${ext.y}, ${505 - 70} ${ext.y}`;
                return (
                  <g key={ext.label}>
                    <path
                      d={path}
                      fill="none"
                      className="stroke-muted-foreground/40 transition-opacity duration-500"
                      strokeWidth={1}
                      strokeDasharray="2 5"
                      style={{ opacity: online ? 1 : 0 }}
                    />
                    <g
                      className="transition-all duration-500"
                      style={{
                        opacity: online ? 0 : 1,
                        transform: online ? "scale(0.6)" : "scale(1)",
                        transformOrigin: `${PERIMETER_X}px ${ext.y}px`,
                        transformBox: "view-box",
                      }}
                    >
                      <circle
                        cx={PERIMETER_X}
                        cy={ext.y}
                        r={9}
                        className="fill-background stroke-primary"
                        strokeWidth={1.5}
                      />
                      <path
                        d={`M ${PERIMETER_X - 4} ${ext.y - 4} L ${PERIMETER_X + 4} ${ext.y + 4} M ${PERIMETER_X + 4} ${ext.y - 4} L ${PERIMETER_X - 4} ${ext.y + 4}`}
                        className="stroke-primary"
                        strokeWidth={1.5}
                      />
                    </g>
                    <Node
                      x={505}
                      y={ext.y}
                      label={ext.label}
                      sub={online ? "Not used" : "Unreachable"}
                      dim={!online}
                    />
                  </g>
                );
              })}

              {/* Internal flows */}
              {[teamPath, dataPath].map((d, i) => (
                <g key={d}>
                  <path
                    d={d}
                    fill="none"
                    className="stroke-primary/60"
                    strokeWidth={1.5}
                    strokeDasharray="4 6"
                  >
                    {!reduced && (
                      <animate
                        attributeName="stroke-dashoffset"
                        from="0"
                        to="-20"
                        dur="1s"
                        repeatCount="indefinite"
                      />
                    )}
                  </path>
                  {!reduced && (
                    <circle r={3.5} className="fill-primary">
                      <animateMotion
                        dur="1.6s"
                        repeatCount="indefinite"
                        path={d}
                        begin={`${i * 0.8}s`}
                      />
                    </circle>
                  )}
                </g>
              ))}

              <Node x={TEAM.x} y={TEAM.y} label="Your team" sub="Questions" />
              <Node
                x={DATA.x}
                y={DATA.y}
                label="Your data"
                sub="Docs · DBs · Apps"
              />
              <Node
                x={KOGNIX.x}
                y={KOGNIX.y}
                label="KOGNIX"
                sub="Your servers"
                strong
              />
            </svg>
          </div>
        </div>
        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground sm:hidden">
          Swipe to see the full diagram →
        </p>

        <dl className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4">
          {[
            ["Answers served", answers.toLocaleString("en-IN")],
            ["Outbound requests", "0"],
            ["Data egress", "0 B"],
            [
              "Status",
              online ? "Online · not required" : "Air-gapped · running",
            ],
          ].map(([k, v]) => (
            <div key={k} className="bg-background px-4 py-3">
              <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                {k}
              </dt>
              <dd
                className={`mt-1 font-mono text-sm tabular-nums ${k === "Status" && !online ? "text-primary" : ""}`}
              >
                {v}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
          Illustrative simulation
        </p>
      </div>
    </div>
  );
};

export default AirGapDemo;

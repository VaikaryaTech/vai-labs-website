export type DeploymentKind = "cloud" | "kubernetes" | "airgapped";

const BG = "#0e1219";
const INK = "#ffffff";
const ORANGE = "#f97316";

const Box = ({ x, y, w = 96, h = 40, label, strong }: { x: number; y: number; w?: number; h?: number; label: string; strong?: boolean }) => (
  <g>
    <rect x={x - w / 2} y={y - h / 2} width={w} height={h} rx={9} fill={strong ? INK : "#ffffff0d"} stroke={INK} strokeOpacity={strong ? 1 : 0.22} />
    <text x={x} y={y + 4} textAnchor="middle" fontFamily="Geist, sans-serif" fontSize={strong ? 12 : 11} fontWeight={strong ? 600 : 400} fill={strong ? BG : INK} fillOpacity={strong ? 1 : 0.8} letterSpacing={strong ? 1.5 : 0}>
      {label}
    </text>
  </g>
);

const Caption = ({ children, color = INK, opacity = 0.45, x = 24, anchor = "start" }: { children: string; color?: string; opacity?: number; x?: number; anchor?: "start" | "end" }) => (
  <text x={x} y={30} textAnchor={anchor} fontFamily="Geist Mono, monospace" fontSize={9} letterSpacing={1.8} fill={color} fillOpacity={opacity}>
    {children}
  </text>
);

/** Cloud: KOGNIX runs in a managed, isolated tenant; your apps connect over a private link. */
const Cloud = () => (
  <>
    <Caption>MANAGED BY VAI LABS</Caption>
    <rect x={184} y={48} width={148} height={176} rx={16} fill="none" stroke={INK} strokeOpacity={0.22} strokeDasharray="3 6" />
    <text x={198} y={70} fontFamily="Geist Mono, monospace" fontSize={8.5} letterSpacing={1.6} fill={INK} fillOpacity={0.45}>
      DEDICATED TENANT
    </text>
    <Box x={258} y={128} w={112} h={46} label="KOGNIX" strong />
    <Box x={258} y={190} w={112} h={30} label="Auto-scaling" />
    <Box x={66} y={128} w={84} label="Your apps" />
    <path d="M108 128 H202" stroke={ORANGE} strokeWidth={1.5} strokeDasharray="4 5" />
    {/* Label sits between the apps box and the tenant border so nothing overlaps. */}
    <text x={146} y={112} textAnchor="middle" fontFamily="Geist Mono, monospace" fontSize={8} fill={ORANGE} letterSpacing={1}>
      PRIVATE
    </text>
    <text x={146} y={148} textAnchor="middle" fontFamily="Geist Mono, monospace" fontSize={8} fill={ORANGE} letterSpacing={1}>
      LINK
    </text>
  </>
);

/** Kubernetes: KOGNIX services as pods across nodes in your cluster. */
const Kubernetes = () => {
  const nodes = [70, 176, 282];
  return (
    <>
      <Caption>YOUR CLUSTER · HELM / COMPOSE</Caption>
      <Box x={176} y={70} w={132} h={36} label="KOGNIX" strong />
      {nodes.map((x, i) => (
        <g key={x}>
          <path d={`M176 88 C176 110, ${x} 110, ${x} 128`} fill="none" stroke={INK} strokeOpacity={0.25} />
          <rect x={x - 46} y={128} width={92} height={96} rx={12} fill="#ffffff08" stroke={INK} strokeOpacity={0.18} />
          <text x={x} y={146} textAnchor="middle" fontFamily="Geist Mono, monospace" fontSize={8} letterSpacing={1.4} fill={INK} fillOpacity={0.45}>
            NODE {i + 1}
          </text>
          {[0, 1, 2].map((p) => (
            <rect key={p} x={x - 34} y={156 + p * 20} width={68} height={14} rx={4} fill={p === i ? ORANGE : INK} fillOpacity={p === i ? 0.9 : 0.14} />
          ))}
        </g>
      ))}
    </>
  );
};

/** Air-gapped: everything inside a sealed perimeter, the outside link cut. */
const AirGapped = () => (
  <>
    <Caption>SEALED PERIMETER</Caption>
    <Caption x={328} anchor="end" color={ORANGE} opacity={0.9}>
      0 BYTES OUT
    </Caption>
    <rect x={24} y={48} width={244} height={176} rx={16} fill="none" stroke={INK} strokeOpacity={0.3} strokeDasharray="3 6" />
    <Box x={146} y={100} w={120} h={42} label="KOGNIX" strong />
    <Box x={92} y={176} w={88} h={32} label="Your data" />
    <Box x={200} y={176} w={88} h={32} label="Your team" />
    <path d="M110 160 L130 121 M182 160 L162 121" stroke={ORANGE} strokeOpacity={0.7} strokeWidth={1.4} />
    <path d="M206 100 H268" stroke={INK} strokeOpacity={0.2} strokeDasharray="2 5" />
    <g transform="translate(268 100)">
      <circle r={10} fill={BG} stroke={ORANGE} strokeWidth={1.5} />
      <path d="M-4 -4 L4 4 M4 -4 L-4 4" stroke={ORANGE} strokeWidth={1.5} />
    </g>
    <Box x={318} y={100} w={60} h={32} label="Internet" />
    <rect x={288} y={84} width={60} height={32} rx={9} fill={BG} fillOpacity={0.55} />
  </>
);

/** On-brand diagram of a deployment model, used instead of stock illustrations. */
export const DeploymentDiagram = ({ kind, title }: { kind: DeploymentKind; title: string }) => (
  <svg viewBox="0 0 352 250" className="h-full w-full" style={{ background: BG }} role="img" aria-label={`${title} deployment diagram`}>
    <defs>
      <pattern id={`dd-dots-${kind}`} width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="0.8" fill={INK} opacity="0.08" />
      </pattern>
    </defs>
    <rect width="352" height="250" fill={`url(#dd-dots-${kind})`} />
    {kind === "cloud" && <Cloud />}
    {kind === "kubernetes" && <Kubernetes />}
    {kind === "airgapped" && <AirGapped />}
  </svg>
);

export default DeploymentDiagram;

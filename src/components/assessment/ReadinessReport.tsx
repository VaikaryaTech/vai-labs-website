import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { AlertTriangle, ArrowRight, CheckCircle2, CircleDashed, Download, RotateCcw } from "lucide-react";

export interface ReportQuestion {
  id: number;
  text: string;
  answer?: "yes" | "no";
  details?: string;
}

export interface ReportSection {
  id: number;
  title: string;
  description: string;
  questions: ReportQuestion[];
}

interface Props {
  sections: ReportSection[];
  onDownload: () => void;
  onReset: () => void;
}

const MATURITY = [
  { min: 0, label: "Nascent", tone: "Foundational gaps across most dimensions.", color: "0 85% 60%" },
  { min: 35, label: "Emerging", tone: "Early momentum, but key enablers are missing.", color: "30 95% 55%" },
  { min: 55, label: "Developing", tone: "Solid base with targeted gaps to close.", color: "45 100% 55%" },
  { min: 75, label: "Advanced", tone: "Strong readiness; refine governance and scale.", color: "160 84% 45%" },
  { min: 90, label: "Optimized", tone: "Enterprise-ready for scaled GenAI deployment.", color: "180 90% 55%" },
];

const RECOMMENDATIONS: Record<string, string> = {
  "Strategy and Vision":
    "Run an executive alignment workshop to lock a 12-month GenAI roadmap with named owners and value targets per use case.",
  "Data Readiness and Infrastructure":
    "Stand up a governed data foundation: catalog critical sources, define retention and access policy, and provision scalable GPU/MLOps capacity.",
  "Talent and Capabilities":
    "Build a small central AI enablement team and pair it with role-based upskilling for product, ops and risk functions.",
  "Ethical AI and Governance":
    "Publish responsible-AI principles with a model review board, bias testing and mandatory human-in-the-loop for high-impact outputs.",
  "Technology & Tools":
    "Consolidate on a reference architecture with model versioning, evaluation harnesses and production drift monitoring.",
  "Legal, Compliance, and Risk Management":
    "Complete an IP, privacy and EU AI Act impact review, and log accepted risks with mitigations for hallucination and misuse.",
  "Change Management and Adoption":
    "Launch controlled pilots with clear success criteria, then scale through champions, training and transparent comms.",
  "Measurement and Optimization":
    "Define KPI baselines and an ROI model per use case, with feedback loops that feed model and prompt improvements.",
};

const scoreOf = (s: ReportSection) => {
  const yes = s.questions.filter((q) => q.answer === "yes").length;
  return Math.round((yes / s.questions.length) * 100);
};

const bandFor = (score: number) =>
  [...MATURITY].reverse().find((m) => score >= m.min) ?? MATURITY[0];

const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">{children}</p>
);

export const ReadinessReport = ({ sections, onDownload, onReset }: Props) => {
  const scored = useMemo(
    () => sections.map((s) => ({ ...s, score: scoreOf(s) })).sort((a, b) => a.id - b.id),
    [sections],
  );

  const totalQuestions = sections.reduce((a, s) => a + s.questions.length, 0);
  const yesCount = sections.reduce((a, s) => a + s.questions.filter((q) => q.answer === "yes").length, 0);
  const noCount = sections.reduce((a, s) => a + s.questions.filter((q) => q.answer === "no").length, 0);
  const unanswered = totalQuestions - yesCount - noCount;
  const overall = Math.round((yesCount / totalQuestions) * 100);
  const band = bandFor(overall);

  const radarData = scored.map((s) => ({ dimension: s.title.split(/[ &,]/)[0], score: s.score }));
  const strengths = [...scored].sort((a, b) => b.score - a.score).slice(0, 3);
  const gaps = [...scored].sort((a, b) => a.score - b.score).slice(0, 3);
  const criticalGaps = scored.flatMap((s) =>
    s.questions.filter((q) => q.answer === "no").map((q) => ({ section: s.title, text: q.text, details: q.details })),
  );

  const ring = `conic-gradient(hsl(${band.color}) ${overall * 3.6}deg, hsl(var(--muted)) ${overall * 3.6}deg)`;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
      {/* Executive summary */}
      <Label>Your readiness report</Label>
      <div className="mt-6 flex flex-col gap-10 md:flex-row md:items-center">
        <div className="relative h-40 w-40 shrink-0 rounded-full" style={{ background: ring }}>
          <div className="absolute inset-[10px] flex flex-col items-center justify-center rounded-full bg-background">
            <span className="text-5xl font-medium tracking-tight">{overall}</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">of 100</span>
          </div>
        </div>
        <div className="flex-1">
          <p className="font-mono text-xs uppercase tracking-[0.14em]" style={{ color: `hsl(${band.color})` }}>
            Maturity · {band.label}
          </p>
          <h2 className="mt-3 text-3xl font-medium tracking-tight md:text-4xl">Executive readiness summary</h2>
          <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
            {band.tone} Based on {totalQuestions} control points across {sections.length} dimensions, your
            organization has {yesCount} capabilities in place, {noCount} identified gaps
            {unanswered > 0 ? `, and ${unanswered} unanswered items` : ""}.
          </p>
        </div>
      </div>

      <dl className="mt-10 grid grid-cols-3 border-y border-border">
        {[
          { label: "In place", value: yesCount, icon: CheckCircle2 },
          { label: "Gaps", value: noCount, icon: AlertTriangle },
          { label: "Open", value: unanswered, icon: CircleDashed },
        ].map((m, i) => (
          <div key={m.label} className={`py-6 ${i > 0 ? "border-l border-border pl-6" : ""}`}>
            <dd className="text-3xl font-medium tracking-tight">{m.value}</dd>
            <dt className="mt-1 flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
              <m.icon className={`h-3.5 w-3.5 ${m.label === "Gaps" ? "text-primary" : ""}`} /> {m.label}
            </dt>
          </div>
        ))}
      </dl>

      {/* Radar + dimension scores */}
      <div className="mt-16 grid gap-12 md:grid-cols-2">
        <div>
          <Label>Capability radar</Label>
          <div className="mt-4 h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData} outerRadius="72%">
                <PolarGrid stroke="hsl(var(--border))" />
                <PolarAngleAxis dataKey="dimension" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} />
                <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
                <Radar dataKey="score" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.25} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div>
          <Label>Dimension scores</Label>
          <ul className="mt-4 border-t border-border">
            {scored.map((s) => (
              <li key={s.id} className="border-b border-border py-3">
                <div className="flex items-center justify-between text-sm">
                  <span>{s.title}</span>
                  <span className="font-mono">{s.score}%</span>
                </div>
                <div className="mt-2 h-1 overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-foreground transition-all duration-700"
                    style={{ width: `${s.score}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Strengths & focus areas */}
      <div className="mt-16 grid gap-12 md:grid-cols-2">
        <div>
          <Label>Top strengths</Label>
          <ul className="mt-4 border-t border-border">
            {strengths.map((s) => (
              <li key={s.id} className="flex items-start gap-3 border-b border-border py-4">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                <div>
                  <p className="font-medium">{s.title}</p>
                  <p className="text-sm text-muted-foreground">{s.score}% of controls in place</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Label>Priority focus areas</Label>
          <ul className="mt-4 border-t border-border">
            {gaps.map((s) => (
              <li key={s.id} className="flex items-start gap-3 border-b border-border py-4">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <p className="font-medium">{s.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{RECOMMENDATIONS[s.title]}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Roadmap */}
      <div className="mt-16">
        <Label>Recommended remediation roadmap</Label>
        <ol className="relative mt-6">
          <div aria-hidden="true" className="absolute bottom-2 left-[7px] top-2 w-px bg-border" />
          {scored
            .filter((s) => s.score < 100)
            .sort((a, b) => a.score - b.score)
            .map((s, i) => (
              <li key={s.id} className="relative pb-8 pl-10 last:pb-0">
                <span className="absolute left-0 top-1 h-3.5 w-3.5 rounded-full border-2 border-primary bg-background" />
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-primary">
                  {i < 2 ? "0–3 months" : i < 4 ? "3–6 months" : "6–12 months"}
                </p>
                <p className="mt-1 font-medium">
                  {s.title} <span className="font-normal text-muted-foreground">· {s.score}% ready</span>
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{RECOMMENDATIONS[s.title]}</p>
              </li>
            ))}
          {scored.every((s) => s.score === 100) && (
            <p className="text-muted-foreground">
              All dimensions are fully covered — focus on continuous evaluation and scaling.
            </p>
          )}
        </ol>
      </div>

      {/* Gap register */}
      {criticalGaps.length > 0 && (
        <div className="mt-16">
          <Label>Gap register · every control answered "No"</Label>
          <ul className="mt-4 border-t border-border">
            {criticalGaps.map((g, i) => (
              <li key={i} className="grid gap-1 border-b border-border py-4 md:grid-cols-12 md:gap-6">
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-primary md:col-span-4">
                  {g.section}
                </span>
                <div className="md:col-span-8">
                  <p className="text-sm">{g.text}</p>
                  {g.details && <p className="mt-1 text-sm italic text-muted-foreground">Note: {g.details}</p>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Detailed responses */}
      <details className="group mt-16 border-t border-border pt-6">
        <summary className="flex cursor-pointer list-none items-center justify-between">
          <Label>Detailed responses</Label>
          <span className="text-sm text-muted-foreground group-open:hidden">Show all</span>
          <span className="hidden text-sm text-muted-foreground group-open:inline">Hide</span>
        </summary>
        <div className="mt-6 space-y-8">
          {scored.map((s) => (
            <div key={s.id}>
              <div className="flex items-center justify-between">
                <h4 className="font-medium">
                  {String(s.id).padStart(2, "0")} · {s.title}
                </h4>
                <span className="font-mono text-sm">{s.score}%</span>
              </div>
              <ul className="mt-3 space-y-2">
                {s.questions.map((q) => (
                  <li key={q.id} className="flex items-start gap-3 text-sm">
                    {q.answer === "yes" ? (
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                    ) : q.answer === "no" ? (
                      <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    ) : (
                      <CircleDashed className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                    )}
                    <span className="text-muted-foreground">{q.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </details>

      <div className="mt-12 flex flex-wrap gap-3 border-t border-border pt-8">
        <Button size="lg" onClick={onDownload}>
          <Download className="h-4 w-4" /> Download report
        </Button>
        <Button variant="outline" size="lg" onClick={onReset}>
          <RotateCcw className="h-4 w-4" /> Back to questionnaire
        </Button>
        <Button asChild variant="ghost" size="lg">
          <Link to="/book-demo">
            Discuss results with us <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

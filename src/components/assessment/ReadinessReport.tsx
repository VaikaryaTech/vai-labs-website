import { useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import {
  AlertTriangle,
  CheckCircle2,
  CircleDashed,
  Download,
  RotateCcw,
  ShieldCheck,
  Target,
  TrendingUp,
} from "lucide-react";

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

export const ReadinessReport = ({ sections, onDownload, onReset }: Props) => {
  const scored = useMemo(
    () => sections.map((s) => ({ ...s, score: scoreOf(s) })).sort((a, b) => a.id - b.id),
    [sections],
  );

  const totalQuestions = sections.reduce((a, s) => a + s.questions.length, 0);
  const yesCount = sections.reduce(
    (a, s) => a + s.questions.filter((q) => q.answer === "yes").length,
    0,
  );
  const noCount = sections.reduce(
    (a, s) => a + s.questions.filter((q) => q.answer === "no").length,
    0,
  );
  const unanswered = totalQuestions - yesCount - noCount;
  const overall = Math.round((yesCount / totalQuestions) * 100);
  const band = bandFor(overall);

  const radarData = scored.map((s) => ({
    dimension: s.title.split(/[ &,]/)[0],
    score: s.score,
  }));

  const strengths = [...scored].sort((a, b) => b.score - a.score).slice(0, 3);
  const gaps = [...scored].sort((a, b) => a.score - b.score).slice(0, 3);
  const criticalGaps = scored.flatMap((s) =>
    s.questions
      .filter((q) => q.answer === "no")
      .map((q) => ({ section: s.title, text: q.text, details: q.details })),
  );

  const ring = `conic-gradient(hsl(${band.color}) ${overall * 3.6}deg, hsl(var(--muted)) ${overall * 3.6}deg)`;

  return (
    <div className="space-y-10">
      {/* Executive summary */}
      <Card className="p-8">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="relative shrink-0">
            <div
              className="h-44 w-44 rounded-full flex items-center justify-center"
              style={{ background: ring }}
            >
              <div className="h-36 w-36 rounded-full bg-background/90 backdrop-blur-md flex flex-col items-center justify-center">
                <span
                  className="text-5xl font-bold"
                  style={{ color: `hsl(${band.color})` }}
                >
                  {overall}
                </span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  Readiness
                </span>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-sm font-semibold">
              <ShieldCheck className="h-4 w-4 text-primary" />
              Maturity Level: {band.label}
            </div>
            <h2 className="text-3xl font-bold">Executive Readiness Summary</h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              {band.tone} Based on {totalQuestions} control points across {sections.length} dimensions,
              your organization has {yesCount} capabilities in place, {noCount} identified gaps
              {unanswered > 0 ? `, and ${unanswered} unanswered items` : ""}.
            </p>
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              {[
                { label: "In place", value: yesCount, icon: CheckCircle2, cls: "text-emerald-400" },
                { label: "Gaps", value: noCount, icon: AlertTriangle, cls: "text-orange-400" },
                { label: "Open", value: unanswered, icon: CircleDashed, cls: "text-muted-foreground" },
              ].map((m) => (
                <div key={m.label} className="rounded-xl border border-border p-4 text-center">
                  <m.icon className={`h-5 w-5 mx-auto mb-2 ${m.cls}`} />
                  <div className="text-2xl font-bold">{m.value}</div>
                  <div className="text-xs text-muted-foreground">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Radar + dimension bars */}
      <div className="grid lg:grid-cols-2 gap-8">
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" /> Capability Radar
          </h3>
          <div className="h-[340px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData} outerRadius="72%">
                <PolarGrid stroke="hsl(var(--border))" />
                <PolarAngleAxis
                  dataKey="dimension"
                  tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
                />
                <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  dataKey="score"
                  stroke="hsl(var(--primary))"
                  fill="hsl(var(--primary))"
                  fillOpacity={0.35}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" /> Dimension Scores
          </h3>
          <div className="space-y-4">
            {scored.map((s) => {
              const b = bandFor(s.score);
              return (
                <div key={s.id}>
                  <div className="flex items-center justify-between text-sm mb-1.5">
                    <span className="font-medium">{s.title}</span>
                    <span className="font-bold" style={{ color: `hsl(${b.color})` }}>
                      {s.score}%
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{ width: `${s.score}%`, background: `hsl(${b.color})` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>

      {/* Strengths & gaps */}
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4 text-emerald-400">Top Strengths</h3>
          <ul className="space-y-3">
            {strengths.map((s) => (
              <li key={s.id} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">{s.title}</p>
                  <p className="text-sm text-muted-foreground">{s.score}% of controls in place</p>
                </div>
              </li>
            ))}
          </ul>
        </Card>
        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4 text-orange-400">Priority Focus Areas</h3>
          <ul className="space-y-3">
            {gaps.map((s) => (
              <li key={s.id} className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">{s.title}</p>
                  <p className="text-sm text-muted-foreground">{RECOMMENDATIONS[s.title]}</p>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* Remediation roadmap */}
      <Card className="p-8">
        <h3 className="text-2xl font-bold mb-6">Recommended Remediation Roadmap</h3>
        <div className="space-y-6">
          {scored
            .filter((s) => s.score < 100)
            .sort((a, b) => a.score - b.score)
            .map((s, i) => (
              <div key={s.id} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="h-9 w-9 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center text-sm font-bold text-primary">
                    {i + 1}
                  </div>
                  <div className="flex-1 w-px bg-border mt-2" />
                </div>
                <div className="pb-2">
                  <p className="font-semibold">
                    {s.title}{" "}
                    <span className="text-sm font-normal text-muted-foreground">
                      · {s.score}% ready · {i < 2 ? "0–3 months" : i < 4 ? "3–6 months" : "6–12 months"}
                    </span>
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">{RECOMMENDATIONS[s.title]}</p>
                </div>
              </div>
            ))}
          {scored.every((s) => s.score === 100) && (
            <p className="text-muted-foreground">
              All dimensions are fully covered — focus on continuous evaluation and scaling.
            </p>
          )}
        </div>
      </Card>

      {/* Gap register */}
      {criticalGaps.length > 0 && (
        <Card className="p-8">
          <h3 className="text-2xl font-bold mb-2">Gap Register</h3>
          <p className="text-muted-foreground mb-6 text-sm">
            Every control answered “No”, grouped by dimension.
          </p>
          <div className="space-y-4">
            {criticalGaps.map((g, i) => (
              <div key={i} className="rounded-xl border border-orange-400/30 bg-orange-400/5 p-4">
                <div className="text-xs uppercase tracking-wider text-orange-400 font-semibold mb-1">
                  {g.section}
                </div>
                <p className="text-sm">{g.text}</p>
                {g.details && (
                  <p className="text-sm text-muted-foreground mt-2 italic">Note: {g.details}</p>
                )}
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Section detail */}
      <Card className="p-8">
        <h3 className="text-2xl font-bold mb-6">Detailed Responses</h3>
        <div className="space-y-8">
          {scored.map((s) => (
            <div key={s.id}>
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold">
                  Section {s.id}: {s.title}
                </h4>
                <span className="text-sm font-bold text-primary">{s.score}%</span>
              </div>
              <Progress value={s.score} className="h-1.5 mb-4" />
              <ul className="space-y-2">
                {s.questions.map((q) => (
                  <li key={q.id} className="flex items-start gap-3 text-sm">
                    {q.answer === "yes" ? (
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    ) : q.answer === "no" ? (
                      <AlertTriangle className="h-4 w-4 text-orange-400 shrink-0 mt-0.5" />
                    ) : (
                      <CircleDashed className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                    )}
                    <span className="text-muted-foreground">{q.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>

      <div className="flex flex-wrap gap-4 justify-center">
        <Button variant="hero" size="lg" onClick={onDownload}>
          <Download className="mr-2 h-5 w-5" /> Download Report
        </Button>
        <Button variant="outline" size="lg" onClick={onReset}>
          <RotateCcw className="mr-2 h-5 w-5" /> Back to Questionnaire
        </Button>
      </div>
    </div>
  );
};

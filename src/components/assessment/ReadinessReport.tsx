import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { AlertTriangle, ArrowRight, CheckCircle2, CircleDashed, Download, Loader2, RotateCcw } from "lucide-react";

import { buildReport, RECOMMENDATIONS, type ReportSection } from "@/components/assessment/readiness-scoring";

export type { ReportQuestion, ReportSection } from "@/components/assessment/readiness-scoring";

interface Props {
  sections: ReportSection[];
  /** Called with the optional organization name to print on the PDF cover. */
  onDownload: (organization: string) => void;
  onReset: () => void;
  downloading?: boolean;
}

const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">{children}</p>
);

export const ReadinessReport = ({ sections, onDownload, onReset, downloading = false }: Props) => {
  const { scored, totalQuestions, yesCount, noCount, unanswered, overall, band, radarData, strengths, gaps, roadmap, criticalGaps } =
    useMemo(() => buildReport(sections), [sections]);
  const [organization, setOrganization] = useState("");

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
          {roadmap.map((s) => (
              <li key={s.id} className="relative pb-8 pl-10 last:pb-0">
                <span className="absolute left-0 top-1 h-3.5 w-3.5 rounded-full border-2 border-primary bg-background" />
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-primary">{s.timeframe}</p>
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

      <div className="mt-12 border-t border-border pt-8">
        <label htmlFor="report-org" className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
          Organization name <span className="normal-case tracking-normal">(optional — printed on the PDF cover)</span>
        </label>
        <Input
          id="report-org"
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
          placeholder="e.g. Acme Pharma Ltd"
          maxLength={80}
          className="mt-2 h-11 max-w-md"
        />
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Button size="lg" onClick={() => onDownload(organization)} disabled={downloading}>
          {downloading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Preparing PDF…
            </>
          ) : (
            <>
              <Download className="h-4 w-4" /> Download PDF report
            </>
          )}
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

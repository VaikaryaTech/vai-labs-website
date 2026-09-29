import { useEffect, useMemo, useState } from "react";
import { FileText, Lock, Sparkles } from "lucide-react";

type Segment = { text: string; cite?: string };
type Question = { q: string; answer: Segment[] };
type Scenario = {
  id: string;
  label: string;
  doc: { title: string; clauses: { id: string; ref: string; text: string }[] };
  questions: Question[];
};

const SCENARIOS: Scenario[] = [
  {
    id: "legal",
    label: "Legal",
    doc: {
      title: "Master Services Agreement — Vendor A",
      clauses: [
        { id: "l1", ref: "§ 9.2", text: "Each party's aggregate liability shall not exceed the fees paid by Customer in the twelve (12) months preceding the claim." },
        { id: "l2", ref: "§ 14.1", text: "Either party may terminate this Agreement for convenience upon ninety (90) days' prior written notice." },
        { id: "l3", ref: "§ 14.2", text: "Either party may terminate for cause if the other party materially breaches this Agreement and fails to cure within thirty (30) days of written notice." },
        { id: "l4", ref: "§ 14.3", text: "Upon termination, Vendor shall return or securely destroy all Customer Data within fifteen (15) business days and certify such destruction in writing." },
      ],
    },
    questions: [
      {
        q: "What are our termination rights?",
        answer: [
          { text: "You can terminate for convenience with 90 days' written notice.", cite: "l2" },
          { text: " To terminate for cause, you must notify the vendor of a material breach and allow a 30-day cure period.", cite: "l3" },
          { text: " Either way, the vendor must return or destroy your data within 15 business days and certify it in writing.", cite: "l4" },
        ],
      },
      {
        q: "What is the vendor's liability cap?",
        answer: [
          { text: "Liability is capped at the fees you paid in the 12 months before the claim.", cite: "l1" },
          { text: " Note this cap applies to both parties." },
        ],
      },
    ],
  },
  {
    id: "finance",
    label: "Finance",
    doc: {
      title: "Credit Approval Policy 2025",
      clauses: [
        { id: "f1", ref: "4.1", text: "Exposures up to ₹10 crore may be sanctioned by the Zonal Credit Committee." },
        { id: "f2", ref: "4.2", text: "Exposures above ₹10 crore and up to ₹100 crore require approval of the Central Credit Committee." },
        { id: "f3", ref: "4.5", text: "All exposures above ₹25 crore require an independent risk review prior to committee submission." },
        { id: "f4", ref: "7.3", text: "Sanctions to entities in the watch-list sectors (Annexure B) additionally require CRO sign-off." },
      ],
    },
    questions: [
      {
        q: "Who approves a ₹50 crore loan?",
        answer: [
          { text: "A ₹50 crore exposure falls in the ₹10–100 crore band, so it needs Central Credit Committee approval.", cite: "f2" },
          { text: " Because it exceeds ₹25 crore, an independent risk review must be completed before it goes to committee.", cite: "f3" },
          { text: " If the borrower is in a watch-list sector, CRO sign-off is also required.", cite: "f4" },
        ],
      },
    ],
  },
  {
    id: "pharma",
    label: "Pharma",
    doc: {
      title: "SOP-QA-017 · Deviation Handling",
      clauses: [
        { id: "p1", ref: "5.1", text: "All deviations shall be classified as Critical, Major or Minor by QA within one (1) business day of identification." },
        { id: "p2", ref: "5.3", text: "Critical deviations shall be escalated to the Head of Quality within four (4) hours of classification." },
        { id: "p3", ref: "6.2", text: "Root-cause investigation for Critical and Major deviations shall be completed within thirty (30) calendar days." },
        { id: "p4", ref: "6.4", text: "Affected batches shall remain in quarantine until the investigation is closed and CAPA is approved." },
      ],
    },
    questions: [
      {
        q: "How fast must a critical deviation be escalated?",
        answer: [
          { text: "QA must classify the deviation within 1 business day,", cite: "p1" },
          { text: " and a critical deviation must reach the Head of Quality within 4 hours of classification.", cite: "p2" },
          { text: " The root-cause investigation then has 30 calendar days,", cite: "p3" },
          { text: " and affected batches stay quarantined until CAPA is approved.", cite: "p4" },
        ],
      },
    ],
  },
];

type Phase = "idle" | "searching" | "streaming" | "done";

const reducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Scripted, offline demo of a source-grounded answer with clickable citations. */
export const GroundedChatDemo = () => {
  const [scenarioId, setScenarioId] = useState(SCENARIOS[0].id);
  const [question, setQuestion] = useState<Question | null>(null);
  const [phase, setPhase] = useState<Phase>("idle");
  const [shown, setShown] = useState(0);
  const [activeCite, setActiveCite] = useState<string | null>(null);

  const scenario = SCENARIOS.find((s) => s.id === scenarioId)!;

  // Word tokens for streaming; each remembers the citation of its segment.
  const tokens = useMemo(() => {
    if (!question) return [];
    return question.answer.flatMap((seg, si) => {
      const words = seg.text.split(/(\s+)/).filter(Boolean);
      return words.map((w, wi) => ({ w, seg: si, last: wi === words.length - 1, cite: seg.cite }));
    });
  }, [question]);

  const citeNumbers = useMemo(() => {
    const map = new Map<string, number>();
    question?.answer.forEach((s) => s.cite && !map.has(s.cite) && map.set(s.cite, map.size + 1));
    return map;
  }, [question]);

  useEffect(() => {
    if (phase === "searching") {
      const t = window.setTimeout(() => setPhase("streaming"), reducedMotion() ? 0 : 900);
      return () => window.clearTimeout(t);
    }
    if (phase === "streaming") {
      if (reducedMotion() || shown >= tokens.length) {
        setShown(tokens.length);
        setPhase("done");
        return;
      }
      const t = window.setTimeout(() => setShown((n) => n + 1), 28);
      return () => window.clearTimeout(t);
    }
  }, [phase, shown, tokens.length]);

  // Follow the citation currently being written, then keep the user's choice.
  const streamingCite = phase === "streaming" ? tokens[Math.max(shown - 1, 0)]?.cite ?? null : null;
  const highlighted = activeCite ?? streamingCite;

  const ask = (q: Question) => {
    setQuestion(q);
    setShown(0);
    setActiveCite(null);
    setPhase("searching");
  };

  const switchScenario = (id: string) => {
    setScenarioId(id);
    setQuestion(null);
    setPhase("idle");
    setShown(0);
    setActiveCite(null);
  };

  const cited = new Set(citeNumbers.keys());

  return (
    <div className="overflow-hidden rounded-2xl border border-border">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-muted/40 px-4 py-3">
        <div role="tablist" aria-label="Choose an industry" className="flex gap-1">
          {SCENARIOS.map((s) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={s.id === scenarioId}
              onClick={() => switchScenario(s.id)}
              className={`rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                s.id === scenarioId ? "bg-foreground text-background" : "text-foreground/70 hover:bg-muted hover:text-foreground"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
          <Lock className="h-3 w-3" /> On-prem · 0 bytes sent
        </span>
      </div>

      <div className="grid md:grid-cols-2">
        {/* Chat */}
        <div className="flex min-h-[420px] flex-col border-b border-border p-5 md:border-b-0 md:border-r md:p-6">
          <div className="flex-1 space-y-5">
            {!question && (
              <p className="text-sm text-muted-foreground">
                Pick a question to see KOGNIX answer from your own documents — every claim linked to its source.
              </p>
            )}

            {question && (
              <>
                <div className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md bg-foreground px-4 py-2.5 text-sm text-background">
                  {question.q}
                </div>

                <div className="max-w-[95%]">
                  <div className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    <Sparkles className="h-3 w-3 text-primary" />
                    {phase === "searching" ? (
                      <span className="animate-pulse">Searching {scenario.doc.clauses.length} clauses in 1 document…</span>
                    ) : (
                      <span>KOGNIX · grounded in {cited.size} source{cited.size === 1 ? "" : "s"}</span>
                    )}
                  </div>

                  {phase !== "searching" && (
                    <p className="text-[15px] leading-relaxed" aria-live="polite">
                      {tokens.slice(0, shown).map((t, i) => (
                        <span key={i}>
                          {t.w}
                          {t.last && t.cite && (
                            <button
                              onMouseEnter={() => setActiveCite(t.cite!)}
                              onFocus={() => setActiveCite(t.cite!)}
                              onClick={() => setActiveCite(t.cite!)}
                              aria-label={`Show source ${citeNumbers.get(t.cite)}`}
                              className={`mx-0.5 inline-flex h-5 min-w-5 -translate-y-0.5 items-center justify-center rounded-md px-1 align-middle font-mono text-[10px] transition-colors ${
                                highlighted === t.cite
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-primary/15 text-primary hover:bg-primary/25"
                              }`}
                            >
                              {citeNumbers.get(t.cite)}
                            </button>
                          )}
                        </span>
                      ))}
                      {phase === "streaming" && (
                        <span className="ml-0.5 inline-block h-4 w-1.5 translate-y-0.5 animate-pulse bg-foreground/60" />
                      )}
                    </p>
                  )}
                </div>
              </>
            )}
          </div>

          <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-4">
            {scenario.questions.map((q) => (
              <button
                key={q.q}
                onClick={() => ask(q)}
                disabled={phase === "searching" || phase === "streaming"}
                className={`rounded-full border px-3.5 py-1.5 text-left text-sm transition-colors disabled:opacity-50 ${
                  question?.q === q.q ? "border-primary text-primary" : "border-border hover:border-foreground/40"
                }`}
              >
                {q.q}
              </button>
            ))}
          </div>
        </div>

        {/* Source document */}
        <div className="flex flex-col bg-muted/20">
          <div className="flex items-center gap-2 border-b border-border px-5 py-3 text-sm">
            <FileText className="h-4 w-4 text-muted-foreground" />
            <span className="truncate">{scenario.doc.title}</span>
            <span className="ml-auto shrink-0 rounded-full border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              Sample
            </span>
          </div>
          <div className="relative flex-1 space-y-3 p-5">
            {scenario.doc.clauses.map((c) => {
              const n = citeNumbers.get(c.id);
              const isActive = highlighted === c.id;
              const isCited = phase === "done" && cited.has(c.id);
              return (
                <div
                  key={c.id}
                  data-clause={c.id}
                  onMouseEnter={() => n && setActiveCite(c.id)}
                  className={`rounded-xl border p-4 text-sm leading-relaxed transition-all duration-300 ${
                    isActive
                      ? "border-primary bg-primary/10 shadow-sm"
                      : isCited
                        ? "border-primary/30 bg-background"
                        : "border-transparent bg-background/60 text-foreground/70"
                  }`}
                >
                  <div className="mb-1.5 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    <span>{c.ref}</span>
                    {n && (phase === "done" || isActive) && (
                      <span className="rounded-md bg-primary px-1.5 py-0.5 text-primary-foreground">Source {n}</span>
                    )}
                  </div>
                  {c.text}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <p className="border-t border-border px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
        Scripted demo with sample documents · runs entirely in your browser
      </p>
    </div>
  );
};

export default GroundedChatDemo;

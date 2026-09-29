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

export const MATURITY = [
  { min: 0, label: "Nascent", tone: "Foundational gaps across most dimensions.", color: "0 85% 60%", hex: "#ef4444" },
  { min: 35, label: "Emerging", tone: "Early momentum, but key enablers are missing.", color: "30 95% 55%", hex: "#f97316" },
  { min: 55, label: "Developing", tone: "Solid base with targeted gaps to close.", color: "45 100% 55%", hex: "#eab308" },
  { min: 75, label: "Advanced", tone: "Strong readiness; refine governance and scale.", color: "160 84% 45%", hex: "#10b981" },
  { min: 90, label: "Optimized", tone: "Enterprise-ready for scaled GenAI deployment.", color: "180 90% 55%", hex: "#06b6d4" },
];

export const RECOMMENDATIONS: Record<string, string> = {
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

export const scoreOf = (s: ReportSection) => {
  const yes = s.questions.filter((q) => q.answer === "yes").length;
  return Math.round((yes / s.questions.length) * 100);
};

export const bandFor = (score: number) => [...MATURITY].reverse().find((m) => score >= m.min) ?? MATURITY[0];

const timeframe = (rank: number) => (rank < 2 ? "0–3 months" : rank < 4 ? "3–6 months" : "6–12 months");

/** Everything the on-screen report and the PDF show, computed once from the answers. */
export const buildReport = (sections: ReportSection[]) => {
  const scored = sections.map((s) => ({ ...s, score: scoreOf(s) })).sort((a, b) => a.id - b.id);
  const totalQuestions = sections.reduce((a, s) => a + s.questions.length, 0);
  const yesCount = sections.reduce((a, s) => a + s.questions.filter((q) => q.answer === "yes").length, 0);
  const noCount = sections.reduce((a, s) => a + s.questions.filter((q) => q.answer === "no").length, 0);
  const unanswered = totalQuestions - yesCount - noCount;
  const overall = Math.round((yesCount / totalQuestions) * 100);

  return {
    scored,
    totalQuestions,
    yesCount,
    noCount,
    unanswered,
    overall,
    band: bandFor(overall),
    radarData: scored.map((s) => ({ dimension: s.title.split(/[ &,]/)[0], score: s.score })),
    strengths: [...scored].sort((a, b) => b.score - a.score).slice(0, 3),
    gaps: [...scored].sort((a, b) => a.score - b.score).slice(0, 3),
    roadmap: scored
      .filter((s) => s.score < 100)
      .sort((a, b) => a.score - b.score)
      .map((s, i) => ({ ...s, timeframe: timeframe(i) })),
    criticalGaps: scored.flatMap((s) =>
      s.questions.filter((q) => q.answer === "no").map((q) => ({ section: s.title, text: q.text, details: q.details })),
    ),
  };
};

export type ReadinessData = ReturnType<typeof buildReport>;

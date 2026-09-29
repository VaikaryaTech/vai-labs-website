import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check, FileText, Plus, X } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useScrollMotion } from "@/hooks/use-scroll-motion";
import { ReadinessReport } from "@/components/assessment/ReadinessReport";

interface Question {
  id: number;
  text: string;
  answer?: "yes" | "no";
  details?: string;
}

interface Section {
  id: number;
  title: string;
  description: string;
  questions: Question[];
}

const INITIAL_SECTIONS: Section[] = [
  {
    id: 1,
    title: "Strategy and Vision",
    description: "This section focuses on the organization's strategic alignment, clarity of objectives, and leadership commitment towards Generative AI.",
    questions: [
      { id: 1, text: "Has a clear Generative AI strategy been defined that aligns with the overall business objectives and long-term vision?" },
      { id: 2, text: "Are there identified use cases for Generative AI that promise significant business value (e.g., cost reduction, revenue growth, new product development, improved customer experience)?" },
      { id: 3, text: "Is there strong executive sponsorship and active participation from senior leadership in driving Generative AI initiatives?" },
      { id: 4, text: "Have clear roles and responsibilities for Generative AI adoption been assigned within the leadership team?" },
      { id: 5, text: "Is there a well-articulated vision for how Generative AI will transform the business operations and competitive landscape?" },
      { id: 6, text: "Has this vision been effectively communicated across all relevant departments and levels of the organization?" }
    ]
  },
  {
    id: 2,
    title: "Data Readiness and Infrastructure",
    description: "This section assesses the quality, accessibility, governance, and infrastructure required to support Generative AI models.",
    questions: [
      { id: 1, text: "Is there sufficient, high-quality, and relevant data available to train and fine-tune Generative AI models for the identified use cases?" },
      { id: 2, text: "Is the data in a usable format, or does it require extensive pre-processing and transformation?" },
      { id: 3, text: "Are there mechanisms to continuously collect, update, and validate data for ongoing model improvement?" },
      { id: 4, text: "Are robust data governance policies and procedures in place to manage data lifecycle, access, and usage for AI?" },
      { id: 5, text: "Are there comprehensive data security measures (encryption, access controls, anonymization) to protect sensitive information used by Generative AI models?" },
      { id: 6, text: "Is there a clear understanding and compliance with relevant data privacy regulations (e.g., GDPR, CCPA) concerning the data used for Generative AI?" },
      { id: 7, text: "Does the organization have the necessary computational resources (e.g., GPUs, TPUs) to train, fine-tune, and deploy Generative AI models?" },
      { id: 8, text: "Is there a scalable and reliable MLOps (Machine Learning Operations) pipeline to manage the lifecycle of Generative AI models?" },
      { id: 9, text: "Are there robust data storage and retrieval systems capable of handling the large volumes of data required for Generative AI?" }
    ]
  },
  {
    id: 3,
    title: "Talent and Capabilities",
    description: "This section evaluates the organization's human capital, skills, and organizational structure to support Generative AI.",
    questions: [
      { id: 1, text: "Does the organization possess or have access to the necessary AI/ML talent (e.g., data scientists, ML engineers, prompt engineers, AI ethicists)?" },
      { id: 2, text: "Are existing teams (e.g., product, marketing, operations) sufficiently trained to understand and collaborate on Generative AI initiatives?" },
      { id: 3, text: "Is the organizational structure conducive to fostering cross-functional collaboration between business units and AI teams?" },
      { id: 4, text: "Are there established roles and career paths for AI professionals within the organization?" },
      { id: 5, text: "Does the organization have a culture that encourages experimentation, continuous learning, and adapts to new technologies like Generative AI?" },
      { id: 6, text: "Are there mechanisms in place for knowledge sharing and best practices exchange related to AI?" }
    ]
  },
  {
    id: 4,
    title: "Ethical AI and Governance",
    description: "This section addresses the crucial aspects of responsible AI development and deployment, including fairness, transparency, and accountability.",
    questions: [
      { id: 1, text: "Has the organization established clear ethical guidelines and principles for the responsible development and deployment of Generative AI?" },
      { id: 2, text: "Are there mechanisms to identify and mitigate biases in Generative AI models and their outputs?" },
      { id: 3, text: "Are efforts being made to ensure transparency regarding the use of Generative AI (e.g., disclosing when content is AI-generated)?" },
      { id: 4, text: "Can the outputs and decisions generated by Generative AI models be explained and understood by relevant stakeholders (e.g., customers, regulators, internal teams)?" },
      { id: 5, text: "Is there a clear framework for accountability when Generative AI models produce undesirable or harmful outputs?" },
      { id: 6, text: "Are there review processes in place to ensure compliance with internal ethical guidelines and external regulations?" }
    ]
  },
  {
    id: 5,
    title: "Technology & Tools",
    description: "This section focuses on the specific technologies, platforms, and tools being considered or currently in use for Generative AI.",
    questions: [
      { id: 1, text: "Has a strategy been developed for selecting and integrating Generative AI platforms (e.g., cloud-based AI services, open-source frameworks, proprietary solutions)?" },
      { id: 2, text: "Are the chosen tools and platforms compatible with existing IT infrastructure and data ecosystems?" },
      { id: 3, text: "Are there systems in place for managing different versions of Generative AI models and tracking their performance?" },
      { id: 4, text: "Can models be easily updated, fine-tuned, and redeployed without significant disruption?" },
      { id: 5, text: "Are there robust monitoring systems to track the performance, drift, and potential failures of deployed Generative AI models in real-time?" },
      { id: 6, text: "Is there a process for quickly addressing and resolving issues that arise with Generative AI models in production?" }
    ]
  },
  {
    id: 6,
    title: "Legal, Compliance, and Risk Management",
    description: "This section addresses the regulatory, legal, and risk aspects associated with Generative AI adoption.",
    questions: [
      { id: 1, text: "Has the organization considered the implications of Generative AI on intellectual property rights, both for input data and generated outputs?" },
      { id: 2, text: "Are there measures to ensure that Generative AI outputs do not infringe on existing copyrights or trademarks?" },
      { id: 3, text: "Is the organization aware of and prepared to comply with emerging regulations specific to AI, including Generative AI (e.g., EU AI Act, industry-specific guidelines)?" },
      { id: 4, text: "Have potential risks related to hallucination, misinformation, or unintended content generation been assessed and planned for?" },
      { id: 5, text: "Has a comprehensive risk assessment been conducted for Generative AI adoption, covering technical, operational, reputational, and financial risks?" },
      { id: 6, text: "Is there a clear understanding of liability for Generative AI-generated content or decisions, especially in critical applications?" }
    ]
  },
  {
    id: 7,
    title: "Change Management and Adoption",
    description: "This section evaluates the organization's ability to manage the human and operational changes brought about by Generative AI.",
    questions: [
      { id: 1, text: "Are all key stakeholders (employees, customers, partners) engaged and informed about the Generative AI initiatives and their potential impact?" },
      { id: 2, text: "Are concerns and resistance to Generative AI adoption being actively addressed and managed?" },
      { id: 3, text: "Is there a comprehensive training and upskilling program for employees whose roles will be impacted or augmented by Generative AI?" },
      { id: 4, text: "Are employees being educated on how to effectively use and interact with Generative AI tools and models?" },
      { id: 5, text: "Is the organization planning or executing pilot programs to test Generative AI solutions in a controlled environment before widespread deployment?" },
      { id: 6, text: "Is there a phased rollout strategy for Generative AI capabilities to allow for iterative learning and adaptation?" }
    ]
  },
  {
    id: 8,
    title: "Measurement and Optimization",
    description: "This section focuses on how the organization will measure the success of Generative AI initiatives and continuously optimize their performance.",
    questions: [
      { id: 1, text: "Have clear and measurable KPIs been established to track the success and impact of Generative AI initiatives?" },
      { id: 2, text: "Are these KPIs aligned with the initial business objectives and expected value of Generative AI?" },
      { id: 3, text: "Are there effective feedback mechanisms in place to collect input from users and stakeholders on Generative AI outputs and performance?" },
      { id: 4, text: "Is there a structured process for using this feedback to continuously improve Generative AI models and applications?" },
      { id: 5, text: "Is there a plan to consistently measure the Return on Investment (ROI) of Generative AI initiatives?" },
      { id: 6, text: "Does the organization have a process to capture and communicate the achieved business value from Generative AI deployments?" }
    ]
  }
];

const Assessment = () => {
  const { toast } = useToast();
  const root = useRef<HTMLDivElement>(null);
  const top = useRef<HTMLDivElement>(null);
  const [sections, setSections] = useState<Section[]>(INITIAL_SECTIONS);
  const [current, setCurrent] = useState(0);
  const [openNotes, setOpenNotes] = useState<Record<string, boolean>>({});
  const [showReport, setShowReport] = useState(false);
  const [downloading, setDownloading] = useState(false);
  useScrollMotion(root);

  const totalQuestions = sections.reduce((acc, s) => acc + s.questions.length, 0);
  const answeredCount = sections.reduce((acc, s) => acc + s.questions.filter((q) => q.answer).length, 0);
  const overall = Math.round((answeredCount / totalQuestions) * 100);
  const answeredIn = (s: Section) => s.questions.filter((q) => q.answer).length;

  const scrollToTop = () => top.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  const updateQuestion = (sectionId: number, questionId: number, patch: Partial<Question>) => {
    setSections((prev) =>
      prev.map((section) =>
        section.id === sectionId
          ? { ...section, questions: section.questions.map((q) => (q.id === questionId ? { ...q, ...patch } : q)) }
          : section
      )
    );
  };

  const goTo = (i: number) => {
    setCurrent(i);
    setShowReport(false);
    scrollToTop();
  };

  const handleGenerateReport = () => {
    if (answeredCount === 0) {
      toast({
        title: "No answers yet",
        description: "Answer at least a few questions to generate your readiness report.",
        variant: "destructive",
      });
      return;
    }
    setShowReport(true);
    scrollToTop();
  };

  const handleDownloadReport = async (organization: string) => {
    if (answeredCount === 0) {
      toast({
        title: "No answers yet",
        description: "Answer at least a few questions before downloading the report.",
        variant: "destructive",
      });
      return;
    }

    setDownloading(true);
    try {
      // Loaded on demand so the PDF engine never weighs down the page itself.
      const [{ pdf }, { ReadinessPdf }] = await Promise.all([
        import("@react-pdf/renderer"),
        import("@/components/assessment/ReadinessPdf"),
      ]);
      const blob = await pdf(<ReadinessPdf sections={sections} organization={organization} />).toBlob();

      const slug = organization.trim().replace(/[^a-z0-9]+/gi, "-").replace(/(^-|-$)/g, "");
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `AI-Readiness-Report${slug ? `-${slug}` : ""}-${new Date().toISOString().split("T")[0]}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      toast({ title: "Report downloaded", description: "Your PDF readiness report has been saved." });
    } catch (error) {
      console.error("PDF generation failed:", error);
      toast({
        title: "Couldn't create the PDF",
        description: "Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setDownloading(false);
    }
  };

  const section = sections[current];
  const isLast = current === sections.length - 1;

  return (
    <div ref={root} data-motion className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="container mx-auto px-6 pt-40 pb-16 lg:pt-48">
          <p data-scramble className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
            Resources · AI readiness assessment
          </p>
          <h1
            data-split="load"
            className="mt-8 max-w-5xl text-balance text-5xl font-medium leading-[1.02] tracking-[-0.03em] md:text-7xl"
          >
            How ready is your organization for Generative AI?
          </h1>
          <p data-reveal="0.4" className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Evaluate your readiness across 8 critical dimensions. Answer what you can — you'll get a scored
            report with strengths, priority gaps and a remediation roadmap.
          </p>
          <div data-line className="mt-16 h-px bg-border" />
          <dl className="grid grid-cols-3">
            {[
              ["Dimensions", String(sections.length)],
              ["Questions", String(totalQuestions)],
              ["Your data", "Stays in your browser"],
            ].map(([k, v]) => (
              <div key={k} className="py-5 pr-4">
                <dt className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">{k}</dt>
                <dd className="mt-2 text-sm">{v}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="border-t border-border">
          <div ref={top} className="container mx-auto grid scroll-mt-20 gap-12 px-6 py-16 lg:grid-cols-12 lg:py-24">
            {/* Sidebar */}
            <aside className="min-w-0 lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <div className="flex items-baseline justify-between">
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">Progress</p>
                  <p className="font-mono text-sm">
                    {answeredCount}/{totalQuestions}
                  </p>
                </div>
                <div className="mt-3 h-1 overflow-hidden rounded-full bg-muted">
                  <div className="h-full rounded-full bg-primary transition-all duration-500" style={{ width: `${overall}%` }} />
                </div>

                <ol className="mt-8 hidden border-t border-border lg:block">
                  {sections.map((s, i) => {
                    const done = answeredIn(s);
                    const active = !showReport && i === current;
                    return (
                      <li key={s.id} className="border-b border-border">
                        <button
                          type="button"
                          onClick={() => goTo(i)}
                          className={`flex w-full items-center gap-4 py-3.5 text-left text-sm transition-colors ${
                            active ? "text-foreground" : "text-foreground/60 hover:text-foreground"
                          }`}
                        >
                          <span className="font-mono text-xs text-muted-foreground">{String(s.id).padStart(2, "0")}</span>
                          <span className={`flex-1 ${active ? "font-medium" : ""}`}>{s.title}</span>
                          {done === s.questions.length ? (
                            <Check className="h-4 w-4 text-primary" />
                          ) : (
                            <span className="font-mono text-xs text-muted-foreground">
                              {done}/{s.questions.length}
                            </span>
                          )}
                        </button>
                      </li>
                    );
                  })}
                </ol>

                {/* Mobile section picker */}
                <div className="-mx-6 mt-6 flex gap-2 overflow-x-auto px-6 [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden">
                  {sections.map((s, i) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => goTo(i)}
                      className={`shrink-0 rounded-full border px-3.5 py-1.5 text-sm ${
                        !showReport && i === current ? "border-foreground bg-foreground text-background" : "border-border"
                      }`}
                    >
                      {String(s.id).padStart(2, "0")} · {answeredIn(s)}/{s.questions.length}
                    </button>
                  ))}
                </div>

                <Button onClick={handleGenerateReport} size="lg" className="mt-8 w-full">
                  <FileText className="h-4 w-4" /> {showReport ? "Refresh report" : "Generate report"}
                </Button>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  You can generate it at any point — unanswered items are shown as open.
                </p>
              </div>
            </aside>

            {/* Main panel */}
            <div className="min-w-0 lg:col-span-8">
              {showReport ? (
                <ReadinessReport
                  sections={sections}
                  onDownload={handleDownloadReport}
                  downloading={downloading}
                  onReset={() => {
                    setShowReport(false);
                    scrollToTop();
                  }}
                />
              ) : (
                <div key={section.id} className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-primary">
                    Dimension {section.id} of {sections.length}
                  </p>
                  <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">{section.title}</h2>
                  <p className="mt-3 max-w-2xl text-muted-foreground">{section.description}</p>

                  <ol className="mt-10 border-t border-border">
                    {section.questions.map((q) => {
                      const key = `${section.id}-${q.id}`;
                      const notesOpen = openNotes[key] || !!q.details;
                      return (
                        <li key={q.id} className="border-b border-border py-6">
                          <div className="flex gap-4">
                            <span className="pt-0.5 font-mono text-xs text-muted-foreground">
                              {String(q.id).padStart(2, "0")}
                            </span>
                            <div className="flex-1">
                              <p className="leading-relaxed">{q.text}</p>
                              <div className="mt-4 flex flex-wrap items-center gap-2" role="radiogroup" aria-label={`Answer question ${q.id}`}>
                                {(["yes", "no"] as const).map((value) => {
                                  const selected = q.answer === value;
                                  return (
                                    <button
                                      key={value}
                                      type="button"
                                      role="radio"
                                      aria-checked={selected}
                                      onClick={() => updateQuestion(section.id, q.id, { answer: value })}
                                      className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm transition-colors ${
                                        selected
                                          ? value === "yes"
                                            ? "border-foreground bg-foreground text-background"
                                            : "border-primary bg-primary text-primary-foreground"
                                          : "border-border hover:border-foreground/40"
                                      }`}
                                    >
                                      {selected && (value === "yes" ? <Check className="h-3.5 w-3.5" /> : <X className="h-3.5 w-3.5" />)}
                                      {value === "yes" ? "Yes" : "No"}
                                    </button>
                                  );
                                })}
                                {!notesOpen && (
                                  <button
                                    type="button"
                                    onClick={() => setOpenNotes((o) => ({ ...o, [key]: true }))}
                                    className="ml-1 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
                                  >
                                    <Plus className="h-3.5 w-3.5" /> Add evidence
                                  </button>
                                )}
                              </div>
                              {notesOpen && (
                                <Textarea
                                  aria-label={`Details or evidence for question ${q.id}`}
                                  placeholder="Details, evidence, or context for your answer…"
                                  value={q.details || ""}
                                  onChange={(e) => updateQuestion(section.id, q.id, { details: e.target.value })}
                                  className="mt-4 min-h-[80px] resize-none"
                                  autoFocus={openNotes[key] && !q.details}
                                />
                              )}
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ol>

                  <div className="mt-10 flex items-center justify-between gap-4">
                    <Button variant="ghost" disabled={current === 0} onClick={() => goTo(current - 1)}>
                      <ArrowLeft className="h-4 w-4" /> Previous
                    </Button>
                    {isLast ? (
                      <Button size="lg" onClick={handleGenerateReport}>
                        See my report <ArrowRight className="h-4 w-4" />
                      </Button>
                    ) : (
                      <Button size="lg" onClick={() => goTo(current + 1)}>
                        <span className="hidden sm:inline">Next: {sections[current + 1].title}</span>
                        <span className="sm:hidden">Next dimension</span>
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    )}
                  </div>

                  <p className="mt-10 border-t border-border pt-6 text-sm text-muted-foreground">
                    A "No" to any critical question indicates an area that needs attention before fully
                    embarking on Generative AI adoption.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Assessment;

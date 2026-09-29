import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FeatureSection } from "@/components/FeatureSection";
import { useScrollMotion } from "@/hooks/use-scroll-motion";
import { Server, Database, Network, Container, ArrowRight, ShieldCheck } from "lucide-react";

const deepDiveAreas = [
  {
    icon: Server,
    number: "1",
    title: "Infrastructure & OS Hardening",
    subtitle: "Windows & Linux",
    description:
      "Your operating systems are the bedrock of your platform. We audit for stability and security.",
    points: [
      {
        label: "Kernel & Patch Management",
        detail:
          "Ensuring OS-level vulnerabilities are mitigated without breaking dependencies.",
      },
      {
        label: "Performance Tuning",
        detail:
          "Optimization of IOPS, memory allocation, and CPU scheduling for high-demand workloads.",
      },
    ],
  },
  {
    icon: Database,
    number: "2",
    title: "Database & Data Integrity",
    subtitle: "Oracle",
    description:
      "Specialized health checks for one of the world's most robust database platforms.",
    points: [
      {
        label: "SGA/PGA Optimization",
        detail: "Fine-tuning memory structures to eliminate bottlenecks.",
      },
      {
        label: "RMAN & Disaster Recovery",
        detail:
          "Verifying that your backup and recovery strategies meet your RPO/RTO targets.",
      },
      {
        label: "SQL Performance",
        detail:
          "Identifying \"expensive\" queries that are draining system resources.",
      },
    ],
  },
  {
    icon: Network,
    number: "3",
    title: "Middleware & Messaging",
    subtitle: "MQ & Application Servers",
    description:
      "We evaluate the \"nervous system\" of your enterprise to ensure seamless data flow.",
    points: [
      {
        label: "MQ Queue Management",
        detail:
          "Analyzing depth, persistence, and throughput to prevent message loss or latency.",
      },
      {
        label: "Middleware Stability",
        detail:
          "Health checks for WebLogic, JBoss, or IIS to ensure high availability and thread-pool efficiency.",
      },
    ],
  },
  {
    icon: Container,
    number: "4",
    title: "Modernization & Orchestration",
    subtitle: "Docker & Kubernetes",
    description:
      "For teams moving toward or already on the cloud-native path, we ensure your containers are production-ready.",
    points: [
      {
        label: "K8s Cluster Health",
        detail:
          "Evaluating node stability, pod autoscaling (HPA/VPA), and ingress controllers.",
      },
      {
        label: "Container Security",
        detail:
          "Scanning images for vulnerabilities and ensuring \"Least Privilege\" runtime configurations.",
      },
      {
        label: "Resource Efficiency",
        detail:
          "Identifying \"noisy neighbors\" and optimizing resource requests/limits to lower cloud costs.",
      },
    ],
  },
];

const benchmarks = [
  {
    label: "CIS Benchmarks",
    detail:
      "We audit your Windows and Linux configurations against Center for Internet Security (CIS) standards.",
  },
  {
    label: "Oracle MAA",
    detail:
      "Benchmarking your database against gold-standard Maximum Availability Architecture redundancy patterns.",
  },
  {
    label: "CNCF Standards",
    detail:
      "Ensuring your Kubernetes environment follows the latest community-vetted patterns for security and portability.",
  },
  {
    label: "ITIL & DevOps Integration",
    detail:
      "Aligning your middleware and MQ workflows with ITIL service management and automated CI/CD best practices.",
  },
];

const stackLayers = [
  { layer: "Compute", specialization: "Windows / Linux", focus: "Patching, Performance, Hardening", maturity: "Audit Ready" },
  { layer: "Data", specialization: "Oracle", focus: "Latency, Scalability, Backup", maturity: "Optimized" },
  { layer: "Integration", specialization: "Middleware / MQ", focus: "Throughput, Connectivity, Logic", maturity: "Modernizing" },
  { layer: "Cloud Native", specialization: "Docker / K8s", focus: "Orchestration, Security, Density", maturity: "Best Practice" },
];

const phases = [
  {
    number: "01",
    title: "Kick-off & Initiation",
    duration: "1–2 Weeks",
    description: "We begin by aligning with your stakeholders to define the scope and critical success factors.",
    points: [
      "Stakeholder Interviews: Understanding business pain points and performance goals.",
      "Access & Governance: Establishing secure, read-only access to your environments.",
      "Inventory Baseline: Finalizing the list of Platforms, Subsystems, and Applications to be audited.",
    ],
  },
  {
    number: "02",
    title: "Structured Data Gathering",
    duration: "3–5 Weeks",
    description: "We leverage proprietary Structured Runbooks to collect deep-tier telemetry, ensuring data consistency across diverse technologies.",
    points: [
      "Automated Collection: Running non-intrusive scripts to gather configuration and performance metadata.",
      "Runbook Execution: Systematically documenting current states against our internal \"Gold Standard\" benchmarks.",
      "Security Scans: Initial vulnerability and patch-level discovery at the OS and Container levels.",
    ],
  },
  {
    number: "03",
    title: "The Technical Deep Dive",
    duration: "3–7 Weeks",
    description: "Our specialists analyze the \"why\" behind the data, correlating information across your entire stack.",
    points: [
      "Middleware & MQ Analysis: Investigating message persistence, latency spikes, and integration bottlenecks.",
      "Database Forensics: Deep-diving into Oracle AWR reports and execution plans.",
      "Orchestration Audit: Reviewing Kubernetes cluster health, networking (CNI), and resource contention.",
      "Gap Analysis: Comparing your current \"As-Is\" state against industry best practices.",
    ],
  },
  {
    number: "04",
    title: "Strategic Reporting & Roadmap",
    duration: "1–2 Weeks",
    description: "We translate technical findings into actionable business intelligence.",
    points: [
      "Draft Review: A technical walkthrough with your engineering leads to validate findings.",
      "Executive Presentation: A high-level briefing for leadership on risks, ROI, and modernization paths.",
      "Final Deliverable: A comprehensive report including the Maturity Matrix and a prioritized 12-month remediation roadmap.",
    ],
  },
];

const scopeLevels = [
  { scope: "Standard", technologies: "OS + Database (Oracle)", duration: "8 Weeks" },
  { scope: "Advanced", technologies: "OS + DB + Middleware/MQ", duration: "10–12 Weeks" },
  { scope: "Enterprise", technologies: "Full Stack (Inc. Docker/K8s)", duration: "14–16 Weeks" },
];

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">{children}</p>
);

/** Vertical phase timeline whose rail fills in as you scroll through it. */
const JourneyTimeline = () => {
  const list = useRef<HTMLOListElement>(null);
  const rail = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!list.current || !rail.current) return;
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        rail.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: { trigger: list.current, start: "top 60%", end: "bottom 60%", scrub: true },
        }
      );
    });
    return () => mm.revert();
  }, []);

  return (
    <ol ref={list} className="relative">
      <div aria-hidden="true" className="absolute bottom-0 left-[7px] top-2 w-px bg-border md:left-[calc(25%+7px)]" />
      <div
        ref={rail}
        aria-hidden="true"
        className="absolute bottom-0 left-[7px] top-2 w-px origin-top bg-primary md:left-[calc(25%+7px)]"
      />
      {phases.map((phase) => (
        <li key={phase.number} data-reveal className="relative grid gap-4 pb-16 last:pb-0 md:grid-cols-4 md:gap-10">
          <div className="pl-10 md:pl-0 md:text-right">
            <p className="text-5xl font-medium tracking-tight text-foreground/20 md:text-6xl">{phase.number}</p>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.12em] text-primary">{phase.duration}</p>
          </div>
          <span
            aria-hidden="true"
            className="absolute left-0 top-2 h-3.5 w-3.5 rounded-full border-2 border-primary bg-background md:left-[25%]"
          />
          <div className="pl-10 md:col-span-3 md:pl-12">
            <h3 className="text-2xl font-medium tracking-tight">{phase.title}</h3>
            <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{phase.description}</p>
            <ul className="mt-6 max-w-2xl border-t border-border">
              {phase.points.map((point) => {
                const [label, ...rest] = point.split(": ");
                return (
                  <li key={point} className="grid gap-1 border-b border-border py-3 text-sm md:grid-cols-3 md:gap-6">
                    <span className="font-medium">{rest.length ? label : ""}</span>
                    <span className="text-muted-foreground md:col-span-2">{rest.length ? rest.join(": ") : label}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
};

const TechHealthAssessment = () => {
  const root = useRef<HTMLDivElement>(null);
  useScrollMotion(root);

  return (
    <div ref={root} data-motion className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="container mx-auto px-6 pt-40 pb-24 lg:pt-48">
          <p data-scramble className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
            Enterprise services · Tech health assessment
          </p>
          <h1
            data-split="load"
            className="mt-8 max-w-5xl text-balance text-5xl font-medium leading-[1.02] tracking-[-0.03em] md:text-7xl"
          >
            Enterprise technology health assessments.
          </h1>
          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p data-reveal="0.4" className="text-xl font-medium tracking-tight md:text-2xl">
                Bridging the gap between legacy reliability and cloud-native agility.
              </p>
              <p data-reveal="0.5" className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Is your technology stack a foundation for growth or a bottleneck for innovation? Our specialized
                team conducts deep-tier health assessments across your entire ecosystem — from the OS kernel to the
                container orchestration layer — so your architecture, applications, subsystems, middleware,
                platform and hosting are optimized, secure to industry standards and ready for the future.
              </p>
            </div>
            <div data-reveal="0.6" className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
              <Button asChild size="lg">
                <Link to="/book-demo">
                  Request an assessment <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Contact our team</Link>
              </Button>
            </div>
          </div>

          {/* At a glance */}
          <div data-line className="mt-20 h-px bg-border" />
          <dl className="grid grid-cols-2 md:grid-cols-4">
            {[
              ["Duration", "8–16 weeks"],
              ["Layers", "Compute · Data · Integration · Cloud native"],
              ["Access", "Secure, read-only"],
              ["Deliverable", "12-month roadmap"],
            ].map(([k, v]) => (
              <div key={k} className="border-b border-border py-5 pr-4 md:border-b-0">
                <dt className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">{k}</dt>
                <dd className="mt-2 text-sm">{v}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Deep-dive areas */}
        <section className="border-t border-border">
          <div className="container mx-auto grid gap-12 px-6 py-24 lg:grid-cols-12 lg:py-32">
            <div className="lg:sticky lg:top-32 lg:col-span-4 lg:self-start">
              <Eyebrow>Deep-dive areas</Eyebrow>
              <h2 data-split className="mt-6 text-balance text-3xl font-medium leading-tight tracking-[-0.02em] md:text-5xl">
                We don't just look at the surface.
              </h2>
              <p data-reveal className="mt-5 max-w-md text-lg text-muted-foreground">
                We assess the specific technologies that power your mission-critical operations.
              </p>
            </div>
            <ol className="lg:col-span-7 lg:col-start-6">
              {deepDiveAreas.map((area, i) => (
                <li key={area.title} data-reveal>
                  <div data-line className="h-px bg-border" />
                  <div className="py-8">
                    <div className="flex items-start gap-4">
                      <span className="pt-1.5 font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                          <h3 className="flex items-center gap-2.5 text-xl font-medium tracking-tight">
                            <area.icon className="h-4 w-4 text-primary" />
                            {area.title}
                          </h3>
                          <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                            {area.subtitle}
                          </span>
                        </div>
                        <p className="mt-3 leading-relaxed text-muted-foreground">{area.description}</p>
                        <ul className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                          {area.points.map((point) => (
                            <li key={point.label} className="border-l border-primary/40 pl-4">
                              <p className="text-sm font-medium">{point.label}</p>
                              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{point.detail}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
              <li aria-hidden="true" data-line className="h-px bg-border" />
            </ol>
          </div>
        </section>

        <FeatureSection
          eyebrow="Benchmarks"
          title="Measured against industry-leading frameworks."
          items={benchmarks.map((b) => ({ title: b.label, description: b.detail, icon: ShieldCheck }))}
          layout="columns"
          muted
        />

        {/* Scorecard */}
        <section className="border-t border-border">
          <div className="container mx-auto px-6 py-24 lg:py-32">
            <Eyebrow>Integrated stack scorecard</Eyebrow>
            <h2 data-split className="mt-6 max-w-3xl text-balance text-3xl font-medium leading-tight tracking-[-0.02em] md:text-5xl">
              How your technology layers interact.
            </h2>
            <div data-reveal className="mt-14 overflow-x-auto">
              <table className="w-full min-w-[640px] text-left">
                <thead>
                  <tr className="border-b border-foreground/80">
                    {["Layer", "Specialization", "Focus area", "Maturity level"].map((h) => (
                      <th key={h} className="pb-4 pr-6 font-mono text-xs font-normal uppercase tracking-[0.12em] text-muted-foreground">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {stackLayers.map((row) => (
                    <tr key={row.layer} className="border-b border-border transition-colors hover:bg-muted/40">
                      <td className="py-5 pr-6 text-lg font-medium tracking-tight">{row.layer}</td>
                      <td className="py-5 pr-6">{row.specialization}</td>
                      <td className="py-5 pr-6 text-muted-foreground">{row.focus}</td>
                      <td className="py-5">
                        <span className="font-mono text-xs uppercase tracking-[0.12em] text-primary">{row.maturity}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Journey */}
        <section className="border-t border-border bg-muted/40">
          <div className="container mx-auto px-6 py-24 lg:py-32">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <Eyebrow>Assessment journey</Eyebrow>
                <h2 data-split className="mt-6 text-balance text-3xl font-medium leading-tight tracking-[-0.02em] md:text-5xl">
                  From kick-off to strategy.
                </h2>
              </div>
              <p data-reveal className="max-w-md text-muted-foreground lg:col-span-4 lg:col-start-9">
                Engagements typically span <span className="text-foreground">8 to 16 weeks</span>, depending on
                the complexity of your environment.
              </p>
            </div>
            <div className="mt-20">
              <JourneyTimeline />
            </div>
          </div>
        </section>

        {/* Scope levels */}
        <section className="border-t border-border">
          <div className="container mx-auto px-6 py-24 lg:py-32">
            <Eyebrow>Engagement scope</Eyebrow>
            <h2 data-split className="mt-6 max-w-3xl text-balance text-3xl font-medium leading-tight tracking-[-0.02em] md:text-5xl">
              Tailored to the breadth of your footprint.
            </h2>
            <div className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-3">
              {scopeLevels.map((level, i) => (
                <div key={level.scope} data-reveal>
                  <div data-line className="h-px bg-foreground/80" />
                  <div className="mt-6 flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">{level.scope}</span>
                    <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <p className="mt-5 text-4xl font-medium tracking-tight md:text-5xl">{level.duration}</p>
                  <p className="mt-3 text-muted-foreground">{level.technologies}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-foreground text-background">
          <div className="container mx-auto grid gap-10 px-6 py-24 lg:grid-cols-12 lg:items-end lg:py-32">
            <div className="lg:col-span-8">
              <h2 data-split className="text-balance text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl">
                Ready to assess your technology health?
              </h2>
              <p data-reveal className="mt-6 max-w-xl text-lg opacity-70">
                Get a comprehensive view of your stack's maturity, risks, and a clear 12-month remediation roadmap.
              </p>
            </div>
            <div data-reveal className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:justify-end">
              <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
                <Link to="/book-demo">
                  Schedule an assessment <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-background/30 bg-transparent text-background hover:bg-background/10"
              >
                <Link to="/contact">Contact sales</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TechHealthAssessment;

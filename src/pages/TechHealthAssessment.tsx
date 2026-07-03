import { Navbar } from "@/components/Navbar";
import bgAsset from "@/assets/tech-health-bg.jpg.asset.json";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Server,
  Database,
  Network,
  Container,
  ArrowRight,
  CheckCircle,
  ShieldCheck,
  ClipboardList,
  BarChart3,
  Layers,
} from "lucide-react";

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

const TechHealthAssessment = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl space-y-6 animate-slide-in">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-primary/10 rounded-2xl">
                <ShieldCheck className="h-12 w-12 text-primary" />
              </div>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                Enterprise Services
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Enterprise Technology{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Health Assessments
              </span>
            </h1>

            <p className="text-2xl font-semibold text-muted-foreground">
              Bridging the Gap Between Legacy Reliability and Cloud-Native Agility.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Is your technology stack a foundation for growth or a bottleneck for innovation? Our specialized team conducts deep-tier Health Assessments across your entire ecosystem—from the OS kernel to the container orchestration layer. We ensure your Architecture, Application, Sybsystems & Middleware environments, Platform and Hosting are optimized, secure to the industry standards and ready for the future.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/book-demo">
                <Button variant="hero" size="lg" className="group">
                  Request an Assessment
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Contact Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Deep-Dive Areas */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Technical Deep-Dive Areas
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We don't just look at the surface. We assess the specific technologies that power your mission-critical operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {deepDiveAreas.map((area, index) => (
              <Card
                key={index}
                className="p-8 bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary group"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors shrink-0">
                    <area.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary/20 leading-none mb-1">{area.number}</div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {area.title}
                    </h3>
                    <span className="text-sm text-primary font-medium">{area.subtitle}</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{area.description}</p>
                <div className="space-y-3 pt-4 border-t border-border">
                  {area.points.map((point, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">{point.label}:</span>{" "}
                        {point.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benchmark Alignment */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Benchmark & Best Practice Alignment
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our assessment measures your specific stack against industry-leading frameworks.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benchmarks.map((b, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-background rounded-xl border border-border">
                <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{b.label}</h4>
                  <p className="text-sm text-muted-foreground">{b.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated Stack Scorecard */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              The "Integrated Stack" Scorecard
            </h2>
            <p className="text-xl text-muted-foreground">
              A clear visualization of how your different technology layers interact.
            </p>
          </div>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full">
              <thead>
                <tr className="bg-muted/50 border-b border-border">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Layer</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Specialization</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Focus Area</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Maturity Level</th>
                </tr>
              </thead>
              <tbody>
                {stackLayers.map((row, i) => (
                  <tr key={i} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4 font-semibold text-foreground">{row.layer}</td>
                    <td className="px-6 py-4 text-primary font-medium">{row.specialization}</td>
                    <td className="px-6 py-4 text-muted-foreground">{row.focus}</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                        {row.maturity}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Assessment Journey / Phases */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Assessment Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From Kick-off to Strategy. Engagements typically span <span className="text-primary font-semibold">8 to 16 weeks</span> depending on the complexity of your environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {phases.map((phase, index) => (
              <Card key={index} className="p-8 bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-5xl font-bold text-primary/20">{phase.number}</div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {phase.title}
                    </h3>
                    <span className="text-sm text-primary font-semibold">Duration: {phase.duration}</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">{phase.description}</p>
                <div className="space-y-2 pt-4 border-t border-border">
                  {phase.points.map((point, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">{point}</p>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Timeline */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Engagement Timeline at a Glance
            </h2>
            <p className="text-xl text-muted-foreground">
              The duration is tailored to the breadth of your technology footprint.
            </p>
          </div>
          <div className="overflow-x-auto rounded-xl border border-border max-w-3xl mx-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-muted/50 border-b border-border">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Scope Level</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Technologies Assessed</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Estimated Duration</th>
                </tr>
              </thead>
              <tbody>
                {scopeLevels.map((row, i) => (
                  <tr key={i} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                        {row.scope}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{row.technologies}</td>
                    <td className="px-6 py-4 font-semibold text-foreground">{row.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Assess Your Technology Health?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a comprehensive view of your stack's maturity, risks, and a clear 12-month remediation roadmap.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/book-demo">
              <Button variant="hero" size="lg">
                Schedule an Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TechHealthAssessment;

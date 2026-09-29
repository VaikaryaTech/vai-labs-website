import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductShowcase } from "@/components/ProductShowcase";
import { FeatureSection } from "@/components/FeatureSection";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  GitBranch, 
  Star, 
  FlaskConical, 
  Gamepad2, 
  Link2, 
  Cloud, 
  ArrowRight,
  Zap,
  Shield,
  Layers,
  FileText
} from "lucide-react";
import { Link } from "react-router-dom";
import observabilityBg from "@/assets/observability-hero-background.webp";
import deployCloud from "@/assets/deploy-cloud.webp";
import deployKubernetes from "@/assets/deploy-kubernetes.webp";
import deployAirgapped from "@/assets/deploy-airgapped.webp";
import { KognixWordmark } from "@/components/KognixWordmark";

const Observability = () => {
  const coreCapabilities = [
    {
      icon: Search,
      title: "LLM Observability",
      description: "Full trace visibility for every LLM call, retrieval step, and agent action"
    },
    {
      icon: GitBranch,
      title: "Prompt Versioning",
      description: "Centralized version control with collaborative iteration and caching"
    },
    {
      icon: Star,
      title: "Evaluations",
      description: "LLM-as-a-judge, user feedback, manual labeling, and custom pipelines"
    },
    {
      icon: FlaskConical,
      title: "Datasets",
      description: "Create benchmarks for pre-deployment testing and continuous improvement"
    },
    {
      icon: Gamepad2,
      title: "LLM Playground",
      description: "Test and iterate on prompts directly from trace results"
    },
    {
      icon: Link2,
      title: "Integrations",
      description: "OpenAI SDK, LangChain, LlamaIndex, LiteLLM, OpenTelemetry"
    }
  ];

  const deploymentOptions = [
    {
      icon: Cloud,
      image: deployCloud,
      title: "Cloud Managed",
      description: "Zero infrastructure management with enterprise-grade reliability",
      tag: "Fastest Setup"
    },
    {
      icon: Layers,
      image: deployKubernetes,
      title: "Docker / Kubernetes",
      description: "Self-host with Docker Compose or Helm charts for full control",
      tag: "Most Popular"
    },
    {
      icon: Shield,
      image: deployAirgapped,
      title: "Air-Gapped",
      description: "Complete isolation for regulated industries and sensitive data",
      tag: "Maximum Security"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={observabilityBg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        </div>

        <div className="container relative z-10 mx-auto px-6 pt-24">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
              Enterprise LLM analytics
            </p>
            <h1 className="mt-6 text-5xl font-medium leading-[1.02] tracking-[-0.03em] md:text-7xl">
              <KognixWordmark size="hero" /> <span className="text-glow-cyan">Analytics</span>
            </h1>
            <p className="mt-6 text-2xl font-medium tracking-tight md:text-3xl">Complete LLM observability.</p>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Monitor, debug, and optimize your AI applications with enterprise-grade tracing — track latency
              of LLM calls and full traces, token usage and associated costs, error rates and system performance.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="group">
                <Link to="/book-demo">
                  Schedule demo
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">Contact sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics strip */}
      <section className="border-t border-border">
        <dl className="container mx-auto grid grid-cols-2 px-6 md:grid-cols-4">
          {[
            { value: "10x", label: "Faster debugging" },
            { value: "99.9%", label: "Trace coverage" },
            { value: "50%", label: "Reduced latency" },
            { value: "24/7", label: "Real-time monitoring" },
          ].map((metric, i) => (
            <div
              key={metric.label}
              className={`border-border py-10 ${i % 2 === 1 ? "border-l pl-6" : ""} ${i > 1 ? "border-t md:border-t-0" : ""} ${i > 0 ? "md:border-l md:pl-8" : ""}`}
            >
              <dd className="text-4xl font-medium tracking-tight md:text-5xl">{metric.value}</dd>
              <dt className="mt-2 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">{metric.label}</dt>
            </div>
          ))}
        </dl>
      </section>

      <FeatureSection
        eyebrow="Capabilities"
        title="Build, monitor and optimize production LLM apps."
        subtitle="Everything you need to see what your AI is doing — and make it better."
        items={coreCapabilities}
        layout="rows"
      />

      <ProductShowcase
        set="analytics"
        title="See KOGNIX Analytics in action"
        subtitle="Full-stack LLM observability — from individual trace inspection to enterprise-wide usage analytics."
      />

      <FeatureSection
        eyebrow="How it works"
        title={
          <>
            How <KognixWordmark size="hero" /> <span className="text-glow-cyan">Analytics</span> works
          </>
        }
        items={[
          { title: "Instrument", description: "Add our SDK to your LLM application with a single line of code." },
          { title: "Trace", description: "Automatically capture every interaction, retrieval, and agent action." },
          { title: "Analyze", description: "Identify bottlenecks, failures, and optimization opportunities." },
          { title: "Optimize", description: "Iterate on prompts and configurations with real-time feedback." },
        ]}
        layout="steps"
        muted
      />

      {/* Integrations */}
      <section className="border-t border-border">
        <div className="container mx-auto grid gap-12 px-6 py-24 lg:grid-cols-12 lg:py-32">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">Integrations</p>
            <h2 className="mt-6 text-balance text-3xl font-medium leading-tight tracking-[-0.02em] md:text-5xl">
              Works with the stack you already have.
            </h2>
            <p className="mt-5 max-w-md text-lg text-muted-foreground">
              Drop-in replacements and native SDKs for your existing tools. Get started in minutes, not days.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["OpenAI", "LangChain", "LlamaIndex", "OpenTelemetry", "LiteLLM"].map((name) => (
                <span key={name} className="rounded-full border border-border px-3.5 py-1.5 font-mono text-xs">
                  {name}
                </span>
              ))}
            </div>
          </div>
          <ul className="lg:col-span-6 lg:col-start-7">
            {[
              ["OpenAI SDK", "Direct replacement with zero code changes"],
              ["LangChain & LlamaIndex", "Native callbacks and integrations"],
              ["OpenTelemetry", "Industry-standard observability protocol"],
              ["LiteLLM", "Universal LLM gateway support"],
            ].map(([name, desc]) => (
              <li key={name} className="grid gap-1 border-t border-border py-5 last:border-b md:grid-cols-12 md:gap-6">
                <span className="flex items-center gap-3 text-lg font-medium tracking-tight md:col-span-5">
                  <Zap className="h-4 w-4 shrink-0 text-primary" /> {name}
                </span>
                <span className="pl-7 text-muted-foreground md:col-span-7 md:pl-0">{desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Deployment */}
      <section className="border-t border-border bg-muted/40">
        <div className="container mx-auto px-6 py-24 lg:py-32">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">Deployment</p>
          <h2 className="mt-6 max-w-3xl text-balance text-3xl font-medium leading-tight tracking-[-0.02em] md:text-5xl">
            Deploy your way.
          </h2>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Cloud-managed or self-hosted — choose the deployment that fits your security and compliance requirements.
          </p>
          <div className="mt-16 grid gap-x-10 gap-y-14 md:grid-cols-3">
            {deploymentOptions.map((option) => (
              <div key={option.title} className="group">
                <div className="aspect-[4/3] overflow-hidden rounded-xl bg-background">
                  <img
                    src={option.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-6 h-px bg-foreground/80" />
                <div className="mt-5 flex items-center justify-between gap-4">
                  <h3 className="flex items-center gap-2.5 text-xl font-medium tracking-tight">
                    <option.icon className="h-4 w-4 text-primary" />
                    {option.title}
                  </h3>
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-primary">{option.tag}</span>
                </div>
                <p className="mt-3 leading-relaxed text-muted-foreground">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-foreground text-background">
        <div className="container mx-auto grid gap-10 px-6 py-24 lg:grid-cols-12 lg:items-end lg:py-32">
          <div className="lg:col-span-8">
            <h2 className="text-balance text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl">
              Ready to transform your LLM operations?
            </h2>
            <p className="mt-6 max-w-xl text-lg opacity-70">
              See how enterprises use Analytics to build reliable, high-performance AI applications — and get
              the product brief with technical specifications and architecture diagrams.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:justify-end">
            <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/book-demo">
                Schedule a demo <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-background/30 bg-transparent text-background hover:bg-background/10">
              <Link to="/contact">
                <FileText className="h-4 w-4" /> Request brief
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Observability;

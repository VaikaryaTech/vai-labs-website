import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

import { 
  ArrowRight,
  Palette,
  Settings,
  BookOpen,
  Wrench,
  Code,
  BarChart3,
  Link2,
  FileText,
  Cloud,
  Server,
  Shield,
  Atom,
  Network,
  Globe,
  Search
} from "lucide-react";
import { Link } from "react-router-dom";
import bgDeveloper from "@/assets/bg-developer.webp";
import { StudioIntegrationsMarquee } from "@/components/kaie/StudioIntegrationsMarquee";
import { ProductShowcase } from "@/components/ProductShowcase";
import { FeatureSection } from "@/components/FeatureSection";
import { KognixWordmark } from "@/components/KognixWordmark";

const KognixAIStudio = () => {
  const coreCapabilities = [
    {
      icon: Palette,
      title: "Visual Workflow Builder",
      description: "Build and test powerful AI workflows using an intuitive visual canvas with agents, tools, and custom logic"
    },
    {
      icon: Settings,
      title: "Comprehensive Model Management",
      description: "Integrate with hundreds of LLMs (GPT, Llama3, Claude) from dozens of providers through one system"
    },
    {
      icon: BookOpen,
      title: "Advanced RAG Pipelines",
      description: "Extensive Retrieval-Augmented Generation capabilities for accurate, knowledge-grounded responses"
    },
    {
      icon: Wrench,
      title: "Powerful Agent Capabilities",
      description: "50+ built-in tools (Google Search, DALL-E, WolframAlpha) with custom tool integration support"
    },
    {
      icon: Code,
      title: "Prompt IDE & Iteration",
      description: "Intuitive interface to craft, compare, and optimize prompts with features like text-to-speech"
    },
    {
      icon: BarChart3,
      title: "Full-Cycle LLMOps",
      description: "Monitor logs, analyze performance, and continuously improve prompts based on production data"
    }
  ];

  const deploymentOptions = [
    {
      icon: Cloud,
      title: "Cloud Managed",
      description: "Zero infrastructure management with enterprise-grade reliability and automatic scaling",
      tag: "Fastest Setup"
    },
    {
      icon: Server,
      title: "Self-Hosted",
      description: "Deploy on your infrastructure with Docker Compose or Kubernetes for complete control",
      tag: "Most Flexible"
    },
    {
      icon: Shield,
      title: "Enterprise Private",
      description: "Dedicated instances with SSO, audit logs, and compliance certifications",
      tag: "Enterprise"
    }
  ];

  const architectureHighlights = [
    {
      icon: Atom,
      title: "Production-Ready Agentic Framework",
      description: "Built on a production-ready, globally adopted agentic framework."
    },
    {
      icon: Settings,
      title: "Model-Agnostic LLMOps Architecture",
      description: "Leverages an enterprise-tested, model-agnostic LLMOps architecture."
    },
    {
      icon: Globe,
      title: "Fortune 500 Deployed Core",
      description: "Powered by a core architecture deployed across Fortune 500 environments."
    },
    {
      icon: Network,
      title: "Asynchronous Microservice Orchestration",
      description: "Engineered with an asynchronous, microservice-based orchestration engine."
    },
    {
      icon: Search,
      title: "Hybrid Search RAG Pipelines",
      description: "Employs high-precision Hybrid Search RAG pipelines trusted at global scale."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={bgDeveloper} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        </div>

        <div className="container relative z-10 mx-auto px-6 pt-24">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
              Build · Deploy · Operate
            </p>
            <h1 className="mt-6 text-5xl font-medium leading-[1.02] tracking-[-0.03em] md:text-7xl">
              <KognixWordmark size="hero" /> <span className="text-glow-cyan">AI Studio</span>
            </h1>
            <p className="mt-6 text-2xl font-medium tracking-tight md:text-3xl">From prototype to production.</p>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              The complete AI development and operation platform for the enterprise.
              Build, test, deploy, and monitor AI applications with a unified visual experience.
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
            { value: "500+", label: "Models supported" },
            { value: "50+", label: "Built-in tools" },
            { value: "10x", label: "Faster development" },
            { value: "80%", label: "Reduced errors" },
          ].map((metric, i) => (
            <div key={metric.label} className={`py-10 ${i % 2 === 1 ? "pl-6" : ""} ${i > 0 ? "md:border-l md:border-border md:pl-8" : ""}`}>
              <dd className="text-4xl font-medium tracking-tight md:text-5xl">{metric.value}</dd>
              <dt className="mt-2 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">{metric.label}</dt>
            </div>
          ))}
        </dl>
      </section>

      <FeatureSection
        eyebrow="Capabilities"
        title="Everything you need, from prototype to production."
        subtitle="One visual workspace for building, testing and operating AI applications."
        items={coreCapabilities}
        layout="rows"
      />

      <ProductShowcase
        title="Built in KOGNIX AI Studio"
        subtitle="Real workspaces composed visually — from regulatory automation to patent intelligence."
      />

      <FeatureSection
        eyebrow="Foundations"
        title="Enterprise-grade foundations."
        subtitle="Battle-tested architecture trusted by global enterprises."
        items={architectureHighlights}
        layout="columns"
        muted
      />

      <FeatureSection
        eyebrow="How it works"
        title={
          <>
            How <KognixWordmark size="hero" /> <span className="text-glow-cyan">AI Studio</span> works
          </>
        }
        items={[
          { title: "Design", description: "Build workflows visually with drag-and-drop components." },
          { title: "Develop", description: "Iterate on prompts and test with real data in the IDE." },
          { title: "Deploy", description: "One-click deployment to production with auto-scaling." },
          { title: "Optimize", description: "Monitor, analyze, and continuously improve performance." },
        ]}
        layout="steps"
      />

      {/* Backend-as-a-Service */}
      <section className="border-t border-border bg-muted/40">
        <div className="container mx-auto grid gap-12 px-6 py-24 lg:grid-cols-12 lg:py-32">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">Backend-as-a-Service</p>
            <h2 className="mt-6 text-balance text-3xl font-medium leading-tight tracking-[-0.02em] md:text-5xl">
              Every feature, available as an API.
            </h2>
            <p className="mt-5 max-w-md text-lg text-muted-foreground">
              Workflows, RAG and agents are exposed through robust APIs and SDKs, so AI Studio
              plugs straight into your existing business logic.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["REST API", "Python SDK", "TypeScript SDK", "Webhooks"].map((name) => (
                <span key={name} className="rounded-full border border-border bg-background px-3.5 py-1.5 font-mono text-xs">
                  {name}
                </span>
              ))}
            </div>
          </div>
          <ul className="lg:col-span-6 lg:col-start-7">
            {[
              "RESTful APIs for all platform features",
              "Python, JavaScript, and Go SDKs",
              "Webhook integrations for event-driven workflows",
              "OpenAPI specifications for custom integrations",
              "Batch processing APIs for high-volume operations",
            ].map((item) => (
              <li key={item} className="flex items-center gap-4 border-t border-border py-5 last:border-b">
                <Link2 className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Plugins & Integrations Marquee */}
      <StudioIntegrationsMarquee />

      <FeatureSection
        eyebrow="Deployment"
        title="Deploy your way."
        subtitle="Cloud-managed or self-hosted — choose the deployment that fits your requirements."
        items={deploymentOptions}
        layout="columns"
      />

      {/* Closing CTA */}
      <section className="bg-foreground text-background">
        <div className="container mx-auto grid gap-10 px-6 py-24 lg:grid-cols-12 lg:items-end lg:py-32">
          <div className="lg:col-span-8">
            <h2 className="text-balance text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl">
              Ready to build production AI?
            </h2>
            <p className="mt-6 max-w-xl text-lg opacity-70">
              See how enterprises use AI Studio to build, deploy, and operate AI at scale — and get
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

export default KognixAIStudio;

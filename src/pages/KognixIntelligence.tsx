import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FeatureSection } from "@/components/FeatureSection";
import { 
  ArrowRight,
  Zap,
  Globe,
  Plug,
  Cpu,
  Scale,
  Settings,
  Handshake,
  FileText,
  Server,
  Cloud,
  Shield
} from "lucide-react";
import { Link } from "react-router-dom";
import bgIntelligence from "@/assets/bg-intelligence.webp";
import { KognixWordmark } from "@/components/KognixWordmark";

const KognixIntelligence = () => {
  const coreCapabilities = [
    {
      icon: Zap,
      title: "One-Command Model Serving",
      description: "Deploy and serve large language, speech, and multimodal models effortlessly with a single command"
    },
    {
      icon: Globe,
      title: "Broad Model Ecosystem",
      description: "Instant support for state-of-the-art open-source models including LLMs, Text Embedding, Image, and Audio Models"
    },
    {
      icon: Plug,
      title: "OpenAI-Compatible API",
      description: "Flexible, unified RESTful API with Function Calling support. Interact via RPC, CLI, or WebUI"
    },
    {
      icon: Cpu,
      title: "Smart Hardware Acceleration",
      description: "Intelligent utilization of heterogeneous hardware, maximizing throughput on GPUs and CPUs"
    },
    {
      icon: Scale,
      title: "Seamless Distributed Scaling",
      description: "Effortlessly distribute model inference across multiple devices and machines for high-traffic production"
    },
    {
      icon: Settings,
      title: "Engine & Platform Versatility",
      description: "Support for diverse inference engines (GGML, TensorRT) and platforms (CPU, Metal)"
    }
  ];

  const deploymentOptions = [
    {
      icon: Cloud,
      title: "Cloud Managed",
      description: "Zero infrastructure management with enterprise-grade reliability",
      tag: "Fastest Setup"
    },
    {
      icon: Server,
      title: "On-Premise",
      description: "Deploy on your infrastructure with Docker or Kubernetes for complete control",
      tag: "Most Popular"
    },
    {
      icon: Shield,
      title: "Air-Gapped",
      description: "Complete network isolation for regulated industries and sensitive operations",
      tag: "Maximum Security"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={bgIntelligence} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        </div>

        <div className="container relative z-10 mx-auto px-6 pt-24">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">AI infrastructure</p>
            <h1 className="mt-6 text-5xl font-medium leading-[1.02] tracking-[-0.03em] md:text-7xl">
              <KognixWordmark size="hero" /> <span className="text-glow-cyan">Intelligence</span>
            </h1>
            <p className="mt-6 text-2xl font-medium tracking-tight md:text-3xl">
              One unified API. The enterprise-ready AI grid.
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Deploy, serve, and scale AI models with enterprise-grade infrastructure. Unified API access to
              hundreds of models with intelligent hardware optimization.
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
            { value: "100+", label: "Supported models" },
            { value: "10x", label: "Faster deployment" },
            { value: "99.9%", label: "Uptime SLA" },
            { value: "50%", label: "Cost reduction" },
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
        title="Serve any model, on any hardware, at any scale."
        subtitle="Everything you need to build and deploy production AI at scale."
        items={coreCapabilities}
        layout="rows"
      />

      <FeatureSection
        eyebrow="How it works"
        title={
          <>
            How <KognixWordmark size="hero" /> <span className="text-glow-cyan">Intelligence</span> works
          </>
        }
        items={[
          { title: "Select", description: "Choose from 100+ pre-configured models or bring your own." },
          { title: "Deploy", description: "One-command deployment with automatic optimization." },
          { title: "Scale", description: "Auto-scaling across devices based on demand." },
          { title: "Integrate", description: "Connect via an OpenAI-compatible API to your apps." },
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
              Deep ecosystem integrations.
            </h2>
            <p className="mt-5 max-w-md text-lg text-muted-foreground">
              Connect with essential AI/ML tools and frameworks to build complete applications faster.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["LangChain", "LlamaIndex", "Chatbox", "CUDA", "ROCm", "Metal", "OpenAI SDK"].map((name) => (
                <span key={name} className="rounded-full border border-border px-3.5 py-1.5 font-mono text-xs">
                  {name}
                </span>
              ))}
            </div>
          </div>
          <ul className="lg:col-span-6 lg:col-start-7">
            {[
              ["LangChain", "Native support for building LLM applications"],
              ["LlamaIndex", "Document indexing and retrieval integration"],
              ["Chatbox", "Direct UI client support"],
              ["CUDA / ROCm / Metal", "Optimized for heterogeneous hardware — NVIDIA, AMD and Apple"],
              ["OpenAI SDK", "Drop-in replacement compatibility"],
            ].map(([name, desc]) => (
              <li key={name} className="grid gap-1 border-t border-border py-5 last:border-b md:grid-cols-12 md:gap-6">
                <span className="flex items-center gap-3 text-lg font-medium tracking-tight md:col-span-5">
                  <Handshake className="h-4 w-4 shrink-0 text-primary" /> {name}
                </span>
                <span className="pl-7 text-muted-foreground md:col-span-7 md:pl-0">{desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FeatureSection
        eyebrow="Deployment"
        title="Deploy your way."
        subtitle="Cloud-managed or self-hosted — choose the deployment that fits your security and compliance requirements."
        items={deploymentOptions}
        layout="columns"
        muted
      />

      {/* Closing CTA */}
      <section className="bg-foreground text-background">
        <div className="container mx-auto grid gap-10 px-6 py-24 lg:grid-cols-12 lg:items-end lg:py-32">
          <div className="lg:col-span-8">
            <h2 className="text-balance text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl">
              Ready to unify your AI infrastructure?
            </h2>
            <p className="mt-6 max-w-xl text-lg opacity-70">
              See how enterprises use Intelligence to deploy and scale AI with confidence — and get the product
              brief with technical specifications and architecture diagrams.
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

export default KognixIntelligence;

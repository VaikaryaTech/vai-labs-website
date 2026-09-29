import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FeatureSection } from "@/components/FeatureSection";
import { SectionNav } from "@/components/SectionNav";
import { Shield, Link2, Boxes, DollarSign, TrendingDown, Download, ArrowRight, FileText, Cloud, Server, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import securityImg from "@/assets/genai-security.webp";
import { KognixWordmark } from "@/components/KognixWordmark";
import { CoreIntelligenceSection } from "@/components/kaie/CoreIntelligenceSection";
import { DataIngestionSection } from "@/components/kaie/DataIngestionSection";
import { AgenticAISection } from "@/components/kaie/AgenticAISection";
import { ModelEcosystemSection } from "@/components/kaie/ModelEcosystemSection";
import { ChatExperienceSection } from "@/components/kaie/ChatExperienceSection";
import { DashboardSection } from "@/components/kaie/DashboardSection";
import { IntegrationsMarquee } from "@/components/kaie/IntegrationsMarquee";

const HANDBOOK = "/brochures/KOGNIX_GenAI_Engine_Handbook.pdf";

const Product = () => {
  const coreCapabilities = [
    {
      icon: Shield,
      title: "Isolated Environments",
      description: "Deploy in completely isolated environments for maximum data security and compliance"
    },
    {
      icon: Link2,
      title: "Secure Connectivity",
      description: "Optional secure connectivity to external systems when required, with full control"
    },
    {
      icon: Boxes,
      title: "Native API Gateway",
      description: "Seamless integration with existing business applications through our secure API gateway"
    },
    {
      icon: DollarSign,
      title: "Lower Implementation Costs",
      description: "Significantly lower costs compared to similar market solutions, making AI accessible to all"
    },
    {
      icon: TrendingDown,
      title: "Reduced Maintenance",
      description: "Lower maintenance costs reduce total cost of ownership for sustainable growth"
    },
    {
      icon: Lock,
      title: "Data Sovereignty",
      description: "Complete control over your data with zero internet dependency requirements"
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
      description: "Deploy on your infrastructure with complete data isolation",
      tag: "Most Popular"
    },
    {
      icon: Shield,
      title: "Air-Gapped",
      description: "Complete network isolation for regulated industries",
      tag: "Maximum Security"
    }
  ];


  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={securityImg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        </div>

        <div className="container relative z-10 mx-auto px-6 pt-24">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">Core platform</p>
            <h1 className="mt-6 text-5xl font-medium leading-[1.02] tracking-[-0.03em] md:text-7xl">
              <KognixWordmark size="hero" /> <span className="text-glow-cyan">GenAI Engine</span>
            </h1>
            <p className="mt-6 text-2xl font-medium tracking-tight md:text-3xl">
              Your secure and flexible Generative AI framework.
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Engineered with paramount focus on data security and flexibility — a versatile solution for
              seamless integration across diverse business domains while retaining absolute control over your data.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="group">
                <Link to="/book-demo">
                  Schedule demo
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={HANDBOOK} download target="_blank" rel="noopener noreferrer">
                  <Download className="h-4 w-4" /> Download handbook
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics strip */}
      <section className="border-t border-border">
        <dl className="container mx-auto grid grid-cols-2 px-6 md:grid-cols-4">
          {[
            { value: "100%", label: "Data sovereignty" },
            { value: "Zero", label: "Internet dependency" },
            { value: "50%", label: "Cost reduction" },
            { value: "10x", label: "Faster deployment" },
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

      <SectionNav
        items={[
          { id: "why", label: "Why KOGNIX" },
          { id: "retrieval", label: "Retrieval" },
          { id: "ingestion", label: "Ingestion" },
          { id: "agents", label: "Agents" },
          { id: "models", label: "Models" },
          { id: "chat", label: "Chat" },
          { id: "dashboard", label: "Dashboard" },
          { id: "how", label: "How it works" },
          { id: "deploy", label: "Deploy" },
        ]}
      />

      <FeatureSection
        id="why"
        eyebrow="Why KOGNIX"
        title="Enterprise AI without giving up your data."
        subtitle="Security, control and cost built into the foundation — not bolted on."
        items={coreCapabilities}
        layout="rows"
      />

      <CoreIntelligenceSection />
      <DataIngestionSection />
      <AgenticAISection />
      <ModelEcosystemSection />
      <IntegrationsMarquee />
      <ChatExperienceSection />
      <DashboardSection />

      <FeatureSection
        id="how"
        eyebrow="How it works"
        title={
          <>
            How <KognixWordmark size="hero" /> <span className="text-glow-cyan">GenAI Engine</span> works
          </>
        }
        items={[
          { title: "Data input", description: "Your data stays secure within your infrastructure." },
          { title: "AI processing", description: "Advanced LLMs analyze and understand context." },
          { title: "Generation", description: "Create novel outputs and intelligent insights." },
          { title: "Output & learning", description: "Deliver actionable results, with continuous refinement and improvement." },
        ]}
        layout="steps"
      />

      <FeatureSection
        id="deploy"
        eyebrow="Deployment"
        title="Deploy your way."
        subtitle="Cloud-managed or self-hosted — choose the deployment that fits your security requirements."
        items={deploymentOptions}
        layout="columns"
        muted
      />

      {/* Closing CTA */}
      <section className="bg-foreground text-background">
        <div className="container mx-auto grid gap-10 px-6 py-24 lg:grid-cols-12 lg:items-end lg:py-32">
          <div className="lg:col-span-8">
            <h2 className="text-balance text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl">
              Ready to transform your business with AI?
            </h2>
            <p className="mt-6 max-w-xl text-lg opacity-70">
              See how enterprises use the GenAI Engine to unlock AI with complete data sovereignty — or grab the
              handbook for technical specifications, deployment options, and implementation guides.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:justify-end">
            <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/book-demo">
                Schedule a demo <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-background/30 bg-transparent text-background hover:bg-background/10">
              <a href={HANDBOOK} download target="_blank" rel="noopener noreferrer">
                <FileText className="h-4 w-4" /> Handbook (PDF)
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Product;

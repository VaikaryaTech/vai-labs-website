import { Navbar } from "@/components/Navbar";
import { LiveBackground } from "@/components/LiveBackground";
import { Footer } from "@/components/Footer";
import { ProductShowcase3D } from "@/components/ProductShowcase3D";
import { Card } from "@/components/ui/card";
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
  BarChart3,
  Zap,
  Shield,
  Layers,
  FileText,
  Download
} from "lucide-react";
import { Link } from "react-router-dom";
import observabilityBg from "@/assets/observability-hero-background.jpg";
import deployCloud from "@/assets/deploy-cloud.png";
import deployKubernetes from "@/assets/deploy-kubernetes.png";
import deployAirgapped from "@/assets/deploy-airgapped.png";
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
      
      {/* Hero Section - Brochure Style */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={observabilityBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        </div>
        <LiveBackground variant="flow" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-500 text-sm font-medium mb-8">
              <BarChart3 className="h-4 w-4" />
              Enterprise LLM Analytics
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <KognixWordmark size="hero" />{" "}
              <span className="text-glow-cyan">Analytics</span>
            </h1>
            
            <p className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Complete LLM Observability Platform
            </p>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Monitor, debug, and optimize your AI applications with enterprise-grade tracing — 
              track latency of LLM calls and full traces, token usage and associated costs, 
              error rates and system performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/book-demo">
                <Button size="lg" className="group w-full sm:w-auto">
                  Schedule Demo
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics Banner */}
      <section className="py-12 bg-gradient-hero border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "10x", label: "Faster Debugging" },
              { value: "99.9%", label: "Trace Coverage" },
              { value: "50%", label: "Reduced Latency" },
              { value: "24/7", label: "Real-time Monitoring" },
            ].map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-glow-cyan mb-2">
                  {metric.value}
                </div>
                <p className="text-sm text-muted-foreground font-medium">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Core Capabilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build, monitor, and optimize production LLM applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {coreCapabilities.map((capability, index) => (
              <Card 
                key={index}
                className="p-8 bg-gradient-card backdrop-blur-sm border-border hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <capability.icon className="h-7 w-7 text-cyan-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">{capability.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {capability.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Visual Flow */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(185_80%_40%/0.15),transparent_60%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How <KognixWordmark size="hero" />{" "}
              <span className="text-glow-cyan">Analytics</span> Works
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Instrument", desc: "Add our SDK to your LLM application with a single line of code" },
                { step: "02", title: "Trace", desc: "Automatically capture every interaction, retrieval, and agent action" },
                { step: "03", title: "Analyze", desc: "Identify bottlenecks, failures, and optimization opportunities" },
                { step: "04", title: "Optimize", desc: "Iterate on prompts and configurations with real-time feedback" },
              ].map((item, index) => (
                <div key={index} className="relative">
                  <Card className="p-6 bg-card/50 backdrop-blur-sm border-border h-full">
                    <div className="text-5xl font-bold text-cyan-500/20 mb-4">{item.step}</div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </Card>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <ArrowRight className="h-6 w-6 text-cyan-500/50" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integration Ecosystem */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Seamless Integration Ecosystem
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Drop-in replacements and native SDKs for your existing tools. 
                  Get started in minutes, not days.
                </p>
                
                <div className="space-y-4">
                  {[
                    "OpenAI SDK - Direct replacement with zero code changes",
                    "LangChain & LlamaIndex - Native callbacks and integrations",
                    "OpenTelemetry - Industry-standard observability protocol",
                    "LiteLLM - Universal LLM gateway support",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Zap className="h-3 w-3 text-cyan-500" />
                      </div>
                      <p className="text-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {["OpenAI", "LangChain", "LlamaIndex", "OpenTelemetry"].map((name, index) => (
                  <Card 
                    key={index}
                    className="p-6 bg-gradient-card border-border text-center hover:border-cyan-500/30 transition-colors"
                  >
                    <div className="text-lg font-semibold text-foreground">{name}</div>
                    <p className="text-sm text-muted-foreground mt-1">Native Support</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Options */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,hsl(12_100%_50%/0.1),transparent_60%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Deploy Your Way
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cloud-managed or self-hosted — choose the deployment that fits your security and compliance requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {deploymentOptions.map((option, index) => (
              <Card 
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border text-center hover:scale-105 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                    {option.tag}
                  </span>
                </div>
                <div className="w-48 h-48 rounded-2xl overflow-hidden mx-auto mb-6 mt-4">
                  <img src={option.image} alt={option.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{option.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {option.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brochure Download CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 bg-gradient-to-br from-cyan-500/10 via-background to-primary/5 border-cyan-500/20">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-20 h-20 rounded-2xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <FileText className="h-10 w-10 text-cyan-500" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">
                    <KognixWordmark size="hero" />{" "}
                    <span className="text-glow-cyan">Analytics</span> Product Brief
                  </h3>
                  <p className="text-muted-foreground">
                    Download our comprehensive product brief with technical specifications, 
                    architecture diagrams, and implementation guides.
                  </p>
                </div>
                <Button size="lg" className="group flex-shrink-0">
                  <FileText className="mr-2 h-5 w-5" />
                  Download Brief
                  <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <ProductShowcase3D
        set="analytics"
        title="See KOGNIX Analytics in Action"
        subtitle="Full-stack LLM observability — from individual trace inspection to enterprise-wide usage analytics."
      />

      {/* Final CTA */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(185_80%_40%/0.2),transparent_70%)]" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your LLM Operations?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join leading enterprises using{" "}
            <KognixWordmark size="hero" />{" "}
            <span className="text-glow-cyan font-semibold">Analytics</span>{" "}
            to build reliable, high-performance AI applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-demo">
              <Button size="lg" variant="hero" className="group w-full sm:w-auto">
                Schedule a Demo
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
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

export default Observability;

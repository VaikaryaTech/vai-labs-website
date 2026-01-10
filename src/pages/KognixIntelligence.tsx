import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
  Download,
  Server,
  Cloud,
  Shield
} from "lucide-react";
import { Link } from "react-router-dom";
import bgIntelligence from "@/assets/bg-intelligence.jpg";

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
      
      {/* Hero Section - Brochure Style */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={bgIntelligence} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-6 px-4 py-2" variant="secondary">
              AI Infrastructure
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-[image:var(--gradient-kognix)] bg-clip-text text-transparent">KOGNIX</span>{" "}
              <span className="text-cyan-accent">Intelligence</span>
            </h1>
            
            <p className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              One Unified API. The Enterprise Ready AI Grid.
            </p>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Deploy, serve, and scale AI models with enterprise-grade infrastructure. 
              Unified API access to hundreds of models with intelligent hardware optimization.
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
              { value: "100+", label: "Supported Models" },
              { value: "10x", label: "Faster Deployment" },
              { value: "99.9%", label: "Uptime SLA" },
              { value: "50%", label: "Cost Reduction" },
            ].map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-cyan-accent mb-2">
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
              Everything you need to build and deploy production AI at scale
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
              How <span className="bg-[image:var(--gradient-kognix)] bg-clip-text text-transparent">KOGNIX</span>{" "}
              <span className="text-cyan-accent">Intelligence</span> Works
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Select", desc: "Choose from 100+ pre-configured models or bring your own" },
                { step: "02", title: "Deploy", desc: "One command deployment with automatic optimization" },
                { step: "03", title: "Scale", desc: "Auto-scaling across devices based on demand" },
                { step: "04", title: "Integrate", desc: "Connect via OpenAI-compatible API to your apps" },
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
                  Deep Ecosystem Integrations
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Seamlessly connect with essential AI/ML tools and frameworks to build complete applications faster.
                </p>
                
                <div className="space-y-4">
                  {[
                    "LangChain - Native support for building LLM applications",
                    "LlamaIndex - Document indexing and retrieval integration",
                    "Dify - Visual workflow builder compatibility",
                    "Chatbox - Direct UI client support",
                    "OpenAI SDK - Drop-in replacement compatibility",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Handshake className="h-3 w-3 text-cyan-500" />
                      </div>
                      <p className="text-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {["LangChain", "LlamaIndex", "Dify", "OpenAI SDK"].map((name, index) => (
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
                className="p-8 bg-card/50 backdrop-blur-sm border-border text-center hover:scale-105 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                    {option.tag}
                  </span>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center mx-auto mb-6">
                  <option.icon className="h-8 w-8 text-cyan-500" />
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
                    <span className="bg-[image:var(--gradient-kognix)] bg-clip-text text-transparent">KOGNIX</span>{" "}
                    <span className="text-cyan-accent">Intelligence</span> Product Brief
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

      {/* Final CTA */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(185_80%_40%/0.2),transparent_70%)]" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Unify Your AI Infrastructure?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join leading enterprises using{" "}
            <span className="bg-[image:var(--gradient-kognix)] bg-clip-text text-transparent font-semibold">KOGNIX</span>{" "}
            <span className="text-cyan-accent font-semibold">Intelligence</span>{" "}
            to deploy and scale AI with confidence.
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

export default KognixIntelligence;

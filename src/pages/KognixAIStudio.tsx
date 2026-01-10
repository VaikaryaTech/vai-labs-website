import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
  Download,
  Cloud,
  Server,
  Shield
} from "lucide-react";
import { Link } from "react-router-dom";
import bgDeveloper from "@/assets/bg-developer.jpg";

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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section - Brochure Style */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={bgDeveloper} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-6 px-4 py-2" variant="secondary">
              LLMOps Platform
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-[image:var(--gradient-kognix)] bg-clip-text text-transparent">KOGNIX</span>{" "}
              <span className="text-cyan-accent">AI Studio</span>
            </h1>
            
            <p className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              From Prototype to Production
            </p>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              The complete AI development and operation platform for the enterprise. 
              Build, test, deploy, and monitor AI applications with a unified visual experience.
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
              { value: "500+", label: "Models Supported" },
              { value: "50+", label: "Built-in Tools" },
              { value: "10x", label: "Faster Development" },
              { value: "80%", label: "Reduced Errors" },
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
              Complete LLMOps Platform
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need from prototype to production AI applications
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
              <span className="text-cyan-accent">AI Studio</span> Works
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Design", desc: "Build workflows visually with drag-and-drop components" },
                { step: "02", title: "Develop", desc: "Iterate on prompts and test with real data in the IDE" },
                { step: "03", title: "Deploy", desc: "One-click deployment to production with auto-scaling" },
                { step: "04", title: "Optimize", desc: "Monitor, analyze, and continuously improve performance" },
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

      {/* Backend-as-a-Service */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Backend-as-a-Service (BaaS)
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  All core features — workflows, RAG, and agents — are available via robust APIs and SDKs. 
                  Effortlessly integrate KOGNIX AI Studio functionality into your existing business logic.
                </p>
                
                <div className="space-y-4">
                  {[
                    "RESTful APIs for all platform features",
                    "Python, JavaScript, and Go SDKs",
                    "Webhook integrations for event-driven workflows",
                    "OpenAPI specifications for custom integrations",
                    "Batch processing APIs for high-volume operations",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Link2 className="h-3 w-3 text-cyan-500" />
                      </div>
                      <p className="text-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {["REST API", "Python SDK", "TypeScript SDK", "Webhooks"].map((name, index) => (
                  <Card 
                    key={index}
                    className="p-6 bg-gradient-card border-border text-center hover:border-cyan-500/30 transition-colors"
                  >
                    <div className="text-lg font-semibold text-foreground">{name}</div>
                    <p className="text-sm text-muted-foreground mt-1">Available</p>
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
              Cloud-managed or self-hosted — choose the deployment that fits your requirements
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
                    <span className="text-cyan-accent">AI Studio</span> Product Brief
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
            Ready to Build Production AI?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join leading enterprises using{" "}
            <span className="bg-[image:var(--gradient-kognix)] bg-clip-text text-transparent font-semibold">KOGNIX</span>{" "}
            <span className="text-cyan-accent font-semibold">AI Studio</span>{" "}
            to build, deploy, and operate AI at scale.
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

export default KognixAIStudio;

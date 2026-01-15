import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Link2, 
  Boxes, 
  DollarSign, 
  TrendingDown, 
  Upload, 
  Brain, 
  Sparkles, 
  Download, 
  RefreshCw, 
  ArrowRight, 
  FileText,
  Cloud,
  Server,
  Lock
} from "lucide-react";
import { Link } from "react-router-dom";
import securityImg from "@/assets/genai-security.jpg";

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
      
      {/* Hero Section - Brochure Style */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={securityImg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-6 px-4 py-2" variant="secondary">
              Core Platform
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-[image:var(--gradient-kognix)] bg-clip-text text-transparent">KOGNIX</span>{" "}
              <span className="text-cyan-accent">GenAI Engine</span>
            </h1>
            
            <p className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Your Secure and Flexible Generative AI Framework
            </p>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Engineered with paramount focus on data security and flexibility. 
              A versatile solution for seamless integration across diverse business domains 
              while retaining absolute control over your data.
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
              { value: "100%", label: "Data Sovereignty" },
              { value: "Zero", label: "Internet Dependency" },
              { value: "50%", label: "Cost Reduction" },
              { value: "10x", label: "Faster Deployment" },
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
              Unmatched security, integration, and cost-effectiveness for enterprise AI
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
              <span className="text-cyan-accent">GenAI Engine</span> Works
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { step: "01", title: "Data Input", desc: "Your data stays secure within your infrastructure", icon: Upload },
                { step: "02", title: "AI Processing", desc: "Advanced LLMs analyze and understand context", icon: Brain },
                { step: "03", title: "Generation", desc: "Create novel outputs and intelligent insights", icon: Sparkles },
                { step: "04", title: "Output", desc: "Deliver actionable results and solutions", icon: Download },
                { step: "05", title: "Learning", desc: "Continuous refinement and improvement", icon: RefreshCw },
              ].map((item, index) => (
                <div key={index} className="relative">
                  <Card className="p-4 bg-card/50 backdrop-blur-sm border-border h-full">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-3 mx-auto">
                      <item.icon className="h-6 w-6 text-cyan-500" />
                    </div>
                    <div className="text-3xl font-bold text-cyan-500/20 mb-2 text-center">{item.step}</div>
                    <h3 className="text-lg font-bold mb-1 text-center">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed text-center">{item.desc}</p>
                  </Card>
                  {index < 4 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                      <ArrowRight className="h-5 w-5 text-cyan-500/50" />
                    </div>
                  )}
                </div>
              ))}
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
              Cloud-managed or self-hosted — choose the deployment that fits your security requirements
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
                    <span className="text-cyan-accent">GenAI Engine</span> Product Brief
                  </h3>
                  <p className="text-muted-foreground">
                    Download our comprehensive product brief with technical specifications, 
                    deployment options, and implementation guides.
                  </p>
                </div>
                <a 
                  href="/brochures/KOGNIX_GenAI_Engine_Brochure.pdf" 
                  download="KOGNIX_GenAI_Engine_Brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="group flex-shrink-0">
                    <FileText className="mr-2 h-5 w-5" />
                    Download Brochure
                    <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                  </Button>
                </a>
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
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join leading enterprises using{" "}
            <span className="bg-[image:var(--gradient-kognix)] bg-clip-text text-transparent font-semibold">KOGNIX</span>{" "}
            <span className="text-cyan-accent font-semibold">GenAI Engine</span>{" "}
            to unlock AI with complete data sovereignty.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-demo">
              <Button size="lg" variant="hero" className="group w-full sm:w-auto">
                Schedule a Demo
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/features">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Explore Features
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Product;

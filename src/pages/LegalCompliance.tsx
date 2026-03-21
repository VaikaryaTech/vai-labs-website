import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Scale, 
  FileSearch, 
  Shield, 
  Server,
  Download,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import legalImg from "@/assets/business-legal.jpg";
import { LegalUseCases } from "@/components/usecases/LegalUseCases";

const LegalCompliance = () => {
  const impactMetrics = [
    { value: "50%", label: "Faster Document Review" },
    { value: "40%", label: "Reduced Discovery Costs" },
    { value: "80%", label: "Policy Query Automation" },
    { value: "3x", label: "Research Speed" },
  ];

  const capabilities = [
    {
      icon: FileSearch,
      title: "Automated Legal Research",
      description: "Answer specific legal questions by searching across massive repositories of case law, statutes, regulations, and firm-specific documents with semantic understanding.",
      benefit: "Drastically reduced manual research time with quick access to relevant precedents and verifiable sources."
    },
    {
      icon: Scale,
      title: "Contract Analysis & Review",
      description: "Review large contracts, highlight risky clauses, identify inconsistencies against industry standards, or compare drafts against firm-approved templates.",
      benefit: "Accelerated due diligence, lowered risk, and ensured compliance with internal and external standards."
    },
    {
      icon: Shield,
      title: "E-Discovery Optimization",
      description: "Automate retrieval, summarization, and analysis of vast document troves (emails, chats, reports) relevant to lawsuits or investigations.",
      benefit: "Dramatically faster discovery phase with reduced cost and time of human review."
    },
    {
      icon: Server,
      title: "Compliance & Policy Management",
      description: "Answer employee and management questions about company policies with context-specific responses grounded in official documentation.",
      benefit: "Consistent, accurate policy interpretation that mitigates internal compliance risk."
    },
  ];

  const workflowSteps = [
    { step: "01", title: "Ingest", description: "Connect contracts, case law, and policy documents" },
    { step: "02", title: "Index", description: "Semantic indexing with legal context understanding" },
    { step: "03", title: "Query", description: "Natural language legal research with citations" },
    { step: "04", title: "Verify", description: "Auditable outputs with source grounding" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={legalImg} 
            alt="Legal and Compliance AI solutions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl space-y-6 animate-slide-in">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-primary/10 rounded-2xl">
                <Scale className="h-12 w-12 text-primary" />
              </div>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                Enterprise Application Area
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Legal & Compliance
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Transform legal operations with <span className="bg-gradient-kognix bg-clip-text text-transparent font-semibold">KOGNIX AI ENGINE</span>—from 
              accelerating e-discovery and contract review to ensuring regulatory compliance with auditable, source-grounded intelligence.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/book-demo">
                <Button variant="hero" size="lg" className="group">
                  Request Demo
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="group">
                <Download className="mr-2 h-5 w-5" />
                Download Brief
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Measured Business Impact</h2>
            <p className="text-muted-foreground">Real results from enterprise deployments</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              AI-Powered Legal Intelligence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Purpose-built capabilities for legal and compliance excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <Card 
                key={index}
                className="p-8 bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary group"
              >
                <div className="p-3 bg-primary/10 rounded-xl w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                  <capability.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {capability.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {capability.description}
                </p>
                <div className="flex items-start gap-2 pt-4 border-t border-border">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">{capability.benefit}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">From legal documents to actionable intelligence</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {workflowSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-primary/20 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                {index < workflowSteps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 h-8 w-8 text-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Legal Operations?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join leading law firms and legal departments leveraging KOGNIX for secure, compliant AI.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/book-demo">
              <Button variant="hero" size="lg">
                Schedule a Demo
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

export default LegalCompliance;
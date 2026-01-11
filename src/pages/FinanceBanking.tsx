import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Building2, 
  Shield, 
  TrendingUp, 
  Users, 
  FileCheck, 
  AlertTriangle,
  Download,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import financeImg from "@/assets/business-finance.jpg";

const FinanceBanking = () => {
  const impactMetrics = [
    { value: "60%", label: "Faster Compliance Research" },
    { value: "45%", label: "Reduced False Positives" },
    { value: "80%", label: "First-Call Resolution" },
    { value: "3x", label: "Analyst Productivity" },
  ];

  const capabilities = [
    {
      icon: Shield,
      title: "Regulatory Compliance Copilot",
      description: "Answer complex, jurisdiction-specific questions on AML, KYC, Basel, or tax laws by referencing thousands of constantly changing regulatory documents, internal policies, and circulars.",
      benefit: "Faster compliance research, reduced risk of fines, and up-to-date, auditable answers with source citations."
    },
    {
      icon: TrendingUp,
      title: "Investment Research Assistant",
      description: "Summarize extensive financial documents like earnings reports, market analyses, and SEC filings; identify key risks and opportunities based on real-time data feeds.",
      benefit: "Improved analyst efficiency and decision-making with real-time, grounded insights from current financial data."
    },
    {
      icon: Users,
      title: "Internal Knowledge Base",
      description: "A chatbot that answers staff questions on HR policies, IT procedures, product specifications, and mortgage processes with instant accuracy.",
      benefit: "Reduced employee time wasted on searching, faster onboarding, and consistent internal communication."
    },
    {
      icon: FileCheck,
      title: "Intelligent Customer Support",
      description: "Handle complex customer inquiries about card decline reasons, loan application status, or product features by accessing account data and operational manuals.",
      benefit: "Higher first-call resolution rate, personalized support, and reduced reliance on human agents."
    },
    {
      icon: AlertTriangle,
      title: "Fraud and Risk Detection",
      description: "Analyze transaction data and cross-reference with internal fraud reports and external blacklists to detect anomalies and flag suspicious activities.",
      benefit: "Enhanced ability to detect new fraud schemes with reduced false positives compared to rule-based systems."
    },
  ];

  const workflowSteps = [
    { step: "01", title: "Ingest", description: "Connect regulatory documents, internal policies, and transaction data" },
    { step: "02", title: "Index", description: "Semantic indexing with jurisdiction and compliance tagging" },
    { step: "03", title: "Query", description: "Natural language queries with source-cited responses" },
    { step: "04", title: "Act", description: "Automated alerts, reports, and compliance workflows" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={financeImg} 
            alt="Finance and Banking AI solutions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl space-y-6 animate-slide-in">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-primary/10 rounded-2xl">
                <Building2 className="h-12 w-12 text-primary" />
              </div>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                Enterprise Application Area
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Finance & Banking
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Transform financial operations with <span className="bg-gradient-kognix bg-clip-text text-transparent font-semibold">KOGNIX AI ENGINE</span>—from 
              regulatory compliance and fraud detection to investment research with auditable, source-grounded intelligence.
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
              AI-Powered Financial Intelligence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Purpose-built capabilities for the unique challenges of financial services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <p className="text-xl text-muted-foreground">From data ingestion to actionable intelligence</p>
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
            Ready to Transform Your Financial Operations?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join leading financial institutions leveraging KOGNIX for secure, compliant AI.
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

export default FinanceBanking;
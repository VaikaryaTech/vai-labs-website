import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Wifi, 
  Wrench, 
  CreditCard,
  Download,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import telecomImg from "@/assets/business-telecom.jpg";

const TelecomUtilities = () => {
  const impactMetrics = [
    { value: "55%", label: "Faster Issue Resolution" },
    { value: "40%", label: "Reduced Service Outages" },
    { value: "60%", label: "Customer Retention Boost" },
    { value: "35%", label: "Support Cost Savings" },
  ];

  const capabilities = [
    {
      icon: Wrench,
      title: "Technical Support for Field Engineers",
      description: "Answer complex technical questions about network configurations, fiber-optic splicing procedures, and equipment specifications by retrieving from internal engineering documents.",
      benefit: "Faster problem resolution in the field, reducing service outages and increasing technician efficiency."
    },
    {
      icon: CreditCard,
      title: "Billing & Service Inquiry Chatbot",
      description: "Provide precise, personalized answers to customers' billing questions, plan details, or service outage updates by connecting to live account and service data.",
      benefit: "Improved customer retention and reduced high-cost human support volume."
    },
  ];

  const workflowSteps = [
    { step: "01", title: "Integrate", description: "Connect engineering docs and customer systems" },
    { step: "02", title: "Index", description: "Semantic processing of technical specifications" },
    { step: "03", title: "Deploy", description: "Field access for technicians and customer support" },
    { step: "04", title: "Resolve", description: "Instant answers with source citations" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={telecomImg} 
            alt="Telecommunications and Utilities AI solutions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl space-y-6 animate-slide-in">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-primary/10 rounded-2xl">
                <Wifi className="h-12 w-12 text-primary" />
              </div>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                Enterprise Application Area
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Telecom & Utilities
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Empower field operations and customer service with <span className="bg-gradient-kognix bg-clip-text text-transparent font-semibold">KOGNIX AI ENGINE</span>—delivering 
              instant technical knowledge and personalized support at scale.
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
              AI-Powered Network Intelligence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Purpose-built capabilities for telecommunications and utilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
            <p className="text-xl text-muted-foreground">From technical documentation to field resolution</p>
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
            Ready to Transform Your Network Operations?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join leading telecom providers leveraging KOGNIX for intelligent field support.
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

export default TelecomUtilities;
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Book, FileText, Code, Zap } from "lucide-react";

const Documentation = () => {
  const sections = [
    {
      icon: Book,
      title: "Getting Started",
      description: "Learn the basics of KOGNIX and get up and running quickly",
      hasKognix: true,
      links: [
        "Quick Start Guide",
        "Installation & Setup",
        "Basic Configuration",
        "Your First Query"
      ]
    },
    {
      icon: FileText,
      title: "User Guides",
      description: "Comprehensive guides for using KOGNIX features",
      hasKognix: true,
      links: [
        "Document Management",
        "Query Optimization",
        "Workflow Orchestration",
        "Collaboration Tools"
      ]
    },
    {
      icon: Code,
      title: "API Documentation",
      description: "Complete reference for developers integrating KOGNIX",
      hasKognix: true,
      links: [
        "REST API Reference",
        "Authentication",
        "SDKs & Libraries",
        "Code Examples"
      ]
    },
    {
      icon: Zap,
      title: "Advanced Topics",
      description: "Deep dive into advanced features and customization",
      links: [
        "Custom Model Training",
        "Security & Compliance",
        "Performance Optimization",
        "Enterprise Deployment"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(260_60%_25%/0.2),transparent_70%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-slide-in">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Documentation
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Everything you need to know to get the most out of <span className="bg-gradient-kognix bg-clip-text text-transparent font-semibold">KOGNIX</span>
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {sections.map((section, index) => (
              <Card key={index} className="p-8 border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-glow-primary">
                <section.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-2">{section.title}</h3>
                <p className="text-muted-foreground mb-6">
                  {section.description.split('KOGNIX').map((part, i, arr) => (
                    <span key={i}>
                      {part}
                      {i < arr.length - 1 && (
                        <span className="bg-[image:var(--gradient-kognix)] bg-clip-text text-transparent font-semibold">KOGNIX</span>
                      )}
                    </span>
                  ))}
                </p>
                
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-sm text-primary hover:underline">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Documentation;

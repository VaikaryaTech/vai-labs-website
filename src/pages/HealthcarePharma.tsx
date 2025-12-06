import { Navbar } from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Pill, Wrench, Beaker } from "lucide-react";
import healthcarePharmaHero from "@/assets/healthcare-pharma-hero.jpg";
import pharmaEquipment from "@/assets/pharma-equipment.jpg";
import pharmaChemicals from "@/assets/pharma-chemicals.jpg";

const HealthcarePharma = () => {
  const sectors = [
    {
      icon: Pill,
      title: "Pharmaceutical Manufacturers",
      subtitle: "(APIs & Finished Dosages)",
      color: "text-blue-500",
      image: healthcarePharmaHero,
      useCases: [
        {
          name: "R&D / Drug Discovery",
          title: "Patent & Prior Art Analysis",
          description: "KOGNIX queries millions of global patent filings and scientific literature to quickly generate summaries of novel synthetic routes for target molecules, instantly vetting for infringement risk and novelty.",
          benefit: "Accelerated Innovation"
        },
        {
          name: "Quality Control / Regulatory",
          title: "Global GxP Compliance Checker",
          description: "The system retrieves the latest GMP guidelines from US FDA, EU EMA, and Indian CDSCO and applies them to your internal SOPs to instantly generate compliance gap analysis reports for specific batch releases.",
          benefit: "Reduced Risk & Errors"
        },
        {
          name: "Clinical Trials",
          title: "Protocol Eligibility Assessment",
          description: "The system retrieves complex clinical trial protocols and patient medical records to accurately generate a list of pre-qualified candidates for enrollment, reducing manual review time from days to minutes.",
          benefit: "Faster Patient Enrollment"
        }
      ]
    },
    {
      icon: Wrench,
      title: "Machinery, Equipment & Packaging",
      subtitle: "(PMEC)",
      color: "text-orange-500",
      image: pharmaEquipment,
      useCases: [
        {
          name: "Equipment Maintenance / Service",
          title: "Real-Time Troubleshooting & Repair",
          description: "A field technician describes a machine error into KOGNIX. The system retrieves the specific machine's maintenance manual and past repair logs to generate a step-by-step diagnostic and repair script.",
          benefit: "Maximized Uptime"
        },
        {
          name: "Sales & Engineering",
          title: "Customized Bid Generation",
          description: "A salesperson inputs a client's complex technical requirements. KOGNIX retrieves internal engineering specifications and previous quotes to automatically generate a detailed, error-free technical proposal and cost estimate.",
          benefit: "Increased Sales Velocity"
        },
        {
          name: "Product Design",
          title: "Process Optimization Analysis",
          description: "An engineer inputs current operational data. KOGNIX retrieves all global best-practice papers on tablet compression and generates novel design modification recommendations to improve energy efficiency.",
          benefit: "Enhanced Efficiency"
        }
      ]
    },
    {
      icon: Beaker,
      title: "Excipients, Chemicals & Specialized Ingredients",
      subtitle: "",
      color: "text-purple-500",
      image: pharmaChemicals,
      useCases: [
        {
          name: "Technical Support / Applications",
          title: "Formulation Compatibility Advisor",
          description: "A customer asks about excipient compatibility with a specific API. KOGNIX retrieves thousands of excipient monographs, technical data sheets, and stability studies to generate a concise summary on compatibility, stability concerns, and recommended concentrations.",
          benefit: "Faster Customer Solutions"
        },
        {
          name: "Raw Material Sourcing",
          title: "Supplier Vetting & Risk Analysis",
          description: "KOGNIX retrieves audit reports, geopolitical risk data, and regulatory history for potential suppliers to generate a comprehensive risk score and summary of critical non-conformities, aiding procurement decisions.",
          benefit: "Secured Supply Chain"
        },
        {
          name: "Quality Assurance",
          title: "Documentation & Standards",
          description: "Instant access to ingredient specifications, quality certificates, and regulatory documentation. KOGNIX ensures every ingredient meets required standards with complete traceability.",
          benefit: "Complete Traceability"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(260_60%_25%/0.2),transparent_70%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <Link to="/business-applications" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Enterprise Application Areas
          </Link>
          
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-slide-in">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Healthcare & Pharmaceuticals
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Transform pharmaceutical operations with AI-powered solutions for drug discovery, 
              quality control, manufacturing excellence, and supply chain optimization.
            </p>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          {sectors.map((sector, sectorIndex) => (
            <div key={sectorIndex} className="mb-24 last:mb-0">
              {/* Sector Header with Image */}
              <div className="relative overflow-hidden rounded-2xl mb-12 group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={sector.image} 
                    alt={sector.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
                </div>
                <div className="absolute inset-0 flex items-center">
                  <div className="container mx-auto px-6">
                    <div className="flex items-center gap-4 max-w-4xl">
                      <sector.icon className={`h-12 w-12 ${sector.color} flex-shrink-0`} />
                      <div>
                        <h2 className="text-4xl font-bold">{sector.title}</h2>
                        {sector.subtitle && (
                          <p className="text-lg text-muted-foreground mt-1">{sector.subtitle}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sector.useCases.map((useCase, useCaseIndex) => (
                  <Card 
                    key={useCaseIndex}
                    className="p-6 bg-gradient-card backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-glow-primary group"
                  >
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                        {useCase.name}
                      </p>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {useCase.title}
                      </h3>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {useCase.description}
                      </p>
                      
                      <div className="flex items-start gap-2 pt-2 border-t border-border/50">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-sm font-semibold text-primary">
                          {useCase.benefit}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Ready to Transform Your Pharmaceutical Operations?
            </h2>
            <p className="text-xl text-muted-foreground">
              See how KOGNIX can accelerate innovation, ensure compliance, and optimize your entire value chain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book-demo">
                <Button size="lg" variant="hero">
                  Book a Demo
                </Button>
              </Link>
              <Link to="/product">
                <Button size="lg" variant="outline">
                  Learn More About KOGNIX
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HealthcarePharma;

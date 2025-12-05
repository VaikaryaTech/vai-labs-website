import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  const caseStudies = [
    {
      company: "Global Pharmaceutical Company",
      industry: "Healthcare",
      challenge: "Manual review of clinical trial protocols taking weeks, delaying patient enrollment",
      solution: "Implemented KOGNIX for automated protocol eligibility assessment and candidate screening",
      hasKognix: true,
      results: [
        "Reduced review time from 2 weeks to 30 minutes",
        "45% increase in qualified candidate identification",
        "Saved 200+ hours per trial cycle"
      ]
    },
    {
      company: "Leading Indian Bank",
      industry: "Finance",
      challenge: "Compliance team struggling to keep up with changing AML and KYC regulations",
      solution: "Deployed KOGNIX regulatory compliance copilot to query and analyze regulatory documents",
      hasKognix: true,
      results: [
        "70% reduction in compliance research time",
        "100% audit trail with source citations",
        "Zero compliance violations in 18 months"
      ]
    },
    {
      company: "Manufacturing Equipment Provider",
      industry: "Manufacturing",
      challenge: "Field technicians spending hours searching maintenance manuals for troubleshooting",
      solution: "Implemented KOGNIX real-time troubleshooting assistant for equipment maintenance",
      hasKognix: true,
      results: [
        "85% reduction in equipment downtime",
        "3x faster repair completion",
        "40% improvement in first-time fix rate"
      ]
    },
    {
      company: "Enterprise E-commerce Platform",
      industry: "Retail",
      challenge: "Customer support team overwhelmed with product and order inquiries",
      solution: "Integrated KOGNIX intelligent chatbot with product catalog and order management system",
      hasKognix: true,
      results: [
        "60% reduction in support ticket volume",
        "95% customer satisfaction score",
        "24/7 support availability"
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
                Success Stories
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              See how leading organizations are transforming their operations with <span className="bg-gradient-kognix bg-clip-text text-transparent font-semibold">KOGNIX</span>
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-12">
            {caseStudies.map((study, index) => (
              <Card key={index} className="p-8 border-border hover:border-primary/50 transition-all">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                      {study.industry}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{study.company}</h3>
                  </div>
                  
                  <div className="md:w-2/3 space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                      <p className="text-muted-foreground">
                        {study.solution.split('KOGNIX').map((part, i, arr) => (
                          <span key={i}>
                            {part}
                            {i < arr.length - 1 && (
                              <span className="bg-[image:var(--gradient-kognix)] bg-clip-text text-transparent font-semibold">KOGNIX</span>
                            )}
                          </span>
                        ))}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start gap-2">
                            <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-16 text-center">
            <Card className="p-12 border-border bg-gradient-card">
              <h2 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h2>
              <p className="text-muted-foreground mb-8">
                Join these industry leaders and transform your business with <span className="bg-gradient-kognix bg-clip-text text-transparent font-semibold">KOGNIX</span>
              </p>
              <Link to="/book-demo">
                <Button size="lg" variant="hero">
                  Schedule a Demo
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;

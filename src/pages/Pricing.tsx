import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "Contact Us",
      description: "Perfect for small teams starting their AI journey",
      features: [
        "Up to 100K documents",
        "5 concurrent users",
        "Basic integrations",
        "Email support",
        "Standard security features"
      ]
    },
    {
      name: "Professional",
      price: "Contact Us",
      description: "Ideal for growing businesses with advanced needs",
      features: [
        "Up to 1M documents",
        "25 concurrent users",
        "Advanced integrations",
        "Priority support",
        "Enhanced security & compliance",
        "Custom workflows",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations requiring full customization",
      features: [
        "Unlimited documents",
        "Unlimited users",
        "All integrations",
        "24/7 dedicated support",
        "Advanced security & compliance",
        "Custom AI model training",
        "On-premises deployment",
        "SLA guarantees"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-hero">
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-slide-in">
            <h1 className="text-5xl lg:text-7xl font-medium tracking-tight leading-tight">
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Flexible Pricing
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our powerful GenAI engine.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index}
                className={`p-8 ${plan.popular ? 'border-primary shadow-glow-primary scale-105' : 'border-border'} transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-medium tracking-tight mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/book-demo">
                  <Button 
                    variant={plan.popular ? "hero" : "outline"} 
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Target, Users, Shield, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To democratize enterprise AI by making secure, powerful GenAI solutions accessible to businesses of all sizes."
    },
    {
      icon: Users,
      title: "Customer First",
      description: "We build solutions that solve real business problems, with customer success at the heart of everything we do."
    },
    {
      icon: Shield,
      title: "Security & Privacy",
      description: "Your data stays yours. We prioritize security and privacy in every aspect of our platform."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Constantly pushing the boundaries of what's possible with AI while maintaining practical, usable solutions."
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
                About VAI LABS
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Building the future of enterprise AI with security, intelligence, and reliability at our core.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                VAI LABS was founded in October 2022 with a vision to transform how businesses interact with their data and knowledge. 
                We recognized that while AI technology was advancing rapidly, most solutions were either too complex, 
                too expensive, or didn't adequately address security and privacy concerns.
              </p>
              <p>
                Our team of AI researchers, engineers, and business experts came together to create <span className="bg-gradient-kognix bg-clip-text text-transparent font-semibold">KOGNIX</span> - 
                a suite of Generative Artificial Intelligence, Enterprise products that combines cutting-edge technology with practical business applications. 
                We believe that every organization should have access to powerful AI tools that enhance decision-making, 
                improve efficiency, and drive innovation.
              </p>
              <p>
                Today, we serve businesses across Healthcare, Finance, Manufacturing, Legal & General and many other industries, 
                helping them unlock the full potential of their data while maintaining complete control over their information.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="p-8 border-border hover:border-primary/50 transition-all duration-300">
                <value.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold">
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Join the Future of Intelligence
              </span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              VAI LABS is more than a technology provider; we are a partner in your digital transformation. 
              We are committed to a future where technology and humanity advance together—safely, locally, and intelligently.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

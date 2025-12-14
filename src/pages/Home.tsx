import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { Shield, Server, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import homeHeroBackground from "@/assets/home-hero-background.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img 
            src={homeHeroBackground} 
            alt="Enterprise AI Infrastructure" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/95" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(260_60%_25%/0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(12_100%_50%/0.2),transparent_50%)]" />
        
        <div className="container mx-auto px-6 py-32 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8 animate-slide-in">
            <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
              Unlock Tomorrow's Potential
              <br />
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Securely, Locally, Intelligently
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto font-bold">
              VAI LABS delivers enterprise-grade Generative AI, built for your environment. Secure your innovation: Our engine runs entirely within your infrastructure—guaranteeing no cloud data leakage and zero internet dependency.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Embrace the next generation of AI that is secure, compliant, and fully scalable. Enhance innovation, automate complex workflows, and accelerate decision intelligence—all strictly within your trusted environment.
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-8">
              <Link to="/book-demo">
                <Button variant="hero" size="lg">
                  → Request a Demo
                </Button>
              </Link>
              <Link to="/product">
                <Button variant="glass" size="lg">
                  → Explore the GenAI Engine
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group p-8 bg-gradient-card backdrop-blur-sm border border-border rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-glow-primary hover:border-primary/50">
              <div className="inline-flex p-4 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-700/20 mb-6 group-hover:from-orange-500/30 group-hover:to-orange-700/30 transition-all">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Secure by Design</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your data exists in one place: yours. Build AI systems where every byte, every computation, every insight remains locked within your perimeter. What you create, stays created—on your terms, in your environment.
              </p>
            </div>

            <div className="group p-8 bg-gradient-card backdrop-blur-sm border border-border rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-glow-secondary hover:border-secondary/50">
              <div className="inline-flex p-4 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-700/20 mb-6 group-hover:from-purple-500/30 group-hover:to-purple-700/30 transition-all">
                <Server className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Total Control, Zero Compromise</h3>
              <p className="text-muted-foreground leading-relaxed">
                Run intelligence operations that answer to no one but you. Air-gapped AI that thinks locally, acts instantly, and never phones home. Your infrastructure becomes the engine—self-contained, unstoppable, entirely yours.
              </p>
            </div>

            <div className="group p-8 bg-gradient-card backdrop-blur-sm border border-border rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-glow-primary hover:border-cyan-500/50">
              <div className="inline-flex p-4 rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-700/20 mb-6 group-hover:from-cyan-500/30 group-hover:to-cyan-700/30 transition-all">
                <Zap className="h-8 w-8 text-cyan-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Intelligent Orchestration</h3>
              <p className="text-muted-foreground leading-relaxed">
                Watch chaos become choreography. Thread together processes that used to take weeks into sequences that complete before lunch. Turn knowledge workers into knowledge commanders, armed with AI that executes at thought-speed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;

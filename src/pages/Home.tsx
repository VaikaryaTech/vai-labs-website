import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { Shield, Server, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import homeHeroBackground from "@/assets/home-hero-background.jpg";
import indiaFlag from "@/assets/india-flag.svg";
import { ParticleNetwork } from "@/components/ParticleNetwork";
import { CyberGrid } from "@/components/CyberGrid";
import { EcosystemShowcase } from "@/components/EcosystemShowcase";
import { IndustryGrid } from "@/components/IndustryGrid";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { StatsCounter } from "@/components/StatsCounter";


const Home = () => {
  const features = useScrollReveal<HTMLDivElement>();

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
        {/* Ambient dark-mode mesh glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(260_60%_25%/0.3),transparent_50%)] animate-pulse [animation-duration:6s]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(12_100%_50%/0.2),transparent_50%)] animate-pulse [animation-duration:8s]" />
        <CyberGrid />
        <ParticleNetwork />
        
        <div className="container mx-auto px-6 py-32 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8 animate-slide-in">
            {/* Air-Gapped Status Badge */}
            <div className="flex justify-center">
              <div className="glass inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-emerald-400/40 text-sm font-semibold tracking-[0.18em] text-foreground/90 shadow-[0_0_30px_hsl(152_80%_50%/0.25)] animate-float">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_12px_rgba(52,211,153,1)]"></span>
                </span>
                AIR-GAPPED AI ACTIVE
              </div>
            </div>


            <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
              Unlock Tomorrow's Potential
              <br />
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Securely, Locally, Intelligently
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-foreground/70 leading-relaxed max-w-4xl mx-auto font-bold">
              VAI LABS delivers enterprise-grade Generative AI, built for your environment. Secure your innovation: Our engine runs entirely within your infrastructure—guaranteeing no cloud data leakage and zero internet dependency.
            </p>

            <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl mx-auto">
              Embrace the next generation of AI that is secure, compliant, and fully scalable. Enhance innovation, automate complex workflows, and accelerate decision intelligence—all strictly within your trusted environment.
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-8">
              <Link to="/book-demo">
                <Button variant="hero" size="lg">
                  → Request a Demo
                </Button>
              </Link>
            </div>

            <div className="flex items-center justify-center gap-3 pt-6">
              <img src={indiaFlag} alt="India Flag" className="h-8 w-auto rounded shadow-md" />
              <span className="text-lg font-semibold text-muted-foreground">Proudly Made in India</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
          <h2 className="sr-only">Key Features</h2>
          <div
            ref={features.ref}
            className={`stagger-reveal grid md:grid-cols-3 gap-8 max-w-6xl mx-auto ${features.isVisible ? "is-visible" : ""}`}
          >
            <div className="group p-8 glass rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-primary hover:border-primary/50">
              <div className="inline-flex p-4 rounded-lg bg-gradient-to-br from-orange-500/30 to-orange-700/20 mb-6 backdrop-blur-sm group-hover:from-orange-500/40 group-hover:to-orange-700/30 transition-all">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Secure by Design</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your data exists in one place: yours. Build AI systems where every byte, every computation, every insight remains locked within your perimeter. What you create, stays created—on your terms, in your environment.
              </p>
            </div>

            <div className="group p-8 glass rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-secondary hover:border-secondary/50">
              <div className="inline-flex p-4 rounded-lg bg-gradient-to-br from-purple-500/30 to-purple-700/20 mb-6 backdrop-blur-sm group-hover:from-purple-500/40 group-hover:to-purple-700/30 transition-all">
                <Server className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Total Control, Zero Compromise</h3>
              <p className="text-muted-foreground leading-relaxed">
                Run intelligence operations that answer to no one but you. Air-gapped AI that thinks locally, acts instantly, and never phones home. Your infrastructure becomes the engine—self-contained, unstoppable, entirely yours.
              </p>
            </div>

            <div className="group p-8 glass rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-primary hover:border-cyan-500/50">
              <div className="inline-flex p-4 rounded-lg bg-gradient-to-br from-cyan-500/30 to-cyan-700/20 mb-6 backdrop-blur-sm group-hover:from-cyan-500/40 group-hover:to-cyan-700/30 transition-all">
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

      <StatsCounter />

      <IndustryGrid />
      <EcosystemShowcase />


      <Footer />
    </div>
  );
};

export default Home;

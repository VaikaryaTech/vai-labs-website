import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight,
  Lock,
  Package,
  Settings,
  Palette,
  MessageSquare,
  Monitor,
  FileText as FileTextIcon,
  FileText,
  Download,
  Apple,
  Smartphone,
  Globe
} from "lucide-react";
import { Link } from "react-router-dom";
import bgMobile from "@/assets/bg-mobile.jpg";

const KognixMobile = () => {
  const coreCapabilities = [
    {
      icon: Lock,
      title: "Local Data Storage",
      description: "Your conversations and data are stored securely on your device, ensuring complete privacy and control"
    },
    {
      icon: Package,
      title: "No-Fuss Installation",
      description: "Easy-to-use downloadable packages for Windows, Mac, and Linux. No complex setup required"
    },
    {
      icon: Settings,
      title: "Multi-Model Support",
      description: "Connect to OpenAI, Azure OpenAI, Claude, Google Gemini Pro, and local models via Ollama"
    },
    {
      icon: Palette,
      title: "Integrated Image Generation",
      description: "Generate stunning images directly within the app using DALL-E 3 integration"
    },
    {
      icon: MessageSquare,
      title: "Enhanced Chat Capabilities",
      description: "Advanced prompting, Prompt Library, message quoting, and streaming replies for rapid interactions"
    },
    {
      icon: FileTextIcon,
      title: "Professional Formatting",
      description: "Full support for Markdown, LaTeX, and syntax highlighting for code blocks"
    }
  ];

  const platforms = [
    {
      icon: Monitor,
      title: "Desktop",
      description: "Native applications for Windows, macOS, and Linux",
      platforms: ["Windows", "macOS", "Linux"]
    },
    {
      icon: Smartphone,
      title: "Mobile",
      description: "Native iOS and Android applications with full feature parity",
      platforms: ["iOS", "Android"]
    },
    {
      icon: Globe,
      title: "Web",
      description: "Progressive web app accessible from any modern browser",
      platforms: ["Chrome", "Safari", "Firefox"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section - Brochure Style */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={bgMobile} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-6 px-4 py-2" variant="secondary">
              User Interface
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-[image:var(--gradient-kognix)] bg-clip-text text-transparent">KOGNIX</span>{" "}
              <span className="text-cyan-accent">Mobile</span>
            </h1>
            
            <p className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              The Universal Desktop & Mobile Client
            </p>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              A beautiful, privacy-first AI client for all your devices. Connect to any model, 
              keep your data local, and enjoy a seamless experience across platforms.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/book-demo">
                <Button size="lg" className="group w-full sm:w-auto">
                  Schedule Demo
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics Banner */}
      <section className="py-12 bg-gradient-hero border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "6+", label: "Platforms Supported" },
              { value: "100%", label: "Data Privacy" },
              { value: "20+", label: "AI Models" },
              { value: "0", label: "Cloud Dependencies" },
            ].map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-cyan-accent mb-2">
                  {metric.value}
                </div>
                <p className="text-sm text-muted-foreground font-medium">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Core Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need for a powerful, private AI experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {coreCapabilities.map((capability, index) => (
              <Card 
                key={index}
                className="p-8 bg-gradient-card backdrop-blur-sm border-border hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <capability.icon className="h-7 w-7 text-cyan-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">{capability.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {capability.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Platform Availability */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(185_80%_40%/0.15),transparent_60%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Available Everywhere
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              One client, all platforms. Seamless experience across all your devices.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {platforms.map((platform, index) => (
              <Card 
                key={index}
                className="p-8 bg-card/50 backdrop-blur-sm border-border text-center hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center mx-auto mb-6">
                  <platform.icon className="h-8 w-8 text-cyan-500" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{platform.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {platform.description}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {platform.platforms.map((p, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {p}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Model Support */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Connect to Any Model
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  KOGNIX Mobile supports a wide range of AI models, from cloud providers to local installations. 
                  Switch between models seamlessly while keeping your data private.
                </p>
                
                <div className="space-y-4">
                  {[
                    "OpenAI (GPT-4, GPT-4o, GPT-3.5)",
                    "Anthropic Claude (Claude 3 Opus, Sonnet, Haiku)",
                    "Google Gemini Pro & Ultra",
                    "Azure OpenAI Service",
                    "Local Models via Ollama (Llama 2, Mistral, Mixtral)",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Settings className="h-3 w-3 text-cyan-500" />
                      </div>
                      <p className="text-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {["OpenAI", "Claude", "Gemini", "Ollama"].map((name, index) => (
                  <Card 
                    key={index}
                    className="p-6 bg-gradient-card border-border text-center hover:border-cyan-500/30 transition-colors"
                  >
                    <div className="text-lg font-semibold text-foreground">{name}</div>
                    <p className="text-sm text-muted-foreground mt-1">Supported</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brochure Download CTA */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,hsl(12_100%_50%/0.1),transparent_60%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 bg-gradient-to-br from-cyan-500/10 via-background to-primary/5 border-cyan-500/20">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-20 h-20 rounded-2xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <FileText className="h-10 w-10 text-cyan-500" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">
                    <span className="bg-[image:var(--gradient-kognix)] bg-clip-text text-transparent">KOGNIX</span>{" "}
                    <span className="text-cyan-accent">Mobile</span> Product Brief
                  </h3>
                  <p className="text-muted-foreground">
                    Download our comprehensive product brief with feature details, 
                    platform compatibility, and deployment options.
                  </p>
                </div>
                <Button size="lg" className="group flex-shrink-0">
                  <FileText className="mr-2 h-5 w-5" />
                  Download Brief
                  <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for a Better AI Experience?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Experience{" "}
            <span className="bg-[image:var(--gradient-kognix)] bg-clip-text text-transparent font-semibold">KOGNIX</span>{" "}
            <span className="text-cyan-accent font-semibold">Mobile</span>{" "}
            — the privacy-first AI client for everyone.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-demo">
              <Button size="lg" variant="hero" className="group w-full sm:w-auto">
                Schedule a Demo
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
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

export default KognixMobile;

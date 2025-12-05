import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { Shield, Link2, Boxes, DollarSign, TrendingDown, Upload, Brain, Sparkles, Download, RefreshCw, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import securityImg from "@/assets/genai-security.jpg";
import capabilitiesImg from "@/assets/genai-capabilities.jpg";
import costRoiImg from "@/assets/genai-cost-roi.jpg";

const Product = () => {
  const features = [
    {
      icon: Shield,
      title: "Isolated Environments",
      description: "Deploy in completely isolated environments for maximum data security and compliance."
    },
    {
      icon: Link2,
      title: "Secure Connectivity",
      description: "Optional secure connectivity to external systems when required, with full control."
    },
    {
      icon: Boxes,
      title: "Native API Gateway",
      description: "Seamless integration with existing business applications through our secure API gateway."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(260_60%_25%/0.2),transparent_70%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-slide-in">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                GenAI Engine
              </span>
            </h1>
            
            <p className="text-2xl lg:text-3xl font-semibold text-foreground">
              Powered by <span className="bg-[image:var(--gradient-kognix)] bg-clip-text text-transparent">KOGNIX</span> - Your Secure and Flexible Generative AI Framework
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Engineered with paramount focus on data security and flexibility, <span className="bg-[image:var(--gradient-kognix)] bg-clip-text text-transparent font-semibold">KOGNIX</span> is a versatile solution 
              designed for seamless integration across diverse business domains, empowering organizations to 
              leverage the transformative power of AI while retaining absolute control over their data.
            </p>
          </div>
        </div>
      </section>

      {/* Security & Integration */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          {/* Image Header */}
          <div className="relative h-80 rounded-2xl overflow-hidden mb-12 group">
            <img 
              src={securityImg} 
              alt="Secure AI infrastructure with advanced data protection"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h2 className="text-4xl font-bold mb-4 text-foreground">
                Unmatched Security and Integration
              </h2>
              <p className="text-xl text-foreground/80 max-w-3xl">
                <span className="bg-[image:var(--gradient-kognix)] bg-clip-text text-transparent font-semibold">KOGNIX</span>'s unique architecture offers unparalleled deployment options with continuous innovation 
                and regular updates to keep your business at the forefront of AI advancements.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-8 bg-gradient-card backdrop-blur-sm border-border hover:scale-105 transition-all duration-300 hover:shadow-glow-primary"
              >
                <feature.icon className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cost-Effectiveness */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(260_60%_25%/0.3),transparent_70%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Image Header */}
          <div className="relative h-80 rounded-2xl overflow-hidden mb-12 group">
            <img 
              src={costRoiImg} 
              alt="Cost-effective AI solution with rapid ROI visualization"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h2 className="text-4xl font-bold mb-4 text-foreground">
                Cost-Effectiveness and Rapid ROI
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border">
              <DollarSign className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Lower Implementation Costs</h3>
              <p className="text-muted-foreground leading-relaxed">
                <span className="bg-[image:var(--gradient-kognix)] bg-clip-text text-transparent font-semibold">KOGNIX</span> can be implemented at significantly lower costs compared to similar market solutions, 
                making advanced AI accessible to organizations of all sizes.
              </p>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border">
              <TrendingDown className="h-12 w-12 text-secondary mb-6" />
              <h3 className="text-2xl font-bold mb-4">Reduced Maintenance</h3>
              <p className="text-muted-foreground leading-relaxed">
                Lower maintenance costs reduce the total cost of ownership, enabling businesses to allocate 
                resources more efficiently while driving innovation.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Link Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="relative h-80 rounded-2xl overflow-hidden mb-12 group">
              <img 
                src={capabilitiesImg} 
                alt="AI neural network showcasing advanced GenAI capabilities"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                <h2 className="text-4xl font-bold mb-4 text-foreground">Explore Our Comprehensive Features</h2>
                <p className="text-xl text-foreground/80 mb-8">
                  Discover the full range of capabilities and features that power <span className="bg-[image:var(--gradient-kognix)] bg-clip-text text-transparent font-semibold">KOGNIX</span>
                </p>
                <Link to="/features">
                  <Button size="lg" className="group">
                    View All Features
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(12_100%_50%/0.2),transparent_70%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8 mb-16">
            <h2 className="text-4xl font-bold mb-4">How <span className="bg-gradient-kognix bg-clip-text text-transparent">KOGNIX</span> Works</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <span className="bg-[image:var(--gradient-kognix)] bg-clip-text text-transparent font-semibold">KOGNIX</span> leverages advanced deep learning models, including large language models (LLMs) and 
              diffusion models, to understand context, generate novel outputs, and continually refine its 
              capabilities. With its secure architecture and flexible deployment options, it&apos;s more than 
              just orchestration; it&apos;s intelligent creation with complete data sovereignty.
            </p>
          </div>

          {/* Flow Diagram */}
          <div className="max-w-6xl mx-auto">
            {/* Desktop Flow - Horizontal */}
            <div className="hidden lg:flex items-center justify-between gap-4">
              {/* Step 1 */}
              <div className="flex-1">
                <Card className="p-6 bg-gradient-card backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 h-full">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500/20 to-orange-700/20 flex items-center justify-center">
                      <Upload className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">1. Data Input</h3>
                    <p className="text-sm text-muted-foreground">
                      Your data stays secure within your infrastructure
                    </p>
                  </div>
                </Card>
              </div>

              <ArrowRight className="h-8 w-8 text-primary flex-shrink-0" />

              {/* Step 2 */}
              <div className="flex-1">
                <Card className="p-6 bg-gradient-card backdrop-blur-sm border-border hover:border-secondary/50 transition-all duration-300 h-full">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-700/20 flex items-center justify-center">
                      <Brain className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold">2. AI Processing</h3>
                    <p className="text-sm text-muted-foreground">
                      Advanced LLMs analyze and understand context
                    </p>
                  </div>
                </Card>
              </div>

              <ArrowRight className="h-8 w-8 text-secondary flex-shrink-0" />

              {/* Step 3 */}
              <div className="flex-1">
                <Card className="p-6 bg-gradient-card backdrop-blur-sm border-border hover:border-cyan-500/50 transition-all duration-300 h-full">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-cyan-700/20 flex items-center justify-center">
                      <Sparkles className="h-8 w-8 text-cyan-500" />
                    </div>
                    <h3 className="text-xl font-bold">3. Generation</h3>
                    <p className="text-sm text-muted-foreground">
                      Create novel outputs and intelligent insights
                    </p>
                  </div>
                </Card>
              </div>

              <ArrowRight className="h-8 w-8 text-cyan-500 flex-shrink-0" />

              {/* Step 4 */}
              <div className="flex-1">
                <Card className="p-6 bg-gradient-card backdrop-blur-sm border-border hover:border-green-500/50 transition-all duration-300 h-full">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500/20 to-green-700/20 flex items-center justify-center">
                      <Download className="h-8 w-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold">4. Output</h3>
                    <p className="text-sm text-muted-foreground">
                      Deliver actionable results and solutions
                    </p>
                  </div>
                </Card>
              </div>

              <ArrowRight className="h-8 w-8 text-green-500 flex-shrink-0" />

              {/* Step 5 */}
              <div className="flex-1">
                <Card className="p-6 bg-gradient-card backdrop-blur-sm border-border hover:border-pink-500/50 transition-all duration-300 h-full">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500/20 to-pink-700/20 flex items-center justify-center">
                      <RefreshCw className="h-8 w-8 text-pink-500" />
                    </div>
                    <h3 className="text-xl font-bold">5. Learning</h3>
                    <p className="text-sm text-muted-foreground">
                      Continuous refinement and improvement
                    </p>
                  </div>
                </Card>
              </div>
            </div>

            {/* Mobile/Tablet Flow - Vertical */}
            <div className="lg:hidden space-y-6">
              {/* Step 1 */}
              <div>
                <Card className="p-6 bg-gradient-card backdrop-blur-sm border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500/20 to-orange-700/20 flex items-center justify-center flex-shrink-0">
                      <Upload className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">1. Data Input</h3>
                      <p className="text-sm text-muted-foreground">
                        Your data stays secure within your infrastructure
                      </p>
                    </div>
                  </div>
                </Card>
                <div className="flex justify-center py-3">
                  <ArrowRight className="h-8 w-8 text-primary rotate-90" />
                </div>
              </div>

              {/* Step 2 */}
              <div>
                <Card className="p-6 bg-gradient-card backdrop-blur-sm border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-700/20 flex items-center justify-center flex-shrink-0">
                      <Brain className="h-8 w-8 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">2. AI Processing</h3>
                      <p className="text-sm text-muted-foreground">
                        Advanced LLMs analyze and understand context
                      </p>
                    </div>
                  </div>
                </Card>
                <div className="flex justify-center py-3">
                  <ArrowRight className="h-8 w-8 text-secondary rotate-90" />
                </div>
              </div>

              {/* Step 3 */}
              <div>
                <Card className="p-6 bg-gradient-card backdrop-blur-sm border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-cyan-700/20 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="h-8 w-8 text-cyan-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">3. Generation</h3>
                      <p className="text-sm text-muted-foreground">
                        Create novel outputs and intelligent insights
                      </p>
                    </div>
                  </div>
                </Card>
                <div className="flex justify-center py-3">
                  <ArrowRight className="h-8 w-8 text-cyan-500 rotate-90" />
                </div>
              </div>

              {/* Step 4 */}
              <div>
                <Card className="p-6 bg-gradient-card backdrop-blur-sm border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500/20 to-green-700/20 flex items-center justify-center flex-shrink-0">
                      <Download className="h-8 w-8 text-green-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">4. Output</h3>
                      <p className="text-sm text-muted-foreground">
                        Deliver actionable results and solutions
                      </p>
                    </div>
                  </div>
                </Card>
                <div className="flex justify-center py-3">
                  <ArrowRight className="h-8 w-8 text-green-500 rotate-90" />
                </div>
              </div>

              {/* Step 5 */}
              <div>
                <Card className="p-6 bg-gradient-card backdrop-blur-sm border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500/20 to-pink-700/20 flex items-center justify-center flex-shrink-0">
                      <RefreshCw className="h-8 w-8 text-pink-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">5. Learning</h3>
                      <p className="text-sm text-muted-foreground">
                        Continuous refinement and improvement
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Apart */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Sets <span className="bg-gradient-kognix bg-clip-text text-transparent">KOGNIX</span> Apart</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 bg-gradient-card backdrop-blur-sm border-border text-center hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-primary">Security by Design</h3>
              <p className="text-muted-foreground leading-relaxed">
                Built with robust safeguards and isolation capabilities to ensure complete data protection.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-card backdrop-blur-sm border-border text-center hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-secondary">Cost-Effective Solution</h3>
              <p className="text-muted-foreground leading-relaxed">
                Significantly lower implementation and maintenance costs compared to market alternatives.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-card backdrop-blur-sm border-border text-center hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-cyan-500">Rapid ROI</h3>
              <p className="text-muted-foreground leading-relaxed">
                Quick return on investment with lower total cost of ownership for sustainable growth.
              </p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/business-applications">
              <Button variant="hero" size="lg">
                Explore Business Applications
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Product;

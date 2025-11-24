import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import observabilityBg from "@/assets/observability-hero-background.jpg";

const Observability = () => {
  const features = [
    {
      icon: "🔎",
      title: "LLM Application Observability",
      description: "Instrument your application to ingest traces for every LLM call, retrieval step, and agent action. Inspect and debug complex logs and user sessions to identify bottlenecks and failures."
    },
    {
      icon: "💡",
      title: "Prompt Management & Versioning",
      description: "Centralize and version control your prompts for collaborative iteration. Shorten the feedback loop without adding application latency thanks to strong caching."
    },
    {
      icon: "⭐",
      title: "Comprehensive Evaluations (Evals)",
      description: "Adapt evaluation to your needs with support for LLM-as-a-judge, user feedback collection, manual labeling, and custom evaluation pipelines via flexible APIs/SDKs."
    },
    {
      icon: "🧪",
      title: "Datasets for Benchmarking",
      description: "Create test sets and benchmarks (Datasets) for pre-deployment testing and continuous improvement, integrating seamlessly with frameworks like LangChain and LlamaIndex."
    },
    {
      icon: "🕹️",
      title: "LLM Playground",
      description: "A dedicated tool for testing and iterating on prompts and model configurations, allowing developers to jump directly from a bad trace result to prompt iteration."
    },
    {
      icon: "🔗",
      title: "Full Integration Ecosystem",
      description: "Features deep integration with major tools via drop-in replacements, including OpenAI SDK, Langchain, LlamaIndex, LiteLLM, and OpenTelemetry."
    },
    {
      icon: "☁️",
      title: "Flexible Deployment",
      description: "Easily run KOGNIX Analytics Cloud (managed) or Self-Host on your own infrastructure using Docker Compose, Kubernetes (Helm), or Terraform templates for various cloud providers."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src={observabilityBg} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/90 to-background/80" />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 px-4 py-2 text-sm font-semibold" variant="secondary">
              Analytics & Observability
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-[image:var(--gradient-kognix)] bg-clip-text text-transparent">KOGNIX Analytics</span>
            </h1>
            <p className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
              The Platform for Observability, Evaluation, and Debugging
            </p>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Gain complete visibility into your LLM applications with comprehensive observability, powerful evaluation tools, and seamless debugging capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, idx) => (
                <Card key={idx} className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border-border/50 hover:border-primary/30">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="text-4xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2 flex items-center gap-2">
                          {feature.title}
                          <CheckCircle2 className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Why Choose <span className="bg-[image:var(--gradient-kognix)] bg-clip-text text-transparent">KOGNIX Analytics</span>?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Complete Visibility</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Monitor every aspect of your LLM applications with detailed traces, logs, and metrics. Quickly identify issues and optimize performance across your entire AI stack.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Continuous Improvement</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Leverage comprehensive evaluation tools and datasets to benchmark performance, test changes, and ensure your AI applications maintain high quality standards.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Developer-Friendly</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Integrate seamlessly with your existing tools and workflows through native SDKs, drop-in replacements, and support for popular frameworks like LangChain and LlamaIndex.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Deploy Your Way</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Choose between managed cloud hosting or self-hosting on your own infrastructure with Docker, Kubernetes, or Terraform templates for complete control.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Gain Complete Visibility?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start monitoring, evaluating, and optimizing your LLM applications with KOGNIX Analytics today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors">
              Get Started
            </a>
            <a href="/book-demo" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-border bg-card text-foreground font-semibold hover:bg-card/70 transition-colors">
              Schedule a Demo
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Observability;

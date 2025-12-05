import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import pipelineBg from "@/assets/product-pipeline-background.jpg";

const ProductPipeline = () => {
  const products = [
    {
      title: "KOGNIX Intelligence",
      subtitle: "Swap for Any LLM. One Unified API. Enterprise Ready.",
      badge: "AI Infrastructure",
      features: [
        {
          icon: "🚀",
          title: "One-Command Model Serving",
          description: "Deploy and serve large language, speech, and multimodal models effortlessly with a single command, drastically simplifying your workflow."
        },
        {
          icon: "🌐",
          title: "Broad Model Ecosystem",
          description: "Get instant support for state-of-the-art open-source models, including LLMs, Text Embedding Models, Image Models (Text-to-Image), and Audio Models."
        },
        {
          icon: "🔌",
          title: "OpenAI-Compatible API",
          description: "Utilize a flexible, unified RESTful API that is largely compatible with OpenAI, including support for Function Calling. Interact via RPC, CLI, or the user-friendly WebUI."
        },
        {
          icon: "⚡",
          title: "Smart Hardware Acceleration",
          description: "Achieve peak performance with intelligent utilization of heterogeneous hardware, maximizing throughput on your GPUs and CPUs."
        },
        {
          icon: "⚖️",
          title: "Seamless Distributed Scaling",
          description: "Effortlessly distribute model inference across multiple devices and machines to meet demanding, high-traffic production needs."
        },
        {
          icon: "⚙️",
          title: "Engine & Platform Versatility",
          description: "Go beyond the standard with support for diverse inference engines (like GGML, TensorRT) and platforms (CPU, Metal), ensuring maximum flexibility."
        },
        {
          icon: "🤝",
          title: "Deep Ecosystem Integrations",
          description: "Seamlessly connect with essential AI/ML tools like LangChain, LlamaIndex, Dify, and Chatbox to build complete applications faster."
        }
      ]
    },
    {
      title: "KOGNIX Mobile",
      subtitle: "The Universal Desktop & Mobile Client",
      badge: "User Interface",
      features: [
        {
          icon: "🔒",
          title: "Local Data Storage",
          description: "Your conversations and data are stored securely on your device, ensuring complete privacy and control without data loss."
        },
        {
          icon: "📦",
          title: "No-Fuss Installation",
          description: "Get started immediately with easy-to-use downloadable packages for Windows, Mac, and Linux. No complex setup or deployment is required!"
        },
        {
          icon: "⚙️",
          title: "Multi-Model Support",
          description: "Connect seamlessly to a wide range of cutting-edge models, including OpenAI (ChatGPT), Azure OpenAI, Claude, Google Gemini Pro, and local models via Ollama (llama2, Mistral, Mixtral, etc.)."
        },
        {
          icon: "🎨",
          title: "Integrated Image Generation",
          description: "Generate stunning images directly within the app using Dall-E-3 integration."
        },
        {
          icon: "💬",
          title: "Enhanced Chat Capabilities",
          description: "Utilize features like advanced prompting, a Prompt Library for reusable queries, message quoting, and streaming replies for rapid interactions."
        },
        {
          icon: "💻",
          title: "Cross-Platform Availability",
          description: "KOGNIX Mobile is built for everyone, supporting Windows, Mac, and Linux desktop users, along with web, iOS, and Android versions."
        },
        {
          icon: "📜",
          title: "Professional Formatting",
          description: "Generate messages with full support for Markdown, LaTeX, and syntax highlighting for code blocks, enhancing readability and presentation."
        }
      ]
    },
    {
      title: "KOGNIX Workflow",
      subtitle: "The Platform to Build and Deploy AI Agent Workflows",
      badge: "Workflow Automation",
      features: [
        {
          icon: "🎨",
          title: "Visual Workflow Builder",
          description: "Design complex agent applications visually on a canvas. Simply connect agents, tools, and custom blocks, then run them instantly."
        },
        {
          icon: "💬",
          title: "Copilot-Powered Development",
          description: "Accelerate your building process with Copilot, which allows you to generate nodes, fix errors, and rapidly iterate on workflows using natural language instructions."
        },
        {
          icon: "📚",
          title: "Integrated RAG & Knowledge Bases",
          description: "Effortlessly integrate Vector Databases by uploading your documents. Let your agents answer questions accurately, grounded in your specific, private content."
        },
        {
          icon: "🛠️",
          title: "Self-Hosted or Cloud Deployment",
          description: "Deploy on your own infrastructure using Docker Compose, Helm (Kubernetes), or the NPM package, or start instantly with the cloud-hosted option."
        },
        {
          icon: "💡",
          title: "Local Model Compatibility",
          description: "Easily run your workflows using local AI models via Ollama, allowing you to keep everything on-premise without relying on external APIs."
        },
        {
          icon: "💻",
          title: "Modern Tech Stack",
          description: "Built on a robust, modern foundation including Next.js, Bun runtime, PostgreSQL with pgvector, and Drizzle ORM for high performance and scalability."
        },
        {
          icon: "⚙️",
          title: "Tool & Function Integration",
          description: "Leverage advanced features and tools, including Speech-to-Text (via OpenAI Whisper/ElevenLabs), Realtime Sockets (via Socket.io), and Background Jobs (via Trigger.dev)."
        }
      ]
    },
    {
      title: "KOGNIX AI Developer",
      subtitle: "From Prototype to Production. The Complete Development and Operation Platform for LLM Agents",
      badge: "LLMOps Platform",
      features: [
        {
          icon: "🎨",
          title: "Visual Workflow Builder",
          description: "Build and test powerful AI workflows using an intuitive visual canvas. Connect agents, tools, and custom logic to create sophisticated, multi-step applications."
        },
        {
          icon: "⚙️",
          title: "Comprehensive Model Management",
          description: "Seamlessly integrate with hundreds of proprietary and open-source LLMs (GPT, Llama3, Claude, etc.) from dozens of providers and self-hosted solutions, all through one system."
        },
        {
          icon: "📚",
          title: "Advanced RAG Pipelines",
          description: "Implement extensive Retrieval-Augmented Generation (RAG) capabilities. Easily process documents (PDFs, PPTs, etc.) and ensure your agents answer questions accurately, grounded in your private knowledge base."
        },
        {
          icon: "🛠️",
          title: "Powerful Agent Capabilities",
          description: "Define intelligent agents using LLM Function Calling or ReAct methodology. Access over 50 built-in tools (e.g., Google Search, DALL·E, WolframAlpha) or integrate custom tools."
        },
        {
          icon: "💻",
          title: "Prompt IDE & Iteration",
          description: "Use an intuitive interface to craft, compare, and optimize prompts, shortening the development cycle and enabling the addition of features like text-to-speech to your chat apps."
        },
        {
          icon: "📊",
          title: "Full-Cycle LLMOps",
          description: "Monitor and analyze application logs and performance over time. Continuously improve prompts, datasets, and models based on real-world production data and annotations."
        },
        {
          icon: "🔗",
          title: "Backend-as-a-Service (BaaS)",
          description: "All core features—including workflows, RAG, and agents—are available via robust APIs and SDKs. Effortlessly integrate KOGNIX AI Developer functionality into your existing business logic."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src={pipelineBg} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/90 to-background/80" />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 px-4 py-2 text-sm font-semibold" variant="secondary">
              Coming Soon
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-[image:var(--gradient-kognix)] bg-clip-text text-transparent">
              Product Pipeline
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explore our upcoming suite of enterprise-grade AI solutions designed to transform how organizations build, deploy, and scale intelligent systems.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="space-y-32">
            {products.map((product, idx) => (
              <div key={idx} className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                  <Badge className="mb-4" variant="outline">
                    {product.badge}
                  </Badge>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    <span className="bg-gradient-kognix bg-clip-text text-transparent">{product.title}</span>
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    {product.subtitle}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {product.features.map((feature, featureIdx) => (
                    <Card key={featureIdx} className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border-border/50 hover:border-primary/30">
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
                          {feature.description.split('KOGNIX').map((part, i, arr) => (
                            <span key={i}>
                              {part}
                              {i < arr.length - 1 && (
                                <span className="bg-[image:var(--gradient-kognix)] bg-clip-text text-transparent font-semibold">KOGNIX</span>
                              )}
                            </span>
                          ))}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience the Future?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Stay informed about our product releases and be among the first to gain access to these transformative AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors">
              Request Early Access
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

export default ProductPipeline;

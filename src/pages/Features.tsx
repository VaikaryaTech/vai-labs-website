import { Database, FileText, Workflow, Settings, MessageSquare, Network, LayoutDashboard } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Features() {
  const featureCategories = [
    {
      icon: Network,
      title: "Core Intelligence & Retrieval Engine",
      description: "KOGNIX's Retrieval-Augmented Generation (RAG) engine powers precise, explainable, and context-aware intelligence.",
      kognixInDesc: true,
      color: "from-blue-500/20 to-blue-600/20",
      features: [
        {
          name: "Deep AI Intelligence",
          description: "Understands and extracts meaning from complex unstructured data — PDFs, tables, images, and hybrid layouts — ensuring every output is rooted in factual accuracy."
        },
        {
          name: "Source-Cited Responses",
          description: "Every generated insight links back to its original source, minimizing hallucinations and improving trustworthiness."
        },
        {
          name: "Hybrid Retrieval Engine",
          description: "Combines vector-based semantic search with traditional keyword search for unparalleled recall and precision."
        },
        {
          name: "Smart Re-ranking Pipeline",
          description: "Dynamically reorders retrieved data to surface the most relevant and high-confidence information first."
        },
        {
          name: "High-Performance Indexing",
          description: "Optimized for speed and scale with native integrations for Infinity, Elasticsearch, and OpenSearch."
        },
        {
          name: "Tiered Knowledge Ranking",
          description: "Lets you prioritize critical datasets using a custom PageRank-style system for smarter retrieval decisions."
        },
        {
          name: "Graph-Aware Reasoning",
          description: "Supports Graph workflows for relationship-based retrieval and complex multi-hop reasoning."
        }
      ]
    },
    {
      icon: FileText,
      title: "Advanced Data Ingestion & Processing",
      description: "KOGNIX transforms fragmented enterprise data into structured, searchable intelligence.",
      color: "from-purple-500/20 to-purple-600/20",
      features: [
        {
          name: "Universal Data Compatibility",
          description: "Seamlessly ingests content from documents (PDF, Word, TXT, Markdown), spreadsheets (CSV, XLSX), slides, web pages, and even media files (images, audio)."
        },
        {
          name: "Smart Chunking Framework",
          description: "Automatically segments documents using layout-aware templates (Q&A, Legal, Resume, Research, Tabular, etc.) to maintain semantic context."
        },
        {
          name: "DeepDoc Parsing Engine",
          description: "Performs advanced layout analysis, OCR, and table recognition for even the most complex PDFs."
        },
        {
          name: "Human-in-the-Loop Controls",
          description: "Review, edit, and refine extracted chunks or add keywords through an intuitive visual interface."
        },
        {
          name: "RAPTOR Pipeline",
          description: "Recursive, abstractive document processing for hierarchical text understanding."
        },
        {
          name: "Knowledge Graph Generation",
          description: "Builds concept networks and mind maps to power context-driven reasoning."
        },
        {
          name: "AI-Powered Preprocessing",
          description: "Automatically extracts keywords and generates synthetic questions to enhance future query accuracy."
        },
        {
          name: "Long-Context Retrieval",
          description: "Supports extensive document contexts for enterprise-scale comprehension."
        }
      ]
    },
    {
      icon: Workflow,
      title: "Agentic AI & Workflow Automation",
      description: "Transform business processes into self-operating intelligence with KOGNIX Agents.",
      color: "from-green-500/20 to-green-600/20",
      features: [
        {
          name: "Visual Agent Builder",
          description: "A drag-and-drop, low-code canvas for designing AI-driven workflows and RAG pipelines — no programming required."
        },
        {
          name: "Multi-Agent Deep Research",
          description: "Enables collaborative, multi-step reasoning between agents to handle complex, layered problems."
        },
        {
          name: "Tool & API Orchestration",
          description: "Agents can execute external tools such as live web search, SQL querying, or content generation steps."
        },
        {
          name: "Pre-Built Agent Templates",
          description: "Ready-to-use agent blueprints for use cases like customer support, document summarization, SEO content, and translations."
        },
        {
          name: "Agent-to-Agent Collaboration",
          description: "Build distributed multi-agent systems that communicate to complete composite enterprise tasks."
        },
        {
          name: "Debug & Trace Execution",
          description: "Run step-by-step debugging to test and refine agent logic in real time."
        }
      ]
    },
    {
      icon: Settings,
      title: "Model Ecosystem & Integrations",
      description: "Freedom to choose, integrate, and scale with your preferred AI stack.",
      color: "from-orange-500/20 to-orange-600/20",
      features: [
        {
          name: "Broad Model Support",
          description: "Compatible with over 40 AI providers and 400+ LLMs and embedding models, including OpenAI, DeepSeek, Qwen, and ModelScope."
        },
        {
          name: "Open API Architecture",
          description: "Plug into your existing ecosystem with RESTful and Python APIs for datasets, agents, and conversations."
        },
        {
          name: "KOGNIX MCP Integration",
          description: "Unified multi-cloud management for deployments across AWS, Azure, or private data centers."
        },
        {
          name: "Adaptive Model Selection",
          description: "Choose or switch models dynamically per task or dialogue for optimized performance."
        }
      ]
    },
    {
      icon: Database,
      title: "Deployment, Management & Scalability",
      description: "Enterprise-grade performance with simple deployment and full administrative control.",
      color: "from-cyan-500/20 to-cyan-600/20",
      features: [
        {
          name: "Flexible Deployment",
          description: "Launch instantly via Docker, source install, or KOGNIX MCP for cloud-native scalability."
        },
        {
          name: "Data Storage Options",
          description: "Choose between MySQL or PostgreSQL for metadata, and MinIO, AWS S3, or Azure Blob for object storage."
        },
        {
          name: "Admin Command Line Interface (CLI)",
          description: "Manage users, monitor services, and control datasets and agents directly from the terminal."
        },
        {
          name: "Enterprise Scalability",
          description: "Built to handle large-scale deployments with high concurrency and massive data throughput."
        },
        {
          name: "Monitoring & Lifecycle Management",
          description: "Track users, datasets, and services through an integrated admin dashboard."
        }
      ]
    },
    {
      icon: MessageSquare,
      title: "Chat Experience & User Interaction",
      description: "Empower users with an intelligent, multilingual, and context-aware chat environment.",
      color: "from-pink-500/20 to-pink-600/20",
      features: [
        {
          name: "Custom AI Assistants",
          description: "Build multi-turn conversational agents tailored to your business workflows."
        },
        {
          name: "Context-Persistent Conversations",
          description: "Keeps track of previous exchanges for coherent, ongoing dialogue."
        },
        {
          name: "Configurable System Prompts",
          description: "Shape your assistant's behavior and tone using role-based system prompts."
        },
        {
          name: "Grounded AI Responses",
          description: "Restrict outputs to your dataset for compliance and control."
        },
        {
          name: "Multilingual & Cross-Language Search",
          description: "Supports multilingual UI and search for global enterprises."
        },
        {
          name: "Voice Interaction",
          description: "Integrates Text-to-Speech (TTS) via FishAudio or Tongyi Qwen for conversational AI experiences."
        },
        {
          name: "Deep Research Mode",
          description: "Enables structured reasoning across multiple data sources and contexts."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-kognix bg-clip-text text-transparent">
            KOGNIX AI Engine Features
          </h1>
          <p className="text-xl text-muted-foreground">
            Enterprise-grade AI capabilities from intelligent retrieval to autonomous agents
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl space-y-24">
          {featureCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div key={idx} className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${category.color} backdrop-blur-sm`}>
                    <Icon className="h-8 w-8 text-foreground" />
                  </div>
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">{category.title}</h2>
                    <p className="text-lg text-muted-foreground">
                      {category.description.split('KOGNIX').map((part, i, arr) => (
                        <span key={i}>
                          {part}
                          {i < arr.length - 1 && (
                            <span className="bg-[image:var(--gradient-kognix)] bg-clip-text text-transparent font-semibold">KOGNIX</span>
                          )}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {category.features.map((feature, featureIdx) => (
                    <div 
                      key={featureIdx}
                      className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                    >
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                        {feature.name.split('KOGNIX').map((part, i, arr) => (
                          <span key={i}>
                            {part}
                            {i < arr.length - 1 && (
                              <span className="bg-[image:var(--gradient-kognix)] bg-clip-text text-transparent">KOGNIX</span>
                            )}
                          </span>
                        ))}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description.split('KOGNIX').map((part, i, arr) => (
                          <span key={i}>
                            {part}
                            {i < arr.length - 1 && (
                              <span className="bg-[image:var(--gradient-kognix)] bg-clip-text text-transparent font-semibold">KOGNIX</span>
                            )}
                          </span>
                        ))}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* KOGNIX Dashboard Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm">
              <LayoutDashboard className="h-8 w-8 text-foreground" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-kognix bg-clip-text text-transparent">KOGNIX Dashboard</h2>
              <p className="text-lg text-muted-foreground">Your Command Center for Intelligent AI Operations</p>
            </div>
          </div>

          <div className="space-y-12">
            <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
              <p className="text-foreground/90 leading-relaxed">
                The <span className="bg-[image:var(--gradient-kognix)] bg-clip-text text-transparent font-semibold">KOGNIX</span> Dashboard is a unified control center designed to give enterprises complete visibility into their AI ecosystem — from data ingestion to model orchestration. Every tile, chart, and insight is crafted for precision, speed, and transparency.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-primary">⚡ At-a-Glance Overview</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Gain instant situational awareness with a clean, minimalist layout that surfaces the most critical operational metrics:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Total Files & Datasets: Track uploaded documents and active datasets in real time.</li>
                  <li>• Active Conversations & Agents: Monitor ongoing chats, running agents, and queued workflows.</li>
                  <li>• Performance Health: See system latency, token usage, and model activity summarized on a single screen.</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-primary">🔍 System Insights</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The System Insights layer offers a live snapshot of your AI infrastructure:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• API Tokens & User Activity: Stay in control of API consumption and user canvases.</li>
                  <li>• Model Inventory: View and manage all active LLMs — personal, team, and available global models.</li>
                  <li>• Template Library: Access over 20 pre-configured canvas templates.</li>
                  <li>• File Storage Tracker: Keep an eye on total file volume and storage utilization.</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-primary">🧠 System Status Overview</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Designed for transparency and operational confidence:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Database Health: Real-time monitoring of MySQL or PostgreSQL database performance.</li>
                  <li>• Document Engine (Elasticsearch): Track shard activity, indexing latency, and search responsiveness.</li>
                  <li>• Task Executor: View job queues, lag time, and pending tasks for backend operations.</li>
                  <li>• Redis & Object Storage: Instantly verify cache performance and MinIO/S3 storage health.</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-primary">📈 Deep Insights & Analytics</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Overview section visualizes platform intelligence:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Model Token Usage: Understand consumption patterns across your deployed LLMs.</li>
                  <li>• Top Models by Usage: Identify which models drive the most business value.</li>
                  <li>• Document Type Analysis: Get a breakdown of processed content formats for better dataset planning.</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
              <h3 className="text-2xl font-bold mb-4">Why It Matters</h3>
              <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                <p>• Single-pane observability: No more switching tools to check system or agent health.</p>
                <p>• Enterprise-ready monitoring: Database, task execution, search, and storage health — all tracked live.</p>
                <p>• Instant insight into AI performance: Understand how data, models, and agents interact in real time.</p>
                <p>• Secure multi-user visibility: Role-based dashboards ensure the right people see the right insights.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="p-12 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience These Features?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              See how <span className="bg-gradient-kognix bg-clip-text text-transparent font-semibold">KOGNIX</span>'s comprehensive capabilities can transform your enterprise AI applications
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/book-demo"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Book a Demo
              </a>
              <a 
                href="/product"
                className="px-8 py-4 border border-border rounded-lg font-semibold hover:border-primary transition-colors"
              >
                Explore <span className="bg-gradient-kognix bg-clip-text text-transparent">KOGNIX</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

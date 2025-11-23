import { Card } from "@/components/ui/card";
import { Layers, Box, Zap, Users, Brain, MessageSquare, Mail, FileText, Calendar, Github } from "lucide-react";
import integrationsImg from "@/assets/platform-integrations.jpg";

const platformFeatures = [
  {
    icon: Layers,
    title: "The Nexus Canvas",
    description: "Build with intuitive power. Our visual drag-and-drop workspace lets you connect cutting-edge AI models, databases, third-party APIs, and legacy tools with simple, deliberate clicks.",
    color: "text-purple-500"
  },
  {
    icon: Box,
    title: "The Block Library",
    description: "Your tools of invention. Select from a rich ecosystem of Smart Blocks—including Processing (AI agents, functions), Logic (decision trees, loop controls), and Output (definitive responses, validation checks).",
    color: "text-blue-500"
  },
  {
    icon: Zap,
    title: "Ubiquitous Activation",
    description: "Your workflows start where your business demands. Initiate workflows via our native chat interface, robust REST APIs, webhooks, scheduled cron jobs, or direct events from partners like Slack and GitHub.",
    color: "text-orange-500"
  },
  {
    icon: Users,
    title: "Real-Time Foundry",
    description: "Treat your workflows as living architecture. Our Team Collaboration features allow simultaneous editing, real-time feedback loops, and granular permission controls for unified development.",
    color: "text-cyan-500"
  }
];

const integrationCategories = [
  {
    category: "Cognitive Powerhouses",
    items: "OpenAI, Anthropic, Google, Groq, Cerebras, Ollama",
    icon: Brain,
    color: "text-purple-500"
  },
  {
    category: "Communication Hubs",
    items: "Gmail, Slack, Teams, Telegram, WhatsApp",
    icon: MessageSquare,
    color: "text-blue-500"
  },
  {
    category: "Productivity Platforms",
    items: "Notion, Google Sheets, Airtable, Monday.com",
    icon: FileText,
    color: "text-cyan-500"
  },
  {
    category: "Development & DevOps",
    items: "GitHub, Jira, Linear, Advanced Browser Control",
    icon: Github,
    color: "text-orange-500"
  },
  {
    category: "Search & Knowledge",
    items: "Google Search, Perplexity, Firecrawl, Exa AI",
    icon: Mail,
    color: "text-green-500"
  },
  {
    category: "Data & Persistence",
    items: "PostgreSQL, MySQL, Supabase, Pinecone, Qdrant",
    icon: Calendar,
    color: "text-pink-500"
  }
];

export const Features = () => {
  return (
    <>
      {/* Platform Features Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Platform{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">Capabilities</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Engineered for speed, collaboration, and unmatched capability
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {platformFeatures.map((feature, index) => (
              <Card 
                key={index}
                className="p-8 bg-gradient-card backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-glow-primary group"
              >
                <feature.icon className={`h-12 w-12 ${feature.color} mb-4 group-hover:scale-110 transition-transform`} />
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(260_60%_25%/0.2),transparent_70%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Image Header */}
          <div className="relative h-80 rounded-2xl overflow-hidden mb-12 group">
            <img 
              src={integrationsImg} 
              alt="Platform integrations hub connecting multiple services"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h2 className="text-4xl font-bold mb-4 text-foreground">
                Connect Everything:{" "}
                <span className="bg-gradient-accent bg-clip-text text-transparent">Built-in Integrations</span>
              </h2>
              <p className="text-xl text-foreground/80 max-w-3xl">
                <span className="bg-gradient-kognix bg-clip-text text-transparent font-semibold">KOGNIX</span> is your universal adaptor, seamlessly integrating with over 80 essential services from day one
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrationCategories.map((category, index) => (
              <Card 
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-glow-primary group"
              >
                <div className="flex items-start gap-4">
                  <category.icon className={`h-8 w-8 ${category.color} flex-shrink-0 mt-1 group-hover:scale-110 transition-transform`} />
                  <div>
                    <h3 className="text-lg font-bold mb-2">{category.category}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {category.items}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

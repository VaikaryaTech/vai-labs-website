import { MousePointerClick, Users, Wrench, FileBox, MessagesSquare, Bug } from "lucide-react";
import { FeatureSection } from "@/components/FeatureSection";

const features = [
   {
     icon: MousePointerClick,
     title: "Visual Agent Builder",
     description: "A drag-and-drop, low-code canvas for designing AI-driven workflows and RAG pipelines — no programming required."
   },
   {
     icon: Users,
     title: "Multi-Agent Deep Research",
     description: "Enables collaborative, multi-step reasoning between agents to handle complex, layered problems."
   },
   {
     icon: Wrench,
     title: "Tool & API Orchestration",
     description: "Agents can execute external tools such as live web search, SQL querying, or content generation steps."
   },
   {
     icon: FileBox,
     title: "Pre-Built Agent Templates",
     description: "Ready-to-use agent blueprints for use cases like customer support, document summarization, SEO content, and translations."
   },
   {
     icon: MessagesSquare,
     title: "Agent-to-Agent Collaboration",
     description: "Build distributed multi-agent systems that communicate to complete composite enterprise tasks."
   },
   {
     icon: Bug,
     title: "Debug & Trace Execution",
     description: "Run step-by-step debugging to test and refine agent logic in real time."
   }
];

export const AgenticAISection = () => (
  <FeatureSection
    id="agents"
    eyebrow="Agents"
    title="Agentic AI & Workflow Automation"
    subtitle="Transform business processes into self-operating intelligence with KOGNIX Agents."
    items={features}
    layout="rows"
  />
);

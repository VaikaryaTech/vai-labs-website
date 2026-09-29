import { Blocks, Plug, Cloud, RefreshCcw } from "lucide-react";
import { FeatureSection } from "@/components/FeatureSection";

const features = [
   {
     icon: Blocks,
     title: "Broad Model Support",
     description: "Compatible with over 40 AI providers and 400+ LLMs and embedding models, including OpenAI, DeepSeek, Qwen, and ModelScope."
   },
   {
     icon: Plug,
     title: "Open API Architecture",
     description: "Plug into your existing ecosystem with RESTful and Python APIs for datasets, agents, and conversations."
   },
   {
     icon: Cloud,
     title: "KOGNIX MCP Integration",
     description: "Unified multi-cloud management for deployments across AWS, Azure, or private data centers."
   },
   {
     icon: RefreshCcw,
     title: "Adaptive Model Selection",
     description: "Choose or switch models dynamically per task or dialogue for optimized performance."
   }
];

export const ModelEcosystemSection = () => (
  <FeatureSection
    id="models"
    eyebrow="Models"
    title="Model Ecosystem & Integrations"
    subtitle="Freedom to choose, integrate, and scale with your preferred AI stack."
    items={features}
    layout="columns"
    muted
  />
);

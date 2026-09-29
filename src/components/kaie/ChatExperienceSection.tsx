import { Bot, History, Settings, ShieldCheck, Globe, Mic, Microscope, MessageCircle } from "lucide-react";
import { FeatureSection } from "@/components/FeatureSection";

const features = [
   {
     icon: Bot,
     title: "Custom AI Assistants",
     description: "Build multi-turn conversational agents tailored to your business workflows."
   },
   {
     icon: History,
     title: "Context-Persistent Conversations",
     description: "Keeps track of previous exchanges for coherent, ongoing dialogue."
   },
   {
     icon: Settings,
     title: "Configurable System Prompts",
     description: "Shape your assistant's behavior and tone using role-based system prompts."
   },
   {
     icon: ShieldCheck,
     title: "Grounded AI Responses",
     description: "Restrict outputs to your dataset for compliance and control."
   },
   {
     icon: Globe,
     title: "Multilingual & Cross-Language Search",
     description: "Supports multilingual UI and search for global enterprises."
   },
   {
     icon: Mic,
     title: "Voice Interaction",
     description: "Integrates Text-to-Speech via FishAudio or Tongyi Qwen for conversational AI experiences."
   },
   {
     icon: Microscope,
     title: "Deep Research Mode",
     description: "Enables structured reasoning across multiple data sources and contexts."
   },
   {
     icon: MessageCircle,
     title: "Intelligent Chat Interface",
     description: "Empower users with an intelligent, multilingual, and context-aware chat environment."
   }
];

export const ChatExperienceSection = () => (
  <FeatureSection
    id="chat"
    eyebrow="Chat"
    title="Chat Experience & User Interaction"
    subtitle="Empower users with an intelligent, multilingual, and context-aware chat environment."
    items={features}
    layout="rows"
  />
);

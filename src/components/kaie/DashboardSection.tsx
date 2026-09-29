import { LayoutDashboard, Eye, Activity, BarChart3, Puzzle, Lightbulb } from "lucide-react";
import { FeatureSection } from "@/components/FeatureSection";
import { KognixWordmark } from "@/components/KognixWordmark";

const features = [
   {
     icon: LayoutDashboard,
     title: "At-a-Glance Overview",
     description: "Instant situational awareness with a clean layout surfacing critical operational metrics — files, datasets, conversations, and agents."
   },
   {
     icon: Eye,
     title: "System Insights",
     description: "Live snapshot of API tokens, user activity, model inventory, template library, and file storage utilization."
   },
   {
     icon: Activity,
     title: "System Status Overview",
     description: "Real-time monitoring of database health, Elasticsearch performance, task executor queues, Redis, and object storage."
   },
   {
     icon: BarChart3,
     title: "Deep Insights & Analytics",
     description: "Visualize model token usage, identify top-performing models, and analyze document type distribution."
   },
   {
     icon: Puzzle,
     title: "Designed for Clarity",
     description: "Color-coded cards, structured sections, and modular panels for effortless navigation of complex systems."
   },
   {
     icon: Lightbulb,
     title: "Why It Matters",
     description: "Single-pane observability, enterprise-ready monitoring, instant AI performance insights, and secure multi-user visibility."
   }
];

export const DashboardSection = () => (
  <FeatureSection
    id="dashboard"
    eyebrow="Dashboard"
    title={<><KognixWordmark size="hero" /> Dashboard</>}
    subtitle="Your Command Center for Intelligent AI Operations — complete visibility into your AI ecosystem from data ingestion to model orchestration."
    items={features}
    layout="columns"
    muted
  />
);

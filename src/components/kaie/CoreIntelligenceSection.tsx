import { Brain, Link2, Search, ArrowUpDown, Zap, Layers, GitBranch } from "lucide-react";
import { FeatureSection } from "@/components/FeatureSection";

const features = [
   {
     icon: Brain,
     title: "Deep AI Intelligence",
     description: "Understands and extracts meaning from complex unstructured data — PDFs, tables, images, and hybrid layouts — ensuring every output is rooted in factual accuracy."
   },
   {
     icon: Link2,
     title: "Source-Cited Responses",
     description: "Every generated insight links back to its original source, minimizing hallucinations and improving trustworthiness."
   },
   {
     icon: Search,
     title: "Hybrid Retrieval Engine",
     description: "Combines vector-based semantic search with traditional keyword search for unparalleled recall and precision."
   },
   {
     icon: ArrowUpDown,
     title: "Smart Re-ranking Pipeline",
     description: "Dynamically reorders retrieved data to surface the most relevant and high-confidence information first."
   },
   {
     icon: Zap,
     title: "High-Performance Indexing",
     description: "Optimized for speed and scale with native integrations for Infinity, Elasticsearch, and OpenSearch."
   },
   {
     icon: Layers,
     title: "Tiered Knowledge Ranking",
     description: "Prioritize critical datasets using a custom PageRank-style system for smarter retrieval decisions."
   },
   {
     icon: GitBranch,
     title: "Graph-Aware Reasoning",
     description: "Supports Graph workflows for relationship-based retrieval and complex multi-hop reasoning."
   }
];

export const CoreIntelligenceSection = () => (
  <FeatureSection
    id="retrieval"
    eyebrow="Retrieval"
    title="Core Intelligence & Retrieval Engine"
    subtitle="KOGNIX's Retrieval-Augmented Generation (RAG) engine powers precise, explainable, and context-aware intelligence."
    items={features}
    layout="rows"
  />
);

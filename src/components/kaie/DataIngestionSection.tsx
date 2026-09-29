import { FileText, Layers, ScanSearch, UserCheck, GitMerge, Network, Sparkles, BookOpen } from "lucide-react";
import { FeatureSection } from "@/components/FeatureSection";

const features = [
   {
     icon: FileText,
     title: "Universal Data Compatibility",
     description: "Seamlessly ingests content from documents (PDF, Word, TXT, Markdown), spreadsheets (CSV, XLSX), slides, web pages, and media files."
   },
   {
     icon: Layers,
     title: "Smart Chunking Framework",
     description: "Automatically segments documents using layout-aware templates (Q&A, Legal, Resume, Research, Tabular) to maintain semantic context."
   },
   {
     icon: ScanSearch,
     title: "DeepDoc Parsing Engine",
     description: "Performs advanced layout analysis, OCR, and table recognition for even the most complex PDFs."
   },
   {
     icon: UserCheck,
     title: "Human-in-the-Loop Controls",
     description: "Review, edit, and refine extracted chunks or add keywords through an intuitive visual interface."
   },
   {
     icon: GitMerge,
     title: "RAPTOR Pipeline",
     description: "Recursive, abstractive document processing for hierarchical text understanding."
   },
   {
     icon: Network,
     title: "Knowledge Graph Generation",
     description: "Builds concept networks and mind maps to power context-driven reasoning."
   },
   {
     icon: Sparkles,
     title: "AI-Powered Preprocessing",
     description: "Automatically extracts keywords and generates synthetic questions to enhance future query accuracy."
   },
   {
     icon: BookOpen,
     title: "Long-Context Retrieval",
     description: "Supports extensive document contexts for enterprise-scale comprehension."
   }
];

export const DataIngestionSection = () => (
  <FeatureSection
    id="ingestion"
    eyebrow="Ingestion"
    title="Advanced Data Ingestion & Processing"
    subtitle="KOGNIX transforms fragmented enterprise data into structured, searchable intelligence."
    items={features}
    layout="columns"
    muted
  />
);

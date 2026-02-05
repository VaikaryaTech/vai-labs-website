 import { Card } from "@/components/ui/card";
 import { 
   FileText, 
   Layers, 
   ScanSearch, 
   UserCheck, 
   GitMerge, 
   Network, 
   Sparkles, 
   BookOpen 
 } from "lucide-react";
 
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
 
 export const DataIngestionSection = () => {
   return (
     <section className="py-24 bg-gradient-hero relative overflow-hidden">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(185_80%_40%/0.1),transparent_60%)]" />
       
       <div className="container mx-auto px-6 relative z-10">
         <div className="text-center mb-16">
           <span className="text-4xl mb-4 block">📄</span>
           <h2 className="text-4xl md:text-5xl font-bold mb-4">
             Advanced Data Ingestion & Processing
           </h2>
           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
             KOGNIX transforms fragmented enterprise data into structured, searchable intelligence.
           </p>
         </div>
 
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
           {features.map((feature, index) => (
             <Card 
               key={index}
               className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 hover:shadow-[0_0_30px_rgba(255,49,49,0.1)] transition-all duration-300 group"
             >
               <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                 <feature.icon className="h-6 w-6 text-primary" />
               </div>
               <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
               <p className="text-sm text-muted-foreground leading-relaxed">
                 {feature.description}
               </p>
             </Card>
           ))}
         </div>
       </div>
     </section>
   );
 };
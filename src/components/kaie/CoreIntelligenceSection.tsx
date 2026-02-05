 import { Card } from "@/components/ui/card";
 import { 
   Brain, 
   Link2, 
   Search, 
   ArrowUpDown, 
   Zap, 
   Layers, 
   GitBranch 
 } from "lucide-react";
 
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
 
 export const CoreIntelligenceSection = () => {
   return (
     <section className="py-24 bg-background">
       <div className="container mx-auto px-6">
         <div className="text-center mb-16">
           <span className="text-4xl mb-4 block">🌐</span>
           <h2 className="text-4xl md:text-5xl font-bold mb-4">
             Core Intelligence & Retrieval Engine
           </h2>
           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
             KOGNIX's Retrieval-Augmented Generation (RAG) engine powers precise, explainable, and context-aware intelligence.
           </p>
         </div>
 
         <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
           {features.map((feature, index) => (
             <Card 
               key={index}
               className="p-6 bg-gradient-card backdrop-blur-sm border-border hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-300 group"
             >
               <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                 <feature.icon className="h-6 w-6 text-cyan-500" />
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
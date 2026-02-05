 import { Card } from "@/components/ui/card";
 import { 
   Blocks, 
   Plug, 
   Cloud, 
   RefreshCcw 
 } from "lucide-react";
 
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
 
 export const ModelEcosystemSection = () => {
   return (
     <section className="py-24 bg-gradient-hero relative overflow-hidden">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(12_100%_50%/0.08),transparent_60%)]" />
       
       <div className="container mx-auto px-6 relative z-10">
         <div className="text-center mb-16">
           <span className="text-4xl mb-4 block">⚙️</span>
           <h2 className="text-4xl md:text-5xl font-bold mb-4">
             Model Ecosystem & Integrations
           </h2>
           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
             Freedom to choose, integrate, and scale with your preferred AI stack.
           </p>
         </div>
 
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
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
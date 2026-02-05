 import { Card } from "@/components/ui/card";
 import { 
   MousePointerClick, 
   Users, 
   Wrench, 
   FileBox, 
   MessagesSquare, 
   Bug 
 } from "lucide-react";
 
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
 
 export const AgenticAISection = () => {
   return (
     <section className="py-24 bg-background">
       <div className="container mx-auto px-6">
         <div className="text-center mb-16">
           <span className="text-4xl mb-4 block">🤖</span>
           <h2 className="text-4xl md:text-5xl font-bold mb-4">
             Agentic AI & Workflow Automation
           </h2>
           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
             Transform business processes into self-operating intelligence with KOGNIX Agents.
           </p>
         </div>
 
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
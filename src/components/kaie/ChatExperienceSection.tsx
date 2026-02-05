 import { Card } from "@/components/ui/card";
 import { 
   Bot, 
   History, 
   Settings, 
   ShieldCheck, 
   Globe, 
   Mic, 
   Microscope,
   MessageCircle
 } from "lucide-react";
 
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
 
 export const ChatExperienceSection = () => {
   return (
     <section className="py-24 bg-background">
       <div className="container mx-auto px-6">
         <div className="text-center mb-16">
           <span className="text-4xl mb-4 block">💬</span>
           <h2 className="text-4xl md:text-5xl font-bold mb-4">
             Chat Experience & User Interaction
           </h2>
           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
             Empower users with an intelligent, multilingual, and context-aware chat environment.
           </p>
         </div>
 
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
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
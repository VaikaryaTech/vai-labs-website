 import { Card } from "@/components/ui/card";
 import { KognixWordmark } from "@/components/KognixWordmark";
 import { 
   LayoutDashboard, 
   Eye, 
   Activity, 
   BarChart3, 
   Puzzle,
   Lightbulb
 } from "lucide-react";
 
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
 
 export const DashboardSection = () => {
   return (
     <section className="py-24 bg-gradient-hero relative overflow-hidden">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,hsl(185_80%_40%/0.12),transparent_60%)]" />
       
       <div className="container mx-auto px-6 relative z-10">
         <div className="text-center mb-16">
           <h2 className="text-4xl md:text-5xl font-bold mb-4">
             <KognixWordmark size="hero" />{" "}
             Dashboard
           </h2>
           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
             Your Command Center for Intelligent AI Operations — complete visibility into your AI ecosystem from data ingestion to model orchestration.
           </p>
         </div>
 
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
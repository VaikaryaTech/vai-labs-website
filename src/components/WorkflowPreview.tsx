import { Card } from "@/components/ui/card";
import { GitBranch, Zap, MessageSquare, Database } from "lucide-react";
import workflowImg from "@/assets/workflow-automation.jpg";

export const WorkflowPreview = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(260_60%_25%/0.2),transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Image Header */}
        <div className="relative h-80 rounded-2xl overflow-hidden mb-12 group">
            <img 
              src={workflowImg} 
              alt="Visual workflow orchestration with AI-powered connected nodes"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              The KOGNIX Engine: <span className="bg-[image:var(--gradient-kognix)] bg-clip-text text-transparent">How Innovation Takes Form</span>
            </h2>
            <p className="text-xl text-foreground/80">
              Our platform is engineered for speed, collaboration, and unmatched capability
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border hover:scale-[1.01] transition-all duration-300 hover:shadow-glow-primary hover:border-primary/50">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Workflow nodes */}
              <div className="flex items-center gap-4 flex-wrap justify-center">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center gap-2 group">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-700/20 border border-orange-500/30 group-hover:scale-110 transition-transform">
                      <Zap className="h-8 w-8 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">Trigger</span>
                  </div>

                  <div className="h-0.5 w-12 bg-gradient-to-r from-primary to-secondary animate-pulse-glow" />

                  <div className="flex flex-col items-center gap-2 group">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-700/20 border border-purple-500/30 group-hover:scale-110 transition-transform">
                      <MessageSquare className="h-8 w-8 text-secondary" />
                    </div>
                    <span className="text-sm text-muted-foreground">AI Agent</span>
                  </div>

                  <div className="h-0.5 w-12 bg-gradient-to-r from-secondary to-cyan-500 animate-pulse-glow" />

                  <div className="flex flex-col items-center gap-2 group">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-700/20 border border-cyan-500/30 group-hover:scale-110 transition-transform">
                      <GitBranch className="h-8 w-8 text-cyan-500" />
                    </div>
                    <span className="text-sm text-muted-foreground">Logic</span>
                  </div>

                  <div className="h-0.5 w-12 bg-gradient-to-r from-cyan-500 to-green-500 animate-pulse-glow" />

                  <div className="flex flex-col items-center gap-2 group">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-green-500/20 to-green-700/20 border border-green-500/30 group-hover:scale-110 transition-transform">
                      <Database className="h-8 w-8 text-green-500" />
                    </div>
                    <span className="text-sm text-muted-foreground">Action</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border/50">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">80+</div>
                  <div className="text-sm text-muted-foreground">Integrations</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">5M+</div>
                  <div className="text-sm text-muted-foreground">Workflows</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

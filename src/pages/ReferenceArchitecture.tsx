import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LiveBackground } from "@/components/LiveBackground";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShieldOff, WifiOff, Lock, AppWindow, Layers, Cpu, Database, BarChart3, ArrowRight, Download } from "lucide-react";
import { KognixWordmark } from "@/components/KognixWordmark";
import dockerPdf from "@/assets/kognix-docker-ra.pdf.asset.json";
import k8sPdf from "@/assets/kognix-k8s-ra.pdf.asset.json";

const diagrams = [
  {
    title: "Docker Reference Architecture",
    description:
      "Single-host to multi-host Docker deployment: KOGNIX AI Studio, Intelligence and Analytics stacks with shared networks, persistent volumes and air-gapped operations.",
    image: "/architecture/kognix-docker-architecture.png",
    pdf: dockerPdf.url,
    pdfName: "KOGNIX-Docker-Reference-Architecture.pdf",
  },
  {
    title: "Kubernetes Reference Architecture",
    description:
      "Namespace-isolated Kubernetes topology with ingress, GPU inference pods, data and security namespaces, plus the offline update flow for sovereign clusters.",
    image: "/architecture/kognix-kubernetes-architecture.png",
    pdf: k8sPdf.url,
    pdfName: "KOGNIX-Kubernetes-Reference-Architecture.pdf",
  },
];

const flow = [
  { label: "Enterprise Applications", icon: AppWindow, accent: "text-foreground" },
  { label: "KOGNIX AI Studio", icon: Layers, accent: "text-glow-cyan" },
  { label: "KOGNIX Intelligence", icon: Cpu, accent: "text-glow-cyan" },
  { label: "Enterprise Data", icon: Database, accent: "text-foreground" },
  { label: "KOGNIX Analytics", icon: BarChart3, accent: "text-glow-cyan" },
];


const ReferenceArchitecture = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative overflow-hidden pt-32 pb-24">
        <LiveBackground variant="grid" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_35%,hsl(174_60%_45%/0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_60%,hsl(12_100%_50%/0.16),transparent_55%)]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="glass inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-semibold tracking-[0.2em] text-foreground/90">
              <Lock className="h-3.5 w-3.5 text-primary" />
              SOVEREIGN BY ARCHITECTURE
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <KognixWordmark size="hero" />{" "}
              <span className="text-glow-cyan">Reference Architecture</span>
            </h1>


            <p className="text-xl md:text-2xl font-semibold text-foreground/80">
              Sovereign Enterprise AI. Engineered for Cloud, Private Cloud and Air-Gapped Environments.
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Explore the reference architectures behind the KOGNIX Enterprise AI Platform — from streamlined
              Docker deployments to highly scalable Kubernetes environments. KOGNIX provides a secure architecture
              for enterprise AI applications, local model inference, RAG, observability and governance.
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Link to="/book-demo">
                <Button variant="hero" size="lg">Talk to an Architect</Button>
              </Link>
            </div>
          </div>

          {/* Primary visual — platform flow inside an air-gapped boundary */}
          <div className="mt-16 max-w-6xl mx-auto">
            <div className="relative rounded-3xl p-6 md:p-10 glass border border-dashed border-primary/40">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-background border border-primary/40 text-[11px] md:text-xs font-semibold tracking-[0.18em] text-primary whitespace-nowrap">
                AIR-GAPPED / SOVEREIGN ENTERPRISE ENVIRONMENT
              </div>

              <div className="flex flex-col md:flex-row items-stretch gap-3 pt-4">
                {flow.map((node, i) => (
                  <div key={node.label} className="flex flex-col md:flex-row items-center gap-3 flex-1">
                    <div className="glass rounded-2xl p-5 w-full flex flex-col items-center text-center gap-3 transition-transform duration-300 hover:-translate-y-1">
                      <node.icon className="h-7 w-7 text-primary" />
                      <span className={`text-sm font-semibold leading-snug ${node.accent}`}>{node.label}</span>
                    </div>
                    {i < flow.length - 1 && (
                      <ArrowRight className="h-5 w-5 shrink-0 text-primary/70 rotate-90 md:rotate-0" />
                    )}
                  </div>
                ))}
              </div>


              <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs md:text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2"><WifiOff className="h-4 w-4 text-primary" /> No internet dependency</span>
                <span className="inline-flex items-center gap-2"><ShieldOff className="h-4 w-4 text-primary" /> No external model registries</span>
                <span className="inline-flex items-center gap-2"><Lock className="h-4 w-4 text-primary" /> Data never leaves your perimeter</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="kognix-brand">
                KOGNIX
              </span>{" "}
              <span className="text-glow-cyan">Deployment Blueprints</span>
            </h2>
            <p className="text-muted-foreground">
              Detailed reference architectures for Docker and Kubernetes. Click a diagram to open the full-resolution
              image, or download the printable PDF.
            </p>
          </div>

          <div className="space-y-12 max-w-6xl mx-auto">
            {diagrams.map((d) => (
              <div key={d.title} className="glass rounded-3xl p-5 md:p-8 space-y-5">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-semibold text-glow-cyan">{d.title}</h3>
                    <p className="text-sm text-muted-foreground max-w-2xl">{d.description}</p>
                  </div>
                  <a href={d.pdf} download={d.pdfName} target="_blank" rel="noopener noreferrer">
                    <Button variant="hero" className="whitespace-nowrap">
                      <Download className="h-4 w-4" /> Download PDF
                    </Button>
                  </a>
                </div>

                <a href={d.image} target="_blank" rel="noopener noreferrer" className="block group">
                  <img
                    src={d.image}
                    alt={`KOGNIX ${d.title} diagram`}
                                        className="w-full rounded-2xl border border-border/60 bg-white transition-transform duration-300 group-hover:scale-[1.01]"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default ReferenceArchitecture;

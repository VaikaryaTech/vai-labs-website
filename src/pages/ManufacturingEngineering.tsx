import { IndustryPage } from "@/components/IndustryPage";
import { Wrench, Shield, BookOpen, Truck } from "lucide-react";
import { ManufacturingUseCases } from "@/components/usecases/ManufacturingUseCases";
import { KognixWordmark } from "@/components/KognixWordmark";

const ManufacturingEngineering = () => {
  const impactMetrics = [
    { value: "40%", label: "Reduced Downtime" },
    { value: "60%", label: "Faster Repairs" },
    { value: "50%", label: "Improved Compliance" },
    { value: "30%", label: "Design Cycle Acceleration" },
  ];

  const capabilities = [
    {
      icon: Wrench,
      title: "Maintenance & Troubleshooting Copilot",
      description: "Provide technicians with step-by-step diagnostic and repair procedures for complex equipment by retrieving from technical manuals, repair logs, sensor data, and blueprints.",
      benefit: "Reduced machine downtime, faster repairs, and knowledge transfer across the workforce."
    },
    {
      icon: Shield,
      title: "Quality & Safety Compliance",
      description: "Answer questions about product specifications, quality assurance protocols, and safety regulations (ISO standards, OSHA rules) by referencing internal documents and regulatory filings.",
      benefit: "Ensures adherence to quality and safety standards, making audits easier and reducing risk."
    },
    {
      icon: BookOpen,
      title: "Engineering Knowledge Portal",
      description: "A centralized system for engineers to query, compare, and summarize complex R&D reports, material science data, and CAD document specifications.",
      benefit: "Accelerates design cycles and fosters innovation through immediate access to institutional knowledge."
    },
    {
      icon: Truck,
      title: "Supply Chain Optimization",
      description: "Analyze real-time supplier data, procurement strategies, and contract terms to answer questions about material availability, lead times, and cost variances.",
      benefit: "More agile supply chain management and better-informed procurement decisions."
    },
  ];

  const workflowSteps = [
    { step: "01", title: "Connect", description: "Integrate manuals, CAD files, and operational data" },
    { step: "02", title: "Index", description: "Semantic processing of technical documentation" },
    { step: "03", title: "Query", description: "Natural language access for technicians and engineers" },
    { step: "04", title: "Optimize", description: "Continuous improvement through insights" },
  ];

  return (
    <IndustryPage
      name="Manufacturing & Engineering"
      figure={{
        name: "Manufacturing & Engineering",
        sources: ["Equipment manuals", "Maintenance logs", "Engineering specs", "Quality reports"],
        outputs: ["Predictive maintenance", "Root-cause analysis", "Technician answers"],
      }}
      intro={<>Optimize industrial operations with <KognixWordmark size="hero" suffix="AI" />—from predictive maintenance to engineering knowledge management with secure, on-premise intelligence.</>}
      metrics={impactMetrics}
      capabilitiesTitle="AI-Powered Industrial Intelligence"
      capabilitiesSubtitle="Purpose-built capabilities for manufacturing and engineering excellence"
      capabilities={capabilities}
      workflowSubtitle="From documentation to operational excellence"
      workflowSteps={workflowSteps}
      ctaTitle="Ready to Transform Your Manufacturing Operations?"
      ctaBody={<>Join leading manufacturers leveraging KOGNIX for intelligent operations.</>}
    >
      {/* Department Use Cases */}
      <ManufacturingUseCases />
    </IndustryPage>
  );
};

export default ManufacturingEngineering;

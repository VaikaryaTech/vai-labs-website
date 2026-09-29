import { IndustryPage } from "@/components/IndustryPage";
import { FlaskConical, Shield, FileCheck, Stethoscope } from "lucide-react";
import { BioPharmaUseCases } from "@/components/healthcare/BioPharmaUseCases";
import { ProductShowcase } from "@/components/ProductShowcase";
import { KognixWordmark } from "@/components/KognixWordmark";

const HealthcarePharma = () => {
  const impactMetrics = [
    { value: "75%", label: "Faster Regulatory Reviews" },
    { value: "40%", label: "Faster Batch Record Review" },
    { value: "60%", label: "Reduction in Protocol Deviations" },
    { value: "20%", label: "Boost in First Call Success" },
  ];

  const capabilities = [
    {
      icon: Stethoscope,
      title: "Clinical Decision Support System",
      description: "Provide real-time, evidence-based recommendations for diagnosis and treatment by cross-referencing patient symptoms and history with the latest medical research, clinical trials, and guidelines.",
      benefit: "Improved diagnostic accuracy, reduced medical errors, and better patient outcomes based on current best practices."
    },
    {
      icon: FlaskConical,
      title: "Drug Discovery & Research",
      description: "Accelerate research by querying and summarizing large volumes of scientific literature, genomic data, and clinical trial results to identify drug targets and predict therapeutic efficacy.",
      benefit: "Faster R&D cycles and more informed research decisions for breakthrough therapies."
    },
    {
      icon: Shield,
      title: "GxP Compliance & Audit Readiness",
      description: "Rapidly assemble complex, interconnected GxP records (SOPs, deviation reports, raw data, training sign-offs) for audits and CAPA investigations with natural language queries.",
      benefit: "Accelerated deviation closure and enhanced audit readiness during regulatory inspections."
    },
    {
      icon: FileCheck,
      title: "Regulatory Submission Verification",
      description: "Ensure consistent data synchronization between R&D, Clinical, and Quality teams with automated semantic integrity checks prior to regulatory submissions.",
      benefit: "Reduced submission deficiencies and accelerated Time to Approval for new drugs."
    },
  ];

  const workflowSteps = [
    { step: "01", title: "Ingest", description: "Connect clinical data, research docs, and regulatory filings" },
    { step: "02", title: "Validate", description: "GxP-compliant indexing with audit trails" },
    { step: "03", title: "Query", description: "Natural language access with source citations" },
    { step: "04", title: "Comply", description: "Automated compliance checks and reporting" },
  ];

  return (
    <IndustryPage
      name="Pharma & Life Sciences"
      figure={{
        name: "Pharma & Life Sciences",
        sources: ["SOPs & batch records", "Clinical study reports", "FDA / EMA guidance", "Patent filings"],
        outputs: ["GxP gap analysis", "Deviation triage", "Evidence synthesis"],
      }}
      intro={<>Transform healthcare operations with <KognixWordmark size="hero" suffix="AI" />—from clinical decision support to GxP compliance with auditable, source-grounded intelligence for highly regulated environments.</>}
      metrics={impactMetrics}
      capabilitiesTitle="AI-Powered Healthcare Intelligence"
      capabilitiesSubtitle="Purpose-built capabilities for healthcare and pharmaceutical excellence"
      capabilities={capabilities}
      workflowSubtitle="From clinical data to compliant intelligence"
      workflowSteps={workflowSteps}
      ctaTitle="Ready to Transform Your Healthcare Operations?"
      ctaBody={<>Join leading healthcare organizations leveraging KOGNIX for secure, compliant AI.</>}
    >
      {/* Biopharmaceutical Use Cases */}
      <BioPharmaUseCases />

      {/* 3D BioPharma Showcase */}
      <ProductShowcase
        title="Pharma & Life Sciences Intelligence, Live"
        subtitle="Auditable, source-grounded AI workspaces purpose-built for regulated life sciences."
        only={["Regulatory Shield", "Bio-Peptide Patent Shield", "Biosimilarity De-Risking", "DeepResearch"]}
      />
    </IndustryPage>
  );
};

export default HealthcarePharma;

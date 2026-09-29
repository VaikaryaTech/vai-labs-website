import { IndustryPage } from "@/components/IndustryPage";
import { Scale, FileSearch, Shield, Server } from "lucide-react";
import { LegalUseCases } from "@/components/usecases/LegalUseCases";
import { KognixWordmark } from "@/components/KognixWordmark";

const LegalCompliance = () => {
  const impactMetrics = [
    { value: "50%", label: "Faster Document Review" },
    { value: "40%", label: "Reduced Discovery Costs" },
    { value: "80%", label: "Policy Query Automation" },
    { value: "3x", label: "Research Speed" },
  ];

  const capabilities = [
    {
      icon: FileSearch,
      title: "Automated Legal Research",
      description: "Answer specific legal questions by searching across massive repositories of case law, statutes, regulations, and firm-specific documents with semantic understanding.",
      benefit: "Drastically reduced manual research time with quick access to relevant precedents and verifiable sources."
    },
    {
      icon: Scale,
      title: "Contract Analysis & Review",
      description: "Review large contracts, highlight risky clauses, identify inconsistencies against industry standards, or compare drafts against firm-approved templates.",
      benefit: "Accelerated due diligence, lowered risk, and ensured compliance with internal and external standards."
    },
    {
      icon: Shield,
      title: "E-Discovery Optimization",
      description: "Automate retrieval, summarization, and analysis of vast document troves (emails, chats, reports) relevant to lawsuits or investigations.",
      benefit: "Dramatically faster discovery phase with reduced cost and time of human review."
    },
    {
      icon: Server,
      title: "Compliance & Policy Management",
      description: "Answer employee and management questions about company policies with context-specific responses grounded in official documentation.",
      benefit: "Consistent, accurate policy interpretation that mitigates internal compliance risk."
    },
  ];

  const workflowSteps = [
    { step: "01", title: "Ingest", description: "Connect contracts, case law, and policy documents" },
    { step: "02", title: "Index", description: "Semantic indexing with legal context understanding" },
    { step: "03", title: "Query", description: "Natural language legal research with citations" },
    { step: "04", title: "Verify", description: "Auditable outputs with source grounding" },
  ];

  return (
    <IndustryPage
      name="Legal & Compliance"
      figure={{
        name: "Legal & Compliance",
        sources: ["Contracts & MSAs", "Case law", "Regulatory filings", "E-discovery sets"],
        outputs: ["Clause comparisons", "Risk flags", "Cited research memos"],
      }}
      intro={<>Transform legal operations with <KognixWordmark size="hero" suffix="AI" />—from accelerating e-discovery and contract review to ensuring regulatory compliance with auditable, source-grounded intelligence.</>}
      metrics={impactMetrics}
      capabilitiesTitle="AI-Powered Legal Intelligence"
      capabilitiesSubtitle="Purpose-built capabilities for legal and compliance excellence"
      capabilities={capabilities}
      workflowSubtitle="From legal documents to actionable intelligence"
      workflowSteps={workflowSteps}
      ctaTitle="Ready to Transform Your Legal Operations?"
      ctaBody={<>Join leading law firms and legal departments leveraging KOGNIX for secure, compliant AI.</>}
    >
      {/* Department Use Cases */}
      <LegalUseCases />
    </IndustryPage>
  );
};

export default LegalCompliance;

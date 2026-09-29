import { IndustryPage } from "@/components/IndustryPage";
import { Shield, TrendingUp, Users, FileCheck, AlertTriangle } from "lucide-react";
import { FinanceUseCases } from "@/components/usecases/FinanceUseCases";
import { KognixWordmark } from "@/components/KognixWordmark";

const FinanceBanking = () => {
  const impactMetrics = [
    { value: "60%", label: "Faster Compliance Research" },
    { value: "45%", label: "Reduced False Positives" },
    { value: "80%", label: "First-Call Resolution" },
    { value: "3x", label: "Analyst Productivity" },
  ];

  const capabilities = [
    {
      icon: Shield,
      title: "Regulatory Compliance Copilot",
      description: "Answer complex, jurisdiction-specific questions on AML, KYC, Basel, or tax laws by referencing thousands of constantly changing regulatory documents, internal policies, and circulars.",
      benefit: "Faster compliance research, reduced risk of fines, and up-to-date, auditable answers with source citations."
    },
    {
      icon: TrendingUp,
      title: "Investment Research Assistant",
      description: "Summarize extensive financial documents like earnings reports, market analyses, and SEC filings; identify key risks and opportunities based on real-time data feeds.",
      benefit: "Improved analyst efficiency and decision-making with real-time, grounded insights from current financial data."
    },
    {
      icon: Users,
      title: "Internal Knowledge Base",
      description: "A chatbot that answers staff questions on HR policies, IT procedures, product specifications, and mortgage processes with instant accuracy.",
      benefit: "Reduced employee time wasted on searching, faster onboarding, and consistent internal communication."
    },
    {
      icon: FileCheck,
      title: "Intelligent Customer Support",
      description: "Handle complex customer inquiries about card decline reasons, loan application status, or product features by accessing account data and operational manuals.",
      benefit: "Higher first-call resolution rate, personalized support, and reduced reliance on human agents."
    },
    {
      icon: AlertTriangle,
      title: "Fraud and Risk Detection",
      description: "Analyze transaction data and cross-reference with internal fraud reports and external blacklists to detect anomalies and flag suspicious activities.",
      benefit: "Enhanced ability to detect new fraud schemes with reduced false positives compared to rule-based systems."
    },
  ];

  const workflowSteps = [
    { step: "01", title: "Ingest", description: "Connect regulatory documents, internal policies, and transaction data" },
    { step: "02", title: "Index", description: "Semantic indexing with jurisdiction and compliance tagging" },
    { step: "03", title: "Query", description: "Natural language queries with source-cited responses" },
    { step: "04", title: "Act", description: "Automated alerts, reports, and compliance workflows" },
  ];

  return (
    <IndustryPage
      name="Finance & Banking"
      figure={{
        name: "Finance & Banking",
        sources: ["AML & KYC policies", "Regulatory circulars", "Filings & earnings", "Transaction logs"],
        outputs: ["Cited compliance answers", "Fraud & risk alerts", "Analyst briefs"],
      }}
      intro={<>Transform financial operations with <KognixWordmark size="hero" suffix="AI" />—from regulatory compliance and fraud detection to investment research with auditable, source-grounded intelligence.</>}
      metrics={impactMetrics}
      capabilitiesTitle="AI-Powered Financial Intelligence"
      capabilitiesSubtitle="Purpose-built capabilities for the unique challenges of financial services"
      capabilities={capabilities}
      workflowSubtitle="From data ingestion to actionable intelligence"
      workflowSteps={workflowSteps}
      ctaTitle="Ready to Transform Your Financial Operations?"
      ctaBody={<>Join leading financial institutions leveraging KOGNIX for secure, compliant AI.</>}
    >
      {/* Department Use Cases */}
      <FinanceUseCases />
    </IndustryPage>
  );
};

export default FinanceBanking;

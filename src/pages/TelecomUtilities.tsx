import { IndustryPage } from "@/components/IndustryPage";
import { Wrench, CreditCard } from "lucide-react";
import { TelecomUseCases } from "@/components/usecases/TelecomUseCases";
import { KognixWordmark } from "@/components/KognixWordmark";

const TelecomUtilities = () => {
  const impactMetrics = [
    { value: "55%", label: "Faster Issue Resolution" },
    { value: "40%", label: "Reduced Service Outages" },
    { value: "60%", label: "Customer Retention Boost" },
    { value: "35%", label: "Support Cost Savings" },
  ];

  const capabilities = [
    {
      icon: Wrench,
      title: "Technical Support for Field Engineers",
      description: "Answer complex technical questions about network configurations, fiber-optic splicing procedures, and equipment specifications by retrieving from internal engineering documents.",
      benefit: "Faster problem resolution in the field, reducing service outages and increasing technician efficiency."
    },
    {
      icon: CreditCard,
      title: "Billing & Service Inquiry Chatbot",
      description: "Provide precise, personalized answers to customers' billing questions, plan details, or service outage updates by connecting to live account and service data.",
      benefit: "Improved customer retention and reduced high-cost human support volume."
    },
  ];

  const workflowSteps = [
    { step: "01", title: "Integrate", description: "Connect engineering docs and customer systems" },
    { step: "02", title: "Index", description: "Semantic processing of technical specifications" },
    { step: "03", title: "Deploy", description: "Field access for technicians and customer support" },
    { step: "04", title: "Resolve", description: "Instant answers with source citations" },
  ];

  return (
    <IndustryPage
      name="Telecom & Utilities"
      figure={{
        name: "Telecom & Utilities",
        sources: ["Network runbooks", "Field service manuals", "Outage tickets", "Customer plans"],
        outputs: ["Field-ready fixes", "Support resolutions", "Incident summaries"],
      }}
      intro={<>Empower field operations and customer service with <KognixWordmark size="hero" suffix="AI" />—delivering instant technical knowledge and personalized support at scale.</>}
      metrics={impactMetrics}
      capabilitiesTitle="AI-Powered Network Intelligence"
      capabilitiesSubtitle="Purpose-built capabilities for telecommunications and utilities"
      capabilities={capabilities}
      workflowSubtitle="From technical documentation to field resolution"
      workflowSteps={workflowSteps}
      ctaTitle="Ready to Transform Your Network Operations?"
      ctaBody={<>Join leading telecom providers leveraging KOGNIX for intelligent field support.</>}
    >
      {/* Department Use Cases */}
      <TelecomUseCases />
    </IndustryPage>
  );
};

export default TelecomUtilities;

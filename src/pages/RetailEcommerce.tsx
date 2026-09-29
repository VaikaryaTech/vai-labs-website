import { IndustryPage } from "@/components/IndustryPage";
import { Search, MessageSquare, Package } from "lucide-react";
import { RetailUseCases } from "@/components/usecases/RetailUseCases";
import { KognixWordmark } from "@/components/KognixWordmark";

const RetailEcommerce = () => {
  const impactMetrics = [
    { value: "35%", label: "Higher Conversion Rates" },
    { value: "50%", label: "Reduced Bounce Rates" },
    { value: "70%", label: "Customer Satisfaction" },
    { value: "40%", label: "Support Cost Reduction" },
  ];

  const capabilities = [
    {
      icon: Search,
      title: "Intelligent Product Search",
      description: "Enable natural language search like 'Show me waterproof running shoes for rainy season under $100' by retrieving from live product catalog, descriptions, and customer reviews.",
      benefit: "Improved conversion rates, reduced bounce rates on search pages, and a better customer shopping experience."
    },
    {
      icon: MessageSquare,
      title: "Contextual Customer Service",
      description: "Answer customer questions about orders, returns, and product compatibility by accessing real-time data from inventory, logistics, and CRM systems.",
      benefit: "Higher customer satisfaction, reduced support load on human agents, and personalized responses based on order history."
    },
    {
      icon: Package,
      title: "Store Operations Assistant",
      description: "Help store associates or warehouse staff quickly look up inventory details, restocking procedures, or specific vendor agreements.",
      benefit: "Increased operational efficiency and reduced time spent on internal information search."
    },
  ];

  const workflowSteps = [
    { step: "01", title: "Connect", description: "Integrate product catalogs, inventory, and customer data" },
    { step: "02", title: "Understand", description: "Semantic processing of product attributes and reviews" },
    { step: "03", title: "Engage", description: "Natural language interactions across all channels" },
    { step: "04", title: "Convert", description: "Personalized recommendations and seamless support" },
  ];

  return (
    <IndustryPage
      name="Retail & E-commerce"
      figure={{
        name: "Retail & E-commerce",
        sources: ["Product catalog", "Customer tickets", "Inventory data", "Store policies"],
        outputs: ["Product discovery", "Support answers", "Merchandising insight"],
      }}
      intro={<>Revolutionize retail experiences with <KognixWordmark size="hero" suffix="AI" />—from intelligent product discovery to personalized customer service at scale.</>}
      metrics={impactMetrics}
      capabilitiesTitle="AI-Powered Retail Intelligence"
      capabilitiesSubtitle="Purpose-built capabilities for modern retail and e-commerce operations"
      capabilities={capabilities}
      workflowSubtitle="From catalog to conversion"
      workflowSteps={workflowSteps}
      ctaTitle="Ready to Transform Your Retail Experience?"
      ctaBody={<>Join leading retailers leveraging KOGNIX for intelligent commerce.</>}
    >
      {/* Department Use Cases */}
      <RetailUseCases />
    </IndustryPage>
  );
};

export default RetailEcommerce;

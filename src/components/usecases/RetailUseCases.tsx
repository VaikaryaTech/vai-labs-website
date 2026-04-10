import { DepartmentUseCases, DepartmentSection } from "./DepartmentUseCases";
import {
  Search,
  ShoppingCart,
  Package,
  Users,
  TrendingUp,
  Headphones,
  Monitor,
  Truck,
} from "lucide-react";

const departments: DepartmentSection[] = [
  {
    department: "Merchandising and Product Management",
    icon: ShoppingCart,
    color: "text-purple-400",
    useCases: [
      {
        title: "Intelligent Product Discovery and Search",
        friction: "Customers abandon searches when keyword-based systems fail to understand natural language queries like 'waterproof running shoes for rainy season under $100'.",
        solution: "Semantic product search across live catalog data, descriptions, specifications, and customer reviews. Understands intent, context, and constraints from natural language queries.",
        value: "Improves conversion rates by 35% and reduces bounce rates by 50% through superior product discovery experiences.",
      },
      {
        title: "Product Catalog Enrichment and Standardization",
        friction: "Product data from multiple suppliers arrives in inconsistent formats with varying quality of descriptions, attributes, and categorization.",
        solution: "Analyzes and standardizes product descriptions, extracts key attributes, and enriches catalog data by cross-referencing supplier documentation and industry standards.",
        value: "Improves catalog quality and searchability, reduces manual data entry effort, and ensures consistent product presentation across channels.",
      },
      {
        title: "Competitive Pricing and Assortment Intelligence",
        friction: "Category managers manually monitor competitor pricing, promotions, and assortment changes across dozens of competitors and thousands of SKUs.",
        solution: "Ingests competitor catalogs, pricing data, and promotional materials. Enables comparative queries on pricing strategies, assortment gaps, and market positioning with cited sources.",
        value: "Enables data-driven pricing decisions, identifies assortment opportunities, and accelerates competitive response times.",
      },
    ],
  },
  {
    department: "Customer Service and Experience",
    icon: Headphones,
    color: "text-blue-400",
    useCases: [
      {
        title: "Contextual Customer Support Agent",
        friction: "Support agents handle complex queries about orders, returns, product compatibility, and warranty claims by navigating multiple disconnected systems.",
        solution: "Unified access to order history, inventory data, CRM records, and product documentation. Agents receive instant, cited responses with personalized resolution guidance.",
        value: "Increases customer satisfaction by 70%, reduces support costs by 40%, and delivers personalized service based on complete customer context.",
      },
      {
        title: "Returns and Warranty Claims Intelligence",
        friction: "Processing returns and warranty claims requires manual verification of purchase history, warranty terms, and product conditions against complex policy rules.",
        solution: "Automated policy matching against return/warranty requests. Cross-references purchase records, warranty documentation, and policy rules to provide instant eligibility determinations.",
        value: "Accelerates claims processing, ensures consistent policy application, and reduces fraudulent returns through intelligent verification.",
      },
      {
        title: "Product Recommendation and Styling Advisor",
        friction: "Online customers lack the personalized guidance available in physical stores, leading to decision paralysis and lower basket sizes.",
        solution: "AI styling and recommendation assistant grounded in product catalog, customer preferences, and compatibility data. Provides personalized suggestions with cited product features.",
        value: "Increases average order value, reduces return rates through better product matching, and creates differentiated shopping experiences.",
      },
    ],
  },
  {
    department: "Supply Chain and Logistics",
    icon: Truck,
    color: "text-green-400",
    useCases: [
      {
        title: "Supplier Documentation and Compliance Verification",
        friction: "Procurement teams manually verify supplier certifications, compliance documentation, and quality reports across hundreds of suppliers.",
        solution: "Ingests and indexes supplier contracts, certifications, quality reports, and compliance documentation. Enables instant verification queries with cited source documents.",
        value: "Reduces supplier onboarding time, ensures compliance with sourcing standards, and provides instant visibility into supplier documentation status.",
      },
      {
        title: "Inventory and Demand Planning Intelligence",
        friction: "Demand planners struggle to correlate historical sales data, seasonal trends, and external factors to optimize inventory levels across locations.",
        solution: "Semantic analysis across sales data, market trends, and inventory reports. Planners query specific scenarios and receive cited insights on demand patterns and optimal stock levels.",
        value: "Reduces stockouts and overstock situations, improves inventory turnover, and enables data-driven demand planning decisions.",
      },
      {
        title: "Logistics and Fulfillment Operations Support",
        friction: "Warehouse and logistics staff need instant access to shipping procedures, carrier specifications, and handling requirements for different product categories.",
        solution: "Knowledge assistant grounded in shipping protocols, carrier agreements, and handling guides. Staff query specific scenarios and receive cited operational guidance.",
        value: "Reduces shipping errors, improves fulfillment speed, and ensures compliance with carrier and product-specific handling requirements.",
      },
    ],
  },
  {
    department: "Store Operations",
    icon: Package,
    color: "text-orange-400",
    useCases: [
      {
        title: "Store Associate Knowledge Assistant",
        friction: "Store associates struggle to find accurate product information, restocking procedures, and vendor agreements, leading to poor customer interactions.",
        solution: "Mobile-accessible knowledge assistant grounded in product catalogs, operational procedures, and vendor documentation. Associates query specific questions and get instant cited answers.",
        value: "Increases associate confidence and customer interaction quality, reduces training time, and ensures consistent in-store service delivery.",
      },
      {
        title: "Visual Merchandising and Planogram Compliance",
        friction: "Ensuring consistent visual merchandising and planogram compliance across multiple store locations is manual and difficult to monitor.",
        solution: "Ingests planogram guidelines, merchandising standards, and brand presentation requirements. Staff query specific display requirements and receive cited visual merchandising guidance.",
        value: "Improves brand consistency across locations, reduces merchandising errors, and accelerates new product display deployment.",
      },
    ],
  },
  {
    department: "Marketing and Analytics",
    icon: TrendingUp,
    color: "text-cyan-400",
    useCases: [
      {
        title: "Customer Insights and Behavior Analysis",
        friction: "Marketing teams struggle to extract actionable insights from vast customer data across CRM, loyalty programs, and transaction histories.",
        solution: "Semantic analysis across customer data, purchase patterns, and engagement metrics. Marketers query specific customer segments and behaviors with cited data-driven insights.",
        value: "Enables hyper-targeted marketing campaigns, improves customer lifetime value predictions, and reduces campaign waste through data-driven segmentation.",
      },
      {
        title: "Promotional Strategy and Campaign Intelligence",
        friction: "Planning effective promotions requires analyzing historical campaign performance, competitor activities, and seasonal trends—scattered across multiple systems.",
        solution: "Ingests historical campaign data, competitor promotional intelligence, and seasonal trends. Enables comparative analysis of promotion effectiveness with cited performance metrics.",
        value: "Improves promotional ROI, reduces ineffective spending, and enables data-driven campaign planning grounded in historical performance.",
      },
    ],
  },
  {
    department: "HR and Training",
    icon: Users,
    color: "text-red-400",
    useCases: [
      {
        title: "Retail Staff Onboarding and Training",
        friction: "High turnover in retail requires constant onboarding of new staff on products, POS systems, customer service protocols, and company policies.",
        solution: "Interactive training assistant grounded in training manuals, product guides, POS documentation, and company policies. New hires simulate real scenarios with cited guidance.",
        value: "Reduces onboarding time by 40%, ensures consistent training quality, and accelerates new hire readiness for customer-facing roles.",
      },
      {
        title: "Employee Policy and Benefits Support",
        friction: "Retail employees across multiple locations have frequent questions about scheduling, benefits, and company policies but limited access to HR support.",
        solution: "Self-service HR assistant grounded in employee handbooks, benefits guides, and scheduling policies. Provides instant, cited answers accessible from any location.",
        value: "Reduces HR support burden, improves employee satisfaction, and ensures consistent policy communication across all locations.",
      },
    ],
  },
];

export const RetailUseCases = () => (
  <DepartmentUseCases
    title="KOGNIX AI for"
    highlightWord="Retail & E-commerce"
    subtitle="End-to-end AI-powered intelligence across every critical department—from merchandising and customer service through supply chain, store operations, and marketing."
    departments={departments}
  />
);

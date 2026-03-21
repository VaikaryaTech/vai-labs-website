import { DepartmentUseCases, DepartmentSection } from "./DepartmentUseCases";
import {
  Wifi,
  Wrench,
  CreditCard,
  Users,
  Monitor,
  Shield,
  Headphones,
  Radio,
} from "lucide-react";

const departments: DepartmentSection[] = [
  {
    department: "Network Engineering and Operations",
    icon: Radio,
    color: "text-blue-400",
    useCases: [
      {
        title: "Network Configuration and Troubleshooting Support",
        friction: "Field engineers face complex network configuration issues requiring access to scattered technical documentation, vendor manuals, and historical incident data.",
        solution: "Semantic search across network architecture documentation, vendor manuals, and resolved incident histories. Engineers query specific configurations or error codes and receive cited resolution steps.",
        value: "Reduces mean time to repair by 55%, minimizes service outages, and enables faster field resolution without escalation to senior engineers.",
      },
      {
        title: "Fiber-Optic and Infrastructure Installation Guidance",
        friction: "Installation technicians need precise procedures for different infrastructure types, splice configurations, and equipment models—information scattered across multiple manuals.",
        solution: "Mobile-accessible installation assistant grounded in technical manuals, splice specifications, and equipment documentation. Technicians query specific installation scenarios for cited guidance.",
        value: "Reduces installation errors, improves first-time-right rates, and ensures consistent quality across installation crews.",
      },
      {
        title: "Network Capacity Planning and Optimization",
        friction: "Network planners struggle to correlate traffic patterns, growth projections, and equipment specifications to optimize network capacity decisions.",
        solution: "Analyzes network performance data, traffic reports, and equipment specifications. Planners query specific scenarios and receive cited recommendations for capacity optimization.",
        value: "Enables proactive capacity planning, reduces over-provisioning costs, and ensures optimal network performance during peak demand.",
      },
    ],
  },
  {
    department: "Customer Service and Support",
    icon: Headphones,
    color: "text-green-400",
    useCases: [
      {
        title: "Billing and Service Inquiry Resolution",
        friction: "Customer service agents navigate multiple systems to answer billing questions, plan details, and service outage updates—leading to long handle times.",
        solution: "Unified access to account data, billing systems, plan documentation, and service status. Agents receive instant, personalized, and cited responses for any customer inquiry.",
        value: "Improves customer retention by 60%, reduces support costs by 35%, and delivers personalized billing and service support at scale.",
      },
      {
        title: "Service Outage Communication and Status Updates",
        friction: "During outages, customers flood support channels while agents struggle to provide consistent, accurate status updates and estimated resolution times.",
        solution: "Real-time integration with network operations data. Provides agents and self-service channels with cited, up-to-date outage information, affected areas, and ETAs.",
        value: "Reduces call volume during outages, improves customer communication consistency, and builds trust through transparent, timely updates.",
      },
      {
        title: "Plan Comparison and Upgrade Advisory",
        friction: "Customers need help understanding complex plan options, data allowances, and bundle offerings—information often poorly presented in marketing materials.",
        solution: "Interactive plan advisor grounded in current plan documentation, pricing structures, and eligibility criteria. Provides personalized, cited plan comparisons based on customer usage.",
        value: "Increases upsell conversion rates, reduces plan confusion, and improves customer satisfaction with transparent, data-driven plan recommendations.",
      },
    ],
  },
  {
    department: "Regulatory and Compliance",
    icon: Shield,
    color: "text-purple-400",
    useCases: [
      {
        title: "Spectrum Licensing and Regulatory Compliance",
        friction: "Compliance teams must track spectrum licensing requirements, FCC/regulatory filings, and reporting obligations across multiple jurisdictions and frequency bands.",
        solution: "Ingests regulatory filings, spectrum licenses, and compliance documentation. Enables queries on specific licensing obligations, filing deadlines, and compliance requirements with citations.",
        value: "Ensures regulatory compliance, reduces risk of license violations, and streamlines reporting to telecommunications regulatory authorities.",
      },
      {
        title: "Data Privacy and Customer Data Protection",
        friction: "Telecom companies handle massive volumes of customer data subject to strict privacy regulations (GDPR, CCPA, CPNI) requiring constant compliance monitoring.",
        solution: "Knowledge assistant grounded in data privacy policies, regulatory requirements, and internal data handling procedures. Staff query specific scenarios for cited compliance guidance.",
        value: "Reduces data privacy violations, ensures consistent compliance with customer data protection regulations, and supports audit readiness.",
      },
    ],
  },
  {
    department: "Field Operations and Workforce",
    icon: Wrench,
    color: "text-orange-400",
    useCases: [
      {
        title: "Field Technician Safety and Compliance",
        friction: "Field technicians work in hazardous environments (cell towers, utility poles, confined spaces) requiring strict adherence to safety protocols and equipment procedures.",
        solution: "Mobile safety assistant grounded in OSHA guidelines, company safety procedures, and equipment-specific safety documentation. Technicians access cited safety requirements on-site.",
        value: "Reduces workplace safety incidents, ensures regulatory compliance, and provides instant access to critical safety information in the field.",
      },
      {
        title: "Workforce Training and Certification Management",
        friction: "Keeping field workforce trained and certified on evolving technologies (5G, fiber, IoT) while managing certification tracking across large teams.",
        solution: "Interactive training platform grounded in technical curricula, certification requirements, and technology documentation. Tracks certification status and provides scenario-based learning.",
        value: "Accelerates technology adoption, ensures workforce competency, and reduces training costs through self-paced, AI-assisted learning.",
      },
      {
        title: "Dispatch Optimization and Work Order Intelligence",
        friction: "Dispatchers struggle to match technician skills, location, and availability with work order requirements, leading to suboptimal field service delivery.",
        solution: "Analyzes work order requirements, technician skills profiles, and historical completion data. Provides cited recommendations for optimal technician assignment and scheduling.",
        value: "Improves first-visit resolution rates, reduces unnecessary truck rolls, and optimizes field workforce utilization.",
      },
    ],
  },
  {
    department: "Enterprise and B2B Sales",
    icon: CreditCard,
    color: "text-cyan-400",
    useCases: [
      {
        title: "Enterprise Solution Design and Proposal Support",
        friction: "Sales engineers manually compile technical specifications, service options, and pricing for complex enterprise proposals—a time-consuming, error-prone process.",
        solution: "Queries across product catalogs, technical specifications, pricing structures, and past proposal templates. Generates cited, comprehensive solution recommendations for enterprise clients.",
        value: "Accelerates proposal turnaround time, improves proposal quality, and ensures technical accuracy in enterprise solution design.",
      },
      {
        title: "SLA and Contract Terms Intelligence",
        friction: "Account managers need instant access to SLA terms, contract obligations, and service level history when addressing enterprise customer concerns.",
        solution: "Semantic search across enterprise contracts, SLA documentation, and service delivery records. Account managers query specific contractual obligations with cited references.",
        value: "Improves enterprise customer relationships, ensures SLA compliance visibility, and accelerates contract renewal discussions.",
      },
    ],
  },
  {
    department: "IT and Infrastructure",
    icon: Monitor,
    color: "text-red-400",
    useCases: [
      {
        title: "IT Systems and Platform Troubleshooting",
        friction: "IT support teams handle complex issues with BSS/OSS platforms, CRM systems, and network management tools with knowledge scattered across documentation.",
        solution: "Unified knowledge base across system documentation, vendor guides, and incident histories. IT staff query specific platform issues and receive cited resolution procedures.",
        value: "Reduces IT ticket resolution time, ensures consistent troubleshooting quality, and minimizes impact of system issues on business operations.",
      },
      {
        title: "Vendor and Technology Assessment Intelligence",
        friction: "Technology teams evaluate new vendors, platforms, and technologies by manually reviewing RFP responses, technical documentation, and industry analyst reports.",
        solution: "Ingests vendor documentation, RFP responses, and technology assessments. Enables comparative analysis queries with cited technical evaluations and benchmark data.",
        value: "Accelerates vendor evaluation cycles, improves technology selection decisions, and ensures comprehensive assessment coverage.",
      },
    ],
  },
];

export const TelecomUseCases = () => (
  <DepartmentUseCases
    title="KOGNIX AI Engine for"
    highlightWord="Telecom & Utilities"
    subtitle="End-to-end AI-powered intelligence across every critical department—from network operations and customer service through field operations, compliance, and enterprise sales."
    departments={departments}
  />
);

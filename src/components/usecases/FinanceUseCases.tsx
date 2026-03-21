import { DepartmentUseCases, DepartmentSection } from "./DepartmentUseCases";
import {
  Shield,
  TrendingUp,
  Users,
  CreditCard,
  Monitor,
  AlertTriangle,
  Briefcase,
  Headphones,
} from "lucide-react";

const departments: DepartmentSection[] = [
  {
    department: "Regulatory and Compliance",
    icon: Shield,
    color: "text-green-400",
    useCases: [
      {
        title: "Regulatory Compliance Copilot",
        friction: "Compliance officers spend weeks interpreting jurisdiction-specific AML, KYC, Basel, and tax regulations across thousands of constantly changing documents.",
        solution: "Semantic search across regulatory documents, internal policies, and circulars. Compliance staff query complex regulatory questions and receive cited, jurisdiction-specific answers instantly.",
        value: "Reduces compliance research time by 60%, mitigates risk of regulatory fines, and ensures up-to-date, auditable answers with source citations.",
      },
      {
        title: "Cross-Jurisdictional Regulatory Comparison",
        friction: "Operating across multiple countries requires understanding regulatory differences for the same financial product or activity across jurisdictions.",
        solution: "Ingests regulatory frameworks from multiple jurisdictions and enables comparative queries (e.g., 'Compare Basel III capital requirements: US vs. EU'). Returns structured, cited comparisons.",
        value: "Accelerates cross-border product launches and ensures multi-jurisdictional compliance without extensive manual legal review.",
      },
      {
        title: "Regulatory Change Impact Assessment",
        friction: "When new regulations are published, compliance must immediately assess which products, processes, and client segments are affected—a manual, error-prone process.",
        solution: "Automatically maps new regulatory publications against existing product documentation, operational procedures, and client portfolios. Flags impacted areas with cited regulatory references.",
        value: "Enables proactive regulatory response, reducing time-to-compliance and avoiding penalties from delayed implementation.",
      },
      {
        title: "Audit Trail and Examination Preparation",
        friction: "Preparing for regulatory examinations requires rapid assembly of interconnected compliance records, policies, and transaction histories across multiple systems.",
        solution: "Natural language queries across compliance databases, transaction logs, and policy repositories. Assembles comprehensive, cited documentation packages for regulatory examinations.",
        value: "Reduces examination preparation time by 70% and demonstrates strong compliance governance to regulators.",
      },
    ],
  },
  {
    department: "Investment and Research",
    icon: TrendingUp,
    color: "text-blue-400",
    useCases: [
      {
        title: "Investment Research Assistant",
        friction: "Analysts manually review hundreds of earnings reports, market analyses, and SEC filings to identify investment opportunities—a slow, labor-intensive process.",
        solution: "Summarizes and cross-references financial documents, identifies key risks and opportunities, and provides real-time insights grounded in current financial data with citations.",
        value: "Triples analyst productivity with real-time, grounded insights enabling faster and better-informed investment decisions.",
      },
      {
        title: "Portfolio Risk Analysis and Scenario Modeling",
        friction: "Risk analysts need to rapidly assess portfolio exposure to changing market conditions, requiring manual correlation of multiple data sources.",
        solution: "Semantic analysis across portfolio holdings, market data, and risk models. Analysts query specific scenarios (e.g., 'Impact of 200bps rate hike on fixed income portfolio') with cited analysis.",
        value: "Enables real-time portfolio risk assessment and faster response to market events, improving risk-adjusted returns.",
      },
      {
        title: "ESG and Sustainability Research Intelligence",
        friction: "ESG analysts struggle to extract consistent sustainability metrics from diverse corporate reports, frameworks (GRI, SASB, TCFD), and regulatory filings.",
        solution: "Ingests ESG reports, sustainability disclosures, and regulatory frameworks. Enables comparative ESG analysis with cited, structured data extraction across companies and sectors.",
        value: "Accelerates ESG due diligence, improves consistency of sustainability assessments, and supports regulatory ESG reporting requirements.",
      },
    ],
  },
  {
    department: "Fraud and Risk Management",
    icon: AlertTriangle,
    color: "text-red-400",
    useCases: [
      {
        title: "Fraud Pattern Detection and Investigation",
        friction: "Fraud analysts review thousands of transaction alerts daily, with high false positive rates from rule-based systems overwhelming investigation capacity.",
        solution: "Analyzes transaction data, cross-references with internal fraud reports and external blacklists, and provides contextual risk assessments for flagged activities with cited evidence.",
        value: "Reduces false positives by 45%, enables detection of novel fraud schemes, and accelerates investigation resolution times.",
      },
      {
        title: "Suspicious Activity Report (SAR) Preparation",
        friction: "Preparing SARs requires assembling evidence from multiple systems, documenting the narrative, and ensuring regulatory format compliance—a time-consuming manual process.",
        solution: "Auto-generates SAR narratives from investigation evidence, transaction histories, and customer profiles. Ensures regulatory format compliance with cited supporting documentation.",
        value: "Reduces SAR preparation time by 50%, improves narrative quality, and ensures consistent regulatory reporting standards.",
      },
      {
        title: "Credit Risk Assessment Intelligence",
        friction: "Credit analysts manually review financial statements, industry reports, and historical performance data to assess borrower creditworthiness.",
        solution: "Ingests financial statements, credit reports, and industry benchmarks. Provides comprehensive credit risk summaries with cited financial ratios, trend analysis, and peer comparisons.",
        value: "Accelerates credit decisioning, improves consistency of underwriting standards, and reduces manual analysis effort by 60%.",
      },
    ],
  },
  {
    department: "Customer Service and Banking Operations",
    icon: Headphones,
    color: "text-orange-400",
    useCases: [
      {
        title: "Intelligent Customer Support Agent",
        friction: "Customer service agents handle complex inquiries about card declines, loan status, and product features by searching multiple disconnected systems.",
        solution: "Unified access to account data, operational manuals, and product documentation. Agents query customer scenarios and receive instant, cited responses with resolution guidance.",
        value: "Increases first-call resolution by 80%, reduces average handle time, and delivers personalized customer experiences.",
      },
      {
        title: "Product and Fee Inquiry Resolution",
        friction: "Customers and staff struggle to find accurate information about complex product features, fee structures, and eligibility criteria across multiple product lines.",
        solution: "Semantic search across product documentation, fee schedules, and eligibility criteria. Provides accurate, cited answers to complex product questions instantly.",
        value: "Eliminates misinformation about products and fees, reducing customer complaints and improving sales accuracy.",
      },
      {
        title: "Loan and Mortgage Process Guidance",
        friction: "Loan officers and customers need step-by-step guidance through complex application processes, documentation requirements, and status tracking.",
        solution: "Interactive process assistant grounded in lending procedures, documentation checklists, and regulatory requirements. Guides users through each stage with cited procedural steps.",
        value: "Reduces application processing errors, accelerates loan cycle times, and improves customer satisfaction throughout the lending journey.",
      },
    ],
  },
  {
    department: "Internal Knowledge and HR",
    icon: Users,
    color: "text-purple-400",
    useCases: [
      {
        title: "Internal Knowledge Base for Staff",
        friction: "Employees waste significant time searching for HR policies, IT procedures, product specifications, and operational guidelines across disconnected systems.",
        solution: "Unified knowledge assistant grounded in HR manuals, IT procedures, product specs, and operational documentation. Instant, cited answers to any internal query.",
        value: "Reduces employee search time by 40%, accelerates onboarding, and ensures consistent internal communication across departments.",
      },
      {
        title: "Compliance Training and Certification Support",
        friction: "Financial institutions must ensure all staff complete mandatory compliance training and understand evolving regulatory requirements—tracking and delivery is complex.",
        solution: "Interactive training assistant that tests knowledge of compliance topics, provides scenario-based learning grounded in actual regulations, and tracks comprehension.",
        value: "Improves compliance training effectiveness, reduces certification preparation time, and ensures regulatory training requirements are met consistently.",
      },
    ],
  },
  {
    department: "IT and Technology",
    icon: Monitor,
    color: "text-cyan-400",
    useCases: [
      {
        title: "Core Banking System Troubleshooting",
        friction: "IT teams handle complex troubleshooting of core banking systems, payment gateways, and trading platforms with knowledge scattered across technical documentation.",
        solution: "Semantic search across system documentation, incident histories, and vendor manuals. IT staff query specific error codes or scenarios and receive cited resolution steps.",
        value: "Reduces mean time to resolution for critical system issues, ensuring minimal impact on banking operations and customer service.",
      },
      {
        title: "Cybersecurity Incident Response Intelligence",
        friction: "Security teams need instant access to incident response procedures, threat intelligence, and regulatory notification requirements during cybersecurity events.",
        solution: "Unified access to incident response playbooks, threat intelligence feeds, and regulatory notification procedures. Provides cited, step-by-step guidance during active incidents.",
        value: "Accelerates incident response times, ensures regulatory notification compliance, and reduces the impact of cybersecurity events on operations.",
      },
    ],
  },
];

export const FinanceUseCases = () => (
  <DepartmentUseCases
    title="KOGNIX AI Engine for"
    highlightWord="Finance & Banking"
    subtitle="End-to-end AI-powered intelligence across every critical department—from regulatory compliance and investment research through fraud detection, customer service, and operations."
    departments={departments}
  />
);

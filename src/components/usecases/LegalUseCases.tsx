import { DepartmentUseCases, DepartmentSection } from "./DepartmentUseCases";
import {
  FileSearch,
  Scale,
  Shield,
  Users,
  Monitor,
  Briefcase,
} from "lucide-react";

const departments: DepartmentSection[] = [
  {
    department: "Litigation and Dispute Resolution",
    icon: Scale,
    color: "text-purple-700 dark:text-purple-400",
    useCases: [
      {
        title: "Case Law Research and Precedent Discovery",
        friction: "Associates spend hundreds of hours manually reviewing case law databases, often missing relevant precedents buried in lengthy judgments across jurisdictions.",
        solution: "Semantic search across ingested case law databases, court orders, and internal case files. Attorneys query complex legal concepts and receive cited, jurisdiction-specific precedents instantly.",
        value: "Reduces legal research time by up to 60%, ensuring more thorough precedent coverage and stronger case arguments.",
      },
      {
        title: "E-Discovery Document Review and Privilege Detection",
        friction: "Manual review of millions of documents during discovery is prohibitively expensive, error-prone, and time-consuming, with risk of missing privileged communications.",
        solution: "Automated semantic classification of documents for relevance, privilege, and responsiveness. Natural language queries allow reviewers to pinpoint key evidence across massive document sets.",
        value: "Dramatically reduces discovery costs and review timelines while improving accuracy of privilege detection and document categorization.",
      },
      {
        title: "Deposition and Trial Preparation Intelligence",
        friction: "Preparing for depositions requires correlating witness statements, exhibits, and timelines across thousands of case documents manually.",
        solution: "Cross-references testimony transcripts, exhibit lists, and chronological event data. Attorneys can query specific factual claims and receive all supporting or contradicting evidence with citations.",
        value: "Strengthens trial preparation with comprehensive, cited evidence mapping and reduces the risk of overlooking critical inconsistencies.",
      },
    ],
  },
  {
    department: "Corporate and Transactional Law",
    icon: Briefcase,
    color: "text-blue-700 dark:text-blue-400",
    useCases: [
      {
        title: "Contract Drafting and Clause Analysis",
        friction: "Reviewing large contracts for non-standard clauses, risky provisions, or deviations from firm-approved templates is tedious and relies on individual attorney experience.",
        solution: "Semantic comparison of contract drafts against approved templates, industry standards, and historical negotiation outcomes. Flags risky clauses and suggests alternative language grounded in precedent.",
        value: "Accelerates contract review cycles, ensures consistency with firm standards, and reduces legal risk from overlooked non-standard terms.",
      },
      {
        title: "Due Diligence Automation",
        friction: "M&A due diligence requires reviewing thousands of corporate documents—financials, IP filings, employment agreements, regulatory filings—under extreme time pressure.",
        solution: "Ingests and indexes all target company documentation. Analysts query specific risk areas (change of control provisions, pending litigation, IP encumbrances) and receive instant, cited findings.",
        value: "Reduces due diligence timelines by 50% while improving coverage and reducing the risk of missing material information.",
      },
      {
        title: "Board Resolution and Corporate Governance Search",
        friction: "Corporate secretaries struggle to locate specific board resolutions, governance policies, or historical corporate actions across decades of records.",
        solution: "Semantic indexing of board minutes, resolutions, bylaws, and governance manuals. Natural language retrieval of specific corporate actions by topic, date, or participants.",
        value: "Ensures rapid access to governance history for compliance certifications, regulatory responses, and corporate restructuring.",
      },
    ],
  },
  {
    department: "Compliance and Regulatory Affairs",
    icon: Shield,
    color: "text-green-700 dark:text-green-400",
    useCases: [
      {
        title: "Regulatory Change Monitoring and Impact Assessment",
        friction: "Compliance teams must manually track regulatory updates across multiple jurisdictions and assess impact on existing policies, a process prone to delays and gaps.",
        solution: "Ingests regulatory publications, government gazettes, and industry circulars. Automatically flags changes relevant to the organization and maps them against existing compliance policies.",
        value: "Proactive compliance posture with real-time awareness of regulatory changes, reducing risk of non-compliance fines and penalties.",
      },
      {
        title: "Policy Query and Employee Compliance Support",
        friction: "Employees frequently have compliance questions (gift policies, data handling, conflict of interest) but struggle to find clear answers in dense policy documents.",
        solution: "Interactive compliance chatbot grounded in official company policies, codes of conduct, and regulatory guidelines. Provides cited, context-specific answers to employee queries.",
        value: "Reduces compliance hotline volume, ensures consistent policy interpretation, and builds a stronger compliance culture across the organization.",
      },
      {
        title: "Anti-Money Laundering (AML) and Sanctions Screening Intelligence",
        friction: "AML analysts manually cross-reference customer data against sanctions lists, PEP databases, and adverse media—generating high volumes of false positives.",
        solution: "Semantic analysis across sanctions databases, adverse media archives, and customer profile data. Provides contextual risk assessments with cited evidence for each alert.",
        value: "Reduces false positive rates by up to 45%, allowing analysts to focus on genuine risk and improving overall AML program effectiveness.",
      },
      {
        title: "Cross-Jurisdictional Regulatory Comparison",
        friction: "Operating across multiple countries requires understanding how regulations differ for the same activity—labor law, data privacy, anti-corruption—across jurisdictions.",
        solution: "Ingests regulatory frameworks from multiple jurisdictions and enables comparative queries (e.g., 'Compare GDPR data retention rules vs. CCPA'). Returns structured, cited comparisons.",
        value: "Accelerates international expansion planning and ensures multi-jurisdictional compliance without engaging external counsel for routine comparisons.",
      },
    ],
  },
  {
    department: "Knowledge Management and Legal Operations",
    icon: FileSearch,
    color: "text-cyan-700 dark:text-cyan-400",
    useCases: [
      {
        title: "Institutional Knowledge Preservation",
        friction: "Senior partner departures result in loss of decades of case strategy insights, client relationship history, and specialized legal knowledge.",
        solution: "Ingests partner memos, case strategies, client correspondence, and knowledge-sharing documents. Creates a queryable institutional memory accessible to all firm members.",
        value: "Preserves critical institutional knowledge, ensuring continuity of client service quality and strategic legal insight regardless of personnel changes.",
      },
      {
        title: "Legal Research Memo Generation",
        friction: "Junior associates spend excessive time drafting research memos, often duplicating work already done by colleagues on similar legal questions.",
        solution: "Searches historical research memos, opinion letters, and internal knowledge bases for relevant prior work. Assists in generating new memos grounded in firm-specific precedents.",
        value: "Reduces redundant research effort, improves consistency of legal analysis, and accelerates associate productivity.",
      },
      {
        title: "Matter Management and Historical Case Intelligence",
        friction: "Partners struggle to quickly locate relevant past matters for pitches, conflicts checks, or strategic reference, especially across practice groups.",
        solution: "Semantic search across matter management systems, case databases, and client history. Queries like 'Find all IP licensing matters in APAC from last 5 years' return instant, structured results.",
        value: "Improves business development effectiveness, accelerates conflicts clearance, and enables cross-practice collaboration.",
      },
    ],
  },
  {
    department: "Human Resources and Administration",
    icon: Users,
    color: "text-orange-400",
    useCases: [
      {
        title: "HR Policy and Benefits Query Assistant",
        friction: "Employees submit repetitive HR queries about leave policies, benefits enrollment, expense procedures, creating a bottleneck for HR teams.",
        solution: "AI assistant grounded in HR policy manuals, benefits guides, and employee handbooks. Provides instant, cited answers to common and complex HR questions.",
        value: "Reduces HR ticket volume by up to 60%, frees HR staff for strategic initiatives, and ensures consistent policy communication.",
      },
      {
        title: "Legal Staff Onboarding and Training",
        friction: "Onboarding new legal staff (associates, paralegals) on firm procedures, billing protocols, and practice-specific workflows is lengthy and resource-intensive.",
        solution: "Interactive onboarding assistant built on firm procedure manuals, training materials, and practice group guides. New hires query scenarios and receive cited, step-by-step guidance.",
        value: "Accelerates new hire productivity, reduces training burden on senior staff, and ensures consistent onboarding quality.",
      },
    ],
  },
  {
    department: "IT and Technology",
    icon: Monitor,
    color: "text-red-400",
    useCases: [
      {
        title: "Legal Tech Platform Support and Troubleshooting",
        friction: "IT support teams handle repetitive queries about document management systems, e-billing platforms, and legal research tool usage.",
        solution: "Knowledge base assistant grounded in platform documentation, IT procedures, and troubleshooting guides. Provides instant resolution for common technical issues.",
        value: "Reduces IT ticket volume, accelerates issue resolution, and ensures legal professionals maximize their use of firm technology tools.",
      },
      {
        title: "Data Privacy and Information Security Compliance",
        friction: "Ensuring compliance with data privacy regulations (GDPR, CCPA) and client data handling requirements across all firm systems requires constant vigilance.",
        solution: "Monitors and queries data privacy policies, client engagement letters, and security protocols. Provides instant guidance on data handling requirements for specific client matters.",
        value: "Reduces data privacy risk, ensures consistent compliance with client-specific data requirements, and supports regulatory audit readiness.",
      },
    ],
  },
];

export const LegalUseCases = () => (
  <DepartmentUseCases
    title="KOGNIX AI for"
    highlightWord="Legal & Compliance"
    subtitle="End-to-end AI-powered intelligence across every critical department—from litigation and corporate law through compliance, knowledge management, and operations."
    departments={departments}
  />
);

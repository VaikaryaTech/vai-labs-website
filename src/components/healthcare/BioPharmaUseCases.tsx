import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  FlaskConical,
  ShieldCheck,
  FileSearch,
  Factory,
  Monitor,
  Users,
  TrendingUp,
  Headphones,
  AlertTriangle,
  Lightbulb,
  CheckCircle,
} from "lucide-react";

interface UseCase {
  title: string;
  friction: string;
  solution: string;
  value: string;
}

interface DepartmentSection {
  department: string;
  icon: React.ElementType;
  color: string;
  useCases: UseCase[];
}


const departmentSections: DepartmentSection[] = [
  {
    department: "R&D and Innovation",
    icon: FlaskConical,
    color: "text-purple-400",
    useCases: [
      {
        title: "Research Efficiency — Semantic Archive Search",
        friction: "R&D teams invest significant time pursuing research paths already explored or rejected in proprietary historical projects. Locating specific experimental details within massive archives relies on keyword matching.",
        solution: "Semantic search and retrieval across the historical archive of R&D reports, formulation summaries, patent filings, and experimental data logs. Researchers can query conceptually rather than by keyword.",
        value: "Accelerated the design-of-experiment (DoE) phase by proactively identifying previously solved technical constraints, reducing redundant effort and accelerating time-to-market.",
      },
      {
        title: "Research Efficiency — Material Benchmarking",
        friction: "Scientists need to extract precise performance metrics from thousands of archived Technical Data Sheets (TDS), safety reports, or unstructured Excel/PDF reports.",
        solution: "Context-aware extraction configured to systematically pull specific data points (e.g., flash point, viscosity) from ingested unstructured documents.",
        value: "Automated material benchmarking and selection, significantly reducing the manual effort required to compile performance data for modeling and feasibility studies.",
      },
      {
        title: "Research Efficiency — Institutional Knowledge Preservation",
        friction: "Retirement or transition of senior formulation scientists represents a significant loss of proprietary knowledge concerning complex synthetic pathways or material handling subtleties.",
        solution: "Ingestion of expert reports, retirement interview transcripts, and proprietary knowledge transfer documentation. Provides an interactive Q&A interface preserving critical operational insight.",
        value: "Preserves critical institutional knowledge, mitigating the impact of employee turnover and ensuring consistency in complex formulation decision-making.",
      },
      {
        title: "Research Efficiency — Patent Defense Acceleration",
        friction: "Responding to patent office examination reports requires swiftly retrieving specific experimental proof points, trial logs, and dated data sheets to substantiate claims of novelty.",
        solution: "Instant, semantically grounded retrieval of specific trial logs and data sheets linked to formulation versions and IP disclosures. The system cites the exact source document for every piece of data retrieved.",
        value: "Strengthens IP defense and accelerates the patent filing response speed, ensuring timely adherence to legal submission deadlines.",
      },
      {
        title: "Compliance — Regulatory Change Synchronization",
        friction: "Interpreting how numerous, highly technical guidance documents affect ongoing research protocols and formulation choices requires significant manual legal review.",
        solution: "Ingestion of external regulatory documents. The KOGNIX AI Engine offers auditable summarization and Q&A to provide researchers with concise, cited answers regarding specific restrictions or testing requirements.",
        value: "Reduces the regulatory risk exposure early in the R&D pipeline, improving the agility of regulatory response.",
      },
      {
        title: "Compliance — R&D-to-Marketing Communication",
        friction: "Communication between R&D (technical nomenclature) and Marketing/Sales (accessible descriptions) can lead to ambiguity or misrepresentation of product properties.",
        solution: "Controlled document generation where the KOGNIX AI Engine synthesizes factual product summaries grounded strictly in official R&D test reports and technical specifications.",
        value: "Reduces internal communication ambiguity and ensures external marketing claims are verifiable and accurately aligned with R&D findings.",
      },
      {
        title: "IP Clearance and Patent Landscape Navigation",
        friction: "Meticulous, time-consuming cross-referencing of internal data against constantly evolving global patent claims to ensure freedom-to-operate. High risk of IP infringement.",
        solution: "Functions as an IP Risk Mitigator. Indexes internal project documentation and external patent databases. Instantly highlights relevant patent claims, providing concise summaries of conflicts and citing the exact relevant claim text.",
        value: "Proactive Mitigation of IP Risk: Drastically reduces labor and potential legal exposure associated with IP clearance, securing the commercial and regulatory pathway for new API candidates.",
      },
    ],
  },
  {
    department: "Quality Assurance and Control",
    icon: ShieldCheck,
    color: "text-green-400",
    useCases: [
      {
        title: "Audit — Equipment Calibration Verification",
        friction: "QA needs to quickly prove maintenance schedule execution and documentation prior to any specific production run. Audit findings often cite insufficient implementation of preventative maintenance.",
        solution: "Ingestion and indexing of equipment maintenance logs, calibration certificates, and preventative maintenance schedules. QA personnel can retrieve documentation instantly by querying specific equipment ID and date range.",
        value: "Ensures operational compliance, streamlines maintenance-related documentation verification, and reduces equipment-related documentation issues cited during audits.",
      },
      {
        title: "Process — Supplier Evaluation and CoA Comparison",
        friction: "Manually comparing vendor Certificates of Analysis (CoAs) against internal quality standards and historical performance data is time-consuming and a top non-conformity area.",
        solution: "Semantic search across indexed supplier CoAs, material specifications, and internal historical supplier performance reports for complex comparisons.",
        value: "Improves supplier qualification efficiency, enabling faster identification of reliable partners and reducing material non-conformance by flagging deviations proactively.",
      },
      {
        title: "Process — CAPA Precedent Retrieval",
        friction: "Significant time spent searching for historical CAPA or NCR documentation to find precedents or effective resolutions for analogous failure modes.",
        solution: "Semantic search across the structured CAPA and NCR repository. QA staff can query the context and mechanism of failure to retrieve relevant past investigations and root cause analyses.",
        value: "Accelerates CAPA closure time by immediately providing cited, proven solutions for previously encountered quality issues.",
      },
      {
        title: "Training — QA Personnel Onboarding",
        friction: "Training new QA personnel on chemical documentation complexity, version tracking protocols, and QMS procedures is extensive, leading to slow ramp-up times.",
        solution: "Interactive training tool built upon QMS manuals, process flowcharts, and historical audit findings. New hires can query scenarios and receive cited answers.",
        value: "Accelerates QC staff proficiency and knowledge retention, reducing dependency on senior staff for basic training queries.",
      },
      {
        title: "Proactive Audit Preparation and CAPA/Deviation Investigation",
        friction: "Rapid assembly of complex, interconnected GxP records (SOPs, deviation reports, raw data, training sign-offs) for audits and CAPA investigations. Manual retrieval is error-prone and causes delays.",
        solution: "Establishes a centralized QA query layer. Executes natural language searches (e.g., \"Provide all documentation... for personnel involved in the specific deviation...\"). Rapidly synthesizes cross-functional data, linking directly to every validated source document (enforcing ALCOA+ principles).",
        value: "Accelerated Deviation Closure and Enhanced Audit Readiness: Significantly reduces Mean Time to Resolution (TTR) for quality issues and markedly improves performance during regulatory inspections via immediate, auditable, and traceable GxP document access.",
      },
      {
        title: "Global GxP Standard Comparison and SOP Harmonization",
        friction: "Continuous monitoring and comparison of region-specific guidelines (e.g., FDA vs. EudraLex) against internal Quality System Documents (QSDs) and SOPs across multiple international markets.",
        solution: "Ingests and semantically maps global GxP guidance documents against the internal controlled document library. Provides an instant gap analysis, highlighting precisely where current internal SOPs fall short of the most stringent global regulatory benchmark.",
        value: "Enhanced Regulatory Consistency and Risk Reduction: Proactively minimizes the risk of critical quality deficiencies being cited during international regulatory audits by ensuring internal operational procedures are consistently harmonized with the current and most demanding global GxP standards.",
      },
    ],
  },
  {
    department: "Regulatory Affairs and Compliance",
    icon: FileSearch,
    color: "text-blue-400",
    useCases: [
      {
        title: "Hazard — SDS Data Extraction and Indexing",
        friction: "Manually reviewing, extracting, and indexing key data points from newly received vendor SDS PDFs into the internal EHS system is labor-intensive and costly.",
        solution: "Context-aware extraction configured to systematically pull standardized data fields (Hazard Identification, Exposure Controls/PPE) from ingested SDS documents.",
        value: "Eliminates costly hours lost to manual data retyping and indexing, shifting EHS resources toward high-value risk assessment and compliance analysis.",
      },
      {
        title: "Global Compliance — Cross-Jurisdictional Comparison",
        friction: "Comparing regulatory requirements (exposure limits, permitted ingredients, labeling standards) across multiple global jurisdictions is complex and time-intensive.",
        solution: "Ingestion of regional regulatory summaries and legal texts. Semantic retrieval and summarization highlights specific cross-jurisdictional deviations for a given chemical or product category.",
        value: "Accelerates global market access and compliance planning, avoiding regulatory fines associated with non-compliant product documentation.",
      },
      {
        title: "Global Compliance — Regulatory Change Impact Assessment",
        friction: "When a new external regulation is published, the compliance team must immediately assess which active product dossiers, raw material inventory, or formulation processes are affected.",
        solution: "Semantic searching across all active product dossiers, formulation lists, and supplier material data based on the key concepts or chemical identifiers mentioned in the new regulation.",
        value: "Dramatically improves organizational agility in responding to regulatory changes, enabling proactive adjustments before enforcement.",
      },
      {
        title: "Global Compliance — Historical Filing Reuse",
        friction: "Expediting new registrations requires analysts to quickly locate and reuse historical data from past, similar regulatory filings, hindered by poorly indexed archives.",
        solution: "Semantic search across the archived regulatory filing repository, enabling retrieval based on chemical function, application, or regulatory agency.",
        value: "Reduces research time for new submissions by providing immediate access to successful historical submission strategies and supporting data.",
      },
      {
        title: "Internal Communication — Compliance Information Synthesis",
        friction: "Internal stakeholders frequently request compliance information. Compliance analysts must manually synthesize information from complex legal documents for internal use.",
        solution: "Generative responses synthesized strictly from retrieved legal texts, official guidance, and internal compliance documents with citations back to the regulatory document version.",
        value: "Ensures internal stakeholders receive accurate, verifiable compliance information, preventing the circulation of misinformation.",
      },
      {
        title: "Regulatory Submission Data Integrity Verification",
        friction: "Inconsistent or incomplete data synchronization between R&D, Clinical, and Quality teams, delaying submission compilation and compromising integrity. Manual verification is time-consuming and error-prone.",
        solution: "Executes an automated, semantic integrity check prior to submission. Queries draft filing documents (e.g., CTD sections) against validated source records (e.g., batch records) to confirm consistency. Generates a traceable report flagging discrepancies.",
        value: "Reduced Submission Deficiencies and Accelerated Approval: Decreases the probability of regulatory agencies issuing Request for Information (RFI) letters related to internal data conflicts, thereby accelerating the overall Time to Approval.",
      },
      {
        title: "Retrieval and Audit of the Electronic Trial Master File (eTMF)",
        friction: "Audit staff struggle to rapidly locate specific, cross-functional document sets within the eTMF structure during monitoring visits or inspections to verify compliance.",
        solution: "Allows regulatory personnel to utilize conversational, contextual queries that span the TMF index (e.g., \"Retrieve all investigator meeting minutes...\"). Instantly retrieves required documents, demonstrating GCP compliance.",
        value: "Optimized Regulatory Access: Ensures the eTMF is continuously \"inspection-ready\" by reducing the time needed for complex document retrieval from hours to mere seconds, enabling efficient evaluation of trial conduct and data quality.",
      },
    ],
  },
  {
    department: "Manufacturing and Operations",
    icon: Factory,
    color: "text-orange-400",
    useCases: [
      {
        title: "Production — Shop Floor SOP Access",
        friction: "Inability of production staff to instantly locate the correct, current SOP or safety protocol leads to risk of error, rework, and safety incidents.",
        solution: "API integration into MES terminals or tablets. Operators use natural language queries to retrieve cited, actionable steps from the latest approved version of the relevant SOP.",
        value: "Ensures strict adherence to correct, version-controlled procedures, improving product consistency, quality control, and workplace safety.",
      },
      {
        title: "Production — Formula Version Control",
        friction: "Ensuring the correct, current version of a specific formula is used for a production batch is vital. Errors lead to high-cost rework or scrapping of entire batches.",
        solution: "Strict version control and permissioned access to formulation documents, integrated with the MES. The system confirms the formula version linked to a batch is the latest approved.",
        value: "Minimizes high-cost rework and batch scrapping due to formula version errors, ensuring product consistency.",
      },
      {
        title: "Equipment — Technical Troubleshooting",
        friction: "Complex manufacturing equipment requires deep technical expertise for troubleshooting. High reliance on experienced staff creates bottlenecks, slowing down MTTR.",
        solution: "Interactive Q&A system trained on digitized machine manuals, internal maintenance protocols, troubleshooting flowcharts, and historical maintenance tickets indexed by equipment ID.",
        value: "Speeds up repair time by providing immediate, cited diagnostic guidance, reducing operational reliance on specific expert knowledge.",
      },
      {
        title: "Equipment — Shift Communication Standardization",
        friction: "Lack of consistency in communicating risk, process changes, and safety procedures across different production shifts leads to operational deviations and safety gaps.",
        solution: "Controlled generation of standardized summaries of key safety risks, policy changes, and procedural updates for daily shift briefings, grounded in current EHS policies.",
        value: "Enhances uniform safety culture and ensures communication clarity across shifts.",
      },
      {
        title: "Training — Factory Personnel Onboarding",
        friction: "Training new factory personnel takes significant time due to the technical complexity of process controls, hazard analysis, and specialized equipment operation.",
        solution: "Conversational training interface built on indexed training manuals, safety policy transcripts, and digital SOPs. New hires simulate complex process questions.",
        value: "Accelerates onboarding time by an estimated 30%, facilitating quicker proficiency in standardized procedures.",
      },
      {
        title: "Real-Time Batch Record and SOP Verification",
        friction: "GMP operators need immediate, unambiguous access to the current, correct version of SOPs and contextual historical batch record information on the shop floor to prevent operational errors. Delays introduce non-compliance risks.",
        solution: "Deployed as a secure, validated interface accessible on the shop floor. Operators can verbally or textually query highly specific technical instructions (e.g., \"What is the acceptable temperature range...?\") and receive a source-grounded answer from the current Master Batch Record and version-controlled SOP.",
        value: "Increased Operational Compliance and Reduction in Errors: Provides accurate, GxP-validated information precisely at the point of action, significantly enhancing adherence to mandatory procedures and securing the integrity of the digital batch audit trail.",
      },
      {
        title: "Automated Material Traceability and Auditable Chain-of-Custody",
        friction: "Linking disparate information—from raw material receipt to final product packaging—across systems (LIMS, ERP, MES) to verify the chain-of-custody for regulatory bodies.",
        solution: "Indexes all documentation containing unique material identifiers (COAs, receiving logs, production records). The system semantically connects these documents, enabling a synthesized, auditable reconstruction of a lot number's entire history and chain-of-custody.",
        value: "Enhanced Product Integrity and Rapid Recall Capability: Streamlines complex documentation, reducing the time required for root cause analysis and mass serialization/traceability checks, reinforcing compliance with global drug security acts.",
      },
      {
        title: "Global Distribution Documentation and Customs Compliance",
        friction: "Supply Chain (SC) teams need rapid, accurate access to country-specific regulatory certificates, market authorization data, and precise shipping documentation. Managing version control across divergent international markets creates significant friction.",
        solution: "Creates a centralized SC knowledge hub, indexed by product, destination, and regulatory status. Synthesizes current regional importation requirements and instantly retrieves the necessary, verified Certificate of Analysis (CoA) or customs documentation.",
        value: "Reduced Logistics and Customs Friction: Minimizes the risk of critical API shipments being delayed or detained due to reliance on outdated, incorrect, or missing documentation, thus ensuring smooth, compliant global supply.",
      },
    ],
  },
  {
    department: "IT and Global Business Services (GBS)",
    icon: Monitor,
    color: "text-cyan-400",
    useCases: [
      {
        title: "Policy — Region-Specific Policy Access",
        friction: "GBS employees must manage business processes compliant with highly fragmented, local policies across 50+ countries. Instant, correct access to region-specific policies is essential.",
        solution: "Centralized ingestion of all global and local GBS/IT policies. Retrieval enforced by RBAC, ensuring employees receive the version specific to their assigned region and role.",
        value: "Enhances the efficiency and accuracy of global GBS hub operations by guaranteeing consistent, localized policy application.",
      },
      {
        title: "Policy — IT Policy Attestation Tracking",
        friction: "Proving that the diverse, multi-country workforce has reviewed and acknowledged critical IT policies is difficult to track manually and vital for audit readiness.",
        solution: "Tracking user interaction and mandatory retrieval of IT security policies, generating an immutable, auditable record of acknowledgment linked to user accounts.",
        value: "Simplifies compliance reporting for data governance standards and supports rapid audit preparation.",
      },
      {
        title: "Policy — Deployment Documentation Standardization",
        friction: "New system deployments require extensive documentation that can be inconsistent or incomplete, slowing down adoption and risking future maintenance.",
        solution: "Retrieval of standardized architectural patterns, project documentation templates, and detailed technical reports from previous successful deployments.",
        value: "Standardizes IT project documentation quality, accelerating deployment cycles and reducing future operational debt.",
      },
      {
        title: "Service — IT Service Desk Acceleration",
        friction: "IT service desk agents struggle with scattered internal system manuals, legacy release notes, and complex troubleshooting documentation across disparate wikis and shared drives, increasing MTTR.",
        solution: "Semantic indexing of all technical IT documentation, enabling agents to query system errors and retrieve cited solutions instantly.",
        value: "Accelerates MTTR for internal tickets by providing immediate access to technical solutions, improving end-user satisfaction.",
      },
      {
        title: "Service — Technical Communication Simplification",
        friction: "Communicating complex system outages or technical updates to non-technical business users leads to confusion and unnecessary support calls.",
        solution: "Generative summarization of technical release notes or incident reports into concise, cited business impact statements tailored for the non-technical audience.",
        value: "Improves internal communication effectiveness by translating technical complexity into actionable business context.",
      },
      {
        title: "Onboarding — GBS Staff Training",
        friction: "New GBS staff require rapid proficiency in numerous finance, HR, and procurement SOPs. Traditional text-heavy training is inefficient.",
        solution: "Interactive Q&A assistant built on GBS standard operating manuals and process guides, allowing staff to query specific scenarios.",
        value: "Reduces time and effort for GBS induction, ensuring standardized process knowledge across the center.",
      },
      {
        title: "Onboarding — Audit Documentation Retrieval",
        friction: "External auditors frequently request documentation related to system validation, change management, and disaster recovery on short notice.",
        solution: "Instant, permissioned retrieval of version-controlled system validation reports, change request documentation, and security policy manuals.",
        value: "Improves transparency and speed during external IT compliance reviews.",
      },
      {
        title: "GxP System Troubleshooting and Knowledge Management",
        friction: "IT support personnel spend excessive time navigating and synthesizing information across vast libraries of detailed validation reports (IQ/OQ/PQ), system architecture guides, and application SOPs when responding to a technical incident.",
        solution: "Integrated as the primary knowledge engine for the IT Service Desk. Grounds all troubleshooting guidance in controlled, validated GxP system documentation. Answers queries like: \"What are the approved recovery steps for a failure...?\"",
        value: "Accelerated Mean Time to Resolution (MTTR): Reduces system downtime for business-critical validated systems by providing immediate, technically accurate solutions based on verified documentation, maintaining the qualified status of the GxP infrastructure.",
      },
    ],
  },
  {
    department: "Human Resources (HR)",
    icon: Users,
    color: "text-pink-400",
    useCases: [
      {
        title: "Safety — Chemical Safety Policy Access",
        friction: "Employees must have readily accessible safety training and policy documents, particularly mandatory Hazardous Chemical Risk/Right-to-Know Policy.",
        solution: "Centralized index of all HR policies, mandatory safety manuals, and training materials. Employees use natural language search for instant, cited answers.",
        value: "Ensures rapid access to critical safety information, supporting compliance with mandatory disclosure laws and enhancing employee safety awareness.",
      },
      {
        title: "Safety — Policy Attestation and Compliance",
        friction: "HR must maintain an auditable trail proving employees and contractors have reviewed, understood, and acknowledged critical safety, ethical, or compliance policies.",
        solution: "Mandatory retrieval and interaction with critical documents through the KOGNIX AI Engine, generating auditable records of user engagement.",
        value: "Facilitates compliance attestation during audits by providing clear evidence of policy distribution and engagement.",
      },
      {
        title: "Governance — Cross-Regional Labor Law Compliance",
        friction: "HR staff struggle to maintain and compare complex, local labor laws across different states and globally, leading to potential legal missteps.",
        solution: "Semantic search and comparison applied to indexed labor contracts, local legal summaries, and internal policy manuals, highlighting divergences.",
        value: "Ensures consistent, accurate application of employment law, significantly reducing legal and compliance risk.",
      },
      {
        title: "Governance — HR Precedent-Based Case Resolution",
        friction: "Resolving nuanced grievances, disciplinary actions, or complex benefit questions requires synthesizing information from multiple legal contracts and historical precedent.",
        solution: "Secure, permissioned access for HR specialists to internal legal/HR precedent documentation with semantic search for analogous case facts and decisions.",
        value: "Ensures objectivity, fairness, and consistency in high-stakes HR decisions by grounding resolution in historical organizational precedent.",
      },
      {
        title: "Efficiency — New Employee Onboarding",
        friction: "Onboarding processes rely heavily on manual document presentation, leading to information overload and low retention of key policy details.",
        solution: "Interactive Q&A for new hires covering common procedural questions, grounded in official HR documents.",
        value: "Accelerates new employee integration and policy comprehension, reducing time HR generalists spend on repetitive policy questions.",
      },
      {
        title: "Planning — Policy Usage Analytics",
        friction: "HR management lacks data on which policies are most frequently accessed or confusing, making it difficult to prioritize refinement or communication efforts.",
        solution: "Retrieval and summarization of policy usage logs and semantic search trends data, indicating knowledge gaps and areas of high policy complexity.",
        value: "Provides data-driven insights for policy refinement and targeted communication planning.",
      },
      {
        title: "GxP Training Compliance and Policy Knowledge Dissemination",
        friction: "Mandated verifiable records of staff qualifications and GxP training. Employees struggle to interpret complex and voluminous HR policies, impacting consistent application.",
        solution: "Deploys as a personalized internal policy concierge. Answers natural language queries on HR policies, linking to the official document. For GxP, it provides immediate confirmation of required training status based on role and location.",
        value: "Improved Employee Compliance and Knowledge Retention: Provides instant, context-aware access to critical GxP training requirements. Streamlines access to HR information, supporting a positive Employee Value Proposition (EVP).",
      },
    ],
  },
  {
    department: "Sales and Market Development",
    icon: TrendingUp,
    color: "text-amber-400",
    useCases: [
      {
        title: "Technical Knowledge — Instant Product Consultation",
        friction: "Sales professionals encounter challenges navigating complex technical product requirements and need instant access to deep product specifications during client interactions.",
        solution: "Centralized index of all Technical Data Sheets, internal test reports, application guides, and formulation compatibility matrices. Acts as an instant, factual technical consultant.",
        value: "Improves sales effectiveness and velocity by enabling instant, factual technical consultation and enhancing client trust.",
      },
      {
        title: "Technical Knowledge — Compliant Claims Enforcement",
        friction: "Sales personnel risk making non-compliant, exaggerated, or inaccurate product performance claims, leading to legal and reputational risk.",
        solution: "Guardrails ensuring all generative summaries and technical responses are strictly grounded in and cite official, version-controlled product specification documents.",
        value: "Mitigates legal and reputational risk by enforcing factual citation of approved data.",
      },
      {
        title: "Proposals — Competitive Differentiation",
        friction: "Rapidly articulating precise product differentiation against competitors requires synthesizing technical performance data with market intelligence.",
        solution: "Controlled document generation synthesizing summaries contrasting products against indexed competitive analysis reports, citing internal performance proof points.",
        value: "Provides high-impact, fact-based talking points for market positioning.",
      },
      {
        title: "Proposals — RFP Compliance Document Retrieval",
        friction: "RFP responses demand urgent location and submission of specific regulatory compliance documents, sustainability certifications, or proprietary technical safety guarantees.",
        solution: "Context-aware extraction to instantly pull required certifications from compliance documents, integrating directly into the proposal drafting workflow.",
        value: "Accelerates the RFP response cycle and potentially improves win rates due to timeliness.",
      },
      {
        title: "Proposals — Pre-Sales Collateral Generation",
        friction: "Creating consistent, high-quality pre-sales briefing materials requires sourcing data from technical specs, market reports, and internal expert opinions.",
        solution: "Controlled content generation based only on retrieved, cited technical and market intelligence reports.",
        value: "Standardizes the quality and factual basis of all pre-sales collateral, enhancing brand consistency.",
      },
      {
        title: "Training — Portfolio Mastery for New Reps",
        friction: "New sales reps struggle to quickly master the entire, technically diverse product portfolio requiring in-depth understanding of application and chemical principles.",
        solution: "Interactive Q&A platform simulating technical customer queries, trained exclusively on application guides and technical manuals.",
        value: "Reduces training time and accelerates product knowledge acquisition, shortening ramp-up period.",
      },
      {
        title: "Contracts — Commercial Terms Tracking",
        friction: "Tracking the evolution of commercial terms, regional pricing schedules, and specific liability clauses across numerous complex customer contracts is challenging.",
        solution: "Semantic search across all archived commercial contracts, pricing agreements, and legal addenda for rapid retrieval of applicable terms.",
        value: "Ensures sales quotes adhere to current financial and legal terms, preventing revenue leakage or contractual disputes.",
      },
      {
        title: "Compliant Technical Data Provisioning for Strategic Partners",
        friction: "Sales representatives require rapid access to specific API specifications, regulatory filing status, and quality summaries for customer due diligence. Sharing must be secure, timely, and compliant with internal data governance.",
        solution: "Implements a Regulatory Shielding function. Sales teams query controlled documents to generate verified, synthesized, compliant summary statements (e.g., shelf life statement) suitable for external sharing, without granting access to internal source documents.",
        value: "Accelerated Sales Cycle and Enhanced Partner Trust: Transforms highly regulated technical knowledge into a competitive differentiator by enabling fast, accurate, and compliant technical communication.",
      },
    ],
  },
  {
    department: "Customer Support and Technical Service",
    icon: Headphones,
    color: "text-teal-400",
    useCases: [
      {
        title: "Troubleshooting — Technical Inquiry Resolution",
        friction: "High Average Handle Time (AHT) for complex technical inquiries involving chemical incompatibility, incorrect dosing, or raw material variability.",
        solution: "Semantic search across technical service bulletins, formulation guides, application manuals, and resolved case histories for instant cited diagnostic procedures.",
        value: "Accelerates technical service resolution, directly improving customer satisfaction and reducing AHT.",
      },
      {
        title: "Troubleshooting — Real-Time Data Extraction",
        friction: "Agents need to rapidly extract obscure stability data, chemical composition limits, or safety precautions while actively engaged in a customer call.",
        solution: "Instant, semantic retrieval of specific data points from lengthy TDS or stability reports using context-aware extraction.",
        value: "Enhances agent professionalism and speed, leading to quicker call resolution and higher quality customer experience.",
      },
      {
        title: "Quality — Consistent Application Advice",
        friction: "Inconsistent or erroneous application advice from different support agents regarding complex specialty chemical applications can lead to customer product failure.",
        solution: "Enforced grounding of all technical advice in official, version-controlled Product Application Manuals and formulation guidelines.",
        value: "Ensures uniform, high-quality technical support guidance, safeguarding product integrity and customer success.",
      },
      {
        title: "Quality — Environmental-Specific Storage Guidance",
        friction: "Customers require accurate storage and handling advice tailored to their specific local environmental conditions to prevent product degradation.",
        solution: "Retrieval of specific product stability documentation relevant to external environmental factors, cross-referencing against geographical data.",
        value: "Reduces product degradation post-sale, minimizing customer complaints and warranty claims.",
      },
      {
        title: "Knowledge Base — Case Documentation",
        friction: "Documenting complex troubleshooting resolutions accurately relies on manual agent summary, resulting in inconsistent knowledge base quality.",
        solution: "Generative tool assists agents by summarizing the issue, synthesizing retrieved context, and structuring the resolution into a standardized case note format.",
        value: "Improves the quality and future utility of the internal technical knowledge base.",
      },
      {
        title: "Knowledge Base — Support Agent Training",
        friction: "Training new technical support agents on myriad specific failure modes and troubleshooting pathways is a lengthy, critical process.",
        solution: "Simulation environment allowing agents to practice querying complex failure scenarios against the knowledge base with instant cited feedback.",
        value: "Reduces ramp-up time for specialized technical support staff, accelerating readiness for complex inquiries.",
      },
      {
        title: "Claims — Warranty and Liability Clause Retrieval",
        friction: "When handling product defect claims, support needs to quickly locate and summarize specific warranty and liability clauses in the customer's contract.",
        solution: "Semantic search across archived customer contracts, legal agreements, and general terms and conditions with permissioned retrieval.",
        value: "Ensures claims are processed accurately according to contractual terms, maintaining legal compliance.",
      },
      {
        title: "Technical Inquiry Resolution and Service Excellence",
        friction: "Customer Support fields complex, highly technical inquiries requiring access to siloed information across R&D, QA, and Regulatory dossiers, leading to long resolution times and high escalation rates.",
        solution: "Centralizes the entire technical knowledge base (R&D reports, COAs, stability data, market authorization documents). Agents receive instant, contextual answers rigorously grounded in validated technical sources, resolving complex queries without escalation.",
        value: "Increased First-Call Resolution (FCR) and Customer Satisfaction: Significantly reduces the organizational burden of escalating technical queries, delivering a superior, faster, and more professional technical service to global partners.",
      },
    ],
  },
];

const UseCaseCard = ({ useCase }: { useCase: UseCase }) => (
  <div className="p-5 rounded-xl border border-border bg-card/30 hover:bg-card/60 transition-colors">
    <div className="mb-3">
      <h4 className="font-semibold text-foreground text-sm leading-snug">{useCase.title}</h4>
    </div>

    <div className="space-y-3 text-sm">
      <div>
        <div className="flex items-center gap-1.5 mb-1">
          <AlertTriangle className="h-3.5 w-3.5 text-yellow-500 shrink-0" />
          <span className="font-medium text-yellow-500/90 text-xs uppercase tracking-wide">Friction</span>
        </div>
        <p className="text-muted-foreground leading-relaxed pl-5">{useCase.friction}</p>
      </div>

      <div>
        <div className="flex items-center gap-1.5 mb-1">
          <Lightbulb className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
          <span className="font-medium text-cyan-400/90 text-xs uppercase tracking-wide">KOGNIX AI Engine</span>
        </div>
        <p className="text-muted-foreground leading-relaxed pl-5">{useCase.solution}</p>
      </div>

      <div>
        <div className="flex items-center gap-1.5 mb-1">
          <CheckCircle className="h-3.5 w-3.5 text-green-400 shrink-0" />
          <span className="font-medium text-green-400/90 text-xs uppercase tracking-wide">Value Delivered</span>
        </div>
        <p className="text-muted-foreground leading-relaxed pl-5">{useCase.value}</p>
      </div>
    </div>
  </div>
);

export const BioPharmaUseCases = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 px-4 py-2" variant="secondary">
            Comprehensive Use Cases
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            KOGNIX AI Engine for <span className="bg-gradient-accent bg-clip-text text-transparent">Biopharmaceutical</span> Industry
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            End-to-end AI-powered intelligence across every critical department—from R&D through manufacturing, quality, and customer service.
          </p>
        </div>

        <div>
          <Accordion type="multiple" className="space-y-4">
            {departmentSections.map((dept, i) => (
              <AccordionItem key={i} value={`dept-${i}`} className="border border-border rounded-xl px-1 bg-card/20">
                <AccordionTrigger className="px-4 py-4 hover:no-underline">
                  <div className="flex items-center gap-3 text-left">
                    <div className={`p-2 rounded-lg bg-muted/50 ${dept.color}`}>
                      <dept.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="font-semibold text-base">{dept.department}</span>
                      <span className="text-muted-foreground text-sm ml-2">({dept.useCases.length} use cases)</span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="grid gap-3">
                    {dept.useCases.map((uc, j) => (
                      <UseCaseCard key={j} useCase={uc} />
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

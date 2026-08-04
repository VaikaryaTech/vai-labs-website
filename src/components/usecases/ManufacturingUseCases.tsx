import { DepartmentUseCases, DepartmentSection } from "./DepartmentUseCases";
import {
  Wrench,
  Shield,
  Factory,
  Users,
  Monitor,
  Truck,
  FlaskConical,
  Headphones,
} from "lucide-react";

const departments: DepartmentSection[] = [
  {
    department: "Production and Operations",
    icon: Factory,
    color: "text-orange-400",
    useCases: [
      {
        title: "Shop Floor SOP and Work Instruction Access",
        friction: "Production staff cannot instantly locate the correct, current SOP or work instruction, leading to process deviations, rework, and safety incidents.",
        solution: "API integration into MES terminals or tablets. Operators use natural language queries to retrieve cited, actionable steps from the latest approved version of relevant SOPs and work instructions.",
        value: "Ensures strict adherence to version-controlled procedures, improving product consistency, first-pass yield, and workplace safety.",
      },
      {
        title: "Production Schedule and Changeover Optimization",
        friction: "Production planners struggle to optimize scheduling and changeover sequences across multiple product lines, leading to excessive downtime.",
        solution: "Queries across production specifications, changeover procedures, and historical run data. Planners receive cited recommendations for optimal sequencing and changeover protocols.",
        value: "Reduces changeover time, improves production throughput, and enables more efficient multi-product manufacturing.",
      },
      {
        title: "Real-Time Process Parameter Verification",
        friction: "Operators need instant access to process parameters, tolerance ranges, and critical control points during active production runs.",
        solution: "Real-time query interface grounded in process specifications, batch records, and control plans. Operators verify exact parameters with cited source documentation.",
        value: "Reduces process deviations, ensures product quality, and provides an auditable trail of parameter verification during production.",
      },
    ],
  },
  {
    department: "Maintenance and Engineering",
    icon: Wrench,
    color: "text-blue-700 dark:text-blue-400",
    useCases: [
      {
        title: "Equipment Troubleshooting and Diagnostic Support",
        friction: "Complex manufacturing equipment requires deep technical expertise for troubleshooting. High reliance on experienced staff creates bottlenecks and extends MTTR.",
        solution: "Interactive Q&A system grounded in machine manuals, maintenance protocols, troubleshooting flowcharts, and historical maintenance tickets indexed by equipment ID.",
        value: "Reduces repair time by 60% by providing immediate, cited diagnostic guidance, reducing reliance on specific expert knowledge.",
      },
      {
        title: "Preventive Maintenance Planning and Compliance",
        friction: "Scheduling and documenting preventive maintenance across hundreds of assets while ensuring compliance with manufacturer recommendations and regulatory requirements.",
        solution: "Indexes maintenance schedules, manufacturer guidelines, and regulatory requirements. Enables queries on maintenance status, upcoming tasks, and compliance documentation.",
        value: "Ensures maintenance compliance, reduces unplanned downtime, and provides audit-ready maintenance documentation.",
      },
      {
        title: "Spare Parts and Technical Documentation Retrieval",
        friction: "Maintenance technicians waste time locating correct part numbers, specifications, and installation procedures across multiple equipment manuals and catalogs.",
        solution: "Semantic search across equipment manuals, parts catalogs, and vendor documentation. Technicians query by equipment model, symptom, or part description for instant cited results.",
        value: "Reduces parts identification time, minimizes wrong-part orders, and accelerates repair completion with accurate technical documentation.",
      },
    ],
  },
  {
    department: "Quality Assurance and Control",
    icon: Shield,
    color: "text-green-700 dark:text-green-400",
    useCases: [
      {
        title: "Quality Standard and Specification Compliance",
        friction: "QA inspectors must verify product specifications against ISO standards, customer requirements, and internal quality standards—often scattered across multiple systems.",
        solution: "Unified access to quality standards, customer specifications, and inspection criteria. Inspectors query specific quality requirements and receive cited, definitive answers.",
        value: "Ensures consistent quality standard application, reduces inspection errors, and accelerates quality verification processes.",
      },
      {
        title: "Non-Conformance Investigation and CAPA Support",
        friction: "Investigating non-conformances requires correlating current defects with historical quality data, root cause analyses, and corrective action records.",
        solution: "Semantic search across NCR records, CAPA histories, and root cause analyses. Quality engineers query similar defect patterns and receive cited precedent investigations.",
        value: "Accelerates CAPA closure by 40%, improves root cause identification accuracy, and prevents recurrence of known quality issues.",
      },
      {
        title: "Supplier Quality Assessment and Incoming Inspection",
        friction: "Evaluating supplier quality performance requires manual review of incoming inspection data, CoAs, and historical quality metrics across multiple suppliers.",
        solution: "Ingests supplier CoAs, inspection reports, and performance data. Enables comparative supplier quality queries with cited metrics and trend analysis.",
        value: "Improves supplier qualification efficiency, reduces material non-conformances, and ensures consistent incoming material quality.",
      },
    ],
  },
  {
    department: "R&D and Design Engineering",
    icon: FlaskConical,
    color: "text-purple-700 dark:text-purple-400",
    useCases: [
      {
        title: "Engineering Knowledge Portal and Design Reuse",
        friction: "Engineers spend excessive time searching for existing designs, material data, and test results that may already exist in company archives.",
        solution: "Semantic search across CAD documentation, material databases, test reports, and design specifications. Engineers query specific design challenges and receive cited solutions.",
        value: "Accelerates design cycles by 30%, fosters innovation through knowledge reuse, and prevents redundant engineering effort.",
      },
      {
        title: "Material Selection and Performance Benchmarking",
        friction: "Engineers need to compare material properties across specifications, test data, and supplier documentation to make informed material selection decisions.",
        solution: "Ingests material datasheets, test results, and supplier specifications. Enables comparative material analysis with cited performance data across multiple parameters.",
        value: "Improves material selection accuracy, reduces prototyping cycles, and ensures design decisions are grounded in comprehensive performance data.",
      },
      {
        title: "Regulatory and Standards Compliance for Product Design",
        friction: "Design engineers must ensure products meet applicable regulatory standards, industry codes, and customer-specific requirements throughout the design process.",
        solution: "Indexes relevant standards (ISO, ASTM, customer specs) and provides instant compliance queries during the design phase. Flags potential compliance gaps with cited requirements.",
        value: "Reduces design iterations due to compliance failures, accelerates time-to-market, and ensures regulatory compliance is embedded in the design process.",
      },
    ],
  },
  {
    department: "Supply Chain and Procurement",
    icon: Truck,
    color: "text-cyan-700 dark:text-cyan-400",
    useCases: [
      {
        title: "Supplier Contract and Terms Management",
        friction: "Procurement teams struggle to quickly locate specific contract terms, pricing agreements, and delivery commitments across hundreds of supplier contracts.",
        solution: "Semantic indexing of supplier contracts, pricing agreements, and SLAs. Procurement staff query specific terms and receive instant, cited contract references.",
        value: "Accelerates contract negotiations, ensures compliance with agreed terms, and reduces procurement disputes.",
      },
      {
        title: "Supply Chain Risk and Disruption Intelligence",
        friction: "Supply chain managers need to rapidly assess the impact of supplier disruptions, material shortages, or logistics issues on production schedules.",
        solution: "Analyzes supplier data, inventory levels, and alternative sourcing options. Managers query specific disruption scenarios and receive cited mitigation strategies.",
        value: "Enables faster response to supply chain disruptions, reduces production impact, and improves supply chain resilience.",
      },
    ],
  },
  {
    department: "EHS and Workforce",
    icon: Users,
    color: "text-red-400",
    useCases: [
      {
        title: "Safety Protocol and Hazard Communication",
        friction: "Workers need instant access to safety protocols, chemical handling procedures, and emergency response guidelines—especially in hazardous environments.",
        solution: "Mobile-accessible safety assistant grounded in SDS documents, safety procedures, and emergency response plans. Workers query specific hazards and receive cited safety guidance.",
        value: "Improves workplace safety compliance, reduces incident rates, and ensures workers have immediate access to critical safety information.",
      },
      {
        title: "Factory Personnel Onboarding and Training",
        friction: "Training new factory personnel on process controls, hazard analysis, and equipment operation is time-consuming due to technical complexity.",
        solution: "Conversational training interface built on training manuals, safety policies, and SOPs. New hires simulate complex scenarios and receive cited procedural guidance.",
        value: "Accelerates onboarding by 30%, improves knowledge retention, and ensures consistent training quality across shifts and locations.",
      },
      {
        title: "Shift Communication and Handover Standardization",
        friction: "Inconsistent shift handover communication leads to operational deviations, safety gaps, and information loss between production shifts.",
        solution: "Standardized shift briefing assistant that synthesizes key safety risks, process changes, and operational updates from current documentation and incident reports.",
        value: "Ensures uniform safety culture, eliminates communication gaps between shifts, and reduces shift-change-related incidents.",
      },
    ],
  },
];

export const ManufacturingUseCases = () => (
  <DepartmentUseCases
    title="KOGNIX AI for"
    highlightWord="Manufacturing & Engineering"
    subtitle="End-to-end AI-powered intelligence across every critical department—from production and maintenance through quality assurance, R&D, and supply chain operations."
    departments={departments}
  />
);

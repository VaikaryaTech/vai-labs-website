import { Navbar } from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  HeartPulse,
  FlaskConical, 
  Shield, 
  FileCheck, 
  Factory, 
  Server, 
  Users, 
  TrendingUp, 
  Headphones
} from "lucide-react";
import healthcarePharmaHero from "@/assets/healthcare-pharma-hero.jpg";

interface UseCase {
  name: string;
  description: string;
  benefit: string;
}

interface Department {
  icon: React.ElementType;
  title: string;
  color: string;
  useCases: UseCase[];
}

const HealthcarePharma = () => {
  // Core Pharmaceutical Use Cases
  const coreUseCases: UseCase[] = [
    {
      name: "Intellectual Property (IP) Clearance and Patent Landscape Navigation",
      description: "Cross-referencing internal data against constantly evolving global patent claims to ensure freedom-to-operate. KOGNIX functions as an IP Risk Mitigator, indexing internal project documentation and external patent databases, instantly highlighting relevant patent claims with concise summaries.",
      benefit: "Proactive Mitigation of IP Risk: Drastically reduces labor and potential legal exposure associated with IP clearance, securing the commercial and regulatory pathway for new API candidates."
    },
    {
      name: "Proactive Audit Preparation and CAPA/Deviation Investigation",
      description: "Rapidly assembling complex, interconnected GxP records (SOPs, deviation reports, raw data, training sign-offs) for audits and CAPA investigations. KOGNIX establishes a centralized QA query layer with natural language searches, linking directly to every validated source document.",
      benefit: "Accelerated Deviation Closure and Enhanced Audit Readiness: Significantly reduces Mean Time to Resolution (TTR) for quality issues and improves performance during regulatory inspections."
    },
    {
      name: "Global GxP Standard Comparison and SOP Harmonization",
      description: "Continuous monitoring and comparison of region-specific guidelines (FDA vs. EudraLex) against internal Quality System Documents and SOPs. KOGNIX ingests and semantically maps global GxP guidance documents, providing instant gap analysis.",
      benefit: "Enhanced Regulatory Consistency and Risk Reduction: Proactively minimizes risk of critical quality deficiencies during international regulatory audits."
    },
    {
      name: "Regulatory Submission Data Integrity Verification",
      description: "Ensuring consistent data synchronization between R&D, Clinical, and Quality teams. KOGNIX executes automated semantic integrity checks prior to submission, querying draft filing documents against validated source records.",
      benefit: "Reduced Submission Deficiencies and Accelerated Approval: Decreases probability of RFI letters related to internal data conflicts, accelerating Time to Approval."
    },
    {
      name: "Retrieval and Audit of the Electronic Trial Master File (eTMF)",
      description: "Rapidly locating specific, cross-functional document sets within the eTMF structure during monitoring visits or inspections. KOGNIX enables conversational, contextual queries that span the TMF index for instant document retrieval.",
      benefit: "Optimized Regulatory Access: Ensures eTMF is continuously 'inspection-ready' by reducing complex document retrieval from hours to seconds."
    },
    {
      name: "Real-Time Batch Record and SOP Verification",
      description: "Providing GMP operators immediate access to current SOPs and batch record information on the shop floor. KOGNIX deploys as a secure, validated interface where operators can query specific technical instructions verbally or textually.",
      benefit: "Increased Operational Compliance and Reduction in Errors: Provides accurate, GxP-validated information at the point of action, securing digital batch audit trail integrity."
    },
    {
      name: "Automated Material Traceability and Auditable Chain-of-Custody",
      description: "Linking disparate information from raw material receipt to final product packaging across LIMS, ERP, and MES systems. KOGNIX semantically connects all documentation containing unique material identifiers.",
      benefit: "Enhanced Product Integrity and Rapid Recall Capability: Reduces time required for root cause analysis and traceability checks, reinforcing compliance with global drug security acts."
    },
    {
      name: "Global Distribution Documentation and Customs Compliance",
      description: "Providing rapid access to country-specific regulatory certificates, market authorization data, and shipping documentation. KOGNIX creates a centralized supply chain knowledge hub indexed by product, destination, and regulatory status.",
      benefit: "Reduced Logistics and Customs Friction: Minimizes risk of API shipments being delayed due to outdated or missing documentation."
    },
    {
      name: "GxP System Troubleshooting and Knowledge Management",
      description: "Supporting IT personnel navigating vast libraries of validation reports (IQ/OQ/PQ), system architecture guides, and application SOPs. KOGNIX integrates as the primary knowledge engine for the IT Service Desk.",
      benefit: "Accelerated Mean Time to Resolution (MTTR): Reduces system downtime for business-critical validated systems by providing immediate, technically accurate solutions."
    },
    {
      name: "GxP Training Compliance and Policy Knowledge Dissemination",
      description: "Managing verifiable records of staff qualifications and GxP training. KOGNIX deploys as a personalized internal policy concierge, answering natural language queries on HR policies with immediate training status confirmation.",
      benefit: "Improved Employee Compliance and Knowledge Retention: Provides instant, context-aware access to critical GxP training requirements."
    },
    {
      name: "Compliant Technical Data Provisioning for Strategic Partners",
      description: "Enabling sales representatives to rapidly access API specifications, regulatory filing status, and quality summaries. KOGNIX implements a Regulatory Shielding function generating verified, compliant summary statements for external sharing.",
      benefit: "Accelerated Sales Cycle and Enhanced Partner Trust: Transforms highly regulated technical knowledge into a competitive differentiator."
    },
    {
      name: "Technical Inquiry Resolution and Service Excellence",
      description: "Resolving complex technical inquiries requiring access to siloed information across R&D, QA, and Regulatory dossiers. KOGNIX centralizes the entire technical knowledge base providing instant, contextual answers.",
      benefit: "Increased First-Call Resolution (FCR) and Customer Satisfaction: Significantly reduces escalation burden while delivering superior technical service."
    }
  ];

  // Department-based use cases
  const departments: Department[] = [
    {
      icon: FlaskConical,
      title: "R&D and Innovation",
      color: "text-blue-500",
      useCases: [
        {
          name: "Historical Research Knowledge Retrieval",
          description: "Semantic search across historical R&D reports, formulation summaries, patent filings, and experimental data logs. Researchers query conceptually rather than by keyword.",
          benefit: "Accelerated design-of-experiment (DoE) phase by proactively identifying previously solved technical constraints, reducing redundant effort."
        },
        {
          name: "Automated Performance Data Extraction",
          description: "Context-aware extraction systematically pulls specific numerical or categorical data points from thousands of archived Technical Data Sheets and unstructured reports.",
          benefit: "Automated material benchmarking and selection, significantly reducing manual effort for modeling and feasibility studies."
        },
        {
          name: "Expert Knowledge Transfer and Retention",
          description: "Ingestion of expert reports, retirement interview transcripts, and proprietary knowledge transfer documentation with interactive Q&A interface for junior scientists.",
          benefit: "Preserves critical institutional knowledge, mitigating employee turnover impact and ensuring consistency in decision-making."
        },
        {
          name: "Patent Filing Support and IP Defense",
          description: "Instant, semantically grounded retrieval of specific trial logs and data sheets linked to formulation versions and IP disclosures with exact source citations.",
          benefit: "Strengthens IP defense and accelerates patent filing response speed, ensuring timely adherence to legal deadlines."
        },
        {
          name: "Regulatory Change Impact Assessment",
          description: "Ingestion of external regulatory documents with auditable summarization providing researchers concise, cited answers regarding restrictions or testing requirements.",
          benefit: "Reduces regulatory risk exposure early in R&D pipeline, allowing rapid protocol adjustments to new compliance directives."
        },
        {
          name: "Technical-to-Marketing Translation",
          description: "Controlled document generation synthesizing factual product summaries grounded strictly in official R&D test reports and technical specifications.",
          benefit: "Reduces internal communication ambiguity and ensures external marketing claims are verifiable and accurately aligned with R&D findings."
        }
      ]
    },
    {
      icon: Shield,
      title: "Quality Assurance and Control",
      color: "text-green-500",
      useCases: [
        {
          name: "Equipment Calibration and Maintenance Documentation",
          description: "Ingestion and indexing of equipment maintenance logs, calibration certificates, and preventative maintenance schedules. QA personnel retrieve documentation instantly by equipment ID and date range.",
          benefit: "Ensures operational compliance, streamlines maintenance verification, and reduces equipment-related documentation issues during audits."
        },
        {
          name: "Supplier Evaluation and Material Conformance",
          description: "Semantic search across indexed supplier CoAs, material specifications, and historical supplier performance reports for complex multi-criteria comparisons.",
          benefit: "Improves supplier qualification efficiency, enabling faster identification of reliable partners and reducing material non-conformance."
        },
        {
          name: "Historical CAPA and NCR Precedent Search",
          description: "Semantic search across structured CAPA and NCR repositories by context and mechanism of failure rather than keyword matching.",
          benefit: "Accelerates CAPA closure time by immediately providing cited, proven solutions for previously encountered quality issues."
        },
        {
          name: "QA Staff Training and Knowledge Transfer",
          description: "Interactive training tool built upon QMS manuals, process flowcharts, and historical audit findings for scenario-based learning.",
          benefit: "Accelerates QC staff proficiency and knowledge retention, reducing dependency on senior staff for basic training queries."
        }
      ]
    },
    {
      icon: FileCheck,
      title: "Regulatory Affairs and Compliance",
      color: "text-purple-500",
      useCases: [
        {
          name: "Safety Data Sheet (SDS) Processing",
          description: "Context-aware extraction systematically pulling standardized data fields (GHS hazards, PPE requirements, disposal codes) from ingested SDS documents.",
          benefit: "Eliminates hours of manual data retyping, shifting EHS professionals from clerical entry toward high-value risk assessment."
        },
        {
          name: "Cross-Jurisdictional Regulatory Comparison",
          description: "Ingestion of regional regulatory summaries and legal texts with semantic retrieval highlighting specific cross-jurisdictional deviations.",
          benefit: "Accelerates global market access and compliance planning, avoiding regulatory fines from non-compliant documentation."
        },
        {
          name: "Regulatory Change Impact Analysis",
          description: "Semantic searching across all active product dossiers, formulation lists, and supplier data when new regulations are published.",
          benefit: "Dramatically improves organizational agility in responding to regulatory changes, enabling proactive adjustments before enforcement."
        },
        {
          name: "Historical Filing Precedent Retrieval",
          description: "Semantic search across archived regulatory filing repository enabling retrieval based on chemical function, application, or regulatory agency.",
          benefit: "Reduces research time for new submissions by providing immediate access to successful historical submission strategies."
        },
        {
          name: "Internal Compliance Information Synthesis",
          description: "Generative responses synthesized strictly from retrieved legal texts, official guidance, and internal compliance documents with regulatory document citations.",
          benefit: "Ensures internal stakeholders receive accurate, verifiable compliance information, preventing misinformation circulation."
        }
      ]
    },
    {
      icon: Factory,
      title: "Manufacturing and Operations",
      color: "text-orange-500",
      useCases: [
        {
          name: "Shop Floor SOP Access",
          description: "API integration into MES terminals or tablets enabling operators to use natural language queries for retrieving cited, actionable steps from the latest approved SOPs.",
          benefit: "Ensures strict adherence to version-controlled procedures, improving product consistency, quality control, and workplace safety."
        },
        {
          name: "Formula Version Control",
          description: "Strict version control and permissioned access to formulation documents integrated with MES, confirming formula version linked to batch is the latest approved.",
          benefit: "Minimizes high-cost rework and batch scrapping due to formula version errors, ensuring product consistency."
        },
        {
          name: "Equipment Troubleshooting and Maintenance",
          description: "Interactive Q&A system trained on digitized machine manuals, internal maintenance protocols, and historical maintenance tickets indexed by equipment ID.",
          benefit: "Speeds up repair time by providing immediate, cited diagnostic guidance, reducing operational reliance on specific experts."
        },
        {
          name: "Shift Communication Standardization",
          description: "Controlled generation of standardized summaries of key safety risks, policy changes, and procedural updates for daily shift briefings.",
          benefit: "Enhances uniform safety culture, ensures communication clarity, and reinforces adherence to standard requirements."
        },
        {
          name: "Factory Personnel Training",
          description: "Conversational training interface built on indexed training manuals, safety policy transcripts, and digital SOPs for process simulation.",
          benefit: "Accelerates onboarding time by approximately 30%, facilitating quicker proficiency in standardized procedures."
        }
      ]
    },
    {
      icon: Server,
      title: "IT and Global Business Services",
      color: "text-cyan-500",
      useCases: [
        {
          name: "Regional Policy Access",
          description: "Centralized ingestion of all global and local GBS/IT policies with retrieval enforced by RBAC ensuring region-specific and role-specific policy versions.",
          benefit: "Enhances efficiency and accuracy of global GBS hub operations by guaranteeing consistent, localized policy application."
        },
        {
          name: "IT Policy Attestation Tracking",
          description: "Tracking user interaction and mandatory retrieval of IT security policies, generating an immutable, auditable record of acknowledgment.",
          benefit: "Simplifies compliance reporting for data governance standards and supports rapid audit preparation."
        },
        {
          name: "System Deployment Documentation",
          description: "Retrieval of standardized architectural patterns, project documentation templates, and detailed technical reports from previous successful deployments.",
          benefit: "Standardizes IT project documentation quality, accelerating deployment cycles and reducing future operational debt."
        },
        {
          name: "IT Service Desk Knowledge Base",
          description: "Semantic indexing of all technical IT documentation enabling agents to query system errors and retrieve cited solutions instantly.",
          benefit: "Accelerates MTTR for internal tickets by providing immediate access to technical solutions."
        },
        {
          name: "Technical Communication Translation",
          description: "Generative summarization of technical release notes or incident reports into concise, cited business impact statements for non-technical audiences.",
          benefit: "Improves internal communication effectiveness and reduces user confusion by translating technical complexity."
        },
        {
          name: "GBS Staff Onboarding",
          description: "Interactive Q&A assistant built on GBS standard operating manuals and process guides for scenario-based training.",
          benefit: "Reduces time and effort for GBS induction, ensuring standardized process knowledge across the center."
        },
        {
          name: "External Audit Documentation",
          description: "Instant, permissioned retrieval of version-controlled system validation reports, Change Request documentation, and security policy manuals.",
          benefit: "Improves transparency and speed during external IT compliance reviews with immediately available documentation."
        }
      ]
    },
    {
      icon: Users,
      title: "Human Resources",
      color: "text-pink-500",
      useCases: [
        {
          name: "Safety Training and Policy Access",
          description: "Centralized index of all HR policies, mandatory safety manuals, and training materials with simple natural language search capabilities.",
          benefit: "Ensures rapid access to critical safety information, supporting compliance with mandatory disclosure laws."
        },
        {
          name: "Policy Attestation and Compliance",
          description: "Mandatory retrieval and interaction with critical documents generating auditable records of user engagement for policy attestation.",
          benefit: "Facilitates compliance attestation during audits by providing clear evidence of policy distribution and engagement."
        },
        {
          name: "Multi-Jurisdictional Labor Law Comparison",
          description: "Semantic search and comparison across indexed labor contracts, local legal summaries, and internal policy manuals highlighting policy divergences.",
          benefit: "Ensures consistent, accurate application of employment law, significantly reducing legal and compliance risk."
        },
        {
          name: "HR Case Resolution and Precedent Search",
          description: "Secure, permissioned access for HR specialists to internal legal/HR precedent documentation with semantic search for analogous cases.",
          benefit: "Ensures objectivity, fairness, and consistency in high-stakes HR decisions grounded in historical precedent."
        },
        {
          name: "Employee Onboarding Q&A",
          description: "Interactive Q&A for new hires covering common procedural questions related to benefits, compliance training, expense reporting, and Code of Conduct.",
          benefit: "Accelerates new employee integration and policy comprehension, reducing time HR generalists spend on repetitive queries."
        },
        {
          name: "Policy Usage Analytics",
          description: "Retrieval and summarization of policy usage logs and semantic search trends to identify knowledge gaps and areas of high policy complexity.",
          benefit: "Provides data-driven insights for policy refinement and targeted communication planning."
        }
      ]
    },
    {
      icon: TrendingUp,
      title: "Sales and Market Development",
      color: "text-yellow-500",
      useCases: [
        {
          name: "Technical Product Knowledge Base",
          description: "Centralized index of all Technical Data Sheets, internal test reports, application guides, and formulation compatibility matrices for instant technical consultation.",
          benefit: "Improves sales effectiveness and velocity by enabling instant, factual technical consultation and enhancing client trust."
        },
        {
          name: "Claim Verification and Guardrails",
          description: "Implementation of guardrails ensuring all generative summaries and technical responses are strictly grounded in and cite official, version-controlled product specifications.",
          benefit: "Mitigates legal and reputational risk associated with exaggerated or false claims by enforcing factual citation."
        },
        {
          name: "Competitive Analysis Synthesis",
          description: "Controlled document generation synthesizing summaries contrasting products against indexed competitive analysis reports, citing internal performance proof points.",
          benefit: "Provides high-impact, fact-based talking points for market positioning."
        },
        {
          name: "RFP Response Acceleration",
          description: "Context-aware extraction instantly pulling required certifications, regional registration numbers from compliance documents for proposal integration.",
          benefit: "Accelerates RFP response cycle, improving ability to meet strict deadlines and potentially improving win rates."
        },
        {
          name: "Pre-Sales Collateral Generation",
          description: "Controlled content generation for executive summaries and technical overviews based only on retrieved, cited technical and market intelligence reports.",
          benefit: "Standardizes quality and factual basis of all pre-sales collateral, enhancing brand consistency and authority."
        },
        {
          name: "Sales Representative Training",
          description: "Interactive Q&A platform simulating technical customer queries trained exclusively on application guides and technical manuals.",
          benefit: "Reduces training time and accelerates product knowledge acquisition, shortening ramp-up for specialized sales staff."
        },
        {
          name: "Contract Terms Retrieval",
          description: "Semantic search across archived commercial contracts, pricing agreements, and legal addenda for quick retrieval of applicable client/product terms.",
          benefit: "Ensures sales quotes adhere precisely to current financial and legal terms, preventing revenue leakage or disputes."
        }
      ]
    },
    {
      icon: Headphones,
      title: "Customer Support and Technical Service",
      color: "text-emerald-500",
      useCases: [
        {
          name: "Technical Troubleshooting Knowledge Base",
          description: "Semantic search across technical service bulletins, formulation guides, application manuals, and resolved case histories for instant diagnostic procedures.",
          benefit: "Accelerates technical service resolution, directly improving customer satisfaction and reducing Average Handle Time (AHT)."
        },
        {
          name: "Real-Time Data Extraction During Calls",
          description: "Instant, semantic retrieval of specific data points from lengthy Technical Data Sheets or stability reports using context-aware extraction.",
          benefit: "Enhances agent professionalism and speed of service, leading to quicker call resolution."
        },
        {
          name: "Application Advice Consistency",
          description: "Enforced grounding of all technical advice in official, version-controlled Product Application Manuals and formulation guidelines.",
          benefit: "Ensures uniform, high-quality technical support guidance, safeguarding product integrity and customer success."
        },
        {
          name: "Environmental Storage and Handling Advice",
          description: "Retrieval of specific product stability documentation relevant to external environmental factors cross-referenced with geographical data.",
          benefit: "Reduces product degradation post-sale caused by improper handling, minimizing customer complaints."
        },
        {
          name: "Case Documentation Assistance",
          description: "Generative tool assisting agents by summarizing issues, synthesizing retrieved context, and structuring final resolution into standardized case notes.",
          benefit: "Improves quality and future utility of internal technical knowledge base."
        },
        {
          name: "Support Agent Training Simulation",
          description: "Simulation environment for agents to practice querying complex failure scenarios against the knowledge base with instant, cited feedback.",
          benefit: "Reduces ramp-up time for specialized technical support staff, accelerating readiness for complex inquiries."
        },
        {
          name: "Warranty and Claims Processing",
          description: "Semantic search across archived customer contracts, legal agreements, and general terms with permissioned retrieval for authorized personnel.",
          benefit: "Ensures claims are processed accurately according to relevant contractual terms, maintaining legal compliance."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Header with Image */}
      <section className="relative pt-24">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={healthcarePharmaHero} 
            alt="Healthcare and Pharmaceuticals"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto px-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-background/80 backdrop-blur-sm rounded-xl text-red-500">
                    <HeartPulse className="h-8 w-8" />
                  </div>
                  <h1 className="text-4xl font-bold text-foreground">Healthcare and Pharmaceuticals</h1>
                </div>
                <Link to="/business-applications">
                  <Button variant="outline" size="sm" className="gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Industries
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pharmaceutical Use Cases */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Core Pharmaceutical Operations
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Enterprise-wide solutions addressing critical challenges in pharmaceutical manufacturing, 
              compliance, and operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreUseCases.map((useCase, index) => (
              <Card 
                key={index}
                className="p-6 bg-gradient-card backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary group"
              >
                <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {useCase.name}
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-2">Description</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-semibold text-primary mb-2">Benefit</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {useCase.benefit}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Department-Based Use Cases */}
      {departments.map((department, deptIndex) => (
        <section key={deptIndex} className={`py-16 ${deptIndex % 2 === 0 ? 'bg-muted/30' : 'bg-background'}`}>
          <div className="container mx-auto px-6">
            {/* Department Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className={`p-3 bg-background/80 backdrop-blur-sm rounded-xl ${department.color}`}>
                <department.icon className="h-8 w-8" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">{department.title}</h2>
                <p className="text-muted-foreground mt-1">
                  {department.useCases.length} specialized use cases
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {department.useCases.map((useCase, useCaseIndex) => (
                <Card 
                  key={useCaseIndex}
                  className="p-6 bg-gradient-card backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary group"
                >
                  <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {useCase.name}
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-2">Description</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {useCase.description}
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-semibold text-primary mb-2">Benefit</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {useCase.benefit}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Ready to Transform Your Pharmaceutical Operations?
            </h2>
            <p className="text-xl text-muted-foreground">
              See how KOGNIX can accelerate innovation, ensure compliance, and optimize your entire value chain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book-demo">
                <Button size="lg" variant="hero">
                  Book a Demo
                </Button>
              </Link>
              <Link to="/product">
                <Button size="lg" variant="outline">
                  Learn More About KOGNIX
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HealthcarePharma;

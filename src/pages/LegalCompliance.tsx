import { Navbar } from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Scale,
  FileSearch, 
  Briefcase, 
  Shield, 
  Server
} from "lucide-react";
import legalImg from "@/assets/business-legal.jpg";

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

const LegalCompliance = () => {
  const departments: Department[] = [
    {
      icon: FileSearch,
      title: "Litigation & E-Discovery Department",
      color: "text-amber-500",
      useCases: [
        {
          name: "Inefficient Document Review & Discovery",
          description: "Multi-source document ingestion (PDF, DOCX, MSG, HTML) and vector search on massive, unstructured case files including discovery documents, emails, and transcripts.",
          benefit: "Accelerated Document Identification: Cuts time spent locating relevant documents by 30-50% through semantic search that understands context rather than just keywords."
        },
        {
          name: "Synthesizing Key Facts and Precedents",
          description: "Retrieval-augmented Q&A and summarization using retrieved chunks. Attorneys can ask complex questions (e.g., 'What is the history of the defendant's communications regarding product failure in Q3 2024?') over thousands of documents.",
          benefit: "Grounded Fact Synthesis: Provides direct, auditable answers with source citations from the retrieved documents, ensuring factual grounding and reducing 'hallucinations' common in un-grounded LLMs."
        },
        {
          name: "Identifying Specific Extracted Information",
          description: "Context-aware extraction from documents via a KOGNIX pipeline. For example, consistently pulling specific dates, parties, or dollar amounts from a batch of received contracts or invoices.",
          benefit: "Automated Data Capture: Improves the consistency and speed of key data extraction for case management systems, reducing manual data entry errors for paralegals."
        }
      ]
    },
    {
      icon: Briefcase,
      title: "Corporate & Transactional Law Department",
      color: "text-blue-500",
      useCases: [
        {
          name: "Contract Clause Comparison & Drafting",
          description: "Document retrieval and vector search across the firm's proprietary clause library and executed contracts. The system finds relevant clauses based on semantic similarity to the clause being drafted.",
          benefit: "Standardized & Expedited Drafting: Ensures consistency with firm standards and speeds up the assembly of first-draft contracts by suggesting relevant, pre-approved clauses from the knowledge base."
        },
        {
          name: "Internal Knowledge Consolidation for M&A",
          description: "Multi-source ingestion and knowledge consolidation of scattered internal legal opinions, memoranda, and due diligence reports (DOCX, XLSX, PPT). KOGNIX creates an indexed, searchable knowledge base.",
          benefit: "Single Source of Truth: Centralizes internal legal expertise, allowing transaction teams to quickly retrieve historical rationale and risk assessments related to previous deal structures."
        },
        {
          name: "Responding to Internal Policy Queries",
          description: "Retrieval-augmented Q&A over internal Standard Operating Procedures (SOPs), employee handbooks, and compliance policies.",
          benefit: "Fast, Consistent Policy Guidance: Provides instant, context-specific answers to staff on policy compliance (e.g., 'What is the expense limit for client dinners?'), reducing legal team's time spent on routine internal questions."
        }
      ]
    },
    {
      icon: Shield,
      title: "Compliance & Regulatory Department",
      color: "text-green-500",
      useCases: [
        {
          name: "Cross-Referencing Regulatory Text",
          description: "Document retrieval and semantic search over vast, evolving external regulatory data (SEC filings, GDPR text, industry codes, court opinions). KOGNIX indexes the data via its API integration.",
          benefit: "Enhanced Regulatory Search: Enables compliance officers to find direct answers and related regulatory text across multiple jurisdictions and standards based on the meaning of their compliance question."
        },
        {
          name: "Generating Compliance Memos",
          description: "Controlled document generation based only on the retrieved context (statutes, firm policies, and precedents). This can be orchestrated via a KOGNIX API workflow triggered by a new law or policy change.",
          benefit: "Auditable Content Generation: Produces draft memos and summaries that are directly traceable to specific source documents, making the output immediately verifiable by a human reviewer."
        },
        {
          name: "Onboarding and Training on Complex SOPs",
          description: "Workflow orchestration for KOGNIX pipelines built around a complex procedure (e.g., 'Steps for internal whistleblowing investigation'). The RAG-powered system guides the user through the SOP with context-aware Q&A at each stage.",
          benefit: "Improved SOP Adherence: Reduces procedural errors by providing real-time, step-by-step guidance and immediate retrieval of the relevant section of the SOP, minimizing manual consultation."
        }
      ]
    },
    {
      icon: Server,
      title: "Legal Operations & Tech Department",
      color: "text-purple-500",
      useCases: [
        {
          name: "Integrating AI with Existing Systems",
          description: "Integration via KOGNIX's 26 APIs into existing enterprise tools such as Document Management Systems (DMS) and Case Management Systems.",
          benefit: "Seamless System Integration: Allows RAG capabilities to be embedded directly within the tools lawyers and staff already use, maximizing adoption and eliminating the need to switch applications for AI-powered tasks."
        },
        {
          name: "Maintaining Document Search Performance",
          description: "Chunking, indexing, embedding, and vector search capabilities for all ingested documents, which is essential for massive document repositories that overload traditional search methods.",
          benefit: "Scalable Search Performance: Ensures high-speed, relevant search across petabytes of firm data by moving from keyword to semantic vector search, future-proofing the firm's knowledge access."
        },
        {
          name: "Ensuring Data Security and Auditability",
          description: "Safe, auditable generative responses based only on retrieved context. KOGNIX's core architecture prevents the use of external, non-vetted information for legal answers.",
          benefit: "Minimization of Confidential Data Leakage: Guarantees that sensitive context remains within the controlled enterprise environment, adhering to strict data governance and attorney-client privilege requirements."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={legalImg} 
            alt="Legal and Compliance AI solutions for enterprise law firms"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <Link to="/business-applications">
            <Button variant="ghost" className="mb-8 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Enterprise Applications
            </Button>
          </Link>
          
          <div className="max-w-4xl space-y-6 animate-slide-in">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-primary/10 rounded-2xl">
                <Scale className="h-12 w-12 text-primary" />
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  Legal & Compliance
                </span>
              </h1>
            </div>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Transform legal operations with <span className="bg-gradient-kognix bg-clip-text text-transparent font-semibold">KOGNIX AI ENGINE</span>—from 
              accelerating e-discovery and contract review to ensuring regulatory compliance with auditable, 
              source-grounded intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Department Use Cases */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          {departments.map((department, deptIndex) => (
            <div key={deptIndex} className="mb-20 last:mb-0">
              {/* Department Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 bg-background border border-border rounded-xl ${department.color}`}>
                  <department.icon className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">{department.title}</h2>
              </div>

              {/* Use Case Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {department.useCases.map((useCase, useCaseIndex) => (
                  <Card 
                    key={useCaseIndex}
                    className="p-6 bg-gradient-card backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-glow-primary group"
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
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LegalCompliance;
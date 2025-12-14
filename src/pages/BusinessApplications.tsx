import { Navbar } from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { Building2, HeartPulse, Scale, ShoppingBag, Factory, Wifi, GraduationCap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import financeImg from "@/assets/business-finance.jpg";
import healthcareImg from "@/assets/business-healthcare.jpg";
import legalImg from "@/assets/business-legal.jpg";
import retailImg from "@/assets/business-retail.jpg";
import manufacturingImg from "@/assets/business-manufacturing.jpg";
import telecomImg from "@/assets/business-telecom.jpg";
import educationImg from "@/assets/business-education.jpg";

const BusinessApplications = () => {
  const industries = [
    {
      icon: Building2,
      title: "Finance and Banking",
      color: "text-blue-500",
      image: financeImg,
      useCases: [
        {
          name: "Regulatory Compliance Copilot",
          description: "Answering complex, jurisdiction-specific questions on AML, KYC, Basel, or tax laws by referencing thousands of constantly changing regulatory documents, internal policies, and circulars.",
          benefit: "Faster compliance research, reduced risk of fines, and up-to-date, auditable answers with source citations."
        },
        {
          name: "Investment Research Assistant",
          description: "Summarizing extensive financial documents like earnings reports, market analyses, and SEC filings; identifying key risks and opportunities based on real-time data feeds.",
          benefit: "Improves analyst efficiency and decision-making by providing real-time, grounded insights from current financial data."
        },
        {
          name: "Internal Knowledge Base for Employees",
          description: "A chatbot that answers staff questions on HR policies, IT procedures, product specifications, and mortgage processes.",
          benefit: "Reduces employee time wasted on searching, faster onboarding for new staff, and ensures consistent, accurate internal communication."
        },
        {
          name: "Intelligent Customer Support",
          description: "Handling complex customer inquiries about card decline reasons, loan application status, or specific product features by accessing a customer's account data and the bank's operational manuals.",
          benefit: "Higher first-call resolution rate, personalized support, and reduced reliance on human agents for routine escalations."
        },
        {
          name: "Fraud and Risk Detection",
          description: "Analyzing transaction data and cross-referencing it with internal fraud reports and external blacklists to detect anomalies and flag suspicious activities with greater precision.",
          benefit: "Enhanced ability to detect new fraud schemes and reduced false positives compared to traditional rule-based systems."
        }
      ]
    },
    {
      icon: HeartPulse,
      title: "Healthcare and Pharmaceuticals",
      color: "text-red-500",
      image: healthcareImg,
      hasSubPage: true,
      link: "/business-applications/healthcare",
      useCases: [
        {
          name: "Clinical Decision Support System (CDSS)",
          description: "Providing real-time, evidence-based recommendations for diagnosis and treatment by cross-referencing patient symptoms and history with the latest medical research, clinical trials, and guidelines.",
          benefit: "Improved diagnostic accuracy, reduced medical errors, and better patient outcomes by ensuring care is based on current best practices."
        },
        {
          name: "Patient Record Interrogation",
          description: "Allowing clinicians to ask natural language questions about a patient's Electronic Health Record (EHR), such as 'Has this patient ever been prescribed Drug X in the last 5 years?' or 'What was their last HbA1c lab result?'",
          benefit: "Faster chart review, enabling clinicians to get up to speed quickly and focus more on patient care."
        },
        {
          name: "Drug Discovery & Research",
          description: "Accelerating research by querying and summarizing large volumes of scientific literature, genomic data, and clinical trial results to identify drug targets, predict therapeutic efficacy, and analyse drug interactions.",
          benefit: "Faster R&D cycles and more informed research decisions."
        },
        {
          name: "Medical Coding and Billing Intelligence",
          description: "Analysing clinical notes and generating accurate medical codes for billing by referencing up-to-date coding standards and payer-specific guidelines.",
          benefit: "Streamlines administrative tasks, reduces billing errors, and accelerates reimbursement."
        }
      ]
    },
    {
      icon: Scale,
      title: "Legal and Compliance",
      color: "text-purple-500",
      image: legalImg,
      hasSubPage: true,
      link: "/business-applications/legal",
      useCases: [
        {
          name: "Automated Legal Research",
          description: "Answering specific legal questions by searching across massive repositories of case law, statutes, regulations, and firm-specific documents.",
          benefit: "Drastically reduces manual research time, provides quick access to relevant precedents, and ensures arguments are grounded in verifiable sources."
        },
        {
          name: "Contract Analysis and Review",
          description: "Reviewing large contracts, highlighting clauses that pose a risk, identifying inconsistencies against industry standards, or comparing a draft contract against a library of firm-approved templates.",
          benefit: "Accelerates due diligence, lowers risk, and ensures compliance with internal and external standards."
        },
        {
          name: "E-Discovery Optimization",
          description: "Automating the retrieval, summarization, and analysis of vast troves of documents (emails, chats, reports) relevant to a specific lawsuit or investigation.",
          benefit: "Speeds up the discovery phase, reducing the cost and time of human review."
        },
        {
          name: "Internal Policy & HR Compliance",
          description: "Answering employee and management questions about company policies, such as 'What is the policy for parental leave in State X?' or 'What are the rules for social media use?'",
          benefit: "Provides consistent, accurate, and up-to-date policy interpretation, mitigating internal compliance risk."
        }
      ]
    },
    {
      icon: ShoppingBag,
      title: "Retail and E-commerce",
      color: "text-pink-500",
      image: retailImg,
      useCases: [
        {
          name: "Intelligent Product Search and Recommendations",
          description: "Enabling natural language search like, 'Show me waterproof running shoes for the rainy season under $100,' by retrieving from the live product catalog, descriptions, and customer reviews.",
          benefit: "Improved conversion rates, reduced bounce rates on search pages, and a better customer shopping experience."
        },
        {
          name: "Contextual Customer Service Chatbot",
          description: "Answering customer questions about orders, returns, and product compatibility by accessing real-time data from the store's inventory, logistics, and CRM systems.",
          benefit: "Higher customer satisfaction, reduced support load on human agents, and personalized responses based on order history."
        },
        {
          name: "Internal Store/Logistics Operations Assistant",
          description: "Helping store associates or warehouse staff quickly look up inventory details, restocking procedures, or specific vendor agreements.",
          benefit: "Increases operational efficiency and reduces time spent on internal information search."
        }
      ]
    },
    {
      icon: Factory,
      title: "Manufacturing and Engineering",
      color: "text-orange-500",
      image: manufacturingImg,
      useCases: [
        {
          name: "Maintenance and Troubleshooting Copilot",
          description: "Providing technicians with step-by-step diagnostic and repair procedures for complex equipment by retrieving information from technical manuals, repair logs, past sensor data, and proprietary blueprints.",
          benefit: "Reduced machine downtime, faster repairs, and knowledge transfer across the workforce."
        },
        {
          name: "Compliance Management for Quality/Safety",
          description: "Answering questions about product specifications, quality assurance protocols, and safety regulations (e.g., ISO standards, OSHA rules) by referencing internal documents and external regulatory filings.",
          benefit: "Ensures adherence to quality and safety standards, making audits easier and reducing risk."
        },
        {
          name: "Knowledge Portal for Engineers",
          description: "A centralized system for engineers to query, compare, and summarize complex R&D reports, material science data, and CAD document specifications.",
          benefit: "Accelerates design cycles and fosters innovation by providing immediate access to institutional knowledge."
        },
        {
          name: "Supply Chain Optimization",
          description: "Analyzing real-time supplier data, procurement strategies, and contract terms to answer questions about material availability, lead times, and cost variances.",
          benefit: "More agile supply chain management and better-informed procurement decisions."
        }
      ]
    },
    {
      icon: Wifi,
      title: "Telecommunications and Utilities",
      color: "text-cyan-500",
      image: telecomImg,
      useCases: [
        {
          name: "Technical Support for Field Engineers",
          description: "Answering complex technical questions about network configurations, fiber-optic splicing procedures, and equipment specifications by retrieving from internal engineering documents.",
          benefit: "Faster problem resolution in the field, reducing service outages and increasing technician efficiency."
        },
        {
          name: "Billing and Service Inquiry Chatbot",
          description: "Providing precise, personalized answers to customers' billing questions, plan details, or service outage updates by connecting to live account and service data.",
          benefit: "Improves customer retention and reduces high-cost human support volume."
        }
      ]
    },
    {
      icon: GraduationCap,
      title: "Education and Academia",
      color: "text-green-500",
      image: educationImg,
      useCases: [
        {
          name: "Personalized Tutoring and Study Aid",
          description: "Answering student questions based on specific course materials (lectures, textbooks, assigned readings) and generating practice quizzes or summaries grounded in the curriculum.",
          benefit: "Deeper learning engagement, prevents generic or irrelevant answers, and aids faculty by automating Q&A."
        },
        {
          name: "Research Data Summarization",
          description: "Helping researchers quickly summarize and synthesize information from large, complex datasets, academic journals, and university archives.",
          benefit: "Accelerates the literature review process and knowledge synthesis."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(260_60%_25%/0.2),transparent_70%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-slide-in">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Enterprise Application Areas
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Discover how <span className="bg-gradient-kognix bg-clip-text text-transparent font-semibold">KOGNIX AI ENGINE</span> transforms operations across industries with secure, 
              intelligent, and context-aware solutions tailored to your specific business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          {industries.map((industry, industryIndex) => (
            <div key={industryIndex} className="mb-24 last:mb-0">
              {/* Industry Header with Image */}
              <div className="relative h-64 rounded-2xl overflow-hidden mb-8 group">
                <img 
                  src={industry.image} 
                  alt={`${industry.title} industry visualization`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 bg-background/80 backdrop-blur-sm rounded-xl ${industry.color}`}>
                        <industry.icon className="h-8 w-8" />
                      </div>
                      <h2 className="text-4xl font-bold text-foreground">{industry.title}</h2>
                    </div>
                    {industry.hasSubPage && (
                      <Link to={industry.link} className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors group/link">
                        <span className="text-sm font-semibold">View Details</span>
                        <ArrowRight className="h-5 w-5 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {industry.useCases.map((useCase, useCaseIndex) => (
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

export default BusinessApplications;

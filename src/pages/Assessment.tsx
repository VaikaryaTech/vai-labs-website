import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Download, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ReadinessReport } from "@/components/assessment/ReadinessReport";


interface Question {
  id: number;
  text: string;
  answer?: "yes" | "no";
  details?: string;
}

interface Section {
  id: number;
  title: string;
  description: string;
  questions: Question[];
}

const Assessment = () => {
  const { toast } = useToast();
  const [showReport, setShowReport] = useState(false);

  const [sections, setSections] = useState<Section[]>([
    {
      id: 1,
      title: "Strategy and Vision",
      description: "This section focuses on the organization's strategic alignment, clarity of objectives, and leadership commitment towards Generative AI.",
      questions: [
        { id: 1, text: "Has a clear Generative AI strategy been defined that aligns with the overall business objectives and long-term vision?" },
        { id: 2, text: "Are there identified use cases for Generative AI that promise significant business value (e.g., cost reduction, revenue growth, new product development, improved customer experience)?" },
        { id: 3, text: "Is there strong executive sponsorship and active participation from senior leadership in driving Generative AI initiatives?" },
        { id: 4, text: "Have clear roles and responsibilities for Generative AI adoption been assigned within the leadership team?" },
        { id: 5, text: "Is there a well-articulated vision for how Generative AI will transform the business operations and competitive landscape?" },
        { id: 6, text: "Has this vision been effectively communicated across all relevant departments and levels of the organization?" }
      ]
    },
    {
      id: 2,
      title: "Data Readiness and Infrastructure",
      description: "This section assesses the quality, accessibility, governance, and infrastructure required to support Generative AI models.",
      questions: [
        { id: 1, text: "Is there sufficient, high-quality, and relevant data available to train and fine-tune Generative AI models for the identified use cases?" },
        { id: 2, text: "Is the data in a usable format, or does it require extensive pre-processing and transformation?" },
        { id: 3, text: "Are there mechanisms to continuously collect, update, and validate data for ongoing model improvement?" },
        { id: 4, text: "Are robust data governance policies and procedures in place to manage data lifecycle, access, and usage for AI?" },
        { id: 5, text: "Are there comprehensive data security measures (encryption, access controls, anonymization) to protect sensitive information used by Generative AI models?" },
        { id: 6, text: "Is there a clear understanding and compliance with relevant data privacy regulations (e.g., GDPR, CCPA) concerning the data used for Generative AI?" },
        { id: 7, text: "Does the organization have the necessary computational resources (e.g., GPUs, TPUs) to train, fine-tune, and deploy Generative AI models?" },
        { id: 8, text: "Is there a scalable and reliable MLOps (Machine Learning Operations) pipeline to manage the lifecycle of Generative AI models?" },
        { id: 9, text: "Are there robust data storage and retrieval systems capable of handling the large volumes of data required for Generative AI?" }
      ]
    },
    {
      id: 3,
      title: "Talent and Capabilities",
      description: "This section evaluates the organization's human capital, skills, and organizational structure to support Generative AI.",
      questions: [
        { id: 1, text: "Does the organization possess or have access to the necessary AI/ML talent (e.g., data scientists, ML engineers, prompt engineers, AI ethicists)?" },
        { id: 2, text: "Are existing teams (e.g., product, marketing, operations) sufficiently trained to understand and collaborate on Generative AI initiatives?" },
        { id: 3, text: "Is the organizational structure conducive to fostering cross-functional collaboration between business units and AI teams?" },
        { id: 4, text: "Are there established roles and career paths for AI professionals within the organization?" },
        { id: 5, text: "Does the organization have a culture that encourages experimentation, continuous learning, and adapts to new technologies like Generative AI?" },
        { id: 6, text: "Are there mechanisms in place for knowledge sharing and best practices exchange related to AI?" }
      ]
    },
    {
      id: 4,
      title: "Ethical AI and Governance",
      description: "This section addresses the crucial aspects of responsible AI development and deployment, including fairness, transparency, and accountability.",
      questions: [
        { id: 1, text: "Has the organization established clear ethical guidelines and principles for the responsible development and deployment of Generative AI?" },
        { id: 2, text: "Are there mechanisms to identify and mitigate biases in Generative AI models and their outputs?" },
        { id: 3, text: "Are efforts being made to ensure transparency regarding the use of Generative AI (e.g., disclosing when content is AI-generated)?" },
        { id: 4, text: "Can the outputs and decisions generated by Generative AI models be explained and understood by relevant stakeholders (e.g., customers, regulators, internal teams)?" },
        { id: 5, text: "Is there a clear framework for accountability when Generative AI models produce undesirable or harmful outputs?" },
        { id: 6, text: "Are there review processes in place to ensure compliance with internal ethical guidelines and external regulations?" }
      ]
    },
    {
      id: 5,
      title: "Technology & Tools",
      description: "This section focuses on the specific technologies, platforms, and tools being considered or currently in use for Generative AI.",
      questions: [
        { id: 1, text: "Has a strategy been developed for selecting and integrating Generative AI platforms (e.g., cloud-based AI services, open-source frameworks, proprietary solutions)?" },
        { id: 2, text: "Are the chosen tools and platforms compatible with existing IT infrastructure and data ecosystems?" },
        { id: 3, text: "Are there systems in place for managing different versions of Generative AI models and tracking their performance?" },
        { id: 4, text: "Can models be easily updated, fine-tuned, and redeployed without significant disruption?" },
        { id: 5, text: "Are there robust monitoring systems to track the performance, drift, and potential failures of deployed Generative AI models in real-time?" },
        { id: 6, text: "Is there a process for quickly addressing and resolving issues that arise with Generative AI models in production?" }
      ]
    },
    {
      id: 6,
      title: "Legal, Compliance, and Risk Management",
      description: "This section addresses the regulatory, legal, and risk aspects associated with Generative AI adoption.",
      questions: [
        { id: 1, text: "Has the organization considered the implications of Generative AI on intellectual property rights, both for input data and generated outputs?" },
        { id: 2, text: "Are there measures to ensure that Generative AI outputs do not infringe on existing copyrights or trademarks?" },
        { id: 3, text: "Is the organization aware of and prepared to comply with emerging regulations specific to AI, including Generative AI (e.g., EU AI Act, industry-specific guidelines)?" },
        { id: 4, text: "Have potential risks related to hallucination, misinformation, or unintended content generation been assessed and planned for?" },
        { id: 5, text: "Has a comprehensive risk assessment been conducted for Generative AI adoption, covering technical, operational, reputational, and financial risks?" },
        { id: 6, text: "Is there a clear understanding of liability for Generative AI-generated content or decisions, especially in critical applications?" }
      ]
    },
    {
      id: 7,
      title: "Change Management and Adoption",
      description: "This section evaluates the organization's ability to manage the human and operational changes brought about by Generative AI.",
      questions: [
        { id: 1, text: "Are all key stakeholders (employees, customers, partners) engaged and informed about the Generative AI initiatives and their potential impact?" },
        { id: 2, text: "Are concerns and resistance to Generative AI adoption being actively addressed and managed?" },
        { id: 3, text: "Is there a comprehensive training and upskilling program for employees whose roles will be impacted or augmented by Generative AI?" },
        { id: 4, text: "Are employees being educated on how to effectively use and interact with Generative AI tools and models?" },
        { id: 5, text: "Is the organization planning or executing pilot programs to test Generative AI solutions in a controlled environment before widespread deployment?" },
        { id: 6, text: "Is there a phased rollout strategy for Generative AI capabilities to allow for iterative learning and adaptation?" }
      ]
    },
    {
      id: 8,
      title: "Measurement and Optimization",
      description: "This section focuses on how the organization will measure the success of Generative AI initiatives and continuously optimize their performance.",
      questions: [
        { id: 1, text: "Have clear and measurable KPIs been established to track the success and impact of Generative AI initiatives?" },
        { id: 2, text: "Are these KPIs aligned with the initial business objectives and expected value of Generative AI?" },
        { id: 3, text: "Are there effective feedback mechanisms in place to collect input from users and stakeholders on Generative AI outputs and performance?" },
        { id: 4, text: "Is there a structured process for using this feedback to continuously improve Generative AI models and applications?" },
        { id: 5, text: "Is there a plan to consistently measure the Return on Investment (ROI) of Generative AI initiatives?" },
        { id: 6, text: "Does the organization have a process to capture and communicate the achieved business value from Generative AI deployments?" }
      ]
    }
  ]);

  const updateAnswer = (sectionId: number, questionId: number, answer: "yes" | "no") => {
    setSections(prev => prev.map(section => 
      section.id === sectionId 
        ? {
            ...section,
            questions: section.questions.map(q => 
              q.id === questionId ? { ...q, answer } : q
            )
          }
        : section
    ));
  };

  const updateDetails = (sectionId: number, questionId: number, details: string) => {
    setSections(prev => prev.map(section => 
      section.id === sectionId 
        ? {
            ...section,
            questions: section.questions.map(q => 
              q.id === questionId ? { ...q, details } : q
            )
          }
        : section
    ));
  };

  const calculateSectionProgress = (section: Section) => {
    const answeredQuestions = section.questions.filter(q => q.answer).length;
    return Math.round((answeredQuestions / section.questions.length) * 100);
  };

  const calculateOverallProgress = () => {
    const totalQuestions = sections.reduce((acc, section) => acc + section.questions.length, 0);
    const answeredQuestions = sections.reduce(
      (acc, section) => acc + section.questions.filter(q => q.answer).length,
      0
    );
    return Math.round((answeredQuestions / totalQuestions) * 100);
  };

  const handleGenerateReport = () => {
    const answered = sections.reduce(
      (acc, s) => acc + s.questions.filter((q) => q.answer).length,
      0
    );
    if (answered === 0) {
      toast({
        title: "No answers yet",
        description: "Answer at least a few questions to generate your readiness report.",
        variant: "destructive"
      });
      return;
    }

    setShowReport(true);
    toast({
      title: "Report Generated",
      description: "Your AI Readiness Assessment report is ready below."
    });
    requestAnimationFrame(() => {
      document.getElementById("readiness-report")?.scrollIntoView({ behavior: "smooth" });
    });
  };


  const handleDownloadReport = () => {
    const answered = sections.reduce(
      (acc, s) => acc + s.questions.filter((q) => q.answer).length,
      0
    );
    if (answered === 0) {
      toast({
        title: "No answers yet",
        description: "Answer at least a few questions before downloading the report.",
        variant: "destructive"
      });
      return;
    }


    // Generate report content
    let reportContent = "GENERATIVE AI READINESS ASSESSMENT REPORT\n\n";
    reportContent += `Generated on: ${new Date().toLocaleDateString()}\n\n`;
    reportContent += "=".repeat(80) + "\n\n";

    sections.forEach(section => {
      reportContent += `SECTION ${section.id}: ${section.title.toUpperCase()}\n`;
      reportContent += `Progress: ${calculateSectionProgress(section)}%\n`;
      reportContent += "-".repeat(80) + "\n\n";

      section.questions.forEach(question => {
        reportContent += `Q${question.id}: ${question.text}\n`;
        reportContent += `Answer: ${question.answer?.toUpperCase() || "NOT ANSWERED"}\n`;
        if (question.details) {
          reportContent += `Details: ${question.details}\n`;
        }
        reportContent += "\n";
      });

      reportContent += "\n";
    });

    // Create and download the file
    const blob = new Blob([reportContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `AI-Readiness-Assessment-${new Date().toISOString().split("T")[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: "Report Downloaded",
      description: "Your assessment report has been downloaded successfully."
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(260_60%_25%/0.2),transparent_70%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-slide-in">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Generative AI Readiness Assessment
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Evaluate your organization's readiness for Generative AI adoption across 8 critical dimensions
            </p>
          </div>
        </div>
      </section>

      {/* Progress Overview */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-card backdrop-blur-sm border-border hover:scale-105 transition-all duration-300 hover:shadow-glow-primary hover:border-primary/50">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Assessment Progress</h2>
                <span className="text-3xl font-bold text-primary">{calculateOverallProgress()}%</span>
              </div>
              <Progress value={calculateOverallProgress()} className="h-3 mb-6" />
              <Button onClick={handleGenerateReport} variant="hero" size="lg" className="w-full">
                <FileText className="mr-2 h-5 w-5" />
                Generate Report
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Generated Report */}
      {showReport && (
        <section id="readiness-report" className="py-12 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <ReadinessReport
                sections={sections}
                onDownload={handleDownloadReport}
                onReset={() => {
                  setShowReport(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              />
            </div>
          </div>
        </section>
      )}


      {/* Assessment Sections */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            {sections.map((section) => (
              <Card key={section.id} className="p-8 bg-gradient-card backdrop-blur-sm border-border hover:scale-[1.01] transition-all duration-300 hover:shadow-glow-primary hover:border-primary/50">
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-2">
                        Section {section.id}: {section.title}
                      </h2>
                      <p className="text-muted-foreground">{section.description}</p>
                    </div>
                    <div className="text-right ml-6">
                      <div className="text-2xl font-bold text-primary mb-1">
                        {calculateSectionProgress(section)}%
                      </div>
                      <div className="text-sm text-muted-foreground">Score</div>
                    </div>
                  </div>
                  <Progress value={calculateSectionProgress(section)} className="h-2" />
                </div>

                <div className="space-y-8">
                  {section.questions.map((question) => (
                    <div key={question.id} className="space-y-4">
                      <div className="flex items-start gap-3">
                        <span className="font-semibold text-primary shrink-0">{question.id}</span>
                        <p className="text-foreground leading-relaxed">{question.text}</p>
                      </div>

                      <RadioGroup
                        value={question.answer}
                        onValueChange={(value) => updateAnswer(section.id, question.id, value as "yes" | "no")}
                        className="flex gap-6 ml-7"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id={`s${section.id}-q${question.id}-yes`} />
                          <Label htmlFor={`s${section.id}-q${question.id}-yes`} className="cursor-pointer">
                            Yes
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id={`s${section.id}-q${question.id}-no`} />
                          <Label htmlFor={`s${section.id}-q${question.id}-no`} className="cursor-pointer">
                            No
                          </Label>
                        </div>
                      </RadioGroup>

                      <div className="ml-7">
                        <Label htmlFor={`s${section.id}-q${question.id}-details`} className="text-sm text-muted-foreground mb-2 block">
                          Details/Evidence:
                        </Label>
                        <Textarea
                          id={`s${section.id}-q${question.id}-details`}
                          placeholder="Provide details, evidence, or additional context for your answer..."
                          value={question.details || ""}
                          onChange={(e) => updateDetails(section.id, question.id, e.target.value)}
                          className="min-h-[80px]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-card backdrop-blur-sm border-border border-primary/30 hover:scale-105 transition-all duration-300 hover:shadow-glow-primary hover:border-primary/50">
              <p className="text-muted-foreground text-center mb-6 italic">
                A "No" answer to any critical question indicates an area that requires attention and development 
                before fully embarking on Generative AI adoption.
              </p>
              <Button onClick={handleDownloadReport} variant="hero" size="lg" className="w-full">
                <Download className="mr-2 h-5 w-5" />
                Download Complete Assessment Report
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Assessment;

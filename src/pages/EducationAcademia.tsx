import { IndustryPage } from "@/components/IndustryPage";
import { BookOpen, FileText } from "lucide-react";
import { EducationUseCases } from "@/components/usecases/EducationUseCases";
import { KognixWordmark } from "@/components/KognixWordmark";

const EducationAcademia = () => {
  const impactMetrics = [
    { value: "45%", label: "Improved Learning Engagement" },
    { value: "60%", label: "Faster Literature Review" },
    { value: "50%", label: "Faculty Time Saved" },
    { value: "3x", label: "Student Q&A Automation" },
  ];

  const capabilities = [
    {
      icon: BookOpen,
      title: "Personalized Tutoring & Study Aid",
      description: "Answer student questions based on specific course materials (lectures, textbooks, assigned readings) and generate practice quizzes or summaries grounded in the curriculum.",
      benefit: "Deeper learning engagement, prevents generic or irrelevant answers, and aids faculty by automating Q&A."
    },
    {
      icon: FileText,
      title: "Research Data Summarization",
      description: "Help researchers quickly summarize and synthesize information from large, complex datasets, academic journals, and university archives.",
      benefit: "Accelerates the literature review process and knowledge synthesis for faster research outcomes."
    },
  ];

  const workflowSteps = [
    { step: "01", title: "Ingest", description: "Upload course materials, journals, and archives" },
    { step: "02", title: "Index", description: "Semantic processing of academic content" },
    { step: "03", title: "Query", description: "Natural language Q&A for students and researchers" },
    { step: "04", title: "Learn", description: "Personalized study paths and synthesis" },
  ];

  return (
    <IndustryPage
      name="Education & Academia"
      figure={{
        name: "Education & Academia",
        sources: ["Course materials", "Research papers", "Curriculum guides", "Assessment rubrics"],
        outputs: ["Personal tutoring", "Research synthesis", "Grading support"],
      }}
      intro={<>Transform learning and research with <KognixWordmark size="hero" suffix="AI" />—delivering personalized tutoring and accelerated research synthesis with curriculum-grounded intelligence.</>}
      metrics={impactMetrics}
      capabilitiesTitle="AI-Powered Academic Intelligence"
      capabilitiesSubtitle="Purpose-built capabilities for education and research institutions"
      capabilities={capabilities}
      workflowSubtitle="From course materials to personalized learning"
      workflowSteps={workflowSteps}
      ctaTitle="Ready to Transform Your Institution?"
      ctaBody={<>Join leading universities leveraging KOGNIX for intelligent education.</>}
    >
      {/* Department Use Cases */}
      <EducationUseCases />
    </IndustryPage>
  );
};

export default EducationAcademia;

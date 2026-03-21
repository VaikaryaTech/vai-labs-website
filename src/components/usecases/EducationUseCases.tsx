import { DepartmentUseCases, DepartmentSection } from "./DepartmentUseCases";
import {
  BookOpen,
  GraduationCap,
  Users,
  Monitor,
  FlaskConical,
  FileText,
  Briefcase,
  Headphones,
} from "lucide-react";

const departments: DepartmentSection[] = [
  {
    department: "Academic Affairs and Teaching",
    icon: GraduationCap,
    color: "text-purple-400",
    useCases: [
      {
        title: "Personalized Tutoring and Study Aid",
        friction: "Students struggle to get timely, curriculum-specific answers outside class hours. Generic search engines return irrelevant or inaccurate information not aligned with course materials.",
        solution: "AI tutor grounded in specific course materials—lectures, textbooks, assigned readings. Students query complex topics and receive cited, curriculum-aligned explanations and practice quizzes.",
        value: "Improves learning engagement by 45%, prevents generic answers, and enables 3x automation of student Q&A—freeing faculty for higher-value interactions.",
      },
      {
        title: "Curriculum Development and Course Design Support",
        friction: "Faculty spend excessive time reviewing existing course materials, accreditation requirements, and pedagogical frameworks when designing or updating courses.",
        solution: "Semantic search across existing curricula, accreditation standards, and pedagogical research. Faculty query specific learning objectives and receive cited recommendations for course design.",
        value: "Accelerates curriculum development, ensures alignment with accreditation requirements, and promotes evidence-based pedagogical approaches.",
      },
      {
        title: "Assessment Design and Question Bank Management",
        friction: "Creating diverse, high-quality assessments aligned with learning outcomes while avoiding duplication requires manual review of extensive question banks.",
        solution: "Queries across question banks, learning objectives, and course materials. Generates assessment suggestions grounded in curriculum content with cited alignment to specific learning outcomes.",
        value: "Improves assessment quality, ensures comprehensive coverage of learning objectives, and reduces faculty time spent on exam creation.",
      },
    ],
  },
  {
    department: "Research and Innovation",
    icon: FlaskConical,
    color: "text-blue-400",
    useCases: [
      {
        title: "Research Data Summarization and Literature Review",
        friction: "Researchers spend months manually reviewing thousands of papers, journals, and datasets to establish state-of-the-art understanding for their research area.",
        solution: "Semantic search and synthesis across academic journals, university archives, research databases, and institutional repositories. Researchers query conceptually and receive cited summaries.",
        value: "Accelerates literature review by 60%, enables comprehensive knowledge synthesis, and ensures researchers build on the most current findings.",
      },
      {
        title: "Grant Proposal Research and Writing Support",
        friction: "Faculty spend extensive time researching funding opportunities, reviewing successful past proposals, and aligning research narratives with funder requirements.",
        solution: "Ingests grant databases, past proposals, and funder guidelines. Researchers query specific funding opportunities and receive cited guidance on alignment and proposal strategies.",
        value: "Improves grant success rates, reduces proposal preparation time, and ensures alignment with funder priorities and evaluation criteria.",
      },
      {
        title: "Research Collaboration and Knowledge Sharing",
        friction: "Researchers across departments work in silos, often unaware of complementary research, shared datasets, or potential collaboration opportunities.",
        solution: "Cross-departmental knowledge discovery across research profiles, publications, and ongoing projects. Researchers query specific expertise areas to find cited collaboration opportunities.",
        value: "Fosters interdisciplinary collaboration, reduces research duplication, and accelerates innovation through knowledge sharing.",
      },
    ],
  },
  {
    department: "Library and Information Services",
    icon: BookOpen,
    color: "text-green-400",
    useCases: [
      {
        title: "Intelligent Library Search and Discovery",
        friction: "Students and faculty struggle with traditional library catalog systems that rely on keyword matching, missing relevant resources buried in vast collections.",
        solution: "Semantic search across library catalogs, digital repositories, subscribed databases, and institutional archives. Users query natural language questions and receive cited, relevant resources.",
        value: "Improves resource discovery, increases utilization of institutional subscriptions, and provides a modern, intuitive library experience.",
      },
      {
        title: "Research Reference and Citation Assistance",
        friction: "Students need help identifying appropriate sources, understanding citation requirements, and managing references across different citation styles.",
        solution: "Reference assistant grounded in library databases, citation style guides, and research methodology resources. Provides cited guidance on source selection and proper citation formatting.",
        value: "Improves research quality, reduces citation errors, and supports academic integrity through proper attribution guidance.",
      },
      {
        title: "Digital Archive and Special Collections Access",
        friction: "Special collections, rare manuscripts, and historical archives are underutilized because access requires specialized knowledge of archival finding aids.",
        solution: "Semantic indexing of archival finding aids, catalog records, and collection descriptions. Researchers query specific topics and discover cited, relevant materials across special collections.",
        value: "Increases utilization of institutional special collections, enables broader research access, and preserves institutional heritage through digital discovery.",
      },
    ],
  },
  {
    department: "Student Services and Administration",
    icon: Headphones,
    color: "text-orange-400",
    useCases: [
      {
        title: "Student Enrollment and Advising Assistant",
        friction: "Students have frequent questions about enrollment procedures, degree requirements, prerequisites, and academic policies—overwhelming advising staff.",
        solution: "AI advisor grounded in academic catalogs, degree requirements, enrollment policies, and prerequisite maps. Students receive cited, personalized academic guidance instantly.",
        value: "Reduces advising wait times, ensures consistent policy interpretation, and enables students to make informed academic decisions 24/7.",
      },
      {
        title: "Financial Aid and Scholarship Query Support",
        friction: "Students struggle to navigate complex financial aid processes, scholarship eligibility criteria, and application deadlines across multiple programs.",
        solution: "Knowledge assistant grounded in financial aid policies, scholarship databases, and application procedures. Provides cited, personalized guidance on financial aid options and deadlines.",
        value: "Improves financial aid utilization, reduces processing errors, and ensures students are aware of all available funding opportunities.",
      },
      {
        title: "Campus Services and Facilities Information",
        friction: "Students, faculty, and visitors frequently need information about campus services, facilities, events, and procedures—often calling multiple offices.",
        solution: "Unified campus information assistant grounded in service directories, facility guides, event calendars, and operational procedures. Provides instant, cited answers to any campus query.",
        value: "Reduces administrative burden on campus offices, improves campus experience, and ensures consistent information delivery across all touchpoints.",
      },
    ],
  },
  {
    department: "IT and Educational Technology",
    icon: Monitor,
    color: "text-cyan-400",
    useCases: [
      {
        title: "Learning Management System (LMS) Support",
        friction: "Faculty and students encounter frequent issues with LMS platforms (Canvas, Blackboard, Moodle) but IT support is limited and documentation is fragmented.",
        solution: "Knowledge assistant grounded in LMS documentation, IT procedures, and common issue resolutions. Users query specific problems and receive cited, step-by-step troubleshooting guidance.",
        value: "Reduces IT ticket volume, accelerates issue resolution, and ensures faculty and students can effectively use educational technology tools.",
      },
      {
        title: "Educational Technology Evaluation and Adoption",
        friction: "Faculty and administrators evaluating new educational technologies must manually review product documentation, peer research, and institutional compatibility requirements.",
        solution: "Ingests edtech product documentation, peer institution reviews, and integration requirements. Provides cited comparative analysis for informed technology adoption decisions.",
        value: "Accelerates technology evaluation cycles, improves adoption decisions, and ensures new tools align with institutional infrastructure and pedagogical goals.",
      },
    ],
  },
  {
    department: "HR and Faculty Affairs",
    icon: Users,
    color: "text-red-400",
    useCases: [
      {
        title: "Faculty Policy and Governance Support",
        friction: "Faculty frequently have questions about tenure processes, sabbatical policies, committee structures, and governance procedures—information scattered across multiple handbooks.",
        solution: "Knowledge assistant grounded in faculty handbooks, governance bylaws, and institutional policies. Faculty query specific policy questions and receive cited, authoritative answers.",
        value: "Reduces administrative burden on deans' offices, ensures consistent policy interpretation, and supports transparent governance processes.",
      },
      {
        title: "Staff Onboarding and Professional Development",
        friction: "Onboarding new faculty and staff on institutional procedures, technology systems, and departmental workflows is time-consuming and inconsistent across departments.",
        solution: "Interactive onboarding assistant grounded in institutional procedures, technology guides, and departmental handbooks. New hires receive cited, step-by-step orientation guidance.",
        value: "Accelerates new hire productivity, ensures consistent onboarding quality, and reduces training burden on existing staff and faculty.",
      },
    ],
  },
];

export const EducationUseCases = () => (
  <DepartmentUseCases
    title="KOGNIX AI Engine for"
    highlightWord="Education & Academia"
    subtitle="End-to-end AI-powered intelligence across every critical department—from academic affairs and research through library services, student administration, and educational technology."
    departments={departments}
  />
);

import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookieConsent } from "@/components/CookieConsent";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SmoothScroll } from "@/components/SmoothScroll";
import { RouteMeta } from "@/components/RouteMeta";
import { SectionReveal } from "@/components/SectionReveal";
import Home from "./pages/Home";
const Product = lazy(() => import("./pages/KAIE"));
const Features = lazy(() => import("./pages/Features"));
const FinanceBanking = lazy(() => import("./pages/FinanceBanking"));
const HealthcarePharma = lazy(() => import("./pages/HealthcarePharma"));
const LegalCompliance = lazy(() => import("./pages/LegalCompliance"));
const RetailEcommerce = lazy(() => import("./pages/RetailEcommerce"));
const ManufacturingEngineering = lazy(() => import("./pages/ManufacturingEngineering"));
const TelecomUtilities = lazy(() => import("./pages/TelecomUtilities"));
const EducationAcademia = lazy(() => import("./pages/EducationAcademia"));
const Assessment = lazy(() => import("./pages/Assessment"));
const Index = lazy(() => import("./pages/Index"));
const BookDemo = lazy(() => import("./pages/BookDemo"));
const Pricing = lazy(() => import("./pages/Pricing"));

const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogEnterpriseAI = lazy(() => import("./pages/BlogEnterpriseAI"));
const BlogSecureGenAI = lazy(() => import("./pages/BlogSecureGenAI"));
const About = lazy(() => import("./pages/About"));
const Careers = lazy(() => import("./pages/Careers"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Observability = lazy(() => import("./pages/Observability"));
const KognixIntelligence = lazy(() => import("./pages/KognixIntelligence"));

const KognixAIStudio = lazy(() => import("./pages/KognixAIStudio"));
const TechHealthAssessment = lazy(() => import("./pages/TechHealthAssessment"));
const ReferenceArchitecture = lazy(() => import("./pages/ReferenceArchitecture"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SmoothScroll />
          <ScrollToTop />
          <RouteMeta />
          <SectionReveal />
          <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kaie" element={<Product />} />
            <Route path="/features" element={<Features />} />
            <Route path="/industries/finance" element={<FinanceBanking />} />
            <Route path="/industries/healthcare" element={<HealthcarePharma />} />
            <Route path="/industries/legal" element={<LegalCompliance />} />
            <Route path="/industries/retail" element={<RetailEcommerce />} />
            <Route path="/industries/manufacturing" element={<ManufacturingEngineering />} />
            <Route path="/industries/telecom" element={<TelecomUtilities />} />
            <Route path="/industries/education" element={<EducationAcademia />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/workflow-automation" element={<Index />} />
            <Route path="/book-demo" element={<BookDemo />} />
            <Route path="/pricing" element={<Pricing />} />
            
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/enterprise-ai-trajectory" element={<BlogEnterpriseAI />} />
            <Route path="/blog/secure-genai-guide" element={<BlogSecureGenAI />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/observability" element={<Observability />} />
            <Route path="/kognix-intelligence" element={<KognixIntelligence />} />
            
            <Route path="/kognix-ai-studio" element={<KognixAIStudio />} />
            <Route path="/services/tech-health-assessment" element={<TechHealthAssessment />} />
            <Route path="/reference-architecture" element={<ReferenceArchitecture />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          </Suspense>
          <CookieConsent />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookieConsent } from "@/components/CookieConsent";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Features from "./pages/Features";
import FinanceBanking from "./pages/FinanceBanking";
import HealthcarePharma from "./pages/HealthcarePharma";
import LegalCompliance from "./pages/LegalCompliance";
import RetailEcommerce from "./pages/RetailEcommerce";
import ManufacturingEngineering from "./pages/ManufacturingEngineering";
import TelecomUtilities from "./pages/TelecomUtilities";
import EducationAcademia from "./pages/EducationAcademia";
import Assessment from "./pages/Assessment";
import Index from "./pages/Index";
import BookDemo from "./pages/BookDemo";
import Pricing from "./pages/Pricing";

import CaseStudies from "./pages/CaseStudies";
import Blog from "./pages/Blog";
import BlogEnterpriseAI from "./pages/BlogEnterpriseAI";
import BlogSecureGenAI from "./pages/BlogSecureGenAI";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Observability from "./pages/Observability";
import KognixIntelligence from "./pages/KognixIntelligence";
import KognixMobile from "./pages/KognixMobile";
import KognixAIStudio from "./pages/KognixAIStudio";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
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
            <Route path="/kognix-mobile" element={<KognixMobile />} />
            <Route path="/kognix-ai-studio" element={<KognixAIStudio />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CookieConsent />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

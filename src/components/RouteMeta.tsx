import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE = "https://www.vailabs.in";
const OG_IMAGE = `${SITE}/og-image.png`;
const SITE_NAME = "VAI Labs · KOGNIX";

type Meta = {
  title: string;
  description: string;
  /** Structured data for this page (in addition to the site-wide Organization in index.html). */
  article?: { published: string; author: string };
};

const DEFAULT: Meta = {
  title: "KOGNIX — Secure Enterprise Generative AI | VAI Labs",
  description:
    "Enterprise-grade Generative AI that runs entirely inside your own infrastructure — air-gapped, on-premises, with zero data egress. Built in India by VAI Labs.",
};

/** One place for every route's search/social metadata. */
const ROUTES: Record<string, Meta> = {
  "/": DEFAULT,
  "/kaie": {
    title: "KOGNIX GenAI Engine — Secure, Air-Gapped Generative AI Framework",
    description:
      "A secure, flexible Generative AI framework with hybrid-search RAG, agents and source-cited answers — deployed air-gapped, on-premises or in your private cloud.",
  },
  "/kognix-ai-studio": {
    title: "KOGNIX AI Studio — Build & Deploy Enterprise AI Apps",
    description:
      "Take AI from prototype to production: visual workflow builder, model management, RAG pipelines, agents, prompt IDE and full-cycle LLMOps on your infrastructure.",
  },
  "/observability": {
    title: "KOGNIX Analytics — LLM Observability & Tracing",
    description:
      "Trace every LLM call, retrieval and agent step. Prompt versioning, evaluations, datasets and usage analytics — self-hosted or air-gapped.",
  },
  "/kognix-intelligence": {
    title: "KOGNIX Intelligence — Unified, OpenAI-Compatible Model Serving",
    description:
      "Serve LLM, embedding, image and audio models with one command behind a single OpenAI-compatible API, with smart hardware acceleration and distributed scaling.",
  },
  "/features": {
    title: "Features — KOGNIX Enterprise Generative AI",
    description: "Explore the capabilities of the KOGNIX platform for secure, on-premises enterprise Generative AI.",
  },
  "/pricing": {
    title: "Pricing — KOGNIX Enterprise Generative AI",
    description: "Pricing and deployment options for KOGNIX — cloud-managed, on-premises and air-gapped.",
  },
  "/industries/finance": {
    title: "Generative AI for Finance & Banking — KOGNIX",
    description:
      "Private GenAI for banks and financial institutions: regulatory compliance copilots, fraud detection and investment research with auditable, source-cited answers.",
  },
  "/industries/healthcare": {
    title: "Generative AI for Pharma & Life Sciences — KOGNIX",
    description:
      "Auditable GenAI for regulated life sciences: GxP compliance, SOP change control, clinical decision support and evidence synthesis — fully on-premises.",
  },
  "/industries/legal": {
    title: "Generative AI for Legal & Compliance — KOGNIX",
    description:
      "Accelerate e-discovery, contract review and regulatory compliance with private, source-grounded AI that never leaves your infrastructure.",
  },
  "/industries/retail": {
    title: "Generative AI for Retail & E-commerce — KOGNIX",
    description: "Intelligent product discovery and personalized customer service at scale with private enterprise GenAI.",
  },
  "/industries/manufacturing": {
    title: "Generative AI for Manufacturing & Engineering — KOGNIX",
    description:
      "Predictive maintenance and engineering knowledge management with secure, on-premises AI grounded in your manuals, logs and specs.",
  },
  "/industries/telecom": {
    title: "Generative AI for Telecom & Utilities — KOGNIX",
    description: "Instant technical knowledge for field operations and customer service, powered by private enterprise GenAI.",
  },
  "/industries/education": {
    title: "Generative AI for Education & Academia — KOGNIX",
    description: "Personalized tutoring and accelerated research synthesis with curriculum-grounded, private AI.",
  },
  "/services/tech-health-assessment": {
    title: "Enterprise Technology Health Assessment — VAI Labs",
    description:
      "An 8–16 week deep-tier assessment of your OS, Oracle, middleware/MQ and Kubernetes stack, benchmarked against CIS, Oracle MAA and CNCF, with a 12-month roadmap.",
  },
  "/assessment": {
    title: "Generative AI Readiness Assessment — Free Self-Assessment | VAI Labs",
    description:
      "Score your organization's GenAI readiness across 8 dimensions and 51 questions. Get strengths, priority gaps and a remediation roadmap — your answers stay in your browser.",
  },
  "/reference-architecture": {
    title: "KOGNIX Reference Architecture — Cloud, Private Cloud & Air-Gapped",
    description: "Reference architectures for deploying KOGNIX on Docker and Kubernetes across cloud, private cloud and air-gapped environments.",
  },
  "/workflow-automation": {
    title: "AI Workflow Automation — KOGNIX",
    description: "Automate complex enterprise workflows with private, agentic AI running inside your infrastructure.",
  },
  "/case-studies": {
    title: "Case Studies — KOGNIX Enterprise Generative AI",
    description: "How organizations use KOGNIX to deploy secure, private Generative AI.",
  },
  "/blog": {
    title: "Journal — Insights on Private Enterprise AI | VAI Labs",
    description: "Insights, updates and best practices on secure, private, enterprise-grade Generative AI from the VAI Labs team.",
  },
  "/blog/enterprise-ai-trajectory": {
    title: "The Accelerated Trajectory of Enterprise AI | VAI Labs",
    description:
      "AI is moving from augmentation tool to co-decision maker. A five-stage roadmap from AI assistants (2025) to agent ecosystems (2029) — and what executives must decide now.",
    article: { published: "2025-12-10", author: "VAI Labs Team" },
  },
  "/blog/secure-genai-guide": {
    title: "Implementing Secure GenAI: A Comprehensive Guide | VAI Labs",
    description:
      "The six pillars of secure GenAI deployment — on-premises hosting, encryption, access control, guardrails, compliance and monitoring — plus a 12-week implementation roadmap.",
    article: { published: "2025-01-10", author: "Security Team" },
  },
  "/about": {
    title: "About VAI Labs — Makers of KOGNIX",
    description:
      "Founded in October 2022 in Bangalore, VAI Labs builds KOGNIX: secure, private Generative AI for enterprises that need complete control over their data.",
  },
  "/careers": {
    title: "Careers at VAI Labs — Remote Roles in Enterprise AI",
    description: "Join VAI Labs to build private, enterprise-grade Generative AI. Open remote roles in AI/ML, backend, product and customer success.",
  },
  "/contact": {
    title: "Contact VAI Labs",
    description: "Talk to the VAI Labs team about KOGNIX, deployments, partnerships or support. Sales: sales@vailabs.in.",
  },
  "/book-demo": {
    title: "Book a Demo — See KOGNIX on Your Infrastructure",
    description: "Request a personalized walkthrough of KOGNIX tailored to your use case, industry and deployment model.",
  },
  "/privacy": {
    title: "Privacy Policy — VAI Labs",
    description: "How VAI Labs collects, uses and protects your information.",
  },
};

const setMeta = (attr: "name" | "property", key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const setCanonical = (href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.rel = "canonical";
    document.head.appendChild(el);
  }
  el.href = href;
};

/** Keeps title, description, canonical, social tags and page JSON-LD in sync with the route. */
export const RouteMeta = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname !== "/" ? pathname.replace(/\/+$/, "") : "/";
    const known = ROUTES[path];
    const meta = known ?? DEFAULT;
    const url = `${SITE}${path === "/" ? "/" : path}`;

    document.title = known ? meta.title : "Page not found | VAI Labs";
    setMeta("name", "description", meta.description);
    setMeta("name", "robots", known ? "index, follow" : "noindex, follow");
    setCanonical(url);

    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:title", meta.title);
    setMeta("property", "og:description", meta.description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:type", meta.article ? "article" : "website");
    setMeta("property", "og:image", OG_IMAGE);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", meta.title);
    setMeta("name", "twitter:description", meta.description);
    setMeta("name", "twitter:image", OG_IMAGE);

    document.getElementById("page-jsonld")?.remove();
    if (meta.article) {
      const script = document.createElement("script");
      script.id = "page-jsonld";
      script.type = "application/ld+json";
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: meta.title.replace(/ \| VAI Labs$/, ""),
        description: meta.description,
        datePublished: meta.article.published,
        author: { "@type": "Organization", name: meta.article.author },
        publisher: { "@type": "Organization", name: "VAI Labs", logo: { "@type": "ImageObject", url: `${SITE}/vai-logo.png` } },
        mainEntityOfPage: url,
        image: OG_IMAGE,
      });
      document.head.appendChild(script);
    }
  }, [pathname]);

  return null;
};

export default RouteMeta;

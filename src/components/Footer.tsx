import { Link } from "react-router-dom";
import logoNetwork from "@/assets/logo.webp";
import makeInIndia from "@/assets/make-in-india.webp";

type FooterLink = { to: string; label: string; product?: boolean };

const COLUMNS: { title: string; links: FooterLink[] }[] = [
  {
    title: "Products",
    links: [
      { to: "/kognix-ai-studio", label: "AI Studio", product: true },
      { to: "/kaie", label: "GenAI Engine", product: true },
      { to: "/observability", label: "Analytics", product: true },
      { to: "/kognix-intelligence", label: "Intelligence", product: true },
    ],
  },
  {
    title: "Industries",
    links: [
      { to: "/industries/finance", label: "Finance & Banking" },
      { to: "/industries/healthcare", label: "Pharma & Life Sciences" },
      { to: "/industries/legal", label: "Legal & Compliance" },
      { to: "/industries/retail", label: "Retail & E-commerce" },
      { to: "/industries/manufacturing", label: "Manufacturing & Engineering" },
      { to: "/industries/telecom", label: "Telecom & Utilities" },
      { to: "/industries/education", label: "Education & Academia" },
    ],
  },
  {
    title: "Resources",
    links: [
      { to: "/services/tech-health-assessment", label: "Tech Health Assessment" },
      { to: "/assessment", label: "AI Readiness" },
      { to: "/reference-architecture", label: "Reference Architecture" },
      { to: "/blog", label: "Blog" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/careers", label: "Careers" },
      { to: "/contact", label: "Contact" },
      { to: "/book-demo", label: "Book a Demo" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-6 pt-20 pb-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <img src={logoNetwork} alt="" className="h-9 w-9" />
              <span className="text-lg font-semibold tracking-tight">VAI Labs</span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Enterprise-grade Generative AI for secure, on-premises and
              air-gapped deployment.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title} className="lg:col-span-2">
              <h4 className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-sm text-foreground/80 transition-colors hover:text-primary"
                    >
                      {l.product && (
                        <span className="mr-1.5 font-semibold tracking-[0.08em] text-foreground">
                          KOGNIX
                        </span>
                      )}
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Vaikarya Technologies (OPC) Pvt Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-xs text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <img src={makeInIndia} alt="Make in India" className="h-10 w-auto" />
          </div>
        </div>
      </div>
    </footer>
  );
};

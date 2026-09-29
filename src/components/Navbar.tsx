import { scrollToTop } from "@/components/SmoothScroll";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.webp";
import {
  Activity,
  ArrowRight,
  BookOpen,
  Boxes,
  Briefcase,
  ChevronDown,
  ClipboardCheck,
  Cpu,
  Factory,
  FlaskConical,
  GraduationCap,
  Landmark,
  Layers,
  Mail,
  Menu,
  Moon,
  Network,
  RadioTower,
  Scale,
  ShoppingCart,
  Stethoscope,
  Sun,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/components/ThemeProvider";

type NavItem = {
  to: string;
  label: string;
  description: string;
  icon: LucideIcon;
  product?: boolean;
};

type Feature = { eyebrow: string; title: string; body: string; to: string; cta: string };

type NavGroup = { title: string; columns: 1 | 2; items: NavItem[]; feature: Feature };

const GROUPS: NavGroup[] = [
  {
    title: "Products",
    columns: 2,
    items: [
      { to: "/kognix-ai-studio", label: "AI Studio", product: true, icon: Layers, description: "Take AI from prototype to production" },
      { to: "/kaie", label: "GenAI Engine", product: true, icon: Cpu, description: "Secure, flexible generative AI framework" },
      { to: "/observability", label: "Analytics", product: true, icon: Activity, description: "Complete LLM observability and usage" },
      { to: "/kognix-intelligence", label: "Intelligence", product: true, icon: Network, description: "One unified API — the enterprise AI grid" },
    ],
    feature: {
      eyebrow: "Deployment",
      title: "Runs where your data lives",
      body: "Reference architectures for cloud, private cloud and fully air-gapped environments.",
      to: "/reference-architecture",
      cta: "View architecture",
    },
  },
  {
    title: "Industries",
    columns: 2,
    items: [
      { to: "/industries/finance", label: "Finance & Banking", icon: Landmark, description: "Compliance, fraud detection, research" },
      { to: "/industries/healthcare", label: "Pharma & Life Sciences", icon: FlaskConical, description: "Clinical support and GxP compliance" },
      { to: "/industries/legal", label: "Legal & Compliance", icon: Scale, description: "E-discovery and contract review" },
      { to: "/industries/retail", label: "Retail & E-commerce", icon: ShoppingCart, description: "Product discovery and service at scale" },
      { to: "/industries/manufacturing", label: "Manufacturing & Engineering", icon: Factory, description: "Predictive maintenance, engineering knowledge" },
      { to: "/industries/telecom", label: "Telecom & Utilities", icon: RadioTower, description: "Field operations and customer support" },
      { to: "/industries/education", label: "Education & Academia", icon: GraduationCap, description: "Tutoring and research synthesis" },
    ],
    feature: {
      eyebrow: "Not sure where to start?",
      title: "AI Readiness Assessment",
      body: "Evaluate your organization's readiness for Generative AI across 8 critical dimensions.",
      to: "/assessment",
      cta: "Take the assessment",
    },
  },
  {
    title: "Resources",
    columns: 1,
    items: [
      { to: "/assessment", label: "AI Readiness Assessment", icon: ClipboardCheck, description: "Score your GenAI readiness in minutes" },
      { to: "/services/tech-health-assessment", label: "Tech Health Assessment", icon: Stethoscope, description: "From legacy reliability to cloud-native agility" },
      { to: "/reference-architecture", label: "Reference Architecture", icon: Boxes, description: "Cloud, private cloud and air-gapped designs" },
      { to: "/blog", label: "Blog", icon: BookOpen, description: "Insights and best practices from our team" },
    ],
    feature: {
      eyebrow: "From the blog",
      title: "Implementing Secure GenAI: A Comprehensive Guide",
      body: "How regulated enterprises adopt Generative AI without exposing their data.",
      to: "/blog/secure-genai-guide",
      cta: "Read the guide",
    },
  },
  {
    title: "Company",
    columns: 1,
    items: [
      { to: "/about", label: "About", icon: Users, description: "Our mission and the team behind KOGNIX" },
      { to: "/careers", label: "Careers", icon: Briefcase, description: "Build the future of enterprise AI with us" },
      { to: "/contact", label: "Contact", icon: Mail, description: "Questions? We'll get back to you quickly" },
    ],
    feature: {
      eyebrow: "Talk to us",
      title: "See KOGNIX on your own infrastructure",
      body: "A live walkthrough tailored to your environment and use cases.",
      to: "/book-demo",
      cta: "Book a demo",
    },
  },
];

const ItemLabel = ({ item }: { item: NavItem }) => (
  <>
    {item.product && (
      <span className="mr-1.5 font-semibold tracking-[0.08em] text-foreground">KOGNIX</span>
    )}
    {item.label}
  </>
);

export const Navbar = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const closeTimer = useRef<number>();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setActive(null);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openMenu = (title: string) => {
    window.clearTimeout(closeTimer.current);
    setActive(title);
  };
  const scheduleClose = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setActive(null), 140);
  };

  const closeMobile = () => {
    setOpen(false);
    scrollToTop();
  };

  const current = GROUPS.find((g) => g.title === active);
  const solid = scrolled || !!current;

  const themeToggle = (
    <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  );

  return (
    <nav
      onMouseLeave={scheduleClose}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
        solid ? "border-border bg-background/90 backdrop-blur-xl" : "border-transparent bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logo} alt="" className="h-8 w-8" />
          <span className="text-base font-semibold tracking-tight">VAI Labs</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {GROUPS.map((group) => {
            const isOpen = active === group.title;
            const isCurrent = group.items.some((i) => pathname === i.to);
            return (
              <button
                key={group.title}
                type="button"
                aria-expanded={isOpen}
                aria-haspopup="true"
                onMouseEnter={() => openMenu(group.title)}
                onFocus={() => openMenu(group.title)}
                onClick={() => (isOpen ? setActive(null) : openMenu(group.title))}
                className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-sm transition-colors ${
                  isOpen ? "bg-muted text-foreground" : isCurrent ? "text-foreground" : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {group.title}
                <ChevronDown className={`h-3.5 w-3.5 opacity-60 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
              </button>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          {themeToggle}
          <Button asChild size="sm" className="rounded-full px-5">
            <Link to="/book-demo">Book a demo</Link>
          </Button>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          {themeToggle}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open navigation menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] overflow-y-auto sm:w-[400px]">
              <div className="mt-8 flex flex-col gap-8 pb-8">
                {GROUPS.map((group) => (
                  <div key={group.title}>
                    <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      {group.title}
                    </p>
                    <div className="mt-3 flex flex-col gap-1">
                      {group.items.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          onClick={closeMobile}
                          className={`-mx-2 flex items-center gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-muted ${
                            pathname === item.to ? "text-primary" : "text-foreground/85"
                          }`}
                        >
                          <item.icon className="h-4 w-4 shrink-0 text-muted-foreground" />
                          <span className="text-[15px]">
                            <ItemLabel item={item} />
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                <Button asChild className="rounded-full">
                  <Link to="/book-demo" onClick={closeMobile}>
                    Book a demo
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Desktop mega menu */}
      <div
        onMouseEnter={() => current && openMenu(current.title)}
        className={`absolute inset-x-0 top-full hidden origin-top border-b border-border bg-background shadow-[0_24px_48px_-24px_hsl(220_40%_10%/0.25)] transition-all duration-300 lg:block ${
          current ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
        }`}
      >
        {current && (
          <div key={current.title} className="container mx-auto grid grid-cols-12 gap-8 px-6 py-8 animate-in fade-in slide-in-from-top-1 duration-300">
            <div className={`col-span-8 grid content-start gap-1 ${current.columns === 2 ? "grid-cols-2" : "grid-cols-1 max-w-md"}`}>
              {current.items.map((item) => {
                const isCurrent = pathname === item.to;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="group flex items-start gap-4 rounded-xl p-3 transition-colors hover:bg-muted"
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border transition-colors group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:text-primary ${
                        isCurrent ? "border-primary/40 bg-primary/10 text-primary" : "text-foreground/70"
                      }`}
                    >
                      <item.icon className="h-[18px] w-[18px]" />
                    </span>
                    <span className="min-w-0 pt-0.5">
                      <span className={`flex items-center gap-1.5 text-sm ${isCurrent ? "text-primary" : "text-foreground"}`}>
                        <span>
                          <ItemLabel item={item} />
                        </span>
                        <ArrowRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                      </span>
                      <span className="mt-0.5 block text-[13px] leading-snug text-muted-foreground">
                        {item.description}
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>

            <Link
              to={current.feature.to}
              className="group col-span-4 flex flex-col justify-between rounded-2xl border border-border bg-muted/50 p-6 transition-colors hover:border-foreground/25"
            >
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  {current.feature.eyebrow}
                </p>
                <p className="mt-3 text-lg font-medium leading-snug tracking-tight">{current.feature.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{current.feature.body}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
                {current.feature.cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

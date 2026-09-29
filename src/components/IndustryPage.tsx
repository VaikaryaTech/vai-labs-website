import { useRef, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FeatureSection } from "@/components/FeatureSection";
import { useScrollMotion } from "@/hooks/use-scroll-motion";
import { IndustryCover, type IndustryFigure } from "@/components/IndustryCover";

export type IndustryCapability = {
  icon?: LucideIcon;
  title: string;
  description: string;
  benefit?: string;
};

interface Props {
  name: string;
  /** Diagram of this industry's data flowing through KOGNIX. */
  figure: IndustryFigure;
  intro: ReactNode;
  metrics: { value: string; label: string }[];
  capabilitiesTitle: string;
  capabilitiesSubtitle: string;
  capabilities: IndustryCapability[];
  /** Department use cases and any extra sections (e.g. a product showcase). */
  children?: ReactNode;
  workflowSubtitle: string;
  workflowSteps: { title: string; description: string }[];
  ctaTitle: string;
  ctaBody: ReactNode;
}

/** Shared layout for every /industries/* page, in the Home page's editorial style. */
export const IndustryPage = ({
  name,
  figure,
  intro,
  metrics,
  capabilitiesTitle,
  capabilitiesSubtitle,
  capabilities,
  children,
  workflowSubtitle,
  workflowSteps,
  ctaTitle,
  ctaBody,
}: Props) => {
  const root = useRef<HTMLDivElement>(null);
  useScrollMotion(root);

  return (
    <div ref={root} data-motion className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="container mx-auto px-6 pt-40 pb-16 lg:pt-48">
          <p data-scramble className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
            Industries · {name}
          </p>
          <h1
            data-split="load"
            className="mt-8 max-w-5xl text-balance text-5xl font-medium leading-[1.02] tracking-[-0.03em] md:text-7xl lg:text-[5.5rem]"
          >
            {name}
          </h1>
          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end">
            <p data-reveal="0.4" className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl lg:col-span-7">
              {intro}
            </p>
            <div data-reveal="0.6" className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
              <Button asChild size="lg">
                <Link to="/book-demo">
                  Request a demo <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/assessment">Check AI readiness</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Industry figure that opens up on scroll */}
        <section className="overflow-hidden">
          <div data-clip className="relative w-full overflow-hidden bg-[#0e1219] md:aspect-[16/7]">
            <IndustryCover figure={figure} />
          </div>
        </section>

        {/* Impact metrics */}
        <section className="border-b border-border">
          <dl className="container mx-auto grid grid-cols-2 px-6 md:grid-cols-4">
            {metrics.map((m, i) => (
              <div
                key={m.label}
                className={`border-border py-10 ${i % 2 === 1 ? "border-l pl-6" : ""} ${i > 1 ? "border-t md:border-t-0" : ""} ${i > 0 ? "md:border-l md:pl-8" : ""}`}
              >
                <dd className="text-4xl font-medium tracking-tight md:text-5xl">{m.value}</dd>
                <dt className="mt-2 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">{m.label}</dt>
              </div>
            ))}
          </dl>
        </section>

        <FeatureSection
          eyebrow="Capabilities"
          title={capabilitiesTitle}
          subtitle={capabilitiesSubtitle}
          items={capabilities.map((c) => ({
            icon: c.icon,
            title: c.title,
            description: c.benefit ? `${c.description} ${c.benefit}` : c.description,
          }))}
          layout="rows"
        />

        {children}

        <FeatureSection
          eyebrow="How it works"
          title={workflowSubtitle}
          items={workflowSteps}
          layout="steps"
          muted
        />

        {/* Closing CTA */}
        <section className="bg-foreground text-background">
          <div className="container mx-auto grid gap-10 px-6 py-24 lg:grid-cols-12 lg:items-end lg:py-32">
            <div className="lg:col-span-8">
              <h2 data-split className="text-balance text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl">
                {ctaTitle}
              </h2>
              <p data-reveal className="mt-6 max-w-xl text-lg opacity-70">
                {ctaBody}
              </p>
            </div>
            <div data-reveal className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:justify-end">
              <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
                <Link to="/book-demo">
                  Schedule a demo <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-background/30 bg-transparent text-background hover:bg-background/10"
              >
                <Link to="/contact">Contact sales</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default IndustryPage;

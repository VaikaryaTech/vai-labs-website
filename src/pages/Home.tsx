import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import indiaFlag from "@/assets/india-flag.svg";
import { useScrollMotion } from "@/hooks/use-scroll-motion";
import { AirGapDemo } from "@/components/AirGapDemo";
import { GroundedChatDemo } from "@/components/GroundedChatDemo";

const STATUS = [
  ["Deployment", "On-prem / air-gapped"],
  ["Internet", "Not required"],
  ["Data egress", "0 bytes"],
  ["Built in", "India"],
];

const RISKS = [
  "Proprietary data is sent to third-party AI platforms",
  "Prompts and documents end up in someone else's logs",
  "Regulated workloads can't pass a security review",
  "Critical workflows depend on an internet connection",
  "Pricing, models and terms change without your input",
  "Knowledge stays scattered across disconnected systems",
];

const PILLARS = [
  {
    title: "100% Data Sovereignty",
    body: "Your data stays within your infrastructure. Your intellectual property remains yours.",
  },
  {
    title: "Air-Gapped by Design",
    body: "Run enterprise AI in isolated, high-security environments with zero internet dependency.",
  },
  {
    title: "Enterprise-Grade Intelligence",
    body: "Transform proprietary data into actionable intelligence, automate complex processes, and accelerate innovation.",
  },
  {
    title: "Built to Scale",
    body: "From focused AI applications to enterprise-wide deployments, scale intelligence across your organization without compromising control.",
  },
];

const CAPABILITIES = [
  {
    title: "Secure by Design",
    body: "Build AI systems where every byte, every computation and every insight stays within your perimeter — on your terms, in your environment.",
  },
  {
    title: "Total Control",
    body: "Air-gapped AI that runs locally and never phones home. Your infrastructure becomes the engine: self-contained and entirely yours.",
  },
  {
    title: "Intelligent Orchestration",
    body: "Turn processes that used to take weeks into automated workflows, and give knowledge workers AI that executes alongside them.",
  },
];

const FAQS = [
  {
    q: "Does KOGNIX need an internet connection?",
    a: "No. KOGNIX is designed to run entirely inside your own infrastructure, including fully air-gapped environments with no outbound connectivity.",
  },
  {
    q: "Where does our data go?",
    a: "Nowhere. Documents, prompts and outputs stay within your environment. Nothing is sent to external AI platforms.",
  },
  {
    q: "How is it deployed?",
    a: "On your own servers or private cloud. Reference architectures for Docker and Kubernetes deployments are available.",
  },
  {
    q: "Which industries is it built for?",
    a: "Organizations where security is non-negotiable — finance, pharma and life sciences, legal, manufacturing, telecom, retail and education.",
  },
];

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
    {children}
  </p>
);

const Home = () => {
  const root = useRef<HTMLDivElement>(null);
  useScrollMotion(root);

  return (
    <div ref={root} data-motion className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="container mx-auto px-6 pt-40 pb-16 lg:pt-52 lg:pb-20">
          <div data-hero-fade className="max-w-5xl origin-top-left">
            <p data-scramble className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
              VAI Labs · Enterprise Generative AI
            </p>
            <h1
              data-split="load"
              className="mt-8 text-balance text-5xl font-medium leading-[1.02] tracking-[-0.03em] md:text-7xl lg:text-[5.5rem]"
            >
              AI without compromise.
            </h1>
            <p data-reveal="0.5" className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Enterprise-grade Generative AI that runs entirely inside your own
              infrastructure — for organizations where data, intellectual
              property and control are non-negotiable.
            </p>
            <div data-reveal="0.7" className="mt-12 flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="rounded-full px-7">
                <Link to="/book-demo">
                  Request a demo <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-7">
                <Link to="/assessment">Check your AI readiness</Link>
              </Button>
            </div>
          </div>

          {/* Status strip */}
          <div data-line className="mt-24 h-px bg-border" />
          <dl className="grid grid-cols-2 md:grid-cols-4">
            {STATUS.map(([label, value]) => (
              <div key={label} className="border-b border-border py-5 pr-4 md:border-b-0">
                <dt data-scramble className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  {label}
                </dt>
                <dd className="mt-2 flex items-center gap-2 font-mono text-sm uppercase">
                  {label === "Built in" && (
                    <img src={indiaFlag} alt="" className="h-3 w-auto rounded-[2px]" />
                  )}
                  <span data-scramble>{value}</span>
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Interactive: air-gap toggle */}
        <section className="border-t border-border bg-muted/40">
          <div className="container mx-auto px-6 py-24 lg:py-32">
            <AirGapDemo />
          </div>
        </section>

        {/* Problem — heading stays pinned while the list scrolls */}
        <section className="border-t border-border">
          <div className="container mx-auto grid gap-12 px-6 py-24 lg:grid-cols-12 lg:py-32">
            <div className="lg:sticky lg:top-32 lg:col-span-5 lg:self-start">
              <Eyebrow>The problem</Eyebrow>
              <h2 data-split className="mt-6 text-balance text-3xl font-medium leading-tight tracking-[-0.02em] md:text-5xl">
                Public AI asks you to trade control for capability.
              </h2>
              <p data-reveal className="mt-6 max-w-md text-muted-foreground">
                Most AI platforms were never built for environments where a
                single leak is unacceptable.
              </p>
            </div>
            <ol className="lg:col-span-6 lg:col-start-7">
              {RISKS.map((risk, i) => (
                <li key={risk} data-reveal>
                  <div data-line className="h-px bg-border" />
                  <div className="flex gap-6 py-6">
                    <span className="font-mono text-sm text-muted-foreground">
                      {String(i + 1).padStart(3, "0")}
                    </span>
                    <span className="text-base md:text-lg">{risk}</span>
                  </div>
                </li>
              ))}
              <li aria-hidden="true" data-line className="h-px list-none bg-border" />
            </ol>
          </div>
        </section>

        {/* Pillars */}
        <section id="features-section" className="border-t border-border bg-muted/40">
          <div className="container mx-auto px-6 py-24 lg:py-32">
            <Eyebrow>The approach</Eyebrow>
            <h2 data-split className="mt-6 max-w-3xl text-balance text-3xl font-medium leading-tight tracking-[-0.02em] md:text-5xl">
              Organizations shouldn't have to choose between innovation and sovereignty.
            </h2>
            <div
              data-stagger
              className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2"
            >
              {PILLARS.map((p, i) => (
                <div key={p.title} className="bg-background p-8 lg:p-10">
                  <span className="font-mono text-xs text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-6 text-xl font-medium">{p.title}</h3>
                  <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="border-t border-border">
          <div className="container mx-auto px-6 py-24 lg:py-32">
            <Eyebrow>What you get</Eyebrow>
            <div className="mt-12 grid gap-12 md:grid-cols-3">
              {CAPABILITIES.map((c, i) => (
                <div key={c.title} data-parallax={0.08 * (i + 1)}>
                  <div data-line className="h-px bg-foreground" />
                  <h3 className="mt-6 font-mono text-sm uppercase tracking-[0.1em]">{c.title}</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{c.body}</p>
                </div>
              ))}
            </div>
            <Link
              data-reveal
              to="/reference-architecture"
              className="group mt-16 inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.1em] underline-offset-4 hover:underline"
            >
              View reference architecture
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

        {/* Interactive: grounded answers */}
        <section className="border-t border-border bg-muted/40">
          <div className="container mx-auto px-6 py-24 lg:py-32">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <Eyebrow>See it answer</Eyebrow>
                <h2 data-split className="mt-6 text-balance text-3xl font-medium leading-tight tracking-[-0.02em] md:text-5xl">
                  Every answer shows its source.
                </h2>
              </div>
              <p data-reveal className="max-w-md text-muted-foreground lg:col-span-4 lg:col-start-9">
                KOGNIX answers from your own documents and cites the exact clause
                it used, so your teams can verify instead of trust.
              </p>
            </div>
            <div data-reveal className="mt-12">
              <GroundedChatDemo />
            </div>
          </div>
        </section>

        {/* Manifesto — words light up as you scroll */}
        <section className="border-t border-border">
          <div className="container mx-auto px-6 py-16 lg:py-24">
            <p
              data-fill
              className="max-w-4xl text-balance text-2xl font-medium leading-[1.25] tracking-[-0.02em] md:text-[2rem]"
            >
              Organizations should not have to choose between AI innovation and
              data sovereignty. VAI Labs brings Generative AI into the
              environments where your most critical work happens — securely,
              privately, and under your complete control.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-border">
          <div className="container mx-auto grid gap-12 px-6 py-24 lg:grid-cols-12 lg:py-32">
            <div className="lg:col-span-4">
              <Eyebrow>FAQ</Eyebrow>
              <h2 data-split className="mt-6 text-3xl font-medium tracking-[-0.02em] md:text-5xl">
                Before you talk to us
              </h2>
            </div>
            <Accordion data-stagger type="single" collapsible className="lg:col-span-7 lg:col-start-6">
              {FAQS.map((f) => (
                <AccordionItem key={f.q} value={f.q}>
                  <AccordionTrigger className="py-6 text-left text-lg font-medium hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-foreground text-background">
          <div className="container mx-auto px-6 py-24 lg:py-32">
            <h2 data-split className="max-w-4xl text-balance text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl">
              The future of enterprise AI is private.
            </h2>
            <p data-reveal className="mt-6 max-w-xl text-lg opacity-70">
              Welcome to AI on your terms.
            </p>
            <div data-reveal className="mt-10">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-background px-7 text-foreground hover:bg-background/90"
              >
                <Link to="/book-demo">
                  Request a demo <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;

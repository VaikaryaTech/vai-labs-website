import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useScrollMotion } from "@/hooks/use-scroll-motion";

const openings = [
  {
    title: "Senior AI/ML Engineer",
    location: "Remote",
    type: "Full-time",
    description: "Work on cutting-edge GenAI systems and help build the next generation of intelligent applications.",
  },
  {
    title: "Backend Engineer",
    location: "Remote",
    type: "Full-time",
    description: "Design and develop scalable backend systems to support our enterprise AI platform.",
  },
  {
    title: "Product Manager",
    location: "Remote",
    type: "Full-time",
    description: "Drive product strategy and roadmap for KOGNIX, working closely with customers and engineering teams.",
  },
  {
    title: "Customer Success Manager",
    location: "Remote",
    type: "Full-time",
    description: "Help enterprise customers succeed with KOGNIX and drive adoption across their organizations.",
  },
];

const benefits = [
  "Competitive salary and equity",
  "Flexible work arrangements",
  "Health insurance",
  "Learning & development budget",
  "Latest tech equipment",
  "Team events and outings",
];

const applyLink = (role?: string) =>
  `/contact?topic=Careers&subject=${encodeURIComponent(role ? `Application: ${role}` : "General application")}`;

const Careers = () => {
  const root = useRef<HTMLDivElement>(null);
  useScrollMotion(root);

  return (
    <div ref={root} data-motion className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        <section className="container mx-auto px-6 pt-40 pb-16 lg:pt-48">
          <p data-scramble className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
            Company · Careers · {openings.length} open roles
          </p>
          <h1
            data-split="load"
            className="mt-8 max-w-5xl text-balance text-5xl font-medium leading-[1.02] tracking-[-0.03em] md:text-7xl"
          >
            Build the future of private, enterprise AI.
          </h1>
          <p data-reveal="0.4" className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            At VAI Labs you'll work on challenging problems that matter. We're building AI that transforms how
            businesses operate — and we need talented people who share our vision.
          </p>
          <div data-reveal="0.6" className="mt-10">
            <Button asChild size="lg">
              <a href="#roles">
                See open roles <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>

        {/* Open roles */}
        <section id="roles" className="scroll-mt-20 border-t border-border">
          <div className="container mx-auto px-6 py-24 lg:py-32">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">Open positions</p>
                <h2 data-split className="mt-6 text-3xl font-medium tracking-[-0.02em] md:text-5xl">
                  Find your role.
                </h2>
              </div>
            </div>

            <ul className="mt-14 border-t border-border">
              {openings.map((job, i) => (
                <li key={job.title} data-reveal className="border-b border-border">
                  <Link
                    to={applyLink(job.title)}
                    className="group grid items-baseline gap-3 py-8 transition-[padding] duration-300 md:grid-cols-12 md:gap-6 md:hover:pl-4"
                  >
                    <span className="font-mono text-xs text-muted-foreground md:col-span-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="md:col-span-6">
                      <span className="block text-2xl font-medium tracking-tight transition-colors group-hover:text-primary">
                        {job.title}
                      </span>
                      <span className="mt-2 block max-w-lg text-muted-foreground">{job.description}</span>
                    </span>
                    <span className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground md:col-span-3">
                      {job.location}
                      <span className="block">{job.type}</span>
                    </span>
                    <span className="inline-flex items-center gap-2 text-sm font-medium md:col-span-2 md:justify-end">
                      Apply
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Benefits */}
        <section className="border-t border-border bg-muted/40">
          <div className="container mx-auto grid gap-12 px-6 py-24 lg:grid-cols-12 lg:py-32">
            <div className="lg:col-span-4">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">Benefits & perks</p>
              <h2 data-split className="mt-6 text-balance text-3xl font-medium leading-tight tracking-[-0.02em] md:text-5xl">
                We take care of our people.
              </h2>
            </div>
            <ul className="grid gap-x-10 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
              {benefits.map((b, i) => (
                <li key={b} data-reveal className="flex items-baseline gap-4 border-t border-border py-5">
                  <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-lg">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Open application */}
        <section className="bg-foreground text-background">
          <div className="container mx-auto grid gap-10 px-6 py-24 lg:grid-cols-12 lg:items-end lg:py-32">
            <div className="lg:col-span-8">
              <h2 data-split className="text-balance text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl">
                Don't see a role that fits?
              </h2>
              <p data-reveal className="mt-6 max-w-xl text-lg opacity-70">
                We're always looking for talented people. Tell us about yourself and let's chat.
              </p>
            </div>
            <div data-reveal className="lg:col-span-4 lg:text-right">
              <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
                <Link to={applyLink()}>
                  Get in touch <ArrowRight className="h-4 w-4" />
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

export default Careers;

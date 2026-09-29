import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Users, Shield, Zap } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FeatureSection } from "@/components/FeatureSection";
import { KognixWordmark } from "@/components/KognixWordmark";
import { useScrollMotion } from "@/hooks/use-scroll-motion";

const values = [
  {
    icon: Target,
    title: "Our mission",
    description: "To democratize enterprise AI by making secure, powerful GenAI solutions accessible to businesses of all sizes.",
  },
  {
    icon: Users,
    title: "Customer first",
    description: "We build solutions that solve real business problems, with customer success at the heart of everything we do.",
  },
  {
    icon: Shield,
    title: "Security & privacy",
    description: "Your data stays yours. We prioritize security and privacy in every aspect of our platform.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Constantly pushing the boundaries of what's possible with AI while maintaining practical, usable solutions.",
  },
];

const About = () => {
  const root = useRef<HTMLDivElement>(null);
  useScrollMotion(root);

  return (
    <div ref={root} data-motion className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        <section className="container mx-auto px-6 pt-40 pb-24 lg:pt-48">
          <p data-scramble className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
            Company · About VAI Labs
          </p>
          <h1
            data-split="load"
            className="mt-8 max-w-5xl text-balance text-5xl font-medium leading-[1.02] tracking-[-0.03em] md:text-7xl"
          >
            Building enterprise AI with security, intelligence and reliability at its core.
          </h1>

          <div data-line className="mt-20 h-px bg-border" />
          <dl className="grid grid-cols-2 md:grid-cols-4">
            {[
              ["Founded", "October 2022"],
              ["Headquarters", "Bangalore, India"],
              ["Products", "KOGNIX suite"],
              ["Focus", "Private, on-prem GenAI"],
            ].map(([k, v]) => (
              <div key={k} className="border-b border-border py-5 pr-4 md:border-b-0">
                <dt className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">{k}</dt>
                <dd className="mt-2 text-sm">{v}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Story */}
        <section className="border-t border-border">
          <div className="container mx-auto grid gap-12 px-6 py-24 lg:grid-cols-12 lg:py-32">
            <div className="lg:col-span-4">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">Our story</p>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground lg:col-span-7 lg:col-start-6">
              <p data-fill className="text-2xl font-medium leading-snug tracking-tight text-foreground md:text-3xl">
                We saw AI advancing rapidly — but most solutions were too complex, too expensive, or didn't take
                security and privacy seriously.
              </p>
              <p data-reveal>
                VAI Labs was founded in October 2022 with a vision to transform how businesses interact with their
                data and knowledge. Our team of AI researchers, engineers, and business experts came together to
                create <KognixWordmark size="hero" /> — a suite of enterprise Generative AI products that combines
                cutting-edge technology with practical business applications.
              </p>
              <p data-reveal>
                We believe every organization should have access to powerful AI tools that enhance decision-making,
                improve efficiency, and drive innovation. Today, we serve businesses across healthcare, finance,
                manufacturing, legal and many other industries — helping them unlock the full potential of their
                data while maintaining complete control over their information.
              </p>
            </div>
          </div>
        </section>

        <FeatureSection eyebrow="What we stand for" title="Our values." items={values} layout="columns" muted />

        {/* Closing */}
        <section className="bg-foreground text-background">
          <div className="container mx-auto grid gap-10 px-6 py-24 lg:grid-cols-12 lg:items-end lg:py-32">
            <div className="lg:col-span-8">
              <h2 data-split className="text-balance text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl">
                Join the future of intelligence.
              </h2>
              <p data-reveal className="mt-6 max-w-xl text-lg opacity-70">
                VAI Labs is more than a technology provider; we are a partner in your digital transformation —
                committed to a future where technology and humanity advance together, safely, locally, and
                intelligently.
              </p>
            </div>
            <div data-reveal className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:justify-end">
              <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
                <Link to="/book-demo">
                  Book a demo <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-background/30 bg-transparent text-background hover:bg-background/10"
              >
                <Link to="/careers">Join the team</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;

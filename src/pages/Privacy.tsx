import { useEffect, useRef, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getLenis } from "@/components/SmoothScroll";
import { useScrollMotion } from "@/hooks/use-scroll-motion";

const SECTIONS = [
  { id: "introduction", title: "Introduction" },
  { id: "information-we-collect", title: "Information We Collect" },
  { id: "how-we-use", title: "How We Use Your Information" },
  { id: "data-security", title: "Data Security" },
  { id: "data-retention", title: "Data Retention" },
  { id: "your-rights", title: "Your Rights" },
  { id: "contact", title: "Contact Us" },
];

const Privacy = () => {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(SECTIONS[0].id);
  useScrollMotion(root);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-100px 0px -65% 0px" }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const jump = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(el, { offset: -96, duration: 1 });
    else window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 96, behavior: "smooth" });
  };

  return (
    <div ref={root} data-motion className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        <header className="container mx-auto px-6 pt-40 pb-12 lg:pt-48">
          <p data-scramble className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
            Legal · Privacy
          </p>
          <h1
            data-split="load"
            className="mt-8 max-w-4xl text-balance text-5xl font-medium leading-[1.02] tracking-[-0.03em] md:text-7xl"
          >
            Privacy Policy
          </h1>
          <dl data-reveal="0.4" className="mt-10 flex flex-wrap gap-x-10 gap-y-3 border-t border-border pt-5">
            {[
              ["Last updated", "January 2025"],
              ["Applies to", "KOGNIX platform & services"],
              ["Questions", "privacy@vailabs.in"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">{k}</dt>
                <dd className="mt-1 text-sm">{v}</dd>
              </div>
            ))}
          </dl>
        </header>

        <div className="container mx-auto grid gap-12 px-6 pb-24 lg:grid-cols-12 lg:pb-32">
          <aside className="hidden lg:col-span-3 lg:block">
            <nav aria-label="Contents" className="sticky top-28">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">Contents</p>
              <ol className="mt-4 border-l border-border">
                {SECTIONS.map((s) => (
                  <li key={s.id}>
                    <button
                      type="button"
                      onClick={() => jump(s.id)}
                      className={`-ml-px block border-l py-2 pl-4 text-left text-sm transition-colors ${
                        active === s.id
                          ? "border-primary text-foreground"
                          : "border-transparent text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {s.title}
                    </button>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <article className="article lg:col-span-8 lg:col-start-5">
            <h2 id="introduction">Introduction</h2>
            <p>
              At VAI LABS, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose,
              and safeguard your information when you use our KOGNIX platform and services.
            </p>

            <h2 id="information-we-collect">Information We Collect</h2>
            <p>We collect information that you provide directly to us, including:</p>
            <ul>
              <li>Account information (name, email, company details)</li>
              <li>Documents and data you upload to KOGNIX</li>
              <li>Usage data and analytics</li>
              <li>Communication preferences</li>
            </ul>

            <h2 id="how-we-use">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process your transactions and send related information</li>
              <li>Send technical notices, updates, and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Protect against fraudulent or illegal activity</li>
            </ul>

            <h2 id="data-security">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data against
              unauthorized or unlawful processing, accidental loss, destruction, or damage. Your data is encrypted both
              in transit and at rest.
            </p>

            <h2 id="data-retention">Data Retention</h2>
            <p>
              We retain your personal data only for as long as necessary to fulfill the purposes outlined in this
              Privacy Policy, unless a longer retention period is required by law.
            </p>

            <h2 id="your-rights">Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Export your data</li>
            </ul>

            <h2 id="contact">Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at:</p>
            <ul>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:privacy@vailabs.in" className="underline underline-offset-4 hover:text-primary">
                  privacy@vailabs.in
                </a>
              </li>
              <li>
                <strong>Phone:</strong>{" "}
                <a href="tel:+919148555031" className="underline underline-offset-4 hover:text-primary">
                  +91 9148 555 031
                </a>
              </li>
            </ul>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ReadingProgress } from "@/components/ReadingProgress";
import { Button } from "@/components/ui/button";
import { getLenis } from "@/components/SmoothScroll";
import { useScrollMotion } from "@/hooks/use-scroll-motion";

interface Props {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author?: string;
  image?: string;
  /** Custom cover art; takes precedence over `image`. */
  cover?: ReactNode;
  next?: { title: string; to: string };
  children: ReactNode;
}

const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

/** Shared layout for blog articles: editorial header, sticky contents, reading progress. */
export const ArticleLayout = ({ category, title, excerpt, date, readTime, author, image, cover, next, children }: Props) => {
  const root = useRef<HTMLDivElement>(null);
  const body = useRef<HTMLDivElement>(null);
  const [toc, setToc] = useState<{ id: string; text: string }[]>([]);
  const [active, setActive] = useState<string>("");
  useScrollMotion(root);

  // Build the table of contents from the article's h2 headings.
  useEffect(() => {
    if (!body.current) return;
    const headings = Array.from(body.current.querySelectorAll<HTMLHeadingElement>("h2"));
    headings.forEach((h) => (h.id ||= slug(h.textContent ?? "")));
    setToc(headings.map((h) => ({ id: h.id, text: h.textContent ?? "" })));

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-100px 0px -65% 0px" }
    );
    headings.forEach((h) => observer.observe(h));
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
      <ReadingProgress />

      <main>
        <header className="container mx-auto px-6 pt-36 pb-12 lg:pt-44">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Journal
          </Link>
          <p className="mt-10 font-mono text-xs uppercase tracking-[0.14em] text-primary">{category}</p>
          <h1
            data-split="load"
            className="mt-5 max-w-4xl text-balance text-4xl font-medium leading-[1.05] tracking-[-0.03em] md:text-6xl"
          >
            {title}
          </h1>
          <p data-reveal="0.4" className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            {excerpt}
          </p>
          <dl data-reveal="0.5" className="mt-10 flex flex-wrap gap-x-10 gap-y-3 border-t border-border pt-5">
            {[
              ["Published", date],
              ["Reading time", readTime],
              ...(author ? [["By", author]] : []),
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">{k}</dt>
                <dd className="mt-1 text-sm">{v}</dd>
              </div>
            ))}
          </dl>
        </header>

        {(cover || image) && (
          <div className="container mx-auto px-6">
            <div data-clip className="aspect-[21/9] overflow-hidden rounded-2xl">
              {cover ?? <img src={image} alt="" className="h-full w-full object-cover" />}
            </div>
          </div>
        )}

        <div className="container mx-auto grid gap-12 px-6 py-16 lg:grid-cols-12 lg:py-24">
          {/* Contents */}
          <aside className="hidden lg:col-span-3 lg:block">
            <nav aria-label="Contents" className="sticky top-28">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">Contents</p>
              <ol className="mt-4 border-l border-border">
                {toc.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => jump(item.id)}
                      className={`-ml-px block border-l py-2 pl-4 text-left text-sm transition-colors ${
                        active === item.id
                          ? "border-primary text-foreground"
                          : "border-transparent text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {item.text}
                    </button>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <article ref={body} className="article lg:col-span-8 lg:col-start-5">
            {children}
          </article>
        </div>

        {/* Next + CTA */}
        <section className="border-t border-border">
          <div className="container mx-auto grid gap-10 px-6 py-16 md:grid-cols-2 md:py-20">
            {next ? (
              <Link to={next.to} className="group block">
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">Read next</p>
                <p className="mt-4 flex items-start gap-3 text-2xl font-medium leading-snug tracking-tight transition-colors group-hover:text-primary md:text-3xl">
                  {next.title}
                  <ArrowUpRight className="mt-1 h-6 w-6 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </p>
              </Link>
            ) : (
              <span />
            )}
            <div className="md:text-right">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">See it in practice</p>
              <p className="mt-4 text-lg text-muted-foreground">Talk to us about running GenAI inside your perimeter.</p>
              <Button asChild size="lg" className="mt-6">
                <Link to="/book-demo">
                  Book a demo <ArrowRight className="h-4 w-4" />
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

export default ArticleLayout;

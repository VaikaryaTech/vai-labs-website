import { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TrajectoryCover } from "@/components/blog/TrajectoryCover";
import { useScrollMotion } from "@/hooks/use-scroll-motion";
import imgSecurity from "@/assets/genai-security.webp";
import imgRag from "@/assets/bg-data-ingestion.webp";
import imgCompliance from "@/assets/business-finance.webp";
import imgTrust from "@/assets/bg-intelligence.webp";
import imgRoi from "@/assets/platform-integrations.webp";

type Post = {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  slug: string | null;
  image?: string;
  cover?: React.ReactNode;
  featured?: boolean;
};

const POSTS: Post[] = [
  {
    title: "The Accelerated Trajectory of Enterprise AI",
    excerpt: "The notion of a future AI revolution is obsolete; the revolution is a present, unfolding reality. AI is transitioning from a human augmentation tool to a co-decision maker.",
    author: "VAI LABS Team",
    date: "Dec 10, 2025",
    readTime: "12 min read",
    category: "AI Trends",
    slug: "/blog/enterprise-ai-trajectory",
    cover: <TrajectoryCover />,
    featured: true,
  },
  {
    title: "Implementing Secure GenAI: A Comprehensive Guide",
    excerpt: "Learn best practices for deploying GenAI solutions while maintaining enterprise security and compliance standards.",
    author: "Security Team",
    date: "Jan 10, 2025",
    readTime: "8 min read",
    category: "Security",
    slug: "/blog/secure-genai-guide",
    image: imgSecurity,
  },
  {
    title: "How RAG Technology is Transforming Document Intelligence",
    excerpt: "Deep dive into Retrieval-Augmented Generation and its applications in enterprise knowledge management.",
    author: "AI Research Team",
    date: "Jan 5, 2025",
    readTime: "6 min read",
    category: "Technology",
    slug: null,
    image: imgRag,
  },
  {
    title: "Case Study: Reducing Compliance Time by 70% with AI",
    excerpt: "Real-world example of how a financial institution streamlined regulatory compliance using KOGNIX.",
    author: "Product Team",
    date: "Dec 28, 2024",
    readTime: "7 min read",
    category: "Case Study",
    slug: null,
    image: imgCompliance,
  },
  {
    title: "Building Trust in AI: The Importance of Grounded Responses",
    excerpt: "Why hallucination-free AI responses are crucial for enterprise applications and how to achieve them.",
    author: "AI Research Team",
    date: "Dec 20, 2024",
    readTime: "5 min read",
    category: "Best Practices",
    slug: null,
    image: imgTrust,
  },
  {
    title: "The ROI of Enterprise GenAI Implementation",
    excerpt: "Quantifying the business impact of GenAI adoption across different industries and use cases.",
    author: "Business Team",
    date: "Dec 15, 2024",
    readTime: "6 min read",
    category: "Business",
    slug: null,
    image: imgRoi,
  },
];

const ALL = "All";

const Blog = () => {
  const root = useRef<HTMLDivElement>(null);
  const preview = useRef<HTMLDivElement>(null);
  const [category, setCategory] = useState(ALL);
  const [hovered, setHovered] = useState<Post | null>(null);
  useScrollMotion(root);

  const featured = POSTS.find((p) => p.featured)!;
  const others = POSTS.filter((p) => !p.featured);
  const categories = useMemo(
    () => [ALL, ...Array.from(new Set(others.map((p) => p.category)))],
    [others]
  );
  const visible = category === ALL ? others : others.filter((p) => p.category === category);

  // Cursor-following image preview for the article list.
  const moveX = useRef<gsap.QuickToFunc>();
  const moveY = useRef<gsap.QuickToFunc>();
  const onListMove = (e: React.MouseEvent) => {
    if (!preview.current) return;
    moveX.current ??= gsap.quickTo(preview.current, "x", { duration: 0.5, ease: "power3" });
    moveY.current ??= gsap.quickTo(preview.current, "y", { duration: 0.5, ease: "power3" });
    moveX.current(e.clientX + 24);
    moveY.current(e.clientY - 120);
  };

  const selectCategory = (c: string) => {
    setCategory(c);
    requestAnimationFrame(() => {
      gsap.fromTo(
        "[data-post-row]",
        { autoAlpha: 0, y: 16 },
        { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.05, ease: "power3.out" }
      );
    });
  };

  return (
    <div ref={root} data-motion className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        {/* Header */}
        <section className="container mx-auto px-6 pt-40 pb-16 lg:pt-48">
          <p data-scramble className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
            Journal · {POSTS.length} articles
          </p>
          <h1
            data-split="load"
            className="mt-8 max-w-4xl text-balance text-5xl font-medium leading-[1.02] tracking-[-0.03em] md:text-7xl"
          >
            Notes on private, enterprise-grade AI.
          </h1>
          <p data-reveal="0.4" className="mt-8 max-w-xl text-lg text-muted-foreground">
            Insights, updates, and best practices from the VAI Labs team.
          </p>
        </section>

        {/* Featured */}
        <section className="container mx-auto px-6 pb-24">
          <Link to={featured.slug!} className="group block">
            <div data-clip className="relative aspect-[16/9] overflow-hidden rounded-2xl md:aspect-[21/9]">
              <div className="h-full w-full transition-transform duration-700 group-hover:scale-[1.02]">
                {featured.cover ?? <img src={featured.image} alt="" className="h-full w-full object-cover" />}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-6 text-white md:flex-row md:items-end md:justify-between md:p-10">
                <div className="max-w-3xl">
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-white/70">
                    Featured · {featured.category}
                  </p>
                  <h2 className="mt-3 text-balance text-2xl font-medium leading-tight tracking-tight md:text-4xl">
                    {featured.title}
                  </h2>
                </div>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-12">
              <p data-reveal className="text-muted-foreground md:col-span-7">
                {featured.excerpt}
              </p>
              <p data-reveal className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground md:col-span-4 md:col-start-9 md:text-right">
                {featured.date} · {featured.readTime}
              </p>
            </div>
          </Link>
        </section>

        {/* Index */}
        <section className="border-t border-border">
          <div className="container mx-auto px-6 py-24">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <h2 data-split className="text-3xl font-medium tracking-[-0.02em] md:text-5xl">
                All articles
              </h2>
              <div data-reveal role="tablist" aria-label="Filter by category" className="flex flex-wrap gap-2">
                {categories.map((c) => {
                  const count = c === ALL ? others.length : others.filter((p) => p.category === c).length;
                  const selected = c === category;
                  return (
                    <button
                      key={c}
                      role="tab"
                      aria-selected={selected}
                      onClick={() => selectCategory(c)}
                      className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                        selected
                          ? "border-foreground bg-foreground text-background"
                          : "border-border text-foreground/70 hover:border-foreground/40 hover:text-foreground"
                      }`}
                    >
                      {c} <span className="ml-1 font-mono text-xs opacity-60">{count}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <ul
              className="mt-12 border-t border-border"
              onMouseMove={onListMove}
              onMouseLeave={() => setHovered(null)}
            >
              {visible.map((post, i) => {
                const row = (
                  <div className="grid items-baseline gap-2 py-7 transition-[padding] duration-300 md:grid-cols-12 md:gap-6 md:group-hover:pl-4">
                    <span className="font-mono text-xs text-muted-foreground md:col-span-1">
                      {String(i + 1).padStart(3, "0")}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground md:col-span-2">
                      {post.category}
                    </span>
                    <span className="md:col-span-6">
                      <span className="block text-xl font-medium leading-snug tracking-tight transition-colors md:text-2xl md:group-hover:text-primary">
                        {post.title}
                      </span>
                      <span className="mt-2 block max-w-xl text-sm text-muted-foreground md:hidden">{post.excerpt}</span>
                    </span>
                    <span className="flex items-center justify-between gap-3 font-mono text-xs uppercase tracking-[0.1em] text-muted-foreground md:col-span-3 md:justify-end">
                      {post.slug ? (
                        <>
                          {post.readTime}
                          <ArrowRight className="h-4 w-4 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                        </>
                      ) : (
                        <span className="rounded-full border border-border px-2.5 py-1 text-[10px]">Coming soon</span>
                      )}
                    </span>
                  </div>
                );
                return (
                  <li
                    key={post.title}
                    data-post-row
                    data-reveal
                    onMouseEnter={() => setHovered(post)}
                    className="group border-b border-border"
                  >
                    {post.slug ? (
                      <Link to={post.slug} className="block">
                        {row}
                      </Link>
                    ) : (
                      <div className="cursor-default opacity-80">{row}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* Newsletter-style CTA */}
        <section className="border-t border-border bg-muted/40">
          <div className="container mx-auto grid gap-8 px-6 py-24 md:grid-cols-12 md:items-end">
            <h2 data-fill className="text-balance text-3xl font-medium leading-tight tracking-[-0.02em] md:col-span-8 md:text-5xl">
              Want to see how this applies to your organization? Let's talk it through.
            </h2>
            <div data-reveal className="md:col-span-4 md:text-right">
              <Link
                to="/book-demo"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-7 text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Book a demo <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Floating preview (desktop, pointer devices): outer box follows the cursor, inner box fades/scales */}
      <div
        ref={preview}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-40 hidden [@media(hover:hover)]:lg:block"
      >
        <div
          className={`relative h-[180px] w-[280px] overflow-hidden rounded-xl shadow-2xl transition-[opacity,transform] duration-300 ${
            hovered ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
        >
          {others.map((p) => (
            <img
              key={p.title}
              src={p.image}
              alt=""
              loading="lazy"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
                hovered?.title === p.title ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;

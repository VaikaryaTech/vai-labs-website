import { useEffect, useRef, useState } from "react";
import { Send, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { KognixWordmark } from "@/components/KognixWordmark";

const GREETING =
  "Hi, I'm KOGNIX — ask me about our on-premises AI platform.";

const FALLBACK =
  "Great question. Our team can walk you through architecture options — would you like to schedule a demo?";

const KNOWLEDGE: { keywords: string[]; answer: string }[] = [
  {
    keywords: ["studio", "ai studio", "build", "workspace"],
    answer:
      "KOGNIX AI Studio is the build-and-orchestrate workspace: assemble assistants, connect enterprise data, chain tools and agents — all inside your own infrastructure.",
  },
  {
    keywords: ["genai", "engine", "gen ai"],
    answer:
      "The KOGNIX GenAI Engine is the core runtime: private model serving, retrieval over your documents, and agentic execution with zero external calls.",
  },
  {
    keywords: ["intelligence", "decision", "insight"],
    answer:
      "KOGNIX Intelligence turns proprietary data into decision intelligence — deep research, document reasoning and domain-specific analysis.",
  },
  {
    keywords: ["analytics", "observability", "tracing", "usage", "monitor"],
    answer:
      "KOGNIX Analytics gives you full observability: request tracing, usage dashboards, cost and quality metrics across every on-prem AI workload.",
  },
  {
    keywords: ["air-gapped", "air gapped", "airgap", "offline", "isolated"],
    answer:
      "Air-gapped deployment means no internet dependency: models, vector stores and orchestration are packaged for isolated networks and updated via controlled offline bundles.",
  },
  {
    keywords: ["on-prem", "on prem", "private cloud", "deploy", "kubernetes", "docker", "install"],
    answer:
      "We deploy on-premises, in your private cloud, or fully air-gapped — reference architectures exist for both Docker and Kubernetes.",
  },
  {
    keywords: ["sovereignty", "security", "data", "compliance", "privacy", "gdpr"],
    answer:
      "100% data sovereignty: your data, embeddings, prompts and outputs never leave your perimeter, with role-based access and audit trails built in.",
  },
  {
    keywords: ["demo", "contact", "talk", "price", "pricing", "sales"],
    answer:
      "Happy to help — request a walkthrough on our Book a Demo page and our team will map the right setup for you.",
  },
];

const answerFor = (q: string) => {
  const text = q.toLowerCase();
  const hit = KNOWLEDGE.find((k) => k.keywords.some((kw) => text.includes(kw)));
  return hit ? hit.answer : FALLBACK;
};

type Msg = { role: "ai" | "user"; text: string };

export const HeroOrb = () => {
  const [mounted, setMounted] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([
    { role: "ai", text: "I'm the AI behind VAI LABS' on-premises platform. Ask about our products or air-gapped deployment." },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t1 = window.setTimeout(() => {
      setMounted(true);
      setShowBubble(true);
      setSpeaking(true);
    }, 1200);
    const t2 = window.setTimeout(() => setSpeaking(false), 5200);
    const t3 = window.setTimeout(() => setShowBubble(false), 6500);
    return () => [t1, t2, t3].forEach(window.clearTimeout);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const send = () => {
    const q = input.trim();
    if (!q) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", text: q }]);
    setSpeaking(true);
    window.setTimeout(() => {
      setMessages((m) => [...m, { role: "ai", text: answerFor(q) }]);
      setSpeaking(false);
    }, 600);
  };

  return (
    <div
      className={`relative inline-flex flex-col items-center transition-all duration-700 ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      }`}
    >
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Ask the KOGNIX orb"
          aria-expanded={open}
          onClick={() => {
            setOpen((v) => !v);
            setShowBubble(false);
          }}
          className={`kognix-orb relative shrink-0 rounded-full h-11 w-11 ${
            speaking ? "kognix-orb-speaking" : ""
          } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-background`}
        >
          <span className="sr-only">KOGNIX Assistant</span>
          <span className="kognix-orb-core" aria-hidden="true" />
        </button>

        {showBubble && !open && (
          <div className="glass max-w-[16rem] rounded-full px-4 py-2 text-xs leading-snug text-left animate-fade-in">
            {GREETING}
          </div>
        )}
      </div>

      {open && (
        <div
          role="dialog"
          aria-label="KOGNIX Assistant"
          className="absolute top-14 left-0 z-50 w-[19rem] sm:w-[22rem] max-h-[22rem] glass rounded-2xl flex flex-col overflow-hidden animate-scale-in text-left"
        >
          <header className="flex items-center justify-between gap-2 px-3 py-2 border-b border-white/10">
            <span className="text-sm font-semibold">
              <KognixWordmark size="sm" suffix="Assistant" />
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close KOGNIX Assistant"
              className="rounded-md p-1 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              <X className="h-4 w-4" />
            </button>
          </header>

          <div ref={scrollRef} className="flex-1 overflow-y-auto px-3 py-3 space-y-3">
            {messages.map((m, i) =>
              m.role === "ai" ? (
                <p key={i} className="max-w-[90%] text-xs leading-relaxed">
                  {m.text}
                </p>
              ) : (
                <div
                  key={i}
                  className="ml-auto max-w-[90%] rounded-2xl bg-primary px-3 py-1.5 text-xs text-primary-foreground"
                >
                  {m.text}
                </div>
              ),
            )}
          </div>

          <div className="border-t border-white/10 p-2 space-y-1.5">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send();
              }}
              className="flex items-center gap-2"
            >
              <label className="sr-only" htmlFor="hero-orb-input">
                Ask KOGNIX a question
              </label>
              <Input
                id="hero-orb-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about products…"
                className="h-8 text-xs bg-white/5 border-white/15 text-current placeholder:text-current/50"
              />
              <Button type="submit" size="icon" className="h-8 w-8" aria-label="Send message" disabled={!input.trim()}>
                <Send className="h-3.5 w-3.5" />
              </Button>
            </form>
            <Link to="/book-demo" className="block text-center text-[0.7rem] text-cyan-300 hover:underline">
              Schedule a demo →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroOrb;

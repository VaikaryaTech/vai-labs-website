import { useEffect, useRef, useState } from "react";
import { Mic, MessageSquare, Send, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { KognixWordmark } from "@/components/KognixWordmark";

const GREETING =
  "Hi, I'm KOGNIX. I’m the AI behind VAI LABS’ on-premises platform. Ask me about our products or air-gapped deployment.";

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
    keywords: ["saas", "on-prem", "on prem", "private cloud", "deploy", "kubernetes", "docker", "install"],
    answer:
      "KOGNIX is on-premises first — deployed inside your data centre, your private cloud, or fully air-gapped. Reference architectures exist for both Docker and Kubernetes.",
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

const WAVE_DELAYS = [0, 0.15, 0.3, 0.45, 0.6, 0.3, 0.15];

export const HeroOrb = () => {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t1 = window.setTimeout(() => {
      setMounted(true);
      setShowBubble(true);
      setActive(true);
    }, 1500);
    const t2 = window.setTimeout(() => setActive(false), 6000);
    const t3 = window.setTimeout(() => setShowBubble(false), 8000);
    return () => [t1, t2, t3].forEach(window.clearTimeout);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, chatOpen]);

  const send = () => {
    const q = input.trim();
    if (!q) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", text: q }]);
    setActive(true);
    window.setTimeout(() => {
      setMessages((m) => [...m, { role: "ai", text: answerFor(q) }]);
      setActive(false);
    }, 600);
  };

  const onMic = () => {
    setNotice("Voice input coming soon — listening simulation active.");
    setActive(true);
    window.setTimeout(() => {
      setActive(false);
      setNotice(null);
    }, 3200);
  };

  return (
    <div
      className={`relative flex flex-col items-center transition-all duration-1000 ease-in-out ${
        mounted ? "opacity-100 scale-100" : "opacity-0 scale-75"
      }`}
    >
      {/* Greeting bubble */}
      {showBubble && !menuOpen && !chatOpen && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 -translate-y-full w-[15rem] sm:w-[20rem] animate-fade-in">
          <div className="glass rounded-2xl px-4 py-2.5 text-xs sm:text-sm leading-snug text-center">
            {GREETING}
          </div>
        </div>
      )}

      {/* Radial control menu */}
      {menuOpen && !chatOpen && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 -translate-y-full flex items-center gap-2 animate-scale-in">
          <button
            type="button"
            onClick={onMic}
            aria-label="Talk to KOGNIX using your microphone"
            className="glass flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-medium hover:scale-105 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <Mic className="h-3.5 w-3.5" aria-hidden="true" /> Talk
          </button>
          <button
            type="button"
            onClick={() => {
              setChatOpen(true);
              setMenuOpen(false);
              if (messages.length === 0) {
                setMessages([{ role: "ai", text: "Ask about products or deployment." }]);
              }
            }}
            aria-label="Type a question for KOGNIX"
            className="glass flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-medium hover:scale-105 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <MessageSquare className="h-3.5 w-3.5" aria-hidden="true" /> Type
          </button>
        </div>
      )}

      {/* Compact chat overlay */}
      {chatOpen && (
        <div
          role="dialog"
          aria-label="KOGNIX Assistant"
          className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 z-50 w-[19rem] sm:w-[24rem] glass rounded-2xl overflow-hidden animate-scale-in text-left"
        >
          <header className="flex items-start justify-between gap-2 px-3 py-2 border-b border-current/10">
            <div>
              <span className="text-sm font-semibold">
                <KognixWordmark size="sm" suffix="Assistant" />
              </span>
              <p className="text-[0.7rem] opacity-70">Ask about products or deployment.</p>
            </div>
            <button
              type="button"
              onClick={() => setChatOpen(false)}
              aria-label="Close KOGNIX Assistant"
              className="rounded-md p-1 hover:bg-current/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <X className="h-4 w-4" />
            </button>
          </header>

          <div ref={scrollRef} className="max-h-44 overflow-y-auto px-3 py-2.5 space-y-2">
            {messages.map((m, i) =>
              m.role === "ai" ? (
                <p key={i} className="max-w-[92%] text-xs leading-relaxed">
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

          <div className="border-t border-current/10 p-2 space-y-1.5">
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
                placeholder="What is KOGNIX AI Studio?"
                className="h-8 text-xs bg-current/5 border-current/20 text-current placeholder:text-current/50"
              />
              <Button type="submit" size="icon" className="h-8 w-8" aria-label="Send message" disabled={!input.trim()}>
                <Send className="h-3.5 w-3.5" />
              </Button>
            </form>
            <Link to="/book-demo" className="block text-center text-[0.7rem] text-accent hover:underline">
              Schedule a demo →
            </Link>
          </div>
        </div>
      )}

      {/* The orb nucleus */}
      <div className={`relative ${active ? "kognix-orb-active" : ""}`}>
        <span className="kognix-orb-ring" aria-hidden="true" />
        <span className="kognix-orb-ring kognix-orb-ring-2" aria-hidden="true" />
        <span className="kognix-orb-ring kognix-orb-ring-3" aria-hidden="true" />
        <button
          type="button"
          aria-label="KOGNIX AI core — open voice and text controls"
          aria-expanded={menuOpen || chatOpen}
          onClick={() => {
            setShowBubble(false);
            if (chatOpen) {
              setChatOpen(false);
              return;
            }
            setMenuOpen((v) => !v);
          }}
          className={`kognix-orb relative rounded-full h-[68px] w-[68px] sm:h-[104px] sm:w-[104px] ${
            active ? "kognix-orb-speaking" : ""
          } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background`}
        >
          <span className="sr-only">KOGNIX Assistant</span>
          <span className="kognix-orb-core" aria-hidden="true" />
        </button>
      </div>

      {/* Audio-wave lines */}
      <div className="mt-3 flex h-5 items-end justify-center gap-[3px]" aria-hidden="true">
        {WAVE_DELAYS.map((d, i) => (
          <span
            key={i}
            className="kognix-wave-bar"
            style={{ animationDelay: `${d}s`, animationDuration: active ? "0.7s" : "1.6s" }}
          />
        ))}
      </div>

      <p className="mt-2 text-[0.7rem] tracking-[0.2em] uppercase opacity-70">
        {notice ?? "Talk to KOGNIX"}
      </p>
    </div>
  );
};

export default HeroOrb;

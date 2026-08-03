import { useEffect, useRef, useState } from "react";
import { Send, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { KognixWordmark } from "@/components/KognixWordmark";
import { useIsMobile } from "@/hooks/use-mobile";

const GREETING =
  "Hi, I'm KOGNIX. I'm the AI behind VAI LABS' on-premises platform. I can explain our products, show how air-gapped deployment works, or help you pick the right setup for your organization. What would you like to know?";

const FALLBACK =
  "That's a great question. For detailed answers about deployments and security, our team can walk you through architecture options. Would you like to schedule a demo?";

const KNOWLEDGE: { keywords: string[]; answer: string }[] = [
  {
    keywords: ["studio", "ai studio", "build", "workspace"],
    answer:
      "KOGNIX AI Studio is the build-and-orchestrate workspace: assemble assistants, connect enterprise data, chain tools and agents, and ship them to production — all inside your own infrastructure.",
  },
  {
    keywords: ["genai", "engine", "gen ai"],
    answer:
      "The KOGNIX GenAI Engine is the core runtime: private model serving, retrieval over your documents, and agentic execution with zero external calls.",
  },
  {
    keywords: ["intelligence", "decision", "insight"],
    answer:
      "KOGNIX Intelligence turns proprietary data into decision intelligence — deep research, document reasoning and domain-specific analysis for regulated enterprises.",
  },
  {
    keywords: ["analytics", "observability", "tracing", "usage", "monitor"],
    answer:
      "KOGNIX Analytics gives you full observability: request tracing, usage dashboards, cost and quality metrics across every AI workload you run on-prem.",
  },
  {
    keywords: ["air-gapped", "air gapped", "airgap", "offline", "isolated"],
    answer:
      "Air-gapped deployment means the entire platform runs with no internet dependency: models, vector stores, and orchestration are packaged for isolated networks and updated through controlled offline bundles.",
  },
  {
    keywords: ["on-prem", "on prem", "private cloud", "deploy", "kubernetes", "docker", "install"],
    answer:
      "We deploy on-premises, in your private cloud, or fully air-gapped. Reference architectures are available for both Docker and Kubernetes — see the Reference Architecture page for the diagrams and PDFs.",
  },
  {
    keywords: ["sovereignty", "security", "data", "compliance", "privacy", "gdpr"],
    answer:
      "100% data sovereignty: your data, embeddings, prompts and outputs never leave your perimeter. Role-based access, audit trails and network isolation are built in by design.",
  },
  {
    keywords: ["demo", "contact", "talk", "price", "pricing", "sales"],
    answer:
      "Happy to help — you can request a walkthrough on our Book a Demo page and our team will map the right setup for your organization.",
  },
];

const answerFor = (q: string) => {
  const text = q.toLowerCase();
  const hit = KNOWLEDGE.find((k) => k.keywords.some((kw) => text.includes(kw)));
  return hit ? hit.answer : FALLBACK;
};

type Msg = { role: "ai" | "user"; text: string };

export const KognixOrbAssistant = () => {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);
  const [docked, setDocked] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([{ role: "ai", text: GREETING }]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t1 = window.setTimeout(() => {
      setMounted(true);
      setShowBubble(true);
      setSpeaking(true);
    }, 1500);
    const t2 = window.setTimeout(() => setSpeaking(false), 8000);
    const t3 = window.setTimeout(() => {
      setShowBubble(false);
      setDocked(true);
    }, 9500);
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
    }, 700);
  };

  const orbSize = isMobile ? "h-14 w-14" : docked ? "h-16 w-16" : "h-20 w-20";

  return (
    <>
      {/* Orb */}
      <div
        className={`fixed z-[70] right-4 md:right-6 transition-all duration-700 ease-out ${
          docked ? "bottom-4 md:bottom-6" : "bottom-16 md:bottom-24"
        } ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}`}
      >
        <div className="flex items-end gap-3">
          {showBubble && !open && (
            <div className="glass max-w-[15rem] sm:max-w-xs md:max-w-sm rounded-2xl p-4 text-sm leading-relaxed animate-fade-in">
              {GREETING}
            </div>
          )}
          <button
            type="button"
            aria-label="Open KOGNIX Assistant"
            aria-expanded={open}
            onClick={() => {
              setOpen(true);
              setShowBubble(false);
              setDocked(true);
            }}
            className={`kognix-orb relative shrink-0 rounded-full ${orbSize} ${
              speaking ? "kognix-orb-speaking" : ""
            } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-background`}
          >
            <span className="sr-only">KOGNIX Assistant</span>
            <span className="kognix-orb-core" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Chat panel */}
      {open && (
        <div
          role="dialog"
          aria-label="KOGNIX Assistant"
          style={{ position: "fixed" }}
          className="z-[70] bottom-0 left-0 right-0 w-full h-[80vh] sm:left-auto sm:bottom-6 sm:right-6 sm:h-[32rem] sm:w-[24rem] glass rounded-t-2xl sm:rounded-2xl flex flex-col overflow-hidden animate-scale-in"
        >
          <header className="flex items-center justify-between gap-2 px-4 py-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="kognix-orb kognix-orb-speaking h-6 w-6 rounded-full" aria-hidden="true">
                <span className="kognix-orb-core" />
              </span>
              <span className="font-semibold">
                <KognixWordmark size="sm" suffix="Assistant" />
              </span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close KOGNIX Assistant"
              className="rounded-md p-1 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              <X className="h-4 w-4" />
            </button>
          </header>

          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
            {messages.map((m, i) =>
              m.role === "ai" ? (
                <div key={i} className="max-w-[85%]">
                  <p className="text-[0.7rem] uppercase tracking-[0.18em] text-cyan-300/90 mb-1">KOGNIX</p>
                  <p className="text-sm leading-relaxed">{m.text}</p>
                </div>
              ) : (
                <div key={i} className="ml-auto max-w-[85%] rounded-2xl bg-primary px-3 py-2 text-sm text-primary-foreground">
                  {m.text}
                </div>
              ),
            )}
          </div>

          <div className="border-t border-white/10 p-3 space-y-2">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send();
              }}
              className="flex items-center gap-2"
            >
              <label className="sr-only" htmlFor="kognix-chat-input">
                Ask KOGNIX a question
              </label>
              <Input
                id="kognix-chat-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about products or deployment…"
                className="bg-white/5 border-white/15 text-current placeholder:text-current/50"
              />
              <Button type="submit" size="icon" aria-label="Send message" disabled={!input.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
            <Link
              to="/book-demo"
              className="block text-center text-xs text-cyan-300 hover:underline"
              onClick={() => setOpen(false)}
            >
              Schedule a demo →
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default KognixOrbAssistant;

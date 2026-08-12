import { useEffect, useRef, useState } from "react";
import { Mic, MessageSquare, Send, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { KognixWordmark } from "@/components/KognixWordmark";

const GREETING =
  "Hi, I'm KOGNIX. I’m the AI behind VAI LABS’ on-premises platform. Ask me about our products or air-gapped deployment.";

const FALLBACK =
  "I might not have a perfect answer for that yet. I’m optimized to talk about KOGNIX products, deployment options, and security. If you'd like deeper architecture guidance, our human team can walk you through it.";

const GREETING_REPLY =
  "Hi, I'm KOGNIX — the AI behind VAI LABS' on-premises platform. I can walk you through our products, how deployment works, or how we handle security. What would you like to know first?";

const GREETING_PATTERN =
  /\b(hello+|hi+|hey+|yo|hiya|howdy|greetings|namaste|good\s*(morning|afternoon|evening|day)|how\s*are\s*you|what'?s\s*up|sup)\b/i;

type Topic = "studio" | "intelligence" | "analytics" | "deployment" | "security" | null;

const KNOWLEDGE: { topic: Topic; keywords: string[]; answer: string }[] = [
  {
    topic: "studio",
    keywords: ["studio", "ai studio", "build", "workspace", "orchestrat"],
    answer:
      "KOGNIX AI Studio is the build-and-orchestrate workspace: assemble assistants, connect enterprise data, chain tools and agents — all inside your own infrastructure.",
  },
  {
    topic: "intelligence",
    keywords: ["genai", "engine", "gen ai", "llm", "model"],
    answer:
      "The KOGNIX GenAI Engine is the core runtime: private model serving, retrieval over your documents, and agentic execution with zero external calls.",
  },
  {
    topic: "intelligence",
    keywords: ["intelligence", "decision", "insight", "research"],
    answer:
      "KOGNIX Intelligence turns proprietary data into decision intelligence — deep research, document reasoning and domain-specific analysis.",
  },
  {
    topic: "analytics",
    keywords: ["analytics", "observability", "tracing", "usage", "monitor", "cost"],
    answer:
      "KOGNIX Analytics gives you full observability: request tracing, usage dashboards, cost and quality metrics across every on-prem AI workload.",
  },
  {
    topic: null,
    keywords: ["product", "portfolio", "offer", "what do you do", "platform"],
    answer:
      "Our portfolio has four products: KOGNIX AI Studio (build and orchestrate), KOGNIX GenAI Engine (private runtime), KOGNIX Analytics (observability) and KOGNIX Intelligence (decision intelligence). Which one should I expand on?",
  },
  {
    topic: "deployment",
    keywords: ["air-gapped", "air gapped", "airgap", "offline", "isolated"],
    answer:
      "Air-gapped deployment means no internet dependency: models, vector stores and orchestration are packaged for isolated networks and updated via controlled offline bundles.",
  },
  {
    topic: "deployment",
    keywords: ["saas", "on-prem", "on prem", "onprem", "private cloud", "deploy", "kubernetes", "docker", "install", "architecture", "infrastructure"],
    answer:
      "KOGNIX is on-premises first — deployed inside your data centre, your private cloud, or fully air-gapped. Reference architectures exist for both Docker and Kubernetes.",
  },
  {
    topic: "security",
    keywords: ["sovereignty", "security", "secure", "data", "compliance", "privacy", "gdpr", "audit", "access control"],
    answer:
      "100% data sovereignty: your data, embeddings, prompts and outputs never leave your perimeter, with role-based access and audit trails built in.",
  },
  {
    topic: null,
    keywords: ["demo", "contact", "talk to", "price", "pricing", "sales", "trial", "quote"],
    answer:
      "Happy to help — request a walkthrough on our Book a Demo page and our team will map the right setup for you.",
  },
];

const FOLLOW_UPS: Record<Exclude<Topic, null>, string> = {
  studio:
    "KOGNIX AI Studio lets you visually design RAG workflows and agents. You can connect internal data sources and define how they are chunked and embedded, orchestrate tools, functions and model calls in a drag-and-drop canvas, and expose finished workflows as APIs to your existing apps. Platform teams standardize the patterns while individual teams build their own assistants.",
  intelligence:
    "KOGNIX Intelligence runs your models on-prem or in your private cloud. It hosts multiple LLMs and embedding models on your GPUs, manages batching, concurrency and routing so one cluster serves many teams, and keeps model weights, prompts and logs fully inside your infrastructure. It's the internal inference layer KOGNIX AI Studio builds on.",
  analytics:
    "KOGNIX Analytics traces every step of a request: which documents were retrieved, which tools were called, how long each step took and how the model responded. You can inspect individual traces to debug issues, track latency, cost and success rates over time, and run evaluations across different RAG strategies or prompts.",
  deployment:
    "In a typical deployment KOGNIX runs on Kubernetes in your data centre or VPC: an application layer for AI Studio and APIs, a model layer (KOGNIX Intelligence) on GPU nodes, and an observability layer (KOGNIX Analytics) for tracing and metrics. For air-gapped setups, updates arrive as signed packages imported via an offline path — no outbound internet required.",
  security:
    "Security-wise KOGNIX is designed for regulated environments: no calls to external LLM APIs in production, TLS for all internal traffic, encryption at rest for databases and storage, integration with your IdP for SSO and role-based access control, and detailed audit logs of who accessed what and when. That's what lets defence, government, healthcare and finance teams adopt AI safely.",
};

const FOLLOWUP_PATTERN =
  /(tell me more|more details?|more info|go deeper|dig deeper|deeper|details|expand|explain more|elaborate|say more|continue|and\?|what else|how does (it|that) work)/i;

const answerFor = (q: string, lastTopic: Topic): { text: string; topic: Topic } => {
  const text = q.toLowerCase().trim();
  if (GREETING_PATTERN.test(text)) return { text: GREETING_REPLY, topic: lastTopic };
  if (/^(thanks|thank you|thx|ok|okay|cool|great)\b/.test(text))
    return {
      text: "Anytime. Ask me about KOGNIX products, deployment, or security whenever you're ready.",
      topic: lastTopic,
    };
  const hit = KNOWLEDGE.find((k) => k.keywords.some((kw) => text.includes(kw)));
  if (hit) return { text: hit.answer, topic: hit.topic ?? lastTopic };
  if (FOLLOWUP_PATTERN.test(text)) {
    if (lastTopic) return { text: FOLLOW_UPS[lastTopic], topic: lastTopic };
    return {
      text: "Happy to go deeper — which area? KOGNIX AI Studio, KOGNIX Intelligence, KOGNIX Analytics, deployment, or security.",
      topic: lastTopic,
    };
  }
  return { text: FALLBACK, topic: lastTopic };
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
  const lastTopicRef = useRef<Topic>(null);
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

  const send = (textOverride?: string) => {
    const q = (textOverride ?? input).trim();
    if (!q) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", text: q }]);
    setActive(true);
    window.setTimeout(() => {
      const res = answerFor(q, lastTopicRef.current);
      lastTopicRef.current = res.topic;
      setMessages((m) => [...m, { role: "ai", text: res.text }]);
      setActive(false);
    }, 600);
  };

  const speech = useSpeechRecognition({
    onResult: (transcript) => {
      setInput(transcript);
      send(transcript);
    },
  });

  const openChat = () => {
    setChatOpen(true);
    setMenuOpen(false);
    setShowBubble(false);
    if (messages.length === 0) {
      setMessages([{ role: "ai", text: "Ask about products or deployment." }]);
    }
  };

  const onMic = () => {
    if (!speech.supported) {
      setNotice("Voice input not supported in this browser.");
      window.setTimeout(() => setNotice(null), 3200);
      return;
    }
    openChat();
    speech.toggle();
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

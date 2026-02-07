import { Badge } from "@/components/ui/badge";

const providers = [
  "Anthropic", "Azure-OpenAI", "BaiChuan", "BaiduYiyan", "Bedrock", "Cohere",
  "DeepSeek", "Fish Audio", "Gemini", "Google Cloud", "GPUStack", "Groq",
  "HuggingFace", "Jina", "LocalAI", "LongCat", "LM-Studio", "MiniMax",
  "MinerU", "Mistral", "ModelScope", "Moonshot", "NovitaAI", "NVIDIA",
  "Ollama", "OpenAI", "OpenAI-API-Compatible", "OpenRouter", "Replicate",
  "PPIO", "SILICONFLOW", "StepFun", "Tencent Hunyuan", "Tencent Cloud",
  "TogetherAI", "TokenPony", "Tongyi-Qianwen", "Upstage", "VLLM",
  "VolcEngine", "Voyage AI", "Xinference", "XunFei Spark", "xAI",
  "ZHIPU-AI", "DeepInfra", "302.AI", "CometAPI", "DeerAPI", "Jiekou.AI"
];

// Double the list for seamless loop
const doubled = [...providers, ...providers];

export const IntegrationsMarquee = () => {
  return (
    <section className="py-16 bg-background border-y border-border overflow-hidden">
      <div className="container mx-auto px-6 mb-10">
        <div className="text-center">
          <Badge className="mb-4 px-4 py-2" variant="secondary">
            Ecosystem
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Supported AI Providers & Models
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compatible with <span className="text-cyan-accent font-semibold">50+ providers</span> and{" "}
            <span className="text-cyan-accent font-semibold">400+ models</span> — LLMs, embeddings, rerankers, OCR, TTS, and more.
          </p>
        </div>
      </div>

      {/* Row 1 */}
      <div className="relative mb-4">
        <div className="flex animate-marquee gap-4 w-max">
          {doubled.map((name, i) => (
            <div
              key={`r1-${i}`}
              className="flex-shrink-0 px-5 py-3 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all duration-300"
            >
              <span className="text-sm font-medium text-foreground whitespace-nowrap">{name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - reverse direction */}
      <div className="relative">
        <div className="flex animate-marquee-reverse gap-4 w-max">
          {[...doubled].reverse().map((name, i) => (
            <div
              key={`r2-${i}`}
              className="flex-shrink-0 px-5 py-3 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all duration-300"
            >
              <span className="text-sm font-medium text-foreground whitespace-nowrap">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

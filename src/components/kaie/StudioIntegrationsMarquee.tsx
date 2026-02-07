import { Badge } from "@/components/ui/badge";

const integrations = [
  "Google Search", "Bing", "Perplexity", "DuckDuckGo", "Tavily", "ArXiv", "SearchApi", "Wikipedia",
  "Azure DALL-E", "Stability AI", "Stable Diffusion", "ComfyUI", "Novita AI", "SiliconFlow", "getimg.ai",
  "Jina AI", "Firecrawl", "JSON Process", "Regex", "Spider", "GitHub", "Data Analysis", "ChartGen AI",
  "DevDocs", "Vanna.AI", "WolframAlpha",
  "Slack", "Discord", "DingTalk", "Wecom",
  "AgentQL", "Alipay", "Agora", "Bocha", "Brave Search",
  "DupDub", "E2B", "Fish Audio", "HAP", "Kintone", "OceanBase",
  "OpenRouter", "Oracle DB", "PaddleOCR", "PPIO",
  "Cloudsway", "Weaviate", "Amazon Bedrock", "Azure OpenAI", "Jina",
  "Neo4j", "xParse", "Anspire Search", "Anakin",
];

const doubled = [...integrations, ...integrations];

export const StudioIntegrationsMarquee = () => {
  return (
    <section className="py-16 bg-background border-y border-border overflow-hidden">
      <div className="container mx-auto px-6 mb-10">
        <div className="text-center">
          <Badge className="mb-4 px-4 py-2" variant="secondary">
            Marketplace
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Plugins & Integrations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access <span className="text-cyan-accent font-semibold">50+ plugins</span> across search, image generation, data processing, developer tools, and communication platforms.
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

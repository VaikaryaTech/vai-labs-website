import { useRef, type ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { useScrollMotion } from "@/hooks/use-scroll-motion";
import { cn } from "@/lib/utils";

export type FeatureItem = {
  title: string;
  description: string;
  icon?: LucideIcon;
  /** Small label shown next to the number, e.g. "Most flexible". */
  tag?: string;
};

interface Props {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  items: FeatureItem[];
  /**
   * rows    — numbered list beside a pinned heading (best for 4–8 items)
   * columns — hairline columns under the heading (best for 3–6 short items)
   * steps   — horizontal numbered sequence (best for processes)
   */
  layout?: "rows" | "columns" | "steps";
  muted?: boolean;
  id?: string;
  children?: ReactNode;
}

const Eyebrow = ({ children }: { children: ReactNode }) => (
  <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">{children}</p>
);

/** Editorial replacement for icon-card grids, matching the Home page. */
export const FeatureSection = ({
  eyebrow,
  title,
  subtitle,
  items,
  layout = "rows",
  muted = false,
  id,
  children,
}: Props) => {
  const root = useRef<HTMLElement>(null);
  useScrollMotion(root);

  const heading = (
    <>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className={cn("text-balance text-3xl font-medium leading-tight tracking-[-0.02em] md:text-5xl", eyebrow && "mt-6")}>
        {title}
      </h2>
      {subtitle && <p data-reveal className="mt-5 max-w-md text-lg text-muted-foreground">{subtitle}</p>}
    </>
  );

  return (
    <section ref={root} id={id} data-motion className={cn("border-t border-border", muted && "bg-muted/40")}>
      <div className="container mx-auto px-6 py-24 lg:py-32">
        {layout === "rows" && (
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:sticky lg:top-32 lg:col-span-4 lg:self-start">{heading}</div>
            <ol className="lg:col-span-7 lg:col-start-6">
              {items.map((item, i) => (
                <li key={item.title} data-reveal>
                  <div data-line className="h-px bg-border" />
                  <div className="grid gap-3 py-7 md:grid-cols-12 md:gap-6">
                    <div className="flex items-start gap-4 md:col-span-5">
                      <span className="pt-1 font-mono text-xs text-muted-foreground">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="flex items-center gap-2.5 text-lg font-medium leading-snug tracking-tight">
                          {item.icon && <item.icon className="h-4 w-4 shrink-0 text-primary" />}
                          {item.title}
                        </h3>
                        {item.tag && (
                          <span className="mt-2 inline-block rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                            {item.tag}
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="pl-8 leading-relaxed text-muted-foreground md:col-span-7 md:pl-0">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
              <li aria-hidden="true" data-line className="h-px bg-border" />
            </ol>
          </div>
        )}

        {layout === "columns" && (
          <>
            <div className="max-w-3xl">{heading}</div>
            <div
              className={cn(
                "mt-16 grid gap-x-10 gap-y-14 md:grid-cols-2",
                items.length % 3 === 0 || items.length === 5 ? "lg:grid-cols-3" : "lg:grid-cols-4"
              )}
            >
              {items.map((item, i) => (
                <div key={item.title} data-reveal>
                  <div data-line className="h-px bg-foreground/80" />
                  <div className="mt-6 flex items-center justify-between">
                    <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                    {item.icon && <item.icon className="h-4 w-4 text-primary" />}
                  </div>
                  <h3 className="mt-4 text-lg font-medium leading-snug tracking-tight">{item.title}</h3>
                  {item.tag && (
                    <span className="mt-2 inline-block font-mono text-[10px] uppercase tracking-[0.12em] text-primary">
                      {item.tag}
                    </span>
                  )}
                  <p className="mt-3 leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {layout === "steps" && (
          <>
            <div className="max-w-3xl">{heading}</div>
            <ol className="relative mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              <div aria-hidden="true" data-line className="absolute left-0 right-0 top-[7px] hidden h-px bg-border lg:block" />
              {items.map((item, i) => (
                <li key={item.title} data-reveal className="relative">
                  <span className="relative z-10 block h-3.5 w-3.5 rounded-full border-2 border-primary bg-background" />
                  <p className="mt-6 font-mono text-xs text-muted-foreground">Step {String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-2 text-xl font-medium tracking-tight">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{item.description}</p>
                </li>
              ))}
            </ol>
          </>
        )}

        {children}
      </div>
    </section>
  );
};

export default FeatureSection;

import { cn } from "@/lib/utils";

type Size = "sm" | "md" | "lg" | "hero";

const sizeClasses: Record<Size, string> = {
  sm: "text-sm md:text-base",
  md: "text-lg md:text-xl",
  lg: "text-2xl md:text-3xl",
  hero: "text-inherit",
};

interface KognixWordmarkProps {
  size?: Size;
  className?: string;
  /** Optional product suffix rendered in normal typography (e.g. "Analytics"). */
  suffix?: string;
  suffixClassName?: string;
}

/**
 * KOGNIX brand wordmark — pure text (selectable, screen-reader friendly).
 * Deep navy → indigo → purple → cyan treatment with a distinctive circular "O".
 */
export const KognixWordmark = ({
  size = "md",
  className,
  suffix,
  suffixClassName = "text-glow-cyan",
}: KognixWordmarkProps) => (
  <span className="inline whitespace-nowrap">
    <span className={cn("kognix-brand", sizeClasses[size], className)}>
      K<span className="kognix-o">O</span>GNIX
    </span>
    {suffix ? (
      <>
        {" "}
        <span className={suffixClassName}>{suffix}</span>
      </>
    ) : null}
  </span>
);

export default KognixWordmark;

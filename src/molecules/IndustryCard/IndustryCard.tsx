import * as React from "react";

import { Button } from "@/atoms/Button";
import { cn } from "@/lib/cn";

/**
 * The industry-tile card, reused by two different organism layouts over the
 * same data (HomeContent's sticky full-bleed stack and IndustriesGridA's
 * 3-up grid) — see AUDIT.md "Industries — same data, two different layouts".
 * `layout` captures the one real structural difference between the two.
 */
export interface IndustryCardProps extends React.HTMLAttributes<HTMLElement> {
  name: string;
  description: string;
  image: string;
  /** Background color token, e.g. "var(--banking)". */
  backgroundColor: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  layout?: "stacked" | "grid";
}

export function IndustryCard({
  className,
  name,
  description,
  image,
  backgroundColor,
  ctaLabel = "Learn more",
  onCtaClick,
  layout = "grid",
  style,
  ...props
}: IndustryCardProps) {
  const imageBlock = (
    <div
      className={cn(
        "bg-cover bg-center",
        layout === "stacked"
          ? "min-h-[260px] md:min-h-[420px]"
          : "h-64 transition-transform duration-500 group-hover:scale-105",
      )}
      style={{ backgroundImage: `url(${image})` }}
      role="img"
      aria-label={`${name.replace("\n", " ")} — use case`}
    />
  );

  const content = (
    <div className={cn(layout === "stacked" ? "flex flex-col justify-between p-10 md:p-12" : "p-8")}>
      <h3
        className={cn(
          "font-display whitespace-pre-line",
          layout === "stacked" ? "text-[32px] leading-[1.05] md:text-[40px]" : "text-[28px] leading-[1.05]",
        )}
      >
        {name}
      </h3>
      <div className={layout === "grid" ? "mt-4" : undefined}>
        <p className={cn("max-w-md text-sm leading-relaxed text-foreground/75", layout === "stacked" && "mt-8")}>
          {description}
        </p>
        <Button
          type="button"
          variant="outline"
          size="xs"
          onClick={onCtaClick}
          className={cn("border-foreground/80 hover:bg-foreground hover:text-background", layout === "stacked" ? "mt-8" : "mt-6")}
        >
          {ctaLabel}
        </Button>
      </div>
    </div>
  );

  return (
    <article
      className={cn(
        "overflow-hidden shadow-[0_20px_60px_-30px_rgba(0,0,0,0.35)]",
        layout === "stacked" ? "grid items-stretch rounded-3xl md:grid-cols-2" : "group rounded-3xl transition-transform duration-300 hover:-translate-y-1",
        className,
      )}
      style={{ backgroundColor, ...style }}
      {...props}
    >
      {layout === "stacked" ? (
        <>
          {content}
          {imageBlock}
        </>
      ) : (
        <>
          {imageBlock}
          {content}
        </>
      )}
    </article>
  );
}

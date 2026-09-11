import * as React from "react";

import { Button } from "@/atoms/Button";
import { cn } from "@/lib/cn";

/**
 * Generic, content-agnostic promo card for a sticky overlapping-cards stack
 * (Autopay DS2's "Overlapping cards" base section — see
 * DS2-HARMONIZATION.md #8). Unlike IndustryCard (one CTA, industry-specific
 * data shape), this carries two independent CTAs and no domain-specific
 * fields, so it can host any promotional pairing (e.g. "Buy now" / "See
 * more"), not just an industry use case.
 */
export interface OverlapCardCta {
  label: string;
  onClick?: () => void;
}

export interface OverlapCardProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  description: string;
  image: string;
  /** Background color, e.g. a CSS color literal or "var(--retail)". Caller-supplied, same convention as IndustryCard. */
  backgroundColor: string;
  primaryCta: OverlapCardCta;
  secondaryCta: OverlapCardCta;
}

export function OverlapCard({
  className,
  title,
  description,
  image,
  backgroundColor,
  primaryCta,
  secondaryCta,
  style,
  ...props
}: OverlapCardProps) {
  return (
    <article
      className={cn(
        "grid items-stretch overflow-hidden rounded-3xl shadow-[0_20px_60px_-30px_rgba(0,0,0,0.35)] md:grid-cols-2",
        className,
      )}
      style={{ backgroundColor, ...style }}
      {...props}
    >
      <div className="flex flex-col justify-between p-10 md:p-12">
        <h3 className="font-display text-h3 whitespace-pre-line">{title}</h3>
        <div className="mt-8">
          <p className="max-w-md text-sm leading-relaxed text-foreground/75">{description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button type="button" variant="solid" size="xs" onClick={primaryCta.onClick}>
              {primaryCta.label}
            </Button>
            <Button
              type="button"
              variant="outline"
              size="xs"
              className="border-foreground/80 hover:bg-foreground hover:text-background"
              onClick={secondaryCta.onClick}
            >
              {secondaryCta.label}
            </Button>
          </div>
        </div>
      </div>
      <div
        className="min-h-[260px] bg-cover bg-center md:min-h-[420px]"
        style={{ backgroundImage: `url(${image})` }}
        role="img"
        aria-label={`${title.replace("\n", " ")} — promo`}
      />
    </article>
  );
}

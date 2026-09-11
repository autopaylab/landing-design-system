import * as React from "react";

import { Button } from "@/atoms/Button";
import { cn } from "@/lib/cn";

/**
 * Merges the source's two hero-overlay variants ("stacked": gradient
 * overlay, single-column content, eyebrow-less; "split": flat overlay,
 * 2-col heading/CTA) into one organism with a `layout` prop — see AUDIT.md
 * dedup decision for "Hero image-overlay". Both variants in the source
 * belong to a second, unrelated product line; that copy is not reused
 * here — all content is passed in via props, see AUDIT.md #1.
 */
export interface HeroImageOverlayProps {
  layout: "stacked" | "split";
  image: string;
  title: React.ReactNode;
  /** Only rendered in the "stacked" layout, matching the source (the "stacked" variant has a subtitle paragraph, "split" does not). */
  subtitle?: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export function HeroImageOverlay({ layout, image, title, subtitle, primaryCta, secondaryCta }: HeroImageOverlayProps) {
  const ctas = (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Button asChild variant="lime" size="lg">
        <a href={primaryCta.href}>{primaryCta.label}</a>
      </Button>
      <Button asChild variant="outline-inverse" size="lg">
        <a href={secondaryCta.href}>{secondaryCta.label}</a>
      </Button>
    </div>
  );

  return (
    <div className="px-4 md:px-8">
      <section className="relative mx-auto w-full max-w-[1600px] overflow-hidden rounded-3xl bg-foreground">
        <img src={image} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 size-full object-cover" />
        <div
          aria-hidden="true"
          className={cn("absolute inset-0", layout === "stacked" ? "bg-gradient-to-r from-foreground via-foreground/75 to-foreground/10" : "bg-foreground/50")}
        />
        {layout === "stacked" ? (
          <div className="relative px-6 py-20 text-background sm:px-10 md:px-16 md:py-32 lg:py-40">
            <div className="max-w-3xl">
              <h2 className="font-display text-h1">{title}</h2>
              {subtitle && <p className="mt-6 max-w-2xl text-base text-background/80 md:text-xl">{subtitle}</p>}
              <div className="mt-9">{ctas}</div>
            </div>
          </div>
        ) : (
          <div className="relative px-6 py-20 sm:px-10 md:px-14 md:py-28">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <h2 className="max-w-xl font-display text-h2 text-background">{title}</h2>
              <div className="md:justify-self-end">{ctas}</div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

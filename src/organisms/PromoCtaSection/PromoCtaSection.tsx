import * as React from "react";

import { Button } from "@/atoms/Button";
import { Logo } from "@/atoms/Logo";

/**
 * Originally a promotional footer CTA from a second, unrelated product line
 * found in the source (image background + two CTAs, plus a nested lime
 * promo card) — see AUDIT.md #1 for the product-mixing flag. No copy from
 * that product line is reused here; all content is passed in via props.
 */
export interface PromoCtaSectionProps {
  backgroundImage: string;
  heading: React.ReactNode;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string; external?: boolean };
  logoSrc: string;
  logoAlt: string;
  promoText: React.ReactNode;
  copyrightText: string;
  privacyLabel: string;
  privacyHref: string;
}

export function PromoCtaSection({
  backgroundImage,
  heading,
  primaryCta,
  secondaryCta,
  logoSrc,
  logoAlt,
  promoText,
  copyrightText,
  privacyLabel,
  privacyHref,
}: PromoCtaSectionProps) {
  return (
    <section className="bg-surface px-4 pb-6 md:px-8 md:pb-8">
      <div className="relative mx-auto w-full max-w-[1600px] overflow-hidden rounded-3xl">
        <img src={backgroundImage} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 size-full object-cover" />
        <div aria-hidden="true" className="absolute inset-0 bg-ink/40" />

        <div className="relative px-6 pt-16 sm:px-10 md:px-14 md:pt-24">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <h2 className="max-w-xl font-display text-h2 text-background">{heading}</h2>
            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <Button asChild variant="lime" className="h-12 px-7 text-base hover:scale-100 hover:bg-lime/90">
                <a href={primaryCta.href}>{primaryCta.label}</a>
              </Button>
              <Button
                asChild
                variant="outline-inverse"
                className="h-12 border-background/30 px-7 text-base"
              >
                <a href={secondaryCta.href} target={secondaryCta.external ? "_blank" : undefined} rel={secondaryCta.external ? "noopener noreferrer" : undefined}>
                  {secondaryCta.label}
                </a>
              </Button>
            </div>
          </div>

          <div className="mt-14 rounded-3xl bg-lime p-8 text-lime-foreground md:mt-24 md:p-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
              <Logo src={logoSrc} alt={logoAlt} size="sm" className="md:h-8" />
              <p className="font-display text-2xl leading-tight md:text-3xl">{promoText}</p>
            </div>
            <div className="mt-8 flex flex-col justify-between gap-4 border-t border-lime-foreground/15 pt-6 sm:flex-row sm:items-center">
              <p className="text-sm text-lime-foreground/70">{copyrightText}</p>
              <a
                href={privacyHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-lime-foreground/70 underline underline-offset-2 hover:text-lime-foreground"
              >
                {privacyLabel}
              </a>
            </div>
          </div>
          <div className="h-6 md:h-8" />
        </div>
      </div>
    </section>
  );
}

import * as React from "react";
import { Check } from "lucide-react";

import { Badge } from "@/atoms/Badge";
import { Button, type ButtonProps } from "@/atoms/Button";
import { cn } from "@/lib/cn";

export interface PricingTierProps {
  name: string;
  /** The headline price, e.g. "29,99 zł", "1,19% + 0,34 zł", or "Dopasowany" for a custom/contact-us tier. */
  price: string;
  /** Text after the price, e.g. "/m-c". */
  priceSuffix?: string;
  /** Small print under the price, e.g. "przy płatności rocznej". */
  priceNote?: string;
  description: string;
  features: string[];
  ctaLabel: string;
  onCtaClick?: () => void;
  ctaVariant?: ButtonProps["variant"];
  /** Highlights this tier as the recommended one (border, shadow, ribbon badge). */
  featured?: boolean;
  /** Ribbon text shown above a featured tier, e.g. "NAJPOPULARNIEJSZY". */
  badgeLabel?: string;
}

/**
 * One card in a `PricingSection` tiered-pricing table. New pattern, not an
 * extraction — see AUDIT.md #17/#19: real autopay.pl landing pages
 * (e.g. /lp/platnosci-online-1) have a 3-tier pricing table with no prior
 * equivalent anywhere in this package.
 */
export function PricingTier({
  name,
  price,
  priceSuffix,
  priceNote,
  description,
  features,
  ctaLabel,
  onCtaClick,
  ctaVariant,
  featured = false,
  badgeLabel,
}: PricingTierProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-3xl border bg-card p-8",
        featured ? "border-primary shadow-lg" : "border-border",
      )}
    >
      {featured && badgeLabel ? (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-primary-foreground">
          {badgeLabel}
        </Badge>
      ) : null}

      <h3 className="font-display text-h5">{name}</h3>

      <div className="mt-4 flex items-baseline gap-1">
        <span className="font-display text-h3">{price}</span>
        {priceSuffix ? <span className="text-muted-foreground">{priceSuffix}</span> : null}
      </div>
      {priceNote ? <p className="mt-1 text-sm text-muted-foreground">{priceNote}</p> : null}

      <p className="mt-4 text-sm text-muted-foreground">{description}</p>

      <ul className="mt-6 flex-1 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button type="button" variant={ctaVariant ?? (featured ? "lime" : "outline")} className="mt-8 w-full" onClick={onCtaClick}>
        {ctaLabel}
      </Button>
    </div>
  );
}

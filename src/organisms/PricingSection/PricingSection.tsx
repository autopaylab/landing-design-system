import * as React from "react";

import { PricingTier, type PricingTierProps } from "@/molecules/PricingTier";

export interface PricingFootnote {
  value: string;
  label: string;
}

/**
 * A tiered pricing table. New pattern, not an extraction — see
 * AUDIT.md #17/#19: real autopay.pl landing pages (e.g.
 * /lp/platnosci-online-1) have this exact shape (3 tiers, one featured,
 * small-print footnotes below) with no prior equivalent in this package.
 */
export interface PricingSectionProps {
  eyebrow?: string;
  heading: React.ReactNode;
  tiers: PricingTierProps[];
  /** Small-print grid below the tiers, e.g. "49 zł" / "aktywacja", "0 zł" / "zwroty". */
  footnotes?: PricingFootnote[];
}

export function PricingSection({ eyebrow, heading, tiers, footnotes }: PricingSectionProps) {
  return (
    <section className="mx-auto mt-16 max-w-[1280px] px-6 md:mt-32">
      <div className="text-center">
        {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">{eyebrow}</p> : null}
        <h2 className="mt-4 font-display text-h2">{heading}</h2>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {tiers.map((tier) => (
          <PricingTier key={tier.name} {...tier} />
        ))}
      </div>

      {footnotes && footnotes.length > 0 ? (
        <div className="mt-12 grid grid-cols-2 gap-6 text-center sm:grid-cols-4">
          {footnotes.map((footnote) => (
            <div key={footnote.label}>
              <div className="font-display text-h5">{footnote.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{footnote.label}</div>
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}

import * as React from "react";

import { Badge } from "@/atoms/Badge";
import { OverlapCard, type OverlapCardCta } from "@/molecules/OverlapCard";

export interface OverlapCardEntry {
  title: string;
  description: string;
  image: string;
  backgroundColor: string;
  primaryCta: OverlapCardCta;
  secondaryCta: OverlapCardCta;
}

/**
 * Autopay DS2's "Overlapping cards" base section (see
 * DS2-HARMONIZATION.md #8): a sticky, scroll-activated card stack, generic
 * enough to host any promotional pairing. The sticky mechanism mirrors
 * IndustriesStackedSection's, but the data shape is content-agnostic (no
 * "industry" fields) and each card carries two CTAs, matching DS2's own
 * "Buy now" / "See more" example rather than IndustryCard's single CTA.
 */
export interface OverlappingCardsSectionProps {
  eyebrow: string;
  heading: React.ReactNode;
  cards: OverlapCardEntry[];
}

export function OverlappingCardsSection({ eyebrow, heading, cards }: OverlappingCardsSectionProps) {
  return (
    <section className="mt-16 w-full bg-surface md:mt-32">
      <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-10 md:py-20">
        <div className="text-center">
          <Badge variant="eyebrow">{eyebrow}</Badge>
          <h2 className="mt-6 font-display text-h2">{heading}</h2>
        </div>
        <div className="mt-12">
          {cards.map((c, i) => (
            <OverlapCard
              key={c.title}
              title={c.title}
              description={c.description}
              image={c.image}
              backgroundColor={c.backgroundColor}
              primaryCta={c.primaryCta}
              secondaryCta={c.secondaryCta}
              className="sticky"
              style={{
                top: `calc(6rem + ${i * 1.25}rem)`,
                marginBottom: i === cards.length - 1 ? 0 : "2rem",
                zIndex: i + 1,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

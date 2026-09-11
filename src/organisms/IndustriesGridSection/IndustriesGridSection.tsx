import * as React from "react";

import { Badge } from "@/atoms/Badge";
import { IndustryCard } from "@/molecules/IndustryCard";
import type { IndustryEntry } from "@/organisms/IndustriesStackedSection";

/**
 * IndustriesGridA.tsx: 3-up grid of industry cards over the same shape of
 * data as IndustriesStackedSection. See AUDIT.md dedup note — kept as a
 * separate organism because the layout genuinely differs, flagged as a
 * likely A/B leftover to resolve in the harmonization pass.
 */
export interface IndustriesGridSectionProps {
  eyebrow: string;
  heading: React.ReactNode;
  industries: IndustryEntry[];
  ctaLabel?: string;
  onCtaClick?: (industry: IndustryEntry) => void;
}

export function IndustriesGridSection({ eyebrow, heading, industries, ctaLabel, onCtaClick }: IndustriesGridSectionProps) {
  return (
    <section className="mt-16 w-full bg-surface md:mt-32">
      <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-10 md:py-20">
        <div className="text-center">
          <Badge variant="eyebrow">{eyebrow}</Badge>
          <h2 className="mt-6 font-display text-h2">{heading}</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {industries.map((ind) => (
            <IndustryCard
              key={ind.name}
              layout="grid"
              name={ind.name}
              description={ind.description}
              image={ind.image}
              backgroundColor={ind.backgroundColor}
              ctaLabel={ctaLabel}
              onCtaClick={() => onCtaClick?.(ind)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

import * as React from "react";

import { Badge } from "@/atoms/Badge";
import { IndustryCard } from "@/molecules/IndustryCard";

export interface IndustryEntry {
  name: string;
  backgroundColor: string;
  image: string;
  description: string;
}

/**
 * HomeContent.tsx sticky full-bleed industries stack (lines 390-427).
 * See AUDIT.md "Industries — same data, two different layouts": this and
 * IndustriesGridSection render the same kind of data via two different,
 * both-real layouts — flagged as a likely unresolved A/B leftover.
 */
export interface IndustriesStackedSectionProps {
  eyebrow: string;
  heading: React.ReactNode;
  industries: IndustryEntry[];
  ctaLabel?: string;
  onCtaClick?: (industry: IndustryEntry) => void;
}

export function IndustriesStackedSection({ eyebrow, heading, industries, ctaLabel, onCtaClick }: IndustriesStackedSectionProps) {
  return (
    <section className="mt-32 w-full bg-surface">
      <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-10 md:py-20">
        <div className="text-center">
          <Badge variant="eyebrow">{eyebrow}</Badge>
          <h2 className="mt-6 font-display text-h2">{heading}</h2>
        </div>
        <div className="mt-12">
          {industries.map((ind, i) => (
            <IndustryCard
              key={ind.name}
              layout="stacked"
              name={ind.name}
              description={ind.description}
              image={ind.image}
              backgroundColor={ind.backgroundColor}
              ctaLabel={ctaLabel}
              onCtaClick={() => onCtaClick?.(ind)}
              className="sticky shadow-[0_20px_60px_-30px_rgba(0,0,0,0.35)]"
              style={{
                top: `calc(6rem + ${i * 1.25}rem)`,
                marginBottom: i === industries.length - 1 ? 0 : "2rem",
                zIndex: i + 1,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

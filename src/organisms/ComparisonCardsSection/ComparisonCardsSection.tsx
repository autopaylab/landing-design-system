import * as React from "react";
import { Check, X } from "lucide-react";

import { cn } from "@/lib/cn";

export interface ComparisonCriterion {
  label: string;
  description: string;
  /** Whether this criterion counts as a positive (check) or negative (cross) for this card. */
  positive: boolean;
}

export interface ComparisonCard {
  name: string;
  criteria: ComparisonCriterion[];
  /** The "us" card — gradient background (reusing StatsSection's brand-blue gradient) instead of plain. */
  highlighted?: boolean;
}

/**
 * An "us vs. them" comparison — two or more named cards, each listing the
 * *same* set of criteria with a per-card check/cross verdict. New pattern,
 * not an extraction — see AUDIT.md #17/#27: kalendarz.autopay.pl's "Co
 * wyróżnia Kalendarz Autopay?" (Marketplace, all crosses, vs. Autopay
 * Calendar, all checks — same 5 criteria) has no equivalent anywhere in
 * this package. Distinct from `RequirementsChecklistSection` (one
 * dark-background list, every row a checkmark, no per-card ✗ state) and
 * from `PricingSection` (tiered plans, not a same-criteria comparison).
 */
export interface ComparisonCardsSectionProps {
  eyebrow?: string;
  heading: React.ReactNode;
  cards: ComparisonCard[];
}

export function ComparisonCardsSection({ eyebrow, heading, cards }: ComparisonCardsSectionProps) {
  return (
    <section className="mx-auto mt-16 max-w-[1280px] px-6 md:mt-32">
      {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">{eyebrow}</p> : null}
      <h2 className="mt-4 font-display text-h2">{heading}</h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {cards.map((card) => (
          <div
            key={card.name}
            className={cn(
              "rounded-3xl p-8",
              card.highlighted
                ? "bg-gradient-to-br from-[oklch(0.93_0.05_240)] via-[oklch(0.88_0.09_240)] to-[oklch(0.82_0.13_240)]"
                : "bg-muted",
            )}
          >
            <h3 className="font-display text-h4">{card.name}</h3>
            <ul className="mt-6 space-y-4">
              {card.criteria.map((criterion) => (
                <li key={criterion.label} className="flex items-start gap-3">
                  <span
                    className={cn(
                      "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                      criterion.positive ? "bg-lime text-lime-foreground" : "bg-background/60 text-muted-foreground",
                    )}
                  >
                    {criterion.positive ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">{criterion.label}</span>
                    <span className="text-sm text-muted-foreground">{criterion.description}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

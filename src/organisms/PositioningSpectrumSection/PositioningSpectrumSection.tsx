import * as React from "react";

import { cn } from "@/lib/cn";

export interface PositioningOption {
  eyebrow: string;
  title: string;
  description: string;
  /** The option matching the reader's current position — gets a border highlight and a "you are here" pill. */
  current?: boolean;
}

/**
 * A 3-(or more)-way "where do you fit" comparison, one option highlighted
 * as the reader's current position. New pattern, not an extraction — see
 * AUDIT.md #17/#23: autopay.pl/lp/payfac-08's ISO / PayFac / Acquirer
 * spectrum (with a "Jesteś tutaj" pill on the middle option) has no
 * equivalent anywhere in this package.
 */
export interface PositioningSpectrumSectionProps {
  eyebrow?: string;
  heading: React.ReactNode;
  options: PositioningOption[];
  /** Label on the highlighted option's pill, e.g. "Jesteś tutaj". Defaults to "You are here". */
  currentLabel?: string;
}

export function PositioningSpectrumSection({
  eyebrow,
  heading,
  options,
  currentLabel = "You are here",
}: PositioningSpectrumSectionProps) {
  return (
    <section className="mx-auto mt-16 max-w-[1280px] px-6 md:mt-32">
      {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.1em] text-primary">— {eyebrow}</p> : null}
      <h2 className="mt-4 max-w-2xl font-display text-h3">{heading}</h2>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {options.map((option) => (
          <div
            key={option.title}
            className={cn(
              "relative rounded-3xl border p-8",
              option.current ? "border-primary shadow-lg" : "border-border",
            )}
          >
            {option.current ? (
              <span className="absolute -top-3 left-8 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground">
                {currentLabel} →
              </span>
            ) : null}
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">{option.eyebrow}</p>
            <h3 className="mt-2 font-display text-h5">{option.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{option.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

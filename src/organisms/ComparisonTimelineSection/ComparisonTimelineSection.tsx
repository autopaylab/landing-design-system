import * as React from "react";

import { cn } from "@/lib/cn";

export interface ComparisonPath {
  name: string;
  /** A short duration label shown next to the name, e.g. "kilkanaście miesięcy". */
  duration: string;
  steps: string[];
  caption: string;
  /** The faster/recommended path — step pills use the brand accent instead of a plain dark fill. */
  highlighted?: boolean;
}

/**
 * Two (or more) step-by-step paths compared side by side, each with its own
 * duration badge. New pattern, not an extraction — see AUDIT.md #17/#22:
 * autopay.pl/lp/payfac-08's "Dwie drogi do startu" (principal membership,
 * kilkanaście miesięcy, 5 steps vs. PayFac z Autopay, kilka miesięcy,
 * 5 steps) has no equivalent anywhere in this package — `FourStepsSection`
 * renders one linear sequence, not two compared against each other.
 */
export interface ComparisonTimelineSectionProps {
  eyebrow?: string;
  heading: React.ReactNode;
  /** A short standout line above the paths, e.g. "60–80% szybciej niż principal membership". */
  highlight?: string;
  paths: ComparisonPath[];
}

export function ComparisonTimelineSection({ eyebrow, heading, highlight, paths }: ComparisonTimelineSectionProps) {
  return (
    <section className="mx-auto mt-16 max-w-[1280px] px-6 md:mt-32">
      <div className="rounded-3xl border border-border p-6 md:p-10">
        {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.1em] text-primary">— {eyebrow}</p> : null}
        <h2 className="mt-4 font-display text-h3">{heading}</h2>
        {highlight ? <p className="mt-3 font-semibold text-primary">{highlight}</p> : null}

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {paths.map((path) => (
            <div key={path.name}>
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-display text-h5">{path.name}</span>
                <span className="rounded-full bg-muted px-4 py-1.5 text-sm text-muted-foreground">{path.duration}</span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {path.steps.map((step) => (
                  <div
                    key={step}
                    className={cn(
                      "rounded-xl px-3 py-4 text-center text-sm font-medium",
                      path.highlighted ? "bg-lime text-lime-foreground" : "bg-primary text-primary-foreground",
                    )}
                  >
                    {step}
                  </div>
                ))}
              </div>

              <p className="mt-4 text-sm text-muted-foreground">{path.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

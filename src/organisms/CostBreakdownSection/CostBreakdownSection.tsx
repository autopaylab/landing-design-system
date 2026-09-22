import * as React from "react";

import { Link } from "@/atoms/Link";

export interface CostComponent {
  title: string;
  description: string;
  /** Optional trailing link, e.g. "uzgodniona z Tobą →". */
  linkLabel?: string;
  linkHref?: string;
}

/**
 * An additive cost-breakdown "formula" — boxes joined by "+", each one
 * component of the total price. New pattern, not an extraction — see
 * AUDIT.md #17/#25: autopay.pl/lp/payfac-08's "Przejrzysty cennik IC++"
 * (Interchange + card-scheme fees + Autopay margin) has no equivalent
 * anywhere in this package — `PricingSection` is tiered plans, not an
 * additive formula.
 */
export interface CostBreakdownSectionProps {
  eyebrow?: string;
  heading: React.ReactNode;
  description?: string;
  components: CostComponent[];
}

export function CostBreakdownSection({ eyebrow, heading, description, components }: CostBreakdownSectionProps) {
  return (
    <section className="mx-auto mt-16 max-w-[1280px] px-6 md:mt-32">
      {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.1em] text-primary">— {eyebrow}</p> : null}
      <h2 className="mt-4 font-display text-h3">{heading}</h2>
      {description ? <p className="mt-4 max-w-2xl text-muted-foreground">{description}</p> : null}

      <div className="mt-8 flex flex-col items-stretch gap-4 md:flex-row md:items-center">
        {components.map((component, i) => (
          <React.Fragment key={component.title}>
            {i > 0 ? <span className="self-center font-display text-h4 text-muted-foreground">+</span> : null}
            <div className="flex-1 rounded-3xl border border-border bg-card p-6">
              <h3 className="font-display text-h6">{component.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{component.description}</p>
              {component.linkLabel ? (
                <Link variant="underline" href={component.linkHref ?? "#"} className="mt-3 inline-block text-sm">
                  {component.linkLabel}
                </Link>
              ) : null}
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

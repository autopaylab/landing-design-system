import * as React from "react";

export interface AudienceScenario {
  title: string;
  description: string;
}

/**
 * A "which scenario fits you" segment picker — plain cards, no icon/image/
 * CTA per card (unlike IndustriesGridSection, which assumes all three). New
 * pattern, not an extraction — see AUDIT.md #17/#20: autopay.pl's
 * /lp/platnosci-online-1 ("Dla kogo jest Autopay" — masz już sklep /
 * startujesz z nowym sklepem / skalujesz biznes) has this exact shape with
 * no prior equivalent in this package.
 */
export interface AudienceScenariosSectionProps {
  eyebrow?: string;
  heading: React.ReactNode;
  description?: string;
  scenarios: AudienceScenario[];
}

export function AudienceScenariosSection({ eyebrow, heading, description, scenarios }: AudienceScenariosSectionProps) {
  return (
    <section className="mx-auto mt-16 max-w-[1280px] px-6 md:mt-32">
      <div className="text-center">
        {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">{eyebrow}</p> : null}
        <h2 className="mt-4 font-display text-h2">{heading}</h2>
        {description ? <p className="mx-auto mt-6 max-w-2xl text-muted-foreground md:text-[17px]">{description}</p> : null}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {scenarios.map((scenario) => (
          <div key={scenario.title} className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.08em] text-primary">{scenario.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{scenario.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

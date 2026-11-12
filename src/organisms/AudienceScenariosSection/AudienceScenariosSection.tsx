import * as React from "react";
import { pageContainer } from "@/lib/page-container";

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
 *
 * `tone` is new (not extracted): a consuming landing page (paytalkpl) needs a
 * non-white section mid-page, so it does not show more than two white
 * sections in a row, and uses these cards for its programme benefits.
 * "tinted" reuses PlatformFeatureShowcase's light blue and FourStepsSection's
 * rounded container and padding; "dark" reuses RequirementsChecklistSection's
 * dark surface and translucent rows. All text meets WCAG AA on its surface.
 */
export interface AudienceScenariosSectionProps {
  eyebrow?: string;
  heading: React.ReactNode;
  description?: string;
  scenarios: AudienceScenario[];
  /**
   * "default" (as built): no surface, white cards. "tinted": light blue rounded surface, white cards.
   * "dark": dark rounded surface, translucent light cards, light text.
   */
  tone?: "default" | "tinted" | "dark";
}

const SURFACE = {
  tinted: "rounded-3xl bg-[oklch(0.97_0.02_240)] px-6 py-10 md:px-14 md:py-14",
  dark: "rounded-3xl bg-foreground px-6 py-10 text-background md:px-14 md:py-14",
} as const;

export function AudienceScenariosSection({ eyebrow, heading, description, scenarios, tone = "default" }: AudienceScenariosSectionProps) {
  const isDark = tone === "dark";
  const mutedText = isDark ? "text-background/70" : "text-muted-foreground";
  const content = (
    <>
      <div className="text-center">
        {eyebrow ? <p className={`text-sm font-semibold uppercase tracking-[0.14em] ${mutedText}`}>{eyebrow}</p> : null}
        <h2 className="mt-4 font-display text-h2">{heading}</h2>
        {description ? <p className={`mx-auto mt-6 max-w-2xl ${mutedText} md:text-[17px]`}>{description}</p> : null}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {scenarios.map((scenario) => (
          <div
            key={scenario.title}
            className={
              isDark ? "rounded-3xl border border-background/10 bg-background/10 p-8" : "rounded-3xl border border-border bg-card p-8 shadow-sm"
            }
          >
            <h3 className={`font-display text-sm font-semibold uppercase tracking-[0.08em] ${isDark ? "text-lime" : "text-primary"}`}>
              {scenario.title}
            </h3>
            <p className={`mt-4 text-sm leading-relaxed ${mutedText}`}>{scenario.description}</p>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <section className={`${pageContainer} mt-16 md:mt-32`}>
      {tone === "default" ? content : <div className={SURFACE[tone]}>{content}</div>}
    </section>
  );
}

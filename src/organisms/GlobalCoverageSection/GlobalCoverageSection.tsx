import * as React from "react";

import { Badge } from "@/atoms/Badge";
import { IconFeatureItem, type IconFeatureItemProps } from "@/molecules/IconFeatureItem";

export interface FloatingPaymentBadge {
  label: string;
  top: string;
  right: string;
  className: string;
}

/** HomeContent.tsx Global Coverage section (lines 270-316), incl. the decorative floating-badge graphic. */
export interface GlobalCoverageSectionProps {
  eyebrow: string;
  heading: React.ReactNode;
  features: Array<Pick<IconFeatureItemProps, "icon" | "title" | "description" | "iconClassName">>;
  floatingBadges: FloatingPaymentBadge[];
}

export function GlobalCoverageSection({ eyebrow, heading, features, floatingBadges }: GlobalCoverageSectionProps) {
  return (
    <section className="mx-auto mt-16 max-w-[1280px] px-6 md:mt-32">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <Badge variant="eyebrow">{eyebrow}</Badge>
          <h2 className="mt-6 font-display text-h2">{heading}</h2>
          <ul className="mt-12 space-y-8">
            {features.map((f) => (
              // No h3 sits between this list and the section's h2 above (unlike
              // SingleIntegrationSection, which has one), so these need to be h3
              // themselves or heading levels skip -- see AUDIT.md section 6.
              <IconFeatureItem key={f.title} headingLevel="h3" {...f} />
            ))}
          </ul>
        </div>
        <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-muted to-background">
          <div className="absolute right-8 top-8 grid h-20 w-20 place-items-center rounded-full bg-card shadow-lg">
            <div className="h-9 w-6 rounded-t-full bg-[oklch(0.6_0.22_255)]" />
          </div>
          {floatingBadges.map((b) => (
            <div
              key={b.label}
              className={`absolute grid h-14 w-14 place-items-center rounded-full text-xs font-bold shadow-lg ${b.className}`}
              style={{ top: b.top, right: b.right }}
            >
              {b.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

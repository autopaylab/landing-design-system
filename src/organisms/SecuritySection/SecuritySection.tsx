import * as React from "react";

import { Badge } from "@/atoms/Badge";
import { IconCard, type IconCardProps } from "@/molecules/IconCard";

/** HomeContent.tsx Security section (lines 237-267). */
export interface SecuritySectionProps {
  eyebrow: string;
  heading: React.ReactNode;
  description: string;
  schemeBadges: string[];
  cards: Array<Pick<IconCardProps, "icon" | "title" | "bullets" | "color">>;
}

export function SecuritySection({ eyebrow, heading, description, schemeBadges, cards }: SecuritySectionProps) {
  return (
    <section id="security" className="mx-auto mt-32 max-w-[1280px] px-6">
      <div className="text-center">
        <Badge variant="eyebrow">{eyebrow}</Badge>
        <h2 className="mt-6 font-display text-h2">{heading}</h2>
        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground md:text-[17px]">{description}</p>
      </div>
      <div className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-70 grayscale">
        {schemeBadges.map((label) => (
          <span key={label} className="text-sm font-bold text-foreground/60">
            {label}
          </span>
        ))}
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {cards.map((c) => (
          <IconCard key={c.title} {...c} />
        ))}
      </div>
    </section>
  );
}

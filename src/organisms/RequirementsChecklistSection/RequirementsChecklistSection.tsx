import * as React from "react";
import { Check } from "lucide-react";

export interface RequirementItem {
  label: string;
  /** Marks this row with a trailing "*" for a footnote reference. */
  hasFootnote?: boolean;
}

/**
 * A numbered checklist on a dark background, each row ending in a
 * checkmark — distinct from `BulletItem`'s plain light-background bullet.
 * New pattern, not an extraction — see AUDIT.md #17/#24:
 * autopay.pl/lp/payfac-08's "Czego to naprawdę wymaga" (6 numbered
 * responsibility areas, each with a checkmark) has no equivalent anywhere
 * in this package.
 */
export interface RequirementsChecklistSectionProps {
  eyebrow?: string;
  heading: React.ReactNode;
  description?: string;
  items: RequirementItem[];
  /** A closing line below the list, e.g. "Każdy obszar wymaga własnych zespołów...". */
  caption?: string;
  /** The footnote text referenced by items with `hasFootnote`. */
  footnote?: React.ReactNode;
}

export function RequirementsChecklistSection({
  eyebrow,
  heading,
  description,
  items,
  caption,
  footnote,
}: RequirementsChecklistSectionProps) {
  return (
    <section className="mx-auto mt-16 max-w-[1280px] px-6 md:mt-32">
      {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.1em] text-primary">— {eyebrow}</p> : null}
      <h2 className="mt-4 max-w-2xl font-display text-h3">{heading}</h2>
      {description ? <p className="mt-4 max-w-2xl text-muted-foreground">{description}</p> : null}

      <div className="mt-8 space-y-3 rounded-3xl bg-foreground p-6 md:p-8">
        {items.map((item, i) => (
          <div key={item.label} className="flex items-center justify-between gap-4 rounded-2xl bg-background/10 px-5 py-4">
            <span className="flex items-center gap-4 text-sm text-background">
              <span className="font-mono text-xs text-background/60">{String(i + 1).padStart(2, "0")}</span>
              {item.label}
              {item.hasFootnote ? <span className="text-background/60">*</span> : null}
            </span>
            <Check className="h-4 w-4 shrink-0 text-lime" />
          </div>
        ))}

        {caption ? <p className="pt-3 text-sm text-background/70">{caption}</p> : null}
        {footnote ? <p className="border-t border-background/20 pt-4 text-xs text-background/60">{footnote}</p> : null}
      </div>
    </section>
  );
}

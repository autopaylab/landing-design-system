import * as React from "react";
import { pageContainer } from "@/lib/page-container";

export interface TrustedByLogo {
  src: string;
  alt: string;
  width: number;
  /**
   * Display height in px, overriding the row default (32px, 40px from md).
   * New, not extracted: stacked marks (a crest above a name) need more
   * height than wide wordmarks to stay legible in the same row.
   */
  height?: number;
}

/**
 * TrustedBySection.tsx: grayscale client-logo strip.
 *
 * `description` and `logoTone` are new (not extracted): a consuming landing
 * page (paytalkpl) introduces a small set of named partners with a short
 * paragraph, and shows their marks in full colour, as their owners supplied
 * them, rather than as a muted wall of client logos.
 *
 * `layout` is new (not extracted): with only two partner logos, the stacked
 * strip leaves paytalkpl's desktop section tall and mostly empty, so "split"
 * puts the heading and description beside the logos from md up, two columns
 * like SingleIntegrationSection. Below md it renders as "stacked".
 */
export interface TrustedByLogosProps {
  heading: string;
  /** Short text under the heading. */
  description?: React.ReactNode;
  logos: TrustedByLogo[];
  /** "muted" (default, as extracted): grayscale at 65% opacity. "original": logos as supplied. */
  logoTone?: "muted" | "original";
  /**
   * "stacked" (default, as extracted): heading, description and logo row centred, one under another.
   * "split": from md up, heading and description left-aligned in the left column, logos in a row
   * at the end of the right column, vertically centred against the text. The row still wraps when
   * the column is too narrow for every logo (at md with many or very wide logos) instead of overflowing.
   */
  layout?: "stacked" | "split";
}

const MUTED_FILTER = "grayscale(100%) opacity(0.65)";

export function TrustedByLogos({ heading, description, logos, logoTone = "muted", layout = "stacked" }: TrustedByLogosProps) {
  const logoImages = logos.map((l) => (
    <img
      key={l.alt}
      src={l.src}
      alt={l.alt}
      className={l.height ? "w-auto object-contain" : "h-8 w-auto object-contain md:h-10"}
      style={{
        filter: logoTone === "muted" ? MUTED_FILTER : undefined,
        maxWidth: l.width,
        height: l.height,
      }}
    />
  ));

  if (layout === "split") {
    // Below md every class here matches "stacked"; the md: overrides only add the two columns.
    return (
      <section id="trusted-by" className={`${pageContainer} mt-16 md:mt-32 md:grid md:grid-cols-2 md:items-center md:gap-10`}>
        <div>
          <h2 className="text-center font-display text-h3 md:text-left">{heading}</h2>
          {description ? (
            <p className="mx-auto mt-6 max-w-2xl text-center text-muted-foreground md:mx-0 md:text-left md:text-[17px]">{description}</p>
          ) : null}
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-16 gap-y-10 md:mt-0 md:justify-end">
          {logoImages}
        </div>
      </section>
    );
  }

  return (
    <section id="trusted-by" className={`${pageContainer} mt-16 md:mt-32`}>
      <h2 className="text-center font-display text-h3">{heading}</h2>
      {description ? <p className="mx-auto mt-6 max-w-2xl text-center text-muted-foreground md:text-[17px]">{description}</p> : null}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-x-16 gap-y-10">{logoImages}</div>
    </section>
  );
}

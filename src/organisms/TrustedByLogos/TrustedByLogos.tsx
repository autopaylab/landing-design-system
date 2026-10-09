import * as React from "react";

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
 */
export interface TrustedByLogosProps {
  heading: string;
  /** Short text under the heading. */
  description?: React.ReactNode;
  logos: TrustedByLogo[];
  /** "muted" (default, as extracted): grayscale at 65% opacity. "original": logos as supplied. */
  logoTone?: "muted" | "original";
}

const MUTED_FILTER = "grayscale(100%) opacity(0.65)";

export function TrustedByLogos({ heading, description, logos, logoTone = "muted" }: TrustedByLogosProps) {
  return (
    <section id="trusted-by" className="mx-auto mt-16 max-w-[1280px] px-6 md:mt-32">
      <h2 className="text-center font-display text-h3">{heading}</h2>
      {description ? <p className="mx-auto mt-6 max-w-2xl text-center text-muted-foreground md:text-[17px]">{description}</p> : null}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-x-16 gap-y-10">
        {logos.map((l) => (
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
        ))}
      </div>
    </section>
  );
}

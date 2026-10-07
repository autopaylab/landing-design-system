import * as React from "react";

import { Badge } from "@/atoms/Badge";
import { Button } from "@/atoms/Button";

/**
 * The primary two-column video hero from HomeContent.tsx (lines 142-165).
 *
 * `videoSrc` is optional and `mediaCaption` is new (neither extracted): a
 * consuming landing page (paytalkpl) has no hero video yet, and must label
 * any product recording it does add as a demo. Without `videoSrc` the hero
 * renders as a single text column.
 */
export interface HeroVideoSplitProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  videoSrc?: string;
  /** Visible caption under the video, e.g. "Demo". Only rendered with `videoSrc`. */
  mediaCaption?: string;
}

export function HeroVideoSplit({ eyebrow, title, subtitle, ctaLabel, ctaHref, videoSrc, mediaCaption }: HeroVideoSplitProps) {
  return (
    <section className="mx-auto max-w-[1280px] px-6 pt-16 md:pt-24">
      <div className={`grid items-center gap-10 ${videoSrc ? "md:grid-cols-2" : ""}`}>
        <div className={videoSrc ? undefined : "max-w-3xl"}>
          {eyebrow && (
            <div className="mb-6">
              <Badge variant="eyebrow">{eyebrow}</Badge>
            </div>
          )}
          <h1 className="font-display text-h1">{title}</h1>
          <p className={`mt-8 text-base leading-relaxed text-muted-foreground md:text-[17px] ${videoSrc ? "max-w-md" : "max-w-2xl"}`}>
            {subtitle}
          </p>
          <div className="mt-10">
            <Button asChild variant="lime" size="lg">
              <a href={ctaHref}>{ctaLabel}</a>
            </Button>
          </div>
        </div>
        {videoSrc && (
          <figure className="relative">
            <video src={videoSrc} autoPlay loop muted playsInline className="h-auto w-full" />
            {mediaCaption && <figcaption className="mt-2 text-sm text-muted-foreground">{mediaCaption}</figcaption>}
          </figure>
        )}
      </div>
    </section>
  );
}

import * as React from "react";

import { Badge } from "@/atoms/Badge";
import { Button } from "@/atoms/Button";
import { SectionMedia, type SectionMediaImage } from "@/molecules/SectionMedia";

/**
 * The primary two-column video hero from HomeContent.tsx (lines 142-165).
 *
 * `videoSrc` is optional and `mediaCaption` is new (neither extracted): a
 * consuming landing page (paytalkpl) has no hero video yet, and must label
 * any product recording it does add as a demo. Without `videoSrc` or
 * `image` the hero renders as a single text column. `image` (a still or a
 * placeholder) is used only when there is no `videoSrc`.
 */
export interface HeroVideoSplitProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  videoSrc?: string;
  image?: SectionMediaImage;
  /** Visible caption under the video or image, e.g. "Demo". */
  mediaCaption?: string;
  /** Native video controls, so the loop can be paused (WCAG 2.2.2). See SectionMedia. */
  showVideoControls?: boolean;
}

export function HeroVideoSplit({
  eyebrow,
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  videoSrc,
  image,
  mediaCaption,
  showVideoControls,
}: HeroVideoSplitProps) {
  const hasMedia = !!videoSrc || !!image;
  return (
    <section className="mx-auto max-w-[1280px] px-6 pt-16 md:pt-24">
      <div className={`grid items-center gap-10 ${hasMedia ? "md:grid-cols-2" : ""}`}>
        <div className={hasMedia ? undefined : "max-w-3xl"}>
          {eyebrow && (
            <div className="mb-6">
              <Badge variant="eyebrow">{eyebrow}</Badge>
            </div>
          )}
          <h1 className="font-display text-h1">{title}</h1>
          <p className={`mt-8 text-base leading-relaxed text-muted-foreground md:text-[17px] ${hasMedia ? "max-w-md" : "max-w-2xl"}`}>
            {subtitle}
          </p>
          <div className="mt-10">
            <Button asChild variant="lime" size="lg">
              <a href={ctaHref}>{ctaLabel}</a>
            </Button>
          </div>
        </div>
        <SectionMedia videoSrc={videoSrc} image={image} caption={mediaCaption} showVideoControls={showVideoControls} />
      </div>
    </section>
  );
}

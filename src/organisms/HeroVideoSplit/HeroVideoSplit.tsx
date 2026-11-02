import * as React from "react";

import { Badge } from "@/atoms/Badge";
import { Button } from "@/atoms/Button";
import { SectionMedia, type SectionMediaImage } from "@/molecules/SectionMedia";
import { externalLinkProps } from "@/lib/external-link";

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
  /** See SectionMedia. */
  videoPoster?: string;
  /** Accessible name describing the video (WCAG 1.2.1). See SectionMedia. */
  videoLabel?: string;
  image?: SectionMediaImage;
  /** Visible caption under the video or image, e.g. "Demo". */
  mediaCaption?: string;
  /** Native video controls, so the loop can be paused (WCAG 2.2.2). See SectionMedia. */
  showVideoControls?: boolean;
  /**
   * New, not extracted: a consuming landing page (ai-autopay-pl) uses this
   * layout for a section further down, where the page's h1 is already
   * taken by a HeroImageOverlay. Defaults to "h1", as extracted.
   */
  headingLevel?: "h1" | "h2";
}

export function HeroVideoSplit({
  eyebrow,
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  videoSrc,
  videoPoster,
  videoLabel,
  image,
  mediaCaption,
  showVideoControls,
  headingLevel = "h1",
}: HeroVideoSplitProps) {
  const hasMedia = !!videoSrc || !!image;
  const Heading = headingLevel;
  return (
    <section className="mx-auto max-w-[1280px] px-6 pt-16 md:pt-24">
      <div className={`grid items-center gap-10 ${hasMedia ? "md:grid-cols-2" : ""}`}>
        <div className={hasMedia ? undefined : "max-w-3xl"}>
          {eyebrow && (
            <div className="mb-6">
              <Badge variant="eyebrow">{eyebrow}</Badge>
            </div>
          )}
          <Heading className="font-display text-h1">{title}</Heading>
          <p className={`mt-8 text-base leading-relaxed text-muted-foreground md:text-[17px] ${hasMedia ? "max-w-md" : "max-w-2xl"}`}>
            {subtitle}
          </p>
          <div className="mt-10">
            <Button asChild variant="lime" size="lg">
              <a href={ctaHref} {...externalLinkProps(ctaHref)}>{ctaLabel}</a>
            </Button>
          </div>
        </div>
        <SectionMedia videoSrc={videoSrc} videoPoster={videoPoster} videoLabel={videoLabel} image={image} caption={mediaCaption} showVideoControls={showVideoControls} />
      </div>
    </section>
  );
}

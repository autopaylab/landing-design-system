import * as React from "react";

import { Badge } from "@/atoms/Badge";
import { IconFeatureItem, type IconFeatureItemProps } from "@/molecules/IconFeatureItem";
import { SectionMedia, type SectionMediaImage } from "@/molecules/SectionMedia";

/**
 * HomeContent.tsx "Single Integration" section (lines 179-227).
 *
 * `image`, `mediaCaption` and `showVideoControls` are new (not extracted):
 * a consuming landing page (paytalkpl) needs a still or placeholder in this
 * slot until a recording exists, labelled as a visualisation. `image` is
 * used only when there is no `videoSrc`.
 */
export interface SingleIntegrationSectionProps {
  eyebrow: string;
  heading: React.ReactNode;
  subheading: string;
  subheadingCaption: string;
  features: Array<Pick<IconFeatureItemProps, "icon" | "title" | "description" | "iconClassName">>;
  videoSrc?: string;
  /** See SectionMedia. */
  videoPoster?: string;
  /** Accessible name describing the video (WCAG 1.2.1). See SectionMedia. */
  videoLabel?: string;
  image?: SectionMediaImage;
  mediaCaption?: string;
  showVideoControls?: boolean;
}

export function SingleIntegrationSection({
  eyebrow,
  heading,
  subheading,
  subheadingCaption,
  features,
  videoSrc,
  videoPoster,
  videoLabel,
  image,
  mediaCaption,
  showVideoControls,
}: SingleIntegrationSectionProps) {
  return (
    <section id="platform" className="mt-16 w-full overflow-hidden bg-white pb-0 pt-24 md:mt-32">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="text-center">
          <Badge variant="eyebrow">{eyebrow}</Badge>
          <h2 className="mt-6 font-display text-h2">{heading}</h2>
        </div>

        <div className="mt-20 grid items-end gap-10 md:grid-cols-2">
          <div className="pb-24">
            <h3 className="font-display text-h4">{subheading}</h3>
            <p className="mt-2 text-muted-foreground">{subheadingCaption}</p>
            <ul className="mt-10 space-y-8">
              {features.map((f) => (
                <IconFeatureItem key={f.title} {...f} />
              ))}
            </ul>
          </div>

          <div className="flex justify-center self-end md:justify-end">
            <SectionMedia
              videoSrc={videoSrc}
              videoPoster={videoPoster}
              videoLabel={videoLabel}
              image={image}
              caption={mediaCaption}
              showVideoControls={showVideoControls}
              className="w-full max-w-[720px]"
              mediaClassName="block object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

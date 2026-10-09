import * as React from "react";

import { cn } from "@/lib/cn";

export interface SectionMediaImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

/**
 * The media slot of a section: a looping muted video, or a still image when
 * there is no video, with an optional visible caption (e.g. "Demo",
 * "Visualisation"). New, not extracted: a consuming landing page (paytalkpl)
 * needed stills and placeholders where the source only ever had video, and
 * must label product recordings as demos.
 *
 * `showVideoControls` renders native controls so visitors can pause the
 * loop. Off by default to keep the source's look, but an autoplaying loop
 * longer than 5 seconds needs a pause mechanism (WCAG 2.2.2), so turn it on
 * for any real product recording.
 *
 * `videoPoster` is shown until the video plays (and instead of it when
 * autoplay is blocked). `videoLabel` gives the video an accessible name
 * describing what it shows: a video-only clip needs a text alternative
 * (WCAG 1.2.1), and the visible caption is usually just "Demo".
 */
export interface SectionMediaProps {
  videoSrc?: string;
  videoPoster?: string;
  videoLabel?: string;
  image?: SectionMediaImage;
  caption?: string;
  showVideoControls?: boolean;
  className?: string;
  mediaClassName?: string;
}

export function SectionMedia({
  videoSrc,
  videoPoster,
  videoLabel,
  image,
  caption,
  showVideoControls = false,
  className,
  mediaClassName,
}: SectionMediaProps) {
  if (!videoSrc && !image) return null;
  return (
    <figure className={cn("relative", className)}>
      {videoSrc ? (
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          controls={showVideoControls}
          poster={videoPoster}
          aria-label={videoLabel}
          className={cn("h-auto w-full", mediaClassName)}
        />
      ) : (
        <img
          src={image!.src}
          alt={image!.alt}
          width={image!.width}
          height={image!.height}
          loading="lazy"
          className={cn("h-auto w-full", mediaClassName)}
        />
      )}
      {caption ? <figcaption className="mt-2 text-sm text-muted-foreground">{caption}</figcaption> : null}
    </figure>
  );
}

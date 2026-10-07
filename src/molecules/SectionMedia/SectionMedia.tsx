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
 */
export interface SectionMediaProps {
  videoSrc?: string;
  image?: SectionMediaImage;
  caption?: string;
  showVideoControls?: boolean;
  className?: string;
  mediaClassName?: string;
}

export function SectionMedia({ videoSrc, image, caption, showVideoControls = false, className, mediaClassName }: SectionMediaProps) {
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

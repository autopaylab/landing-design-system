import * as React from "react";

import { Badge } from "@/atoms/Badge";
import { Button } from "@/atoms/Button";

/** The primary two-column video hero from HomeContent.tsx (lines 142-165). */
export interface HeroVideoSplitProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  videoSrc: string;
}

export function HeroVideoSplit({ eyebrow, title, subtitle, ctaLabel, ctaHref, videoSrc }: HeroVideoSplitProps) {
  return (
    <section className="mx-auto max-w-[1280px] px-6 pt-16 md:pt-24">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          {eyebrow && (
            <div className="mb-6">
              <Badge variant="eyebrow">{eyebrow}</Badge>
            </div>
          )}
          <h1 className="font-display text-h1">{title}</h1>
          <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground md:text-[17px]">{subtitle}</p>
          <div className="mt-10">
            <Button asChild variant="lime" size="lg">
              <a href={ctaHref}>{ctaLabel}</a>
            </Button>
          </div>
        </div>
        <div className="relative">
          <video src={videoSrc} autoPlay loop muted playsInline className="h-auto w-full" />
        </div>
      </div>
    </section>
  );
}

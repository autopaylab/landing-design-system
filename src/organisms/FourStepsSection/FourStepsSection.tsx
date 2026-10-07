import * as React from "react";

import { SectionMedia } from "@/molecules/SectionMedia";
import { StepCard } from "@/molecules/StepCard";

export interface Step {
  title: string;
  body: string;
}

/**
 * Content is specific to a second, unrelated product line found in the
 * source; kept as a real, working organism but flagged in AUDIT.md #1 as
 * likely wrong-product content for a payments-platform page. No copy from
 * that product line is reused here — see the story for placeholder content.
 *
 * `image` is optional and `note` is new (neither extracted): a consuming
 * landing page (paytalkpl) has a three-step flow with no illustration yet,
 * and one sentence that must stand out under the steps. With three steps the
 * grid uses three columns on large screens instead of leaving a fourth empty.
 */
export interface FourStepsSectionProps {
  heading: React.ReactNode;
  description: string;
  /** Omit to render the heading block full width, without an illustration. */
  image?: string;
  imageAlt?: string;
  /** Visible caption under the image, e.g. "Visualisation". */
  imageCaption?: string;
  steps: Step[];
  /** A short emphasized line rendered below the steps. */
  note?: React.ReactNode;
}

export function FourStepsSection({ heading, description, image, imageAlt = "", imageCaption, steps, note }: FourStepsSectionProps) {
  return (
    <section aria-labelledby="four-steps-title" className="px-5 py-14 md:py-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[oklch(0.97_0.01_240)] via-[oklch(0.91_0.07_240)] to-[oklch(0.82_0.13_240)]">
          <div
            className={`grid items-center gap-8 px-6 pb-10 pt-10 md:px-14 md:pb-16 md:pt-14 ${image ? "md:grid-cols-[1.1fr_1fr]" : ""}`}
          >
            <div>
              <h2 id="four-steps-title" className="max-w-2xl font-display text-h2">
                {heading}
              </h2>
              <p className="mt-6 max-w-xl text-muted-foreground md:text-[17px]">{description}</p>
            </div>
            {image && (
              <SectionMedia
                image={{ src: image, alt: imageAlt, width: 700, height: 400 }}
                caption={imageCaption}
                className="w-full max-w-[560px] justify-self-end"
              />
            )}
          </div>

          <ol
            className={`grid border-t border-primary/20 sm:grid-cols-2 ${steps.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}
          >
            {steps.map((step, i) => (
              <StepCard
                key={step.title}
                index={i + 1}
                title={step.title}
                body={step.body}
                className="border-t border-border/40 first:border-t-0 sm:border-l sm:border-t-0 sm:[&:nth-child(odd)]:border-l-0 lg:border-l lg:[&:nth-child(odd)]:border-l"
              />
            ))}
          </ol>

          {note && (
            <p className="border-t border-primary/20 px-6 py-8 font-display text-lg md:px-14 md:text-xl">{note}</p>
          )}
        </div>
      </div>
    </section>
  );
}

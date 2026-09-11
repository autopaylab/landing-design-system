import * as React from "react";

import { Accordion } from "@/atoms/Accordion";
import { FaqItem } from "@/molecules/FaqItem";

export interface FaqEntry {
  question: string;
  answer: React.ReactNode;
}

/** FaqSection.tsx: heading + Accordion of FaqItems. */
export interface FaqAccordionSectionProps {
  heading: string;
  entries: FaqEntry[];
}

export function FaqAccordionSection({ heading, entries }: FaqAccordionSectionProps) {
  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-surface px-5 py-14 md:py-20">
      <div className="mx-auto max-w-[1280px]">
        <h2 id="faq-title" className="font-display text-h2">
          {heading}
        </h2>
        <Accordion type="single" collapsible className="mt-8 flex w-full flex-col gap-3">
          {entries.map((entry, i) => (
            <FaqItem key={entry.question} value={`item-${i}`} question={entry.question} answer={entry.answer} />
          ))}
        </Accordion>
      </div>
    </section>
  );
}

import * as React from "react";

import { AccordionItem, AccordionTrigger, AccordionContent } from "@/atoms/Accordion";

/** One question/answer pair, wrapping the Accordion primitives (FaqSection.tsx). */
export interface FaqItemProps {
  value: string;
  question: string;
  answer: React.ReactNode;
}

export function FaqItem({ value, question, answer }: FaqItemProps) {
  return (
    <AccordionItem value={value} className="rounded-2xl border-0 bg-card px-6 py-1 md:px-8">
      <AccordionTrigger className="py-6 text-left text-lg font-semibold hover:no-underline md:text-xl [&>svg]:size-5">
        {question}
      </AccordionTrigger>
      <AccordionContent className="pb-8 pt-2 text-base text-muted-foreground md:text-[17px]">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
}

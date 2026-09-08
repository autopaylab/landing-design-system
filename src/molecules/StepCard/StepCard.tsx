import * as React from "react";

import { StepNumber } from "@/atoms/StepNumber";
import { cn } from "@/lib/cn";

/** One list item from FourStepsSection.tsx's numbered step list. */
export interface StepCardProps extends React.LiHTMLAttributes<HTMLLIElement> {
  index: number;
  title: string;
  body: string;
}

export function StepCard({ className, index, title, body, ...props }: StepCardProps) {
  return (
    <li className={cn("p-8", className)} {...props}>
      <StepNumber value={index} />
      <h3 className="mt-4 font-display text-lg">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{body}</p>
    </li>
  );
}

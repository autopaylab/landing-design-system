import * as React from "react";

import { cn } from "@/lib/cn";

/** The numbered circle from FourStepsSection.tsx's step list. */
export interface StepNumberProps extends React.HTMLAttributes<HTMLSpanElement> {
  value: number;
}

export function StepNumber({ className, value, ...props }: StepNumberProps) {
  return (
    <span
      className={cn(
        "inline-flex size-11 items-center justify-center rounded-xl bg-white/70 text-lg font-bold text-primary",
        className,
      )}
      {...props}
    >
      {value}
    </span>
  );
}

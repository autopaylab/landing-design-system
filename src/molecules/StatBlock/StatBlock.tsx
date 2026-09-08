import * as React from "react";

import { cn } from "@/lib/cn";

/** One tile from the Stats section grid in HomeContent.tsx ("UP TO" + value + label). */
export interface StatBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  value: string;
  label: string;
}

export function StatBlock({ className, eyebrow = "UP TO", value, label, ...props }: StatBlockProps) {
  return (
    <div className={cn("bg-transparent pr-6", className)} {...props}>
      <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        {eyebrow}
      </div>
      <div className="mt-3 font-display text-[56px] leading-none md:text-[72px]">{value}</div>
      <div className="mt-6 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

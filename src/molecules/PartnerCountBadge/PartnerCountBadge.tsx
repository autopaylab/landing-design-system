import * as React from "react";

import { cn } from "@/lib/cn";

/**
 * New molecule, not extracted from landing-page-kit -- inspired by a
 * partner/provider-count badge pattern observed live on autopay.pl during
 * the market-scan pass (see MARKET-SCAN.md #6), which has no equivalent in
 * this package's actual source. Built from existing tokens (matches
 * `Badge`'s `eyebrow` variant treatment: rounded-full, bg-muted) rather than
 * copying autopay.pl's exact visual details, which weren't captured.
 */
export interface PartnerCountBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The number/count, e.g. "+40". Rendered as plain text, not parsed. */
  count: string;
  /** What the count refers to, e.g. "payment providers". */
  label: string;
}

export function PartnerCountBadge({ className, count, label, ...props }: PartnerCountBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-muted px-4 py-1.5 text-foreground/70",
        className,
      )}
      {...props}
    >
      <span className="text-sm font-semibold text-foreground">{count}</span>
      <span className="text-xs">{label}</span>
    </div>
  );
}

import * as React from "react";

import { cn } from "@/lib/cn";

/**
 * Matches the plain <span> used above every contact-form field
 * (HomeContent.tsx) — not the unused Radix-based `ui/label.tsx`.
 * No Radix `Label` primitive is pulled in since the page never used it.
 * See AUDIT.md, "Label — 2 competing systems".
 */
export function Label({ className, ...props }: React.ComponentProps<"span">) {
  return <span className={cn("text-xs text-muted-foreground", className)} {...props} />;
}

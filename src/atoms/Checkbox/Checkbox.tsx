import * as React from "react";

import { cn } from "@/lib/cn";

/**
 * The source (HomeContent.tsx contact form) uses a bare, browser-default
 * `<input type="checkbox">` with no visual design of its own — this atom
 * only adds the alignment/sizing the source applied (`mt-1`). No styling
 * is invented here; see AUDIT.md, Atoms classification note on Checkbox.
 */
export const Checkbox = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type = "checkbox", ...props }, ref) => (
    <input type={type} className={cn("mt-1", className)} ref={ref} {...props} />
  ),
);
Checkbox.displayName = "Checkbox";

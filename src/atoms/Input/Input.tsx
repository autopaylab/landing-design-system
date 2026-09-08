import * as React from "react";

import { cn } from "@/lib/cn";

/**
 * Matches the filled input actually rendered by the contact form
 * (HomeContent.tsx) — not the unused outlined `ui/input.tsx` shadcn
 * primitive. See AUDIT.md, "Input — 2 competing visual systems".
 */
export const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "w-full rounded-xl bg-muted px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

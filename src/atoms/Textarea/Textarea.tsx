import * as React from "react";

import { cn } from "@/lib/cn";

/**
 * Contributed back from autopaylab-landing, where it was built (matching
 * this package's Input atom styling exactly) because no multi-line field
 * existed here. Confirmed a second real consumer needs it: several of
 * autopay.pl's live contact forms (e.g. /lp/platnosci-online-1, /lp/payfac-08)
 * have a "Wiadomość"/"Dodatkowe informacje" field with no equivalent in this
 * package. See AUDIT.md for the audit that found this gap.
 */
export const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "w-full resize-none rounded-xl bg-muted px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

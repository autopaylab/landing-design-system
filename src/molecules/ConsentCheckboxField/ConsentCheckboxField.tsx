import * as React from "react";

import { Checkbox } from "@/atoms/Checkbox";
import { Link } from "@/atoms/Link";

/** Checkbox + legal copy + "More" link, from the contact-form consent row in HomeContent.tsx. */
export interface ConsentCheckboxFieldProps
  extends Omit<React.ComponentProps<"input">, "type" | "children"> {
  /** The consent sentence, e.g. "I consent to the processing of my personal data..." */
  consentText: React.ReactNode;
  /** The controller sentence shown below, e.g. "The personal data controller is..." */
  controllerText: React.ReactNode;
  moreHref?: string;
}

export const ConsentCheckboxField = React.forwardRef<HTMLInputElement, ConsentCheckboxFieldProps>(
  ({ consentText, controllerText, moreHref = "#", ...props }, ref) => (
    <label className="flex gap-3 text-xs text-muted-foreground">
      <Checkbox ref={ref} {...props} />
      <span>
        {consentText}
        <span className="mt-2 block text-[11px]">
          {controllerText} <Link variant="underline" href={moreHref}>More</Link>
        </span>
      </span>
    </label>
  ),
);
ConsentCheckboxField.displayName = "ConsentCheckboxField";

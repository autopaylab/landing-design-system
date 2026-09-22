import * as React from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/cn";

export interface SelectOption {
  value: string;
  label: string;
}

/**
 * A native `<select>` styled to match Input's filled/rounded-xl look, with a
 * trailing chevron (matching the ChevronDown already used in Navbar and
 * Accordion, not a new icon choice). Native, not a custom listbox — real
 * lead-gen forms (e.g. autopay.pl's /lp/payfac-08, which has four dropdowns)
 * need dropdown fields and this package had none. See AUDIT.md.
 *
 * `options` + `placeholder` cover the common case (a labeled list of
 * choices with an empty/disabled first option); pass `children` directly
 * instead if you need `<optgroup>`s or anything `options` can't express.
 */
export interface SelectProps extends Omit<React.ComponentProps<"select">, "children"> {
  options?: SelectOption[];
  placeholder?: string;
  children?: React.ReactNode;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, options, placeholder, children, defaultValue, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          ref={ref}
          defaultValue={defaultValue ?? (placeholder ? "" : undefined)}
          className={cn(
            "w-full appearance-none rounded-xl bg-muted px-4 py-3 pr-10 text-sm outline-none focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          {...props}
        >
          {placeholder ? (
            <option value="" disabled>
              {placeholder}
            </option>
          ) : null}
          {options ? options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          )) : children}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      </div>
    );
  },
);
Select.displayName = "Select";

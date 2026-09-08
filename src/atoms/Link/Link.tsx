import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";

/**
 * Covers the plain-text anchor patterns observed across the source:
 * footer nav links (`hover:underline`), the header pill nav link
 * (`SiteHeader.tsx`), and the inline consent-form "More" link.
 */
const linkVariants = cva("transition-colors", {
  variants: {
    variant: {
      underline: "hover:underline",
      nav: "rounded-lg px-5 py-2.5 text-[17px] font-medium text-foreground hover:bg-muted",
      plain: "",
    },
  },
  defaultVariants: {
    variant: "plain",
  },
});

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, ...props }, ref) => (
    // eslint-disable-next-line jsx-a11y/anchor-has-content -- `children` is part of `...props` (LinkProps extends AnchorHTMLAttributes), the rule can't see through the spread on this passthrough atom.
    <a className={cn(linkVariants({ variant }), className)} ref={ref} {...props} />
  ),
);
Link.displayName = "Link";

export { linkVariants };

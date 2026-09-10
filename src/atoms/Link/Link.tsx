import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
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
    VariantProps<typeof linkVariants> {
  /** Render the styling onto a single child element (e.g. a router `Link`) instead of a plain `<a>`. */
  asChild?: boolean;
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "a";
    return <Comp className={cn(linkVariants({ variant }), className)} ref={ref} {...props} />;
  },
);
Link.displayName = "Link";

export { linkVariants };

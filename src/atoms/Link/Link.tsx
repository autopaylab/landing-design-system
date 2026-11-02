import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";
import { externalLinkProps } from "@/lib/external-link";

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

/**
 * An absolute `http(s)` `href` opens in a new tab with `rel="noopener noreferrer"`. An explicit `target` wins
 * (`target="_self"` keeps an external link in the same tab).
 */
export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, asChild = false, target, rel, ...props }, ref) => {
    const Comp = asChild ? Slot : "a";
    const auto = target === undefined ? externalLinkProps(props.href) : {};
    return (
      <Comp
        className={cn(linkVariants({ variant }), className)}
        ref={ref}
        target={target ?? auto.target}
        rel={rel ?? auto.rel}
        {...props}
      />
    );
  },
);
Link.displayName = "Link";

export { linkVariants };

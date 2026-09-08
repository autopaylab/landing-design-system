import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";

/**
 * Wraps the `<img>` pattern used for the Autopay wordmark across the
 * source's header, footer and promo sections (h-7, h-6, h-7/h-8
 * respectively — the source never settled on one height, see AUDIT.md #4). `src`/`alt` are
 * left as required props rather than hardcoding the Autopay asset, since
 * this package ships no brand assets (see README "Known limitations").
 */
const logoVariants = cva("w-auto", {
  variants: {
    size: {
      sm: "h-6",
      md: "h-7",
      lg: "h-8",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface LogoProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src" | "alt">,
    VariantProps<typeof logoVariants> {
  src: string;
  alt: string;
}

export function Logo({ className, size, src, alt, ...props }: LogoProps) {
  return <img src={src} alt={alt} className={cn(logoVariants({ size }), className)} {...props} />;
}

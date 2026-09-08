import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";

/**
 * `eyebrow` merges three byte-identical implementations: `Eyebrow` in
 * HomeContent.tsx, `VariantLabel` in HeroVariants.tsx, and an inline <span>
 * in IndustriesGridA.tsx. `default`/`secondary`/`destructive`/`outline` are
 * the unused-on-page shadcn/ui variants, kept as real declared alternates
 * rather than discarded — see AUDIT.md, "Eyebrow / pill badge".
 */
const badgeVariants = cva(
  "inline-flex items-center transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        eyebrow:
          "rounded-full bg-muted px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground/70",
        default: "rounded-md border border-transparent bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground shadow hover:bg-primary/80",
        secondary: "rounded-md border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground hover:bg-secondary/80",
        destructive: "rounded-md border border-transparent bg-destructive px-2.5 py-0.5 text-xs font-semibold text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "rounded-md border px-2.5 py-0.5 text-xs font-semibold text-foreground",
      },
    },
    defaultVariants: {
      variant: "eyebrow",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { badgeVariants };

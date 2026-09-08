import * as React from "react";

import { cn } from "@/lib/cn";

/**
 * The icon+title+description row repeated 6× across "Single Integration"
 * and "Global Coverage" in HomeContent.tsx (identical structure, only the
 * icon/copy changed at each call site).
 */
export interface IconFeatureItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  /** Icon color as observed on the page — an ad hoc oklch literal, not a semantic token. See AUDIT.md #10. */
  iconClassName?: string;
  /**
   * The source always rendered this as an h4, but that's only correct when
   * an h3 already sits between it and the section's h2 (true in
   * SingleIntegrationSection, where "Single API for everything" is an h3).
   * GlobalCoverageSection has no such h3, so its list needs `headingLevel="h3"`
   * or axe's heading-order check (rightly) flags a skipped level. See
   * AUDIT.md section 6.
   */
  headingLevel?: "h3" | "h4";
}

export function IconFeatureItem({
  className,
  icon: Icon,
  title,
  description,
  iconClassName = "text-[oklch(0.6_0.22_255)]",
  headingLevel = "h4",
  ...props
}: IconFeatureItemProps) {
  const Heading = headingLevel;
  return (
    <li className={cn("flex gap-4", className)} {...props}>
      <Icon className={cn("mt-1 h-5 w-5 shrink-0", iconClassName)} />
      <div>
        <Heading className="font-display text-lg">{title}</Heading>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
    </li>
  );
}

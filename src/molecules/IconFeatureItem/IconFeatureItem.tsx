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
}

export function IconFeatureItem({
  className,
  icon: Icon,
  title,
  description,
  iconClassName = "text-[oklch(0.6_0.22_255)]",
  ...props
}: IconFeatureItemProps) {
  return (
    <li className={cn("flex gap-4", className)} {...props}>
      <Icon className={cn("mt-1 h-5 w-5 shrink-0", iconClassName)} />
      <div>
        <h4 className="font-display text-lg">{title}</h4>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
    </li>
  );
}

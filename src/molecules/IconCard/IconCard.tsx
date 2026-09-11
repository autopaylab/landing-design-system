import * as React from "react";

import { BulletItem } from "@/molecules/BulletItem";
import { cn } from "@/lib/cn";

/** One of the 4 Security cards in HomeContent.tsx: icon-in-gradient-tile + title + bullet list. */
export interface IconCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  bullets: string[];
  /** Gradient tile base color, as observed (ad hoc oklch/var literal). See AUDIT.md #10. */
  color: string;
}

export function IconCard({ className, icon: Icon, title, bullets, color, ...props }: IconCardProps) {
  return (
    <div className={cn("rounded-3xl bg-card p-8 shadow-sm", className)} {...props}>
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-h4">{title}</h3>
        <div
          className="grid h-12 w-12 shrink-0 place-items-center rounded-xl"
          style={{ background: `linear-gradient(135deg, ${color}, color-mix(in oklab, ${color} 40%, white))` }}
        >
          <Icon className="h-5 w-5 text-foreground" />
        </div>
      </div>
      <ul className="mt-8 space-y-2 text-muted-foreground">
        {bullets.map((bullet) => (
          <BulletItem key={bullet}>{bullet}</BulletItem>
        ))}
      </ul>
    </div>
  );
}

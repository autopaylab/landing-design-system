import * as React from "react";

import { cn } from "@/lib/cn";

/** Dot + text row used inside IconCard's bullet list (HomeContent.tsx Security cards). */
export function BulletItem({ className, children, ...props }: React.LiHTMLAttributes<HTMLLIElement>) {
  return (
    <li className={cn("flex gap-3", className)} {...props}>
      <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
      {children}
    </li>
  );
}

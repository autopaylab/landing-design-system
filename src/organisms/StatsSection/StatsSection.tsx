import * as React from "react";

import { StatBlock, type StatBlockProps } from "@/molecules/StatBlock";

/** HomeContent.tsx Stats panel (lines 369-387). */
export interface StatsSectionProps {
  heading: React.ReactNode;
  description: string;
  stats: Array<Pick<StatBlockProps, "value" | "label" | "eyebrow">>;
}

export function StatsSection({ heading, description, stats }: StatsSectionProps) {
  return (
    <section className="mx-auto mt-32 max-w-[1280px] px-6">
      <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[oklch(0.93_0.05_240)] via-[oklch(0.88_0.09_240)] to-[oklch(0.82_0.13_240)] p-10 md:p-16">
        <div className="max-w-2xl">
          <h2 className="font-display text-h2">{heading}</h2>
          <p className="mt-6 text-muted-foreground md:text-[17px]">{description}</p>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-px md:grid-cols-4">
          {stats.map((s) => (
            <StatBlock key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

import * as React from "react";

import { Badge } from "@/atoms/Badge";

export interface DataLeverageItem {
  title: string;
  desc: string;
}

export interface ReportingPeriod {
  month: string;
  status: string;
  date: string;
}

/** HomeContent.tsx Data Leverage section (lines 319-366), incl. the decorative dashboard-mock graphic. */
export interface DataLeverageSectionProps {
  eyebrow: string;
  heading: React.ReactNode;
  description: string;
  items: DataLeverageItem[];
  reportingPeriods: ReportingPeriod[];
}

export function DataLeverageSection({ eyebrow, heading, description, items, reportingPeriods }: DataLeverageSectionProps) {
  return (
    <section className="mx-auto mt-32 max-w-[1280px] px-6">
      <div className="text-center">
        <Badge variant="eyebrow">{eyebrow}</Badge>
        <h2 className="mt-6 font-display text-[44px] leading-[1.05] md:text-[56px]">{heading}</h2>
        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground md:text-[17px]">{description}</p>
      </div>
      <div className="mt-16 grid gap-10 md:grid-cols-2">
        <ul className="divide-y divide-border">
          {items.map((d) => (
            <li key={d.title} className="py-8 first:pt-0">
              <h3 className="font-display text-2xl">{d.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{d.desc}</p>
            </li>
          ))}
        </ul>
        <div className="relative min-h-[480px] rounded-3xl bg-gradient-to-br from-[oklch(0.9_0.06_280)] to-[oklch(0.95_0.04_260)] p-6">
          <div className="absolute right-6 top-6 w-[85%] rounded-2xl bg-card p-4 shadow-xl">
            <div className="flex items-center justify-between text-[10px] text-muted-foreground">
              <span className="rounded bg-muted px-2 py-1">Number of transactions ▾</span>
              <span className="rounded bg-muted px-2 py-1">Operator</span>
              <span className="rounded bg-muted px-2 py-1">Method</span>
            </div>
            <svg viewBox="0 0 300 100" className="mt-3 h-24 w-full">
              <path d="M0,60 Q40,20 80,50 T160,40 T240,70 T300,30" stroke="oklch(0.55 0.2 255)" strokeWidth="2" fill="none" />
              <path d="M0,70 Q40,40 80,60 T160,55 T240,40 T300,60" stroke="oklch(0.7 0.18 140)" strokeWidth="2" fill="none" />
              <path d="M0,50 Q40,70 80,45 T160,65 T240,55 T300,45" stroke="oklch(0.65 0.22 25)" strokeWidth="2" fill="none" />
            </svg>
          </div>
          <div className="absolute bottom-6 left-6 w-[88%] rounded-2xl bg-card p-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-border pb-2 text-[10px] font-semibold">
              <span>Autopay</span>
              <span className="text-muted-foreground">Reporting Periods</span>
            </div>
            <div className="mt-3 space-y-1.5 text-[9px]">
              {reportingPeriods.map((p) => (
                <div key={p.month} className="flex items-center justify-between border-b border-border/50 py-1">
                  <span>{p.month}</span>
                  <span className="rounded-full bg-[oklch(0.92_0.15_85)] px-2 py-0.5 text-[8px] font-medium">{p.status}</span>
                  <span className="text-muted-foreground">{p.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import * as React from "react";

export interface PlatformFeature {
  key: string;
  title: string;
  desc: string;
  video: string;
}

/**
 * HomeContent.tsx `PlatformFeatureShowcase` (lines 11-85): stateful
 * click+hover tablist with a mobile "all expanded" fallback. Classified as
 * an organism (not a molecule) because of its own interactive state —
 * see AUDIT.md classification notes.
 */
export interface PlatformFeatureShowcaseProps {
  features: PlatformFeature[];
}

export function PlatformFeatureShowcase({ features }: PlatformFeatureShowcaseProps) {
  const [active, setActive] = React.useState(features[0]?.key);
  const [hovered, setHovered] = React.useState<string | null>(null);
  const shown = hovered ?? active;
  const tabRefs = React.useRef<Record<string, HTMLButtonElement | null>>({});
  const reactId = React.useId();
  const tabId = (key: string) => `${reactId}-tab-${key}`;
  const panelId = (key: string) => `${reactId}-panel-${key}`;

  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp" && e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const dir = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : -1;
    const next = features[(i + dir + features.length) % features.length];
    setActive(next.key);
    setHovered(null);
    // Roving tabindex means only the newly active tab is tab-reachable; move
    // real DOM focus to it too, or keyboard focus would stay stranded on the
    // now-unreachable previous button.
    tabRefs.current[next.key]?.focus();
  };

  return (
    <>
      <div className="flex flex-col gap-6 md:hidden">
        {features.map((f) => (
          <div key={f.key} className="rounded-3xl bg-card p-6 shadow-sm">
            <h4 className="font-display text-h5">{f.title}</h4>
            <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{f.desc}</p>
            <div className="mt-5 flex items-center justify-center overflow-hidden rounded-lg bg-[oklch(0.97_0.02_240)] p-4">
              <video src={f.video} autoPlay muted loop playsInline preload="metadata" className="w-full max-w-full object-contain" />
            </div>
          </div>
        ))}
      </div>

      <div className="hidden items-stretch gap-6 md:grid md:grid-cols-[1.35fr_1fr]">
        <div className="flex min-h-[460px] items-center justify-center overflow-hidden rounded-3xl bg-[oklch(0.97_0.02_240)] p-8">
          {features.map((f) => (
            <div key={f.key} role="tabpanel" id={panelId(f.key)} aria-labelledby={tabId(f.key)} hidden={shown !== f.key}>
              <video
                src={f.video}
                autoPlay
                muted
                loop
                playsInline
                className="max-h-[420px] w-auto max-w-full object-contain transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5" role="tablist" aria-orientation="vertical">
          {features.map((f, i) => {
            const isActive = active === f.key;
            return (
              <button
                key={f.key}
                ref={(el) => {
                  tabRefs.current[f.key] = el;
                }}
                id={tabId(f.key)}
                aria-controls={panelId(f.key)}
                type="button"
                role="tab"
                aria-selected={isActive}
                tabIndex={isActive ? 0 : -1}
                onClick={() => {
                  setActive(f.key);
                  setHovered(null);
                }}
                onMouseEnter={() => setHovered(f.key)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(f.key)}
                onBlur={() => setHovered(null)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className={`flex-1 cursor-pointer rounded-lg p-8 text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-primary ${
                  isActive ? "bg-card shadow-sm" : "bg-muted/60"
                }`}
              >
                <span className="block font-display text-2xl">{f.title}</span>
                <span className="mt-3 block text-[15px] leading-relaxed text-muted-foreground">{f.desc}</span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

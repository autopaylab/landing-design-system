import * as React from "react";
import { createRoot } from "react-dom/client";

import "../.storybook/preview.css";

/**
 * tokens.css's own `@import "@fontsource/..."` gets flattened by
 * @tailwindcss/postcss's bundler before Vite's asset pipeline ever sees the
 * font url()s, so they're left as broken relative paths in a standalone
 * build (works fine in a real consuming app's own bundler, e.g. Next.js --
 * this is specific to this Vite+Tailwind-v4 combination). Re-importing the
 * same font CSS directly here, outside that chain, lets Vite's normal CSS
 * asset pipeline resolve and inline them correctly. Harmless duplicate
 * @font-face rules, not a real behavior change.
 */
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/bricolage-grotesque/400.css";

/**
 * Single self-contained HTML export of every component/story in this
 * package -- see `npm run build:styleguide`. Discovery mirrors
 * `src/a11y.test.tsx` exactly (same `import.meta.glob` pattern, same
 * args/render resolution) so this always reflects the real, documented
 * variants, never invented ones.
 */
interface StoryModule {
  default: { component?: React.ComponentType<unknown>; title?: string };
  [exportName: string]: unknown;
}

const storyModules = import.meta.glob<StoryModule>("../src/**/*.stories.tsx", { eager: true });

interface StoryEntry {
  name: string;
  element: React.ReactElement;
}

const groups = new Map<string, StoryEntry[]>();

for (const mod of Object.values(storyModules)) {
  const meta = mod.default;
  const Component = meta?.component;
  if (!Component) continue;

  const title = meta.title ?? "Untitled";
  const entries = groups.get(title) ?? [];

  for (const [exportName, value] of Object.entries(mod)) {
    if (exportName === "default") continue;
    const story = value as { args?: Record<string, unknown>; render?: (args: never) => React.ReactElement };
    const args = story.args ?? {};
    const element = story.render ? story.render(args as never) : React.createElement(Component, args);
    entries.push({ name: exportName, element });
  }

  groups.set(title, entries);
}

const sortedTitles = [...groups.keys()].sort();

function Gallery() {
  return (
    <div className="min-h-screen bg-white font-sans text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-white/95 px-6 py-4 backdrop-blur">
        <h1 className="font-display text-xl">Landing Design System — Component Gallery</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Every component/story, generated {new Date().toISOString().slice(0, 10)}. Static export — some
          interactive components (Accordion, Navbar's mobile menu, PlatformFeatureShowcase's tabs) still work,
          since this is a real client-side React bundle, not a screenshot.
        </p>
        <nav className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs">
          {sortedTitles.map((title) => (
            <a key={title} href={`#${slug(title)}`} className="text-muted-foreground hover:text-foreground hover:underline">
              {title}
            </a>
          ))}
        </nav>
      </header>

      {sortedTitles.map((title) => (
        <section key={title} id={slug(title)} className="scroll-mt-24 border-b border-border">
          <h2 className="bg-foreground px-6 py-3 font-display text-background">{title}</h2>
          {(groups.get(title) ?? []).map(({ name, element }) => (
            <div key={name} className="border-b border-border/60 p-6 last:border-b-0">
              <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{name}</div>
              <div className="overflow-x-auto">{element}</div>
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}

function slug(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

createRoot(document.getElementById("root")!).render(<Gallery />);

import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

import { pageContainer } from "./page-container";

const organismsDir = join(__dirname, "..", "organisms");
const sources = readdirSync(organismsDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map(({ name }) => ({
  name,
  source: readFileSync(join(organismsDir, name, `${name}.tsx`), "utf8"),
}));

/** Full-bleed or wrapper-less by design: they keep their own width (see page-container.ts). */
const OWN_WIDTH = new Set(["HeroImageOverlay", "PromoCtaSection", "Footer", "PlatformFeatureShowcase", "CookieConsentScript"]);

describe("pageContainer", () => {
  it("matches autopay.pl's container widths and keeps a margin on every screen", () => {
    expect(pageContainer).toContain("min-[1200px]:max-w-[1140px]");
    expect(pageContainer).toContain("min-[1400px]:max-w-[1320px]");
    expect(pageContainer).toMatch(/(^| )px-6( |$)/);
  });

  it("is the only content width in the organisms", () => {
    const ownWidths = sources.filter(({ name, source }) => !OWN_WIDTH.has(name) && /max-w-\[(1280|1600)px\]/.test(source));
    expect(ownWidths.map((s) => s.name)).toEqual([]);
  });

  it("is used by every section organism and the Navbar", () => {
    const missing = sources.filter(({ name, source }) => !OWN_WIDTH.has(name) && !source.includes("pageContainer"));
    expect(missing.map((s) => s.name)).toEqual([]);
  });
});

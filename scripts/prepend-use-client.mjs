#!/usr/bin/env node
/**
 * tsup bundles each layer (atoms/molecules/organisms/templates) into one
 * physical file per format (splitting: false) -- there's no per-component
 * chunk boundary to attach a "use client" directive to individually, even
 * though only some components in a given layer actually use client-only
 * hooks or DOM event handlers. So the directive is applied per BUNDLE, not
 * per component: any layer bundle containing at least one such component
 * gets marked, which is coarser than ideal but correct -- the alternative
 * (not marking it) breaks in a real Next.js App Router consumer the moment
 * that layer is imported into a Server Component tree.
 *
 * Bundles needing it, and why (see AUDIT.md's RSC section for the full list):
 *   molecules  -- IndustryCard (onClick)
 *   organisms  -- Navbar (useState), PlatformFeatureShowcase (useState/useRef),
 *                 ContactSection (onSubmit)
 *   templates  -- LandingPageTemplate imports Navbar directly
 *   (root)     -- src/index.ts re-exports every layer above, so its own
 *                 bundle inlines the same client-only code again
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";

const ENTRY_POINTS_NEEDING_USE_CLIENT = ["", "molecules/", "organisms/", "templates/"];
const DIRECTIVE = '"use client";\n';

for (const entry of ENTRY_POINTS_NEEDING_USE_CLIENT) {
  for (const ext of ["js", "cjs"]) {
    const path = `dist/${entry}index.${ext}`;
    if (!existsSync(path)) {
      throw new Error(`Expected build output not found: ${path}`);
    }
    const contents = readFileSync(path, "utf8");
    if (contents.startsWith(DIRECTIVE)) continue;
    // dist/index.cjs already starts with "use strict"; -- both directives
    // can coexist as long as "use client" comes first (directive prologue
    // order doesn't matter to the bundler, but keep it deterministic).
    writeFileSync(path, DIRECTIVE + contents);
  }
}

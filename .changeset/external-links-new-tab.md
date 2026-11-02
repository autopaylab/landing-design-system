---
"@autopaylab/landing-design-system": minor
---

Links to another page or site open in a new tab. `Link` and every organism that renders its own anchor (`Footer` social icons, both hero organisms, `Navbar` logo and call to action, `PromoCtaSection`) give an absolute `http(s)` `href` `target="_blank"` and `rel="noopener noreferrer"`; anchors (`#form`) and paths (`/`) are unchanged. An explicit `target` on `Link`, or `external: false` on `PromoCtaSection`'s `secondaryCta`, keeps a link in the same tab. The `Navbar` language link stays in the same tab by design. A test renders every story with external addresses and fails if any external link misses the new-tab attributes.

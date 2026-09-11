---
"@autopaylab/landing-design-system": minor
---

Fix inter-section spacing on mobile: `mt-32` (128px, flat across all breakpoints) was producing excessive dead whitespace on narrow viewports. Changed to `mt-16 md:mt-32` across all 10 affected organisms — halves the mobile gap, desktop is unchanged.

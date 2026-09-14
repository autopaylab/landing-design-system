---
"@autopaylab/landing-design-system": minor
---

Fix `IndustryCard`'s heading, missed by the original typography-scale migration (its ad hoc size classes lived inside a multi-line `cn()` call). Stacked variant now uses `text-h3` (32→48, growing on desktop like every other heading), grid variant uses `text-h4`.

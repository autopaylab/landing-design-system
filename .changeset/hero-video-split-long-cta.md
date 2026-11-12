---
"@autopaylab/landing-design-system": patch
---

`HeroVideoSplit` no longer overflows on narrow screens when the CTA label is longer than the column. The grid's single mobile track can now shrink to the container (`grid-cols-1`), and the CTA label wraps instead of staying on one line. Before, a 374 px label at a 375 px viewport widened the grid by 23 px, and the page clipped the text column and the image. Labels that fit render as before, and the two desktop columns are unchanged.

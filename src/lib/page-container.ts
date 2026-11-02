/**
 * The page's content column, shared by every section and the Navbar so text lines up down the page.
 * Matches autopay.pl's container: full width with growing side padding below 1200 px (24, 32, then 40 px),
 * then a text column of 1116 px (1200–1399 px) and 1296 px (from 1400 px), the same as autopay.pl's
 * 1140/1320 px containers minus their 12 px gutters. The max widths include the 40 px padding
 * (1116 + 80, 1296 + 80) rather than switching to a smaller padding at 1200 px, because Tailwind orders
 * `min-[1200px]:` before `md:` and an override there would lose. Before this, sections used
 * max-w-[1280px] px-6, which left only 24 px of margin on common laptop widths (1280–1366 px) where
 * autopay.pl keeps about 80 px.
 *
 * Wide, deliberately full-bleed elements (the HeroImageOverlay and PromoCtaSection cards, the Footer)
 * keep their own widths; their text sits inside generous padding.
 */
export const pageContainer =
  "mx-auto w-full px-6 sm:px-8 md:px-10 min-[1200px]:max-w-[1196px] min-[1400px]:max-w-[1376px]";

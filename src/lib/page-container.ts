/**
 * The page's content column, shared by every section and the Navbar so text lines up down the page.
 * Matches autopay.pl's container: full width with growing side padding below 1200 px, then a fixed
 * 1140 px column (1200–1399 px) and 1320 px (from 1400 px), each with a 12 px gutter. Before this,
 * sections used max-w-[1280px] px-6, which left only 24 px of margin on common laptop widths
 * (1280–1366 px) where autopay.pl keeps about 80 px.
 *
 * Wide, deliberately full-bleed elements (the HeroImageOverlay and PromoCtaSection cards, the Footer)
 * keep their own widths; their text sits inside generous padding.
 */
export const pageContainer =
  "mx-auto w-full px-6 sm:px-8 md:px-10 min-[1200px]:max-w-[1140px] min-[1200px]:px-3 min-[1400px]:max-w-[1320px]";

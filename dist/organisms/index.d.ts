export { F as Footer, a as FooterNavItem, b as FooterProps, c as FooterSocialLink, N as NavItem, d as Navbar, e as NavbarProps } from '../Footer-8cnZzh6n.js';
import * as React from 'react';
import { c as IconFeatureItemProps, a as IconCardProps, f as StatBlockProps, d as OverlapCardCta } from '../OverlapCard-DnLktg2T.js';

/** The primary two-column video hero from HomeContent.tsx (lines 142-165). */
interface HeroVideoSplitProps {
    eyebrow?: string;
    title: React.ReactNode;
    subtitle: string;
    ctaLabel: string;
    ctaHref: string;
    videoSrc: string;
}
declare function HeroVideoSplit({ eyebrow, title, subtitle, ctaLabel, ctaHref, videoSrc }: HeroVideoSplitProps): React.JSX.Element;

/**
 * Merges the source's two hero-overlay variants ("stacked": gradient
 * overlay, single-column content, eyebrow-less; "split": flat overlay,
 * 2-col heading/CTA) into one organism with a `layout` prop — see AUDIT.md
 * dedup decision for "Hero image-overlay". Both variants in the source
 * belong to a second, unrelated product line; that copy is not reused
 * here — all content is passed in via props, see AUDIT.md #1.
 */
interface HeroImageOverlayProps {
    layout: "stacked" | "split";
    image: string;
    title: React.ReactNode;
    /** Only rendered in the "stacked" layout, matching the source (the "stacked" variant has a subtitle paragraph, "split" does not). */
    subtitle?: string;
    primaryCta: {
        label: string;
        href: string;
    };
    secondaryCta: {
        label: string;
        href: string;
    };
}
declare function HeroImageOverlay({ layout, image, title, subtitle, primaryCta, secondaryCta }: HeroImageOverlayProps): React.JSX.Element;

interface TrustedByLogo {
    src: string;
    alt: string;
    width: number;
}
/** TrustedBySection.tsx: grayscale client-logo strip. */
interface TrustedByLogosProps {
    heading: string;
    logos: TrustedByLogo[];
}
declare function TrustedByLogos({ heading, logos }: TrustedByLogosProps): React.JSX.Element;

interface Step {
    title: string;
    body: string;
}
/**
 * Content is specific to a second, unrelated product line found in the
 * source; kept as a real, working organism but flagged in AUDIT.md #1 as
 * likely wrong-product content for a payments-platform page. No copy from
 * that product line is reused here — see the story for placeholder content.
 */
interface FourStepsSectionProps {
    heading: React.ReactNode;
    description: string;
    image: string;
    imageAlt: string;
    steps: Step[];
}
declare function FourStepsSection({ heading, description, image, imageAlt, steps }: FourStepsSectionProps): React.JSX.Element;

/** HomeContent.tsx "Single Integration" section (lines 179-227). */
interface SingleIntegrationSectionProps {
    eyebrow: string;
    heading: React.ReactNode;
    subheading: string;
    subheadingCaption: string;
    features: Array<Pick<IconFeatureItemProps, "icon" | "title" | "description" | "iconClassName">>;
    videoSrc: string;
}
declare function SingleIntegrationSection({ eyebrow, heading, subheading, subheadingCaption, features, videoSrc, }: SingleIntegrationSectionProps): React.JSX.Element;

interface PlatformFeature {
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
interface PlatformFeatureShowcaseProps {
    features: PlatformFeature[];
}
declare function PlatformFeatureShowcase({ features }: PlatformFeatureShowcaseProps): React.JSX.Element;

/** HomeContent.tsx Security section (lines 237-267). */
interface SecuritySectionProps {
    eyebrow: string;
    heading: React.ReactNode;
    description: string;
    schemeBadges: string[];
    cards: Array<Pick<IconCardProps, "icon" | "title" | "bullets" | "color">>;
}
declare function SecuritySection({ eyebrow, heading, description, schemeBadges, cards }: SecuritySectionProps): React.JSX.Element;

interface FloatingPaymentBadge {
    label: string;
    top: string;
    right: string;
    className: string;
}
/** HomeContent.tsx Global Coverage section (lines 270-316), incl. the decorative floating-badge graphic. */
interface GlobalCoverageSectionProps {
    eyebrow: string;
    heading: React.ReactNode;
    features: Array<Pick<IconFeatureItemProps, "icon" | "title" | "description" | "iconClassName">>;
    floatingBadges: FloatingPaymentBadge[];
}
declare function GlobalCoverageSection({ eyebrow, heading, features, floatingBadges }: GlobalCoverageSectionProps): React.JSX.Element;

interface DataLeverageItem {
    title: string;
    desc: string;
}
interface ReportingPeriod {
    month: string;
    status: string;
    date: string;
}
/** HomeContent.tsx Data Leverage section (lines 319-366), incl. the decorative dashboard-mock graphic. */
interface DataLeverageSectionProps {
    eyebrow: string;
    heading: React.ReactNode;
    description: string;
    items: DataLeverageItem[];
    reportingPeriods: ReportingPeriod[];
}
declare function DataLeverageSection({ eyebrow, heading, description, items, reportingPeriods }: DataLeverageSectionProps): React.JSX.Element;

/** HomeContent.tsx Stats panel (lines 369-387). */
interface StatsSectionProps {
    heading: React.ReactNode;
    description: string;
    stats: Array<Pick<StatBlockProps, "value" | "label" | "eyebrow">>;
}
declare function StatsSection({ heading, description, stats }: StatsSectionProps): React.JSX.Element;

interface IndustryEntry {
    name: string;
    backgroundColor: string;
    image: string;
    description: string;
}
/**
 * HomeContent.tsx sticky full-bleed industries stack (lines 390-427).
 * See AUDIT.md "Industries — same data, two different layouts": this and
 * IndustriesGridSection render the same kind of data via two different,
 * both-real layouts — flagged as a likely unresolved A/B leftover.
 */
interface IndustriesStackedSectionProps {
    eyebrow: string;
    heading: React.ReactNode;
    industries: IndustryEntry[];
    ctaLabel?: string;
    onCtaClick?: (industry: IndustryEntry) => void;
}
declare function IndustriesStackedSection({ eyebrow, heading, industries, ctaLabel, onCtaClick }: IndustriesStackedSectionProps): React.JSX.Element;

/**
 * IndustriesGridA.tsx: 3-up grid of industry cards over the same shape of
 * data as IndustriesStackedSection. See AUDIT.md dedup note — kept as a
 * separate organism because the layout genuinely differs, flagged as a
 * likely A/B leftover to resolve in the harmonization pass.
 */
interface IndustriesGridSectionProps {
    eyebrow: string;
    heading: React.ReactNode;
    industries: IndustryEntry[];
    ctaLabel?: string;
    onCtaClick?: (industry: IndustryEntry) => void;
}
declare function IndustriesGridSection({ eyebrow, heading, industries, ctaLabel, onCtaClick }: IndustriesGridSectionProps): React.JSX.Element;

interface OverlapCardEntry {
    title: string;
    description: string;
    image: string;
    backgroundColor: string;
    primaryCta: OverlapCardCta;
    secondaryCta: OverlapCardCta;
}
/**
 * Autopay DS2's "Overlapping cards" base section (see
 * DS2-HARMONIZATION.md #8): a sticky, scroll-activated card stack, generic
 * enough to host any promotional pairing. The sticky mechanism mirrors
 * IndustriesStackedSection's, but the data shape is content-agnostic (no
 * "industry" fields) and each card carries two CTAs, matching DS2's own
 * "Buy now" / "See more" example rather than IndustryCard's single CTA.
 */
interface OverlappingCardsSectionProps {
    eyebrow: string;
    heading: React.ReactNode;
    cards: OverlapCardEntry[];
}
declare function OverlappingCardsSection({ eyebrow, heading, cards }: OverlappingCardsSectionProps): React.JSX.Element;

/**
 * HomeContent.tsx Contact section + form (lines 433-473). The source form is
 * uncontrolled and calls `e.preventDefault()` with no real submit logic —
 * `onSubmit` here defaults to the same no-op, matching the source rather
 * than inventing a submission flow that was never there. See AUDIT.md #8.
 */
interface ContactSectionProps {
    heading: React.ReactNode;
    description: string;
    formHeading: string;
    consentText: React.ReactNode;
    controllerText: React.ReactNode;
    submitLabel?: string;
    onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}
declare function ContactSection({ heading, description, formHeading, consentText, controllerText, submitLabel, onSubmit, }: ContactSectionProps): React.JSX.Element;

interface FaqEntry {
    question: string;
    answer: React.ReactNode;
}
/** FaqSection.tsx: heading + Accordion of FaqItems. */
interface FaqAccordionSectionProps {
    heading: string;
    entries: FaqEntry[];
}
declare function FaqAccordionSection({ heading, entries }: FaqAccordionSectionProps): React.JSX.Element;

/**
 * Originally a promotional footer CTA from a second, unrelated product line
 * found in the source (image background + two CTAs, plus a nested lime
 * promo card) — see AUDIT.md #1 for the product-mixing flag. No copy from
 * that product line is reused here; all content is passed in via props.
 */
interface PromoCtaSectionProps {
    backgroundImage: string;
    heading: React.ReactNode;
    primaryCta: {
        label: string;
        href: string;
    };
    secondaryCta: {
        label: string;
        href: string;
        external?: boolean;
    };
    logoSrc: string;
    logoAlt: string;
    promoText: React.ReactNode;
    copyrightText: string;
    privacyLabel: string;
    privacyHref: string;
}
declare function PromoCtaSection({ backgroundImage, heading, primaryCta, secondaryCta, logoSrc, logoAlt, promoText, copyrightText, privacyLabel, privacyHref, }: PromoCtaSectionProps): React.JSX.Element;

/**
 * Verbatim, unmodified ConsentManager (consentmanager.net) autoblocking
 * loader running in production on autopaylab.com, cmp_cdid
 * "136af463a10ba". Ported here as a deliberate exception, per the
 * maintainer: every other component in this package is built and styled by
 * us; this one is a real cookie-consent legal obligation that must not be
 * redesigned or reimplemented, only reused byte-for-byte. See README
 * "Known limitations" and AUDIT.md for why it doesn't fit the usual
 * atomic-design mold.
 *
 * The visible banner/modal is rendered by ConsentManager's own
 * remote-hosted script and iframe, configured on their dashboard — not by
 * any markup or CSS in this codebase, so there's no meaningful visual
 * Storybook preview.
 *
 * In real usage (a Next.js Server Component, as in autopaylab-landing's
 * root layout), this ships as part of the server-rendered HTML document —
 * browsers execute a `<script>` that's present in parsed page markup
 * normally, which is what makes the banner actually load in production.
 * Mounted via pure client-side rendering instead (Storybook, this
 * package's own axe test suite, or a mistaken client-component usage),
 * the exact same JSX takes React's `dangerouslySetInnerHTML` →
 * `Element.innerHTML` path, and a script assigned that way is marked
 * "already started" per the HTML spec and never executes — confirmed
 * empirically (zero network requests fire when this story mounts). React
 * itself will log a benign console warning in that case ("Encountered a
 * script tag while rendering React component... never executed when
 * rendering on the client") — expected, not a sign of misconfiguration,
 * just a reminder this only does its job server-rendered.
 *
 * `cmp_cdid` is tied to Autopay's specific ConsentManager account and
 * domain registration. Reusing this component only makes sense for other
 * autopaylab.com pages under the same legal entity / consent record — NOT
 * for an unrelated site, which would need its own cdid from its own
 * ConsentManager account. Do not change this value when reusing the
 * component; if a genuinely different property needs a consent banner, it
 * needs its own ConsentManager setup, not this one repointed.
 *
 * Two fixes were applied, once, to the vendor snippet as originally pasted
 * into chat (carried forward unchanged from the original port in
 * autopaylab-landing/src/lib/consent-manager-script.ts):
 * 1. Two occurrences of a bare `_` variable (used for the GPP regulation
 *    key, declared as `_=c("gppkey")` and read back via `h(_)`) were
 *    missing from the pasted text — almost certainly eaten by chat
 *    markdown treating a lone underscore as an emphasis marker, since the
 *    snippet wasn't pasted in a fenced code block. Left as pasted, this is
 *    a hard JavaScript syntax error that would have thrown immediately and
 *    the whole banner would never have loaded. Both restored; nothing else
 *    in the vendor snippet was changed.
 * 2. A small IIFE reads the already-chosen locale out of `localStorage`
 *    and sets `window.cmp_setlang` before the loader runs, so the banner
 *    opens in whichever language the site is currently showing rather than
 *    the visitor's browser language. `cmp_setlang` is an existing hook
 *    read by the loader's own `cmp_getlangs()`, not an invented API. This
 *    only fixes the language at initial load/banner-open; if
 *    ConsentManager exposes a way to re-language an already-open banner on
 *    the fly it isn't in this snippet, so toggling locale while the banner
 *    is already open won't retranslate it without a refresh.
 */
interface CookieConsentScriptProps {
    /**
     * localStorage key holding the current UI locale ("pl", else treated as
     * "en"), read once before the CMP loader boots. Defaults to
     * "autopaylab-locale" — the exact key autopaylab-landing's own
     * LocaleProvider uses today, so the default reproduces production
     * behavior unchanged. This is the one piece of plumbing that had to be
     * adapted for portability (the original imported the constant directly
     * from an app-local i18n module that doesn't exist in this package) —
     * the CMP script content itself is untouched. Override only if a
     * different consuming app stores its locale under a different key; if
     * the key is never set, the banner just falls back to the visitor's
     * browser language — a harmless degrade, not a break.
     */
    localeStorageKey?: string;
}
declare function buildCookieConsentScript({ localeStorageKey }?: CookieConsentScriptProps): string;
/**
 * Renders the loader as a raw `<script>` tag. Must be the very first thing
 * inside `<body>`, before anything else can set cookies or run tracking
 * scripts — a hard ordering requirement from ConsentManager, not a style
 * preference:
 *
 * ```tsx
 * <body>
 *   <CookieConsentScript />
 *   <Script id="matomo-analytics" strategy="afterInteractive" ... />
 *   {children}
 * </body>
 * ```
 */
declare function CookieConsentScript(props?: CookieConsentScriptProps): React.JSX.Element;

export { ContactSection, type ContactSectionProps, CookieConsentScript, type CookieConsentScriptProps, type DataLeverageItem, DataLeverageSection, type DataLeverageSectionProps, FaqAccordionSection, type FaqAccordionSectionProps, type FaqEntry, type FloatingPaymentBadge, FourStepsSection, type FourStepsSectionProps, GlobalCoverageSection, type GlobalCoverageSectionProps, HeroImageOverlay, type HeroImageOverlayProps, HeroVideoSplit, type HeroVideoSplitProps, IndustriesGridSection, type IndustriesGridSectionProps, IndustriesStackedSection, type IndustriesStackedSectionProps, type IndustryEntry, type OverlapCardEntry, OverlappingCardsSection, type OverlappingCardsSectionProps, type PlatformFeature, PlatformFeatureShowcase, type PlatformFeatureShowcaseProps, PromoCtaSection, type PromoCtaSectionProps, type ReportingPeriod, SecuritySection, type SecuritySectionProps, SingleIntegrationSection, type SingleIntegrationSectionProps, StatsSection, type StatsSectionProps, type Step, type TrustedByLogo, TrustedByLogos, type TrustedByLogosProps, buildCookieConsentScript };

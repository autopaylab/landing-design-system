export { F as Footer, a as FooterNavItem, b as FooterProps, c as FooterSocialLink, N as NavItem, d as Navbar, e as NavbarProps } from '../Footer-8cnZzh6n.js';
import * as React from 'react';
import { c as IconFeatureItemProps, a as IconCardProps, g as StatBlockProps, d as OverlapCardCta, f as PricingTierProps } from '../OverlapCard-EL2fbRPF.js';
import { b as SelectOption } from '../Select-CmdSVFIc.js';
import 'class-variance-authority/types';
import 'class-variance-authority';

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
 * `cmp_cdid` is tied to a specific ConsentManager account and domain
 * registration — it identifies which ConsentManager "website" config (its
 * consent scope, banner design, vendor list) actually loads. It defaults to
 * Autopay's own autopaylab.com value ("136af463a10ba"), which is correct
 * for any page living under that same registered domain/consent scope (see
 * ConsentManager's own dashboard for what `consentscope` covers). It is
 * almost certainly WRONG for a page on an unrelated domain, which needs its
 * own cdid from its own ConsentManager account — passing the wrong one
 * either shows the wrong banner/policy or, worse, silently gates consent
 * against a config that was never meant to cover that domain. That's why
 * `buildCookieConsentScript`/`CookieConsentScript` log a one-time
 * console warning whenever `cmpCdid` is left at its default — treat that
 * warning as a prompt to actually verify, not as noise to suppress.
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
    /**
     * ConsentManager `cmp_cdid` — which ConsentManager account/website config
     * this banner loads. Defaults to Autopay's own autopaylab.com value,
     * correct for any page sharing that domain's consent scope. Override it
     * ONLY after confirming the right id with whoever administers
     * ConsentManager for the domain this page actually lives on — see the
     * file-level doc comment above. Leaving it at the default logs a
     * one-time console warning as a reminder to make that check, not because
     * anything is actually broken.
     */
    cmpCdid?: string;
}
declare function buildCookieConsentScript({ localeStorageKey, cmpCdid, }?: CookieConsentScriptProps): string;
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

interface PricingFootnote {
    value: string;
    label: string;
}
/**
 * A tiered pricing table. New pattern, not an extraction — see
 * AUDIT.md #17/#19: real autopay.pl landing pages (e.g.
 * /lp/platnosci-online-1) have this exact shape (3 tiers, one featured,
 * small-print footnotes below) with no prior equivalent in this package.
 */
interface PricingSectionProps {
    eyebrow?: string;
    heading: React.ReactNode;
    tiers: PricingTierProps[];
    /** Small-print grid below the tiers, e.g. "49 zł" / "aktywacja", "0 zł" / "zwroty". */
    footnotes?: PricingFootnote[];
}
declare function PricingSection({ eyebrow, heading, tiers, footnotes }: PricingSectionProps): React.JSX.Element;

interface AudienceScenario {
    title: string;
    description: string;
}
/**
 * A "which scenario fits you" segment picker — plain cards, no icon/image/
 * CTA per card (unlike IndustriesGridSection, which assumes all three). New
 * pattern, not an extraction — see AUDIT.md #17/#20: autopay.pl's
 * /lp/platnosci-online-1 ("Dla kogo jest Autopay" — masz już sklep /
 * startujesz z nowym sklepem / skalujesz biznes) has this exact shape with
 * no prior equivalent in this package.
 */
interface AudienceScenariosSectionProps {
    eyebrow?: string;
    heading: React.ReactNode;
    description?: string;
    scenarios: AudienceScenario[];
}
declare function AudienceScenariosSection({ eyebrow, heading, description, scenarios }: AudienceScenariosSectionProps): React.JSX.Element;

type LeadFormField = {
    kind: "text";
    name: string;
    label: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
} | {
    kind: "textarea";
    name: string;
    label: string;
    placeholder?: string;
    rows?: number;
    required?: boolean;
} | {
    kind: "select";
    name: string;
    label: string;
    placeholder?: string;
    options: SelectOption[];
    required?: boolean;
};
/**
 * A composable lead-generation form — unlike `ContactSection` (a faithful,
 * fixed-field extraction of one specific source form, see AUDIT.md #17/#21),
 * this renders whatever `fields` you pass. Built because real autopay.pl
 * forms vary a lot: /lp/platnosci-online-1 has name/email/phone/NIP/message,
 * /lp/payfac-08 has name/email/company/phone plus 4 dropdowns — neither
 * fits ContactSection's hardcoded 4 fields, and retrofitting that organism
 * would blur the line between "faithful extraction" and "new capability".
 * All fields render full-width, single-column — every real form audited
 * uses that layout (not a first-name/last-name split row).
 */
interface LeadFormSectionProps {
    heading: React.ReactNode;
    description?: string;
    formHeading: string;
    fields: LeadFormField[];
    consentText: React.ReactNode;
    controllerText?: React.ReactNode;
    submitLabel?: string;
    onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}
declare function LeadFormSection({ heading, description, formHeading, fields, consentText, controllerText, submitLabel, onSubmit, }: LeadFormSectionProps): React.JSX.Element;

interface ComparisonPath {
    name: string;
    /** A short duration label shown next to the name, e.g. "kilkanaście miesięcy". */
    duration: string;
    steps: string[];
    caption: string;
    /** The faster/recommended path — step pills use the brand accent instead of a plain dark fill. */
    highlighted?: boolean;
}
/**
 * Two (or more) step-by-step paths compared side by side, each with its own
 * duration badge. New pattern, not an extraction — see AUDIT.md #17/#22:
 * autopay.pl/lp/payfac-08's "Dwie drogi do startu" (principal membership,
 * kilkanaście miesięcy, 5 steps vs. PayFac z Autopay, kilka miesięcy,
 * 5 steps) has no equivalent anywhere in this package — `FourStepsSection`
 * renders one linear sequence, not two compared against each other.
 */
interface ComparisonTimelineSectionProps {
    eyebrow?: string;
    heading: React.ReactNode;
    /** A short standout line above the paths, e.g. "60–80% szybciej niż principal membership". */
    highlight?: string;
    paths: ComparisonPath[];
}
declare function ComparisonTimelineSection({ eyebrow, heading, highlight, paths }: ComparisonTimelineSectionProps): React.JSX.Element;

interface PositioningOption {
    eyebrow: string;
    title: string;
    description: string;
    /** The option matching the reader's current position — gets a border highlight and a "you are here" pill. */
    current?: boolean;
}
/**
 * A 3-(or more)-way "where do you fit" comparison, one option highlighted
 * as the reader's current position. New pattern, not an extraction — see
 * AUDIT.md #17/#23: autopay.pl/lp/payfac-08's ISO / PayFac / Acquirer
 * spectrum (with a "Jesteś tutaj" pill on the middle option) has no
 * equivalent anywhere in this package.
 */
interface PositioningSpectrumSectionProps {
    eyebrow?: string;
    heading: React.ReactNode;
    options: PositioningOption[];
    /** Label on the highlighted option's pill, e.g. "Jesteś tutaj". Defaults to "You are here". */
    currentLabel?: string;
}
declare function PositioningSpectrumSection({ eyebrow, heading, options, currentLabel, }: PositioningSpectrumSectionProps): React.JSX.Element;

interface RequirementItem {
    label: string;
    /** Marks this row with a trailing "*" for a footnote reference. */
    hasFootnote?: boolean;
}
/**
 * A numbered checklist on a dark background, each row ending in a
 * checkmark — distinct from `BulletItem`'s plain light-background bullet.
 * New pattern, not an extraction — see AUDIT.md #17/#24:
 * autopay.pl/lp/payfac-08's "Czego to naprawdę wymaga" (6 numbered
 * responsibility areas, each with a checkmark) has no equivalent anywhere
 * in this package.
 */
interface RequirementsChecklistSectionProps {
    eyebrow?: string;
    heading: React.ReactNode;
    description?: string;
    items: RequirementItem[];
    /** A closing line below the list, e.g. "Każdy obszar wymaga własnych zespołów...". */
    caption?: string;
    /** The footnote text referenced by items with `hasFootnote`. */
    footnote?: React.ReactNode;
}
declare function RequirementsChecklistSection({ eyebrow, heading, description, items, caption, footnote, }: RequirementsChecklistSectionProps): React.JSX.Element;

interface CostComponent {
    title: string;
    description: string;
    /** Optional trailing link, e.g. "uzgodniona z Tobą →". */
    linkLabel?: string;
    linkHref?: string;
}
/**
 * An additive cost-breakdown "formula" — boxes joined by "+", each one
 * component of the total price. New pattern, not an extraction — see
 * AUDIT.md #17/#25: autopay.pl/lp/payfac-08's "Przejrzysty cennik IC++"
 * (Interchange + card-scheme fees + Autopay margin) has no equivalent
 * anywhere in this package — `PricingSection` is tiered plans, not an
 * additive formula.
 */
interface CostBreakdownSectionProps {
    eyebrow?: string;
    heading: React.ReactNode;
    description?: string;
    components: CostComponent[];
}
declare function CostBreakdownSection({ eyebrow, heading, description, components }: CostBreakdownSectionProps): React.JSX.Element;

export { type AudienceScenario, AudienceScenariosSection, type AudienceScenariosSectionProps, type ComparisonPath, ComparisonTimelineSection, type ComparisonTimelineSectionProps, ContactSection, type ContactSectionProps, CookieConsentScript, type CookieConsentScriptProps, CostBreakdownSection, type CostBreakdownSectionProps, type CostComponent, type DataLeverageItem, DataLeverageSection, type DataLeverageSectionProps, FaqAccordionSection, type FaqAccordionSectionProps, type FaqEntry, type FloatingPaymentBadge, FourStepsSection, type FourStepsSectionProps, GlobalCoverageSection, type GlobalCoverageSectionProps, HeroImageOverlay, type HeroImageOverlayProps, HeroVideoSplit, type HeroVideoSplitProps, IndustriesGridSection, type IndustriesGridSectionProps, IndustriesStackedSection, type IndustriesStackedSectionProps, type IndustryEntry, type LeadFormField, LeadFormSection, type LeadFormSectionProps, type OverlapCardEntry, OverlappingCardsSection, type OverlappingCardsSectionProps, type PlatformFeature, PlatformFeatureShowcase, type PlatformFeatureShowcaseProps, type PositioningOption, PositioningSpectrumSection, type PositioningSpectrumSectionProps, type PricingFootnote, PricingSection, type PricingSectionProps, PromoCtaSection, type PromoCtaSectionProps, type ReportingPeriod, type RequirementItem, RequirementsChecklistSection, type RequirementsChecklistSectionProps, SecuritySection, type SecuritySectionProps, SingleIntegrationSection, type SingleIntegrationSectionProps, StatsSection, type StatsSectionProps, type Step, type TrustedByLogo, TrustedByLogos, type TrustedByLogosProps, buildCookieConsentScript };

export { F as Footer, a as FooterNavItem, b as FooterProps, c as FooterSocialLink, N as NavItem, d as Navbar, e as NavbarProps } from '../Footer-BwJA9-2z.js';
import * as React from 'react';
import { c as IconFeatureItemProps, a as IconCardProps, d as StatBlockProps } from '../IconCard-C24oi4uU.js';

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

export { ContactSection, type ContactSectionProps, type DataLeverageItem, DataLeverageSection, type DataLeverageSectionProps, FaqAccordionSection, type FaqAccordionSectionProps, type FaqEntry, type FloatingPaymentBadge, FourStepsSection, type FourStepsSectionProps, GlobalCoverageSection, type GlobalCoverageSectionProps, HeroImageOverlay, type HeroImageOverlayProps, HeroVideoSplit, type HeroVideoSplitProps, IndustriesGridSection, type IndustriesGridSectionProps, IndustriesStackedSection, type IndustriesStackedSectionProps, type IndustryEntry, type PlatformFeature, PlatformFeatureShowcase, type PlatformFeatureShowcaseProps, PromoCtaSection, type PromoCtaSectionProps, type ReportingPeriod, SecuritySection, type SecuritySectionProps, SingleIntegrationSection, type SingleIntegrationSectionProps, StatsSection, type StatsSectionProps, type Step, type TrustedByLogo, TrustedByLogos, type TrustedByLogosProps };

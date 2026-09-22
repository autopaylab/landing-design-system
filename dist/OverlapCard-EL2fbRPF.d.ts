import * as React from 'react';
import { a as ButtonProps } from './Select-CmdSVFIc.js';

interface PricingTierProps {
    name: string;
    /** The headline price, e.g. "29,99 zł", "1,19% + 0,34 zł", or "Dopasowany" for a custom/contact-us tier. */
    price: string;
    /** Text after the price, e.g. "/m-c". */
    priceSuffix?: string;
    /** Small print under the price, e.g. "przy płatności rocznej". */
    priceNote?: string;
    description: string;
    features: string[];
    ctaLabel: string;
    onCtaClick?: () => void;
    ctaVariant?: ButtonProps["variant"];
    /** Highlights this tier as the recommended one (border, shadow, ribbon badge). */
    featured?: boolean;
    /** Ribbon text shown above a featured tier, e.g. "NAJPOPULARNIEJSZY". */
    badgeLabel?: string;
}
/**
 * One card in a `PricingSection` tiered-pricing table. New pattern, not an
 * extraction — see AUDIT.md #17/#19: real autopay.pl landing pages
 * (e.g. /lp/platnosci-online-1) have a 3-tier pricing table with no prior
 * equivalent anywhere in this package.
 */
declare function PricingTier({ name, price, priceSuffix, priceNote, description, features, ctaLabel, onCtaClick, ctaVariant, featured, badgeLabel, }: PricingTierProps): React.JSX.Element;

/** One tile from the Stats section grid in HomeContent.tsx ("UP TO" + value + label). */
interface StatBlockProps extends React.HTMLAttributes<HTMLDivElement> {
    eyebrow?: string;
    value: string;
    label: string;
}
declare function StatBlock({ className, eyebrow, value, label, ...props }: StatBlockProps): React.JSX.Element;

/**
 * The icon+title+description row repeated 6× across "Single Integration"
 * and "Global Coverage" in HomeContent.tsx (identical structure, only the
 * icon/copy changed at each call site).
 */
interface IconFeatureItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
    icon: React.ComponentType<{
        className?: string;
    }>;
    title: string;
    description: string;
    /** Icon color as observed on the page — an ad hoc oklch literal, not a semantic token. See AUDIT.md #10. */
    iconClassName?: string;
    /**
     * The source always rendered this as an h4, but that's only correct when
     * an h3 already sits between it and the section's h2 (true in
     * SingleIntegrationSection, where "Single API for everything" is an h3).
     * GlobalCoverageSection has no such h3, so its list needs `headingLevel="h3"`
     * or axe's heading-order check (rightly) flags a skipped level. See
     * AUDIT.md section 6.
     */
    headingLevel?: "h3" | "h4";
}
declare function IconFeatureItem({ className, icon: Icon, title, description, iconClassName, headingLevel, ...props }: IconFeatureItemProps): React.JSX.Element;

/** One of the 4 Security cards in HomeContent.tsx: icon-in-gradient-tile + title + bullet list. */
interface IconCardProps extends React.HTMLAttributes<HTMLDivElement> {
    icon: React.ComponentType<{
        className?: string;
    }>;
    title: string;
    bullets: string[];
    /** Gradient tile base color, as observed (ad hoc oklch/var literal). See AUDIT.md #10. */
    color: string;
}
declare function IconCard({ className, icon: Icon, title, bullets, color, ...props }: IconCardProps): React.JSX.Element;

/**
 * Generic, content-agnostic promo card for a sticky overlapping-cards stack
 * (Autopay DS2's "Overlapping cards" base section — see
 * DS2-HARMONIZATION.md #8). Unlike IndustryCard (one CTA, industry-specific
 * data shape), this carries two independent CTAs and no domain-specific
 * fields, so it can host any promotional pairing (e.g. "Buy now" / "See
 * more"), not just an industry use case.
 */
interface OverlapCardCta {
    label: string;
    onClick?: () => void;
}
interface OverlapCardProps extends React.HTMLAttributes<HTMLElement> {
    title: string;
    description: string;
    image: string;
    /** Background color, e.g. a CSS color literal or "var(--retail)". Caller-supplied, same convention as IndustryCard. */
    backgroundColor: string;
    primaryCta: OverlapCardCta;
    secondaryCta: OverlapCardCta;
}
declare function OverlapCard({ className, title, description, image, backgroundColor, primaryCta, secondaryCta, style, ...props }: OverlapCardProps): React.JSX.Element;

export { IconCard as I, OverlapCard as O, PricingTier as P, StatBlock as S, type IconCardProps as a, IconFeatureItem as b, type IconFeatureItemProps as c, type OverlapCardCta as d, type OverlapCardProps as e, type PricingTierProps as f, type StatBlockProps as g };

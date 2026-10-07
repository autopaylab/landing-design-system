import * as React from 'react';

interface NavItem {
    label: string;
    href: string;
}
/**
 * A single primary call to action rendered as a real link (not a click
 * handler), for landing pages whose only header action is "go to the form".
 * New, not extracted -- a consuming landing page (paytalkpl) needed one CTA
 * instead of the source's Login/Sign In pair.
 */
interface NavbarCta {
    label: string;
    href: string;
}
/**
 * A language switch that navigates to the other locale's URL. New, not
 * extracted: the source's language control is a button with an onClick,
 * which can't carry `hreflang` and isn't crawlable. `srLabel` is appended
 * as visually hidden text, so the accessible name still starts with the
 * visible label (WCAG 2.5.3 Label in Name), e.g. "EN" + " (English version)".
 */
interface NavbarLanguageLink {
    label: string;
    href: string;
    hrefLang: string;
    /** Language of the link text itself, e.g. "en" on a Polish page. */
    lang?: string;
    srLabel?: string;
}
/** SiteHeader.tsx: sticky pill navbar, logo, nav links, Login/Sign In, language switcher. */
interface NavbarProps {
    logoSrc: string;
    logoAlt: string;
    homeHref?: string;
    navItems: NavItem[];
    loginLabel?: string;
    onLoginClick?: () => void;
    signInLabel?: string;
    onSignInClick?: () => void;
    /**
     * Defaults to true, matching the source. Set to false on pages that have
     * no accounts to log into, so the Login/Sign In pair isn't shown as
     * competing calls to action.
     */
    showAuthButtons?: boolean;
    cta?: NavbarCta;
    /** e.g. a flag emoji or short region code, as observed on the page ("🇬🇧"). */
    languageLabel?: React.ReactNode;
    onLanguageClick?: () => void;
    /** Accessible name for the language button — the visible label alone (a flag/code) isn't a name assistive tech can announce. */
    languageButtonAriaLabel?: string;
    /** Link-based alternative to `languageLabel`/`onLanguageClick`. When set, the language button is not rendered. */
    languageLink?: NavbarLanguageLink;
    /** Accessible name for the primary nav landmark, so it's distinguishable from other <nav> regions (e.g. a footer nav) on the same page. */
    navAriaLabel?: string;
    /** Accessible name for the mobile menu toggle button when the menu is closed. */
    openMenuAriaLabel?: string;
    /** Accessible name for the mobile menu toggle button when the menu is open. */
    closeMenuAriaLabel?: string;
}
declare function Navbar({ logoSrc, logoAlt, homeHref, navItems, loginLabel, onLoginClick, signInLabel, onSignInClick, showAuthButtons, cta, languageLabel, onLanguageClick, languageButtonAriaLabel, languageLink, navAriaLabel, openMenuAriaLabel, closeMenuAriaLabel, }: NavbarProps): React.JSX.Element;

/**
 * A footer link, or -- with `onClick` and no `href` -- a button styled as a
 * link. The button form is new, not extracted: a consuming landing page
 * (paytalkpl) needed a "Cookie settings" entry that reopens the consent
 * manager's panel, which is an action, not a navigation.
 */
interface FooterNavItem {
    label: string;
    href?: string;
    onClick?: () => void;
}
interface FooterSocialLink {
    label: string;
    href: string;
    icon: React.ComponentType<{
        className?: string;
    }>;
}
/**
 * SiteFooter.tsx: CTA banner over a photo, lime footer body, legal row.
 *
 * The banner is optional (new, not extracted): without `bannerImage` it isn't
 * rendered and the lime body gets the full rounded shape, for pages that have
 * no photo and no second call to action to put there.
 */
interface FooterProps {
    ctaHeading?: React.ReactNode;
    ctaSubheading?: React.ReactNode;
    /** Background image URL for the CTA banner. Omit to render the footer without the banner. */
    bannerImage?: string;
    logoSrc: string;
    logoAlt: string;
    /** Optional second logo next to the first, e.g. the parent brand of a product wordmark. New, not extracted. */
    secondaryLogoSrc?: string;
    secondaryLogoAlt?: string;
    socialLinks?: FooterSocialLink[];
    tagline: React.ReactNode;
    navItems: FooterNavItem[];
    address: React.ReactNode;
    legalText: React.ReactNode;
    schemeBadges?: string[];
    /** Accessible name for the footer nav landmark, so it's distinguishable from other <nav> regions (e.g. the header nav) on the same page. */
    navAriaLabel?: string;
}
declare function Footer({ ctaHeading, ctaSubheading, bannerImage, logoSrc, logoAlt, secondaryLogoSrc, secondaryLogoAlt, socialLinks, tagline, navItems, address, legalText, schemeBadges, navAriaLabel, }: FooterProps): React.JSX.Element;

export { Footer as F, type NavItem as N, type FooterNavItem as a, type FooterProps as b, type FooterSocialLink as c, Navbar as d, type NavbarCta as e, type NavbarLanguageLink as f, type NavbarProps as g };

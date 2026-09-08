import * as React from 'react';

interface NavItem {
    label: string;
    href: string;
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
    /** e.g. a flag emoji or short region code, as observed on the page ("🇬🇧"). */
    languageLabel?: React.ReactNode;
    onLanguageClick?: () => void;
}
declare function Navbar({ logoSrc, logoAlt, homeHref, navItems, loginLabel, onLoginClick, signInLabel, onSignInClick, languageLabel, onLanguageClick, }: NavbarProps): React.JSX.Element;

interface FooterNavItem {
    label: string;
    href: string;
}
interface FooterSocialLink {
    label: string;
    href: string;
    icon: React.ComponentType<{
        className?: string;
    }>;
}
/** SiteFooter.tsx: CTA banner over a photo, lime footer body, legal row. */
interface FooterProps {
    ctaHeading: React.ReactNode;
    ctaSubheading: React.ReactNode;
    /** Background image URL for the CTA banner. */
    bannerImage: string;
    logoSrc: string;
    logoAlt: string;
    socialLinks: FooterSocialLink[];
    tagline: React.ReactNode;
    navItems: FooterNavItem[];
    address: React.ReactNode;
    legalText: React.ReactNode;
    schemeBadges: string[];
}
declare function Footer({ ctaHeading, ctaSubheading, bannerImage, logoSrc, logoAlt, socialLinks, tagline, navItems, address, legalText, schemeBadges, }: FooterProps): React.JSX.Element;

export { Footer as F, type NavItem as N, type FooterNavItem as a, type FooterProps as b, type FooterSocialLink as c, Navbar as d, type NavbarProps as e };

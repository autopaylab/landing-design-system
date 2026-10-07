import * as React from "react";

import { Link } from "@/atoms/Link";
import { Logo } from "@/atoms/Logo";

/**
 * A footer link, or -- with `onClick` and no `href` -- a button styled as a
 * link. The button form is new, not extracted: a consuming landing page
 * (paytalkpl) needed a "Cookie settings" entry that reopens the consent
 * manager's panel, which is an action, not a navigation.
 */
export interface FooterNavItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface FooterSocialLink {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

/**
 * SiteFooter.tsx: CTA banner over a photo, lime footer body, legal row.
 *
 * The banner is optional (new, not extracted): without `bannerImage` it isn't
 * rendered and the lime body gets the full rounded shape, for pages that have
 * no photo and no second call to action to put there.
 */
export interface FooterProps {
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

export function Footer({
  ctaHeading,
  ctaSubheading,
  bannerImage,
  logoSrc,
  logoAlt,
  secondaryLogoSrc,
  secondaryLogoAlt,
  socialLinks = [],
  tagline,
  navItems,
  address,
  legalText,
  schemeBadges = [],
  navAriaLabel = "Footer",
}: FooterProps) {
  return (
    <footer className="mt-24">
      {bannerImage && (
        <section className="relative mx-4 overflow-hidden rounded-t-3xl md:mx-8">
          <div
            className="relative min-h-[420px] bg-cover bg-center md:min-h-[520px]"
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15)), url('${bannerImage}')` }}
          >
            <div className="absolute inset-0 grid grid-cols-1 items-start gap-8 px-8 py-12 md:grid-cols-2 md:px-16 md:py-16">
              <h3 className="font-display text-h2 text-white">{ctaHeading}</h3>
              <p className="font-display text-3xl text-white md:text-right md:text-[44px]">{ctaSubheading}</p>
            </div>
          </div>
        </section>
      )}

      <section
        className={`mx-4 ${bannerImage ? "rounded-b-3xl" : "rounded-3xl"} bg-lime px-8 py-10 text-lime-foreground md:mx-8 md:px-16`}
      >
        <div className="flex items-start justify-between gap-8">
          <div className="flex flex-wrap items-center gap-6">
            <Logo src={logoSrc} alt={logoAlt} size="sm" />
            {secondaryLogoSrc && <Logo src={secondaryLogoSrc} alt={secondaryLogoAlt ?? ""} size="sm" />}
          </div>
          <div className="flex gap-4">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} aria-label={label} className="hover:opacity-70">
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-10 grid items-end gap-8 md:grid-cols-[1.4fr_2fr_1fr]">
          <p className="font-display text-3xl leading-[1.1] md:text-[38px]">{tagline}</p>
          <nav aria-label={navAriaLabel} className="flex flex-wrap items-end gap-x-10 gap-y-3 text-base font-medium">
            {navItems.map((item) =>
              item.onClick && !item.href ? (
                <Link key={item.label} asChild variant="underline">
                  <button type="button" onClick={item.onClick} className="cursor-pointer">
                    {item.label}
                  </button>
                </Link>
              ) : (
                <Link key={item.label} variant="underline" href={item.href} onClick={item.onClick}>
                  {item.label}
                </Link>
              ),
            )}
          </nav>
          <address className="text-sm not-italic leading-relaxed md:text-right">{address}</address>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-lime-foreground/20 pt-5 text-xs">
          <span>{legalText}</span>
          <div className="flex items-center gap-4 opacity-80">
            {schemeBadges.map((badge) => (
              <span key={badge} className="font-bold">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>
    </footer>
  );
}

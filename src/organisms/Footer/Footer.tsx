import * as React from "react";

import { Link } from "@/atoms/Link";
import { Logo } from "@/atoms/Logo";

export interface FooterNavItem {
  label: string;
  href: string;
}

export interface FooterSocialLink {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

/** SiteFooter.tsx: CTA banner over a photo, lime footer body, legal row. */
export interface FooterProps {
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
  /** Accessible name for the footer nav landmark, so it's distinguishable from other <nav> regions (e.g. the header nav) on the same page. */
  navAriaLabel?: string;
}

export function Footer({
  ctaHeading,
  ctaSubheading,
  bannerImage,
  logoSrc,
  logoAlt,
  socialLinks,
  tagline,
  navItems,
  address,
  legalText,
  schemeBadges,
  navAriaLabel = "Footer",
}: FooterProps) {
  return (
    <footer className="mt-24">
      <section className="relative mx-4 overflow-hidden rounded-t-3xl md:mx-8">
        <div
          className="relative min-h-[420px] bg-cover bg-center md:min-h-[520px]"
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15)), url('${bannerImage}')` }}
        >
          <div className="absolute inset-0 grid grid-cols-1 items-start gap-8 px-8 py-12 md:grid-cols-2 md:px-16 md:py-16">
            <h3 className="font-display text-4xl leading-[1.05] text-white md:text-[56px]">{ctaHeading}</h3>
            <p className="font-display text-3xl text-white md:text-right md:text-[44px]">{ctaSubheading}</p>
          </div>
        </div>
      </section>

      <section className="mx-4 rounded-b-3xl bg-lime px-8 py-10 text-lime-foreground md:mx-8 md:px-16">
        <div className="flex items-start justify-between gap-8">
          <Logo src={logoSrc} alt={logoAlt} size="sm" />
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
            {navItems.map((item) => (
              <Link key={item.label} variant="underline" href={item.href}>
                {item.label}
              </Link>
            ))}
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

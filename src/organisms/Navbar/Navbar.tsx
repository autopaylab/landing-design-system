import * as React from "react";
import { ChevronDown, Menu, X } from "lucide-react";

import { Button } from "@/atoms/Button";
import { Link } from "@/atoms/Link";
import { Logo } from "@/atoms/Logo";

export interface NavItem {
  label: string;
  href: string;
}

/** SiteHeader.tsx: sticky pill navbar, logo, nav links, Login/Sign In, language switcher. */
export interface NavbarProps {
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
  /** Accessible name for the language button — the visible label alone (a flag/code) isn't a name assistive tech can announce. */
  languageButtonAriaLabel?: string;
  /** Accessible name for the primary nav landmark, so it's distinguishable from other <nav> regions (e.g. a footer nav) on the same page. */
  navAriaLabel?: string;
  /** Accessible name for the mobile menu toggle button when the menu is closed. */
  openMenuAriaLabel?: string;
  /** Accessible name for the mobile menu toggle button when the menu is open. */
  closeMenuAriaLabel?: string;
}

export function Navbar({
  logoSrc,
  logoAlt,
  homeHref = "#top",
  navItems,
  loginLabel = "Login",
  onLoginClick,
  signInLabel = "Sign In",
  onSignInClick,
  languageLabel,
  onLanguageClick,
  languageButtonAriaLabel = "Change language",
  navAriaLabel = "Primary",
  openMenuAriaLabel = "Open menu",
  closeMenuAriaLabel = "Close menu",
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuId = React.useId();

  return (
    <header className="sticky top-5 z-40 mx-auto w-full max-w-[1280px] px-6">
      <div className="rounded-xl bg-background shadow-[0_10px_40px_-12px_rgba(0,0,0,0.12)]">
        <div className="flex items-center justify-between gap-6 px-6 py-3">
          <a href={homeHref} className="flex items-center">
            <Logo src={logoSrc} alt={logoAlt} size="md" />
          </a>
          <nav aria-label={navAriaLabel} className="hidden flex-1 items-center justify-center gap-2 md:flex">
            {navItems.map((item) => (
              <Link key={item.label} variant="nav" href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              className="hidden px-6 py-2.5 text-[17px] md:inline-flex"
              onClick={onLoginClick}
            >
              {loginLabel}
            </Button>
            <Button type="button" variant="lime" className="hidden px-6 py-2.5 text-[17px] md:inline-flex" onClick={onSignInClick}>
              {signInLabel}
            </Button>
            {languageLabel && (
              <button
                type="button"
                onClick={onLanguageClick}
                aria-label={languageButtonAriaLabel}
                className="hidden items-center gap-1.5 rounded-lg pl-1 pr-2 py-1 text-foreground hover:bg-muted md:inline-flex"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg text-base">
                  {languageLabel}
                </span>
                <ChevronDown className="h-4 w-4" />
              </button>
            )}
            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label={isMenuOpen ? closeMenuAriaLabel : openMenuAriaLabel}
              aria-expanded={isMenuOpen}
              aria-controls={menuId}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground hover:bg-muted md:hidden"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <nav
            id={menuId}
            aria-label={navAriaLabel}
            className="flex flex-col gap-1 border-t border-border px-6 py-4 md:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                variant="nav"
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="py-2"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <Button type="button" variant="outline" className="w-full py-2.5 text-[17px]" onClick={onLoginClick}>
                {loginLabel}
              </Button>
              <Button type="button" variant="lime" className="w-full py-2.5 text-[17px]" onClick={onSignInClick}>
                {signInLabel}
              </Button>
            </div>
            {languageLabel && (
              <button
                type="button"
                onClick={onLanguageClick}
                aria-label={languageButtonAriaLabel}
                className="mt-3 inline-flex items-center gap-1.5 self-start rounded-lg pl-1 pr-2 py-1 text-foreground hover:bg-muted"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg text-base">
                  {languageLabel}
                </span>
                <ChevronDown className="h-4 w-4" />
              </button>
            )}
          </nav>
        )}
      </div>
    </header>
  );
}

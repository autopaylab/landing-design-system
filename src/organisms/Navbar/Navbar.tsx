import * as React from "react";
import { ChevronDown } from "lucide-react";

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
}: NavbarProps) {
  return (
    <header className="sticky top-5 z-40 mx-auto w-full max-w-[1280px] px-6">
      <div className="flex items-center justify-between gap-6 rounded-xl bg-background px-6 py-3 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.12)]">
        <a href={homeHref} className="flex items-center">
          <Logo src={logoSrc} alt={logoAlt} size="md" />
        </a>
        <nav className="hidden flex-1 items-center justify-center gap-2 md:flex">
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
          <Button type="button" variant="lime" className="px-6 py-2.5 text-[17px]" onClick={onSignInClick}>
            {signInLabel}
          </Button>
          {languageLabel && (
            <button
              type="button"
              onClick={onLanguageClick}
              className="hidden items-center gap-1.5 rounded-lg pl-1 pr-2 py-1 text-foreground hover:bg-muted md:inline-flex"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg text-base">
                {languageLabel}
              </span>
              <ChevronDown className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

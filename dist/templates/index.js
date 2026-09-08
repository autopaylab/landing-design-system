// src/organisms/Navbar/Navbar.tsx
import * as React3 from "react";
import { ChevronDown, Menu, X } from "lucide-react";

// src/atoms/Button/Button.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

// src/lib/cn.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/atoms/Button/Button.tsx
import { jsx } from "react/jsx-runtime";
var buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        /** Brand CTA — observed on every hero and the footer across the source page. */
        lime: "bg-lime text-lime-foreground transition-transform hover:scale-[1.02]",
        /** Light outline for use over dark hero-overlay imagery (secondary CTA on both hero-overlay variants). */
        "outline-inverse": "border border-background/40 text-background hover:bg-background/10",
        /** Neutral outline, used for header "Login" and industry-card "Learn more". */
        outline: "border border-border text-foreground hover:bg-muted",
        /** Solid dark button — contact form submit (HomeContent). */
        solid: "bg-foreground text-background hover:opacity-90",
        /** Unused-on-page shadcn defaults, kept because they're real declared variants, not invented. */
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 text-sm",
        sm: "h-8 px-3 text-xs",
        lg: "px-8 py-3.5 text-base",
        xs: "px-5 py-2.5 text-xs",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "lime",
      size: "default"
    }
  }
);
var Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";

// src/atoms/Link/Link.tsx
import * as React2 from "react";
import { cva as cva2 } from "class-variance-authority";
import { jsx as jsx2 } from "react/jsx-runtime";
var linkVariants = cva2("transition-colors", {
  variants: {
    variant: {
      underline: "hover:underline",
      nav: "rounded-lg px-5 py-2.5 text-[17px] font-medium text-foreground hover:bg-muted",
      plain: ""
    }
  },
  defaultVariants: {
    variant: "plain"
  }
});
var Link = React2.forwardRef(
  ({ className, variant, ...props }, ref) => (
    // eslint-disable-next-line jsx-a11y/anchor-has-content -- `children` is part of `...props` (LinkProps extends AnchorHTMLAttributes), the rule can't see through the spread on this passthrough atom.
    /* @__PURE__ */ jsx2("a", { className: cn(linkVariants({ variant }), className), ref, ...props })
  )
);
Link.displayName = "Link";

// src/atoms/Logo/Logo.tsx
import { cva as cva3 } from "class-variance-authority";
import { jsx as jsx3 } from "react/jsx-runtime";
var logoVariants = cva3("w-auto", {
  variants: {
    size: {
      sm: "h-6",
      md: "h-7",
      lg: "h-8"
    }
  },
  defaultVariants: {
    size: "md"
  }
});
function Logo({ className, size, src, alt, ...props }) {
  return /* @__PURE__ */ jsx3("img", { src, alt, className: cn(logoVariants({ size }), className), ...props });
}

// src/organisms/Navbar/Navbar.tsx
import { jsx as jsx4, jsxs } from "react/jsx-runtime";
function Navbar({
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
  closeMenuAriaLabel = "Close menu"
}) {
  const [isMenuOpen, setIsMenuOpen] = React3.useState(false);
  const menuId = React3.useId();
  return /* @__PURE__ */ jsx4("header", { className: "sticky top-5 z-40 mx-auto w-full max-w-[1280px] px-6", children: /* @__PURE__ */ jsxs("div", { className: "rounded-xl bg-background shadow-[0_10px_40px_-12px_rgba(0,0,0,0.12)]", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-6 px-6 py-3", children: [
      /* @__PURE__ */ jsx4("a", { href: homeHref, className: "flex items-center", children: /* @__PURE__ */ jsx4(Logo, { src: logoSrc, alt: logoAlt, size: "md" }) }),
      /* @__PURE__ */ jsx4("nav", { "aria-label": navAriaLabel, className: "hidden flex-1 items-center justify-center gap-2 md:flex", children: navItems.map((item) => /* @__PURE__ */ jsx4(Link, { variant: "nav", href: item.href, children: item.label }, item.label)) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx4(
          Button,
          {
            type: "button",
            variant: "outline",
            className: "hidden px-6 py-2.5 text-[17px] md:inline-flex",
            onClick: onLoginClick,
            children: loginLabel
          }
        ),
        /* @__PURE__ */ jsx4(Button, { type: "button", variant: "lime", className: "hidden px-6 py-2.5 text-[17px] md:inline-flex", onClick: onSignInClick, children: signInLabel }),
        languageLabel && /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            onClick: onLanguageClick,
            "aria-label": languageButtonAriaLabel,
            className: "hidden items-center gap-1.5 rounded-lg pl-1 pr-2 py-1 text-foreground hover:bg-muted md:inline-flex",
            children: [
              /* @__PURE__ */ jsx4("span", { className: "inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg text-base", children: languageLabel }),
              /* @__PURE__ */ jsx4(ChevronDown, { className: "h-4 w-4" })
            ]
          }
        ),
        /* @__PURE__ */ jsx4(
          "button",
          {
            type: "button",
            onClick: () => setIsMenuOpen((open) => !open),
            "aria-label": isMenuOpen ? closeMenuAriaLabel : openMenuAriaLabel,
            "aria-expanded": isMenuOpen,
            "aria-controls": menuId,
            className: "inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground hover:bg-muted md:hidden",
            children: isMenuOpen ? /* @__PURE__ */ jsx4(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx4(Menu, { className: "h-5 w-5" })
          }
        )
      ] })
    ] }),
    isMenuOpen && /* @__PURE__ */ jsxs(
      "nav",
      {
        id: menuId,
        "aria-label": navAriaLabel,
        className: "flex flex-col gap-1 border-t border-border px-6 py-4 md:hidden",
        children: [
          navItems.map((item) => /* @__PURE__ */ jsx4(
            Link,
            {
              variant: "nav",
              href: item.href,
              onClick: () => setIsMenuOpen(false),
              className: "py-2",
              children: item.label
            },
            item.label
          )),
          /* @__PURE__ */ jsxs("div", { className: "mt-3 flex flex-col gap-2", children: [
            /* @__PURE__ */ jsx4(Button, { type: "button", variant: "outline", className: "w-full py-2.5 text-[17px]", onClick: onLoginClick, children: loginLabel }),
            /* @__PURE__ */ jsx4(Button, { type: "button", variant: "lime", className: "w-full py-2.5 text-[17px]", onClick: onSignInClick, children: signInLabel })
          ] }),
          languageLabel && /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              onClick: onLanguageClick,
              "aria-label": languageButtonAriaLabel,
              className: "mt-3 inline-flex items-center gap-1.5 self-start rounded-lg pl-1 pr-2 py-1 text-foreground hover:bg-muted",
              children: [
                /* @__PURE__ */ jsx4("span", { className: "inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg text-base", children: languageLabel }),
                /* @__PURE__ */ jsx4(ChevronDown, { className: "h-4 w-4" })
              ]
            }
          )
        ]
      }
    )
  ] }) });
}

// src/organisms/Footer/Footer.tsx
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
function Footer({
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
  navAriaLabel = "Footer"
}) {
  return /* @__PURE__ */ jsxs2("footer", { className: "mt-24", children: [
    /* @__PURE__ */ jsx5("section", { className: "relative mx-4 overflow-hidden rounded-t-3xl md:mx-8", children: /* @__PURE__ */ jsx5(
      "div",
      {
        className: "relative min-h-[420px] bg-cover bg-center md:min-h-[520px]",
        style: { backgroundImage: `linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15)), url('${bannerImage}')` },
        children: /* @__PURE__ */ jsxs2("div", { className: "absolute inset-0 grid grid-cols-1 items-start gap-8 px-8 py-12 md:grid-cols-2 md:px-16 md:py-16", children: [
          /* @__PURE__ */ jsx5("h3", { className: "font-display text-4xl leading-[1.05] text-white md:text-[56px]", children: ctaHeading }),
          /* @__PURE__ */ jsx5("p", { className: "font-display text-3xl text-white md:text-right md:text-[44px]", children: ctaSubheading })
        ] })
      }
    ) }),
    /* @__PURE__ */ jsxs2("section", { className: "mx-4 rounded-b-3xl bg-lime px-8 py-10 text-lime-foreground md:mx-8 md:px-16", children: [
      /* @__PURE__ */ jsxs2("div", { className: "flex items-start justify-between gap-8", children: [
        /* @__PURE__ */ jsx5(Logo, { src: logoSrc, alt: logoAlt, size: "sm" }),
        /* @__PURE__ */ jsx5("div", { className: "flex gap-4", children: socialLinks.map(({ label, href, icon: Icon }) => /* @__PURE__ */ jsx5("a", { href, "aria-label": label, className: "hover:opacity-70", children: /* @__PURE__ */ jsx5(Icon, { className: "h-5 w-5" }) }, label)) })
      ] }),
      /* @__PURE__ */ jsxs2("div", { className: "mt-10 grid items-end gap-8 md:grid-cols-[1.4fr_2fr_1fr]", children: [
        /* @__PURE__ */ jsx5("p", { className: "font-display text-3xl leading-[1.1] md:text-[38px]", children: tagline }),
        /* @__PURE__ */ jsx5("nav", { "aria-label": navAriaLabel, className: "flex flex-wrap items-end gap-x-10 gap-y-3 text-base font-medium", children: navItems.map((item) => /* @__PURE__ */ jsx5(Link, { variant: "underline", href: item.href, children: item.label }, item.label)) }),
        /* @__PURE__ */ jsx5("address", { className: "text-sm not-italic leading-relaxed md:text-right", children: address })
      ] }),
      /* @__PURE__ */ jsxs2("div", { className: "mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-lime-foreground/20 pt-5 text-xs", children: [
        /* @__PURE__ */ jsx5("span", { children: legalText }),
        /* @__PURE__ */ jsx5("div", { className: "flex items-center gap-4 opacity-80", children: schemeBadges.map((badge) => /* @__PURE__ */ jsx5("span", { className: "font-bold", children: badge }, badge)) })
      ] })
    ] })
  ] });
}

// src/templates/LandingPageTemplate/LandingPageTemplate.tsx
import { jsx as jsx6, jsxs as jsxs3 } from "react/jsx-runtime";
function LandingPageTemplate({ navbar, hero, sections, footer }) {
  return /* @__PURE__ */ jsxs3("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsx6(Navbar, { ...navbar }),
    /* @__PURE__ */ jsxs3("main", { className: "flex-1", children: [
      /* @__PURE__ */ jsx6("div", { id: "top" }),
      hero,
      sections
    ] }),
    /* @__PURE__ */ jsx6(Footer, { ...footer })
  ] });
}
export {
  LandingPageTemplate
};
//# sourceMappingURL=index.js.map
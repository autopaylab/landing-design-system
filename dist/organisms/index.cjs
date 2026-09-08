"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/organisms/index.ts
var organisms_exports = {};
__export(organisms_exports, {
  ContactSection: () => ContactSection,
  DataLeverageSection: () => DataLeverageSection,
  FaqAccordionSection: () => FaqAccordionSection,
  Footer: () => Footer,
  FourStepsSection: () => FourStepsSection,
  GlobalCoverageSection: () => GlobalCoverageSection,
  HeroImageOverlay: () => HeroImageOverlay,
  HeroVideoSplit: () => HeroVideoSplit,
  IndustriesGridSection: () => IndustriesGridSection,
  IndustriesStackedSection: () => IndustriesStackedSection,
  Navbar: () => Navbar,
  PlatformFeatureShowcase: () => PlatformFeatureShowcase,
  PromoCtaSection: () => PromoCtaSection,
  SecuritySection: () => SecuritySection,
  SingleIntegrationSection: () => SingleIntegrationSection,
  StatsSection: () => StatsSection,
  TrustedByLogos: () => TrustedByLogos
});
module.exports = __toCommonJS(organisms_exports);

// src/organisms/Navbar/Navbar.tsx
var import_lucide_react = require("lucide-react");

// src/atoms/Button/Button.tsx
var React = __toESM(require("react"), 1);
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority = require("class-variance-authority");

// src/lib/cn.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/atoms/Button/Button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var buttonVariants = (0, import_class_variance_authority.cva)(
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
    const Comp = asChild ? import_react_slot.Slot : "button";
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";

// src/atoms/Link/Link.tsx
var React2 = __toESM(require("react"), 1);
var import_class_variance_authority2 = require("class-variance-authority");
var import_jsx_runtime2 = require("react/jsx-runtime");
var linkVariants = (0, import_class_variance_authority2.cva)("transition-colors", {
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
  ({ className, variant, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", { className: cn(linkVariants({ variant }), className), ref, ...props })
);
Link.displayName = "Link";

// src/atoms/Logo/Logo.tsx
var import_class_variance_authority3 = require("class-variance-authority");
var import_jsx_runtime3 = require("react/jsx-runtime");
var logoVariants = (0, import_class_variance_authority3.cva)("w-auto", {
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("img", { src, alt, className: cn(logoVariants({ size }), className), ...props });
}

// src/organisms/Navbar/Navbar.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
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
  navAriaLabel = "Primary"
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("header", { className: "sticky top-5 z-40 mx-auto w-full max-w-[1280px] px-6", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex items-center justify-between gap-6 rounded-xl bg-background px-6 py-3 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.12)]", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", { href: homeHref, className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Logo, { src: logoSrc, alt: logoAlt, size: "md" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("nav", { "aria-label": navAriaLabel, className: "hidden flex-1 items-center justify-center gap-2 md:flex", children: navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Link, { variant: "nav", href: item.href, children: item.label }, item.label)) }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        Button,
        {
          type: "button",
          variant: "outline",
          className: "hidden px-6 py-2.5 text-[17px] md:inline-flex",
          onClick: onLoginClick,
          children: loginLabel
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button, { type: "button", variant: "lime", className: "px-6 py-2.5 text-[17px]", onClick: onSignInClick, children: signInLabel }),
      languageLabel && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
        "button",
        {
          type: "button",
          onClick: onLanguageClick,
          "aria-label": languageButtonAriaLabel,
          className: "hidden items-center gap-1.5 rounded-lg pl-1 pr-2 py-1 text-foreground hover:bg-muted md:inline-flex",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg text-base", children: languageLabel }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_lucide_react.ChevronDown, { className: "h-4 w-4" })
          ]
        }
      )
    ] })
  ] }) });
}

// src/organisms/Footer/Footer.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("footer", { className: "mt-24", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("section", { className: "relative mx-4 overflow-hidden rounded-t-3xl md:mx-8", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      "div",
      {
        className: "relative min-h-[420px] bg-cover bg-center md:min-h-[520px]",
        style: { backgroundImage: `linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15)), url('${bannerImage}')` },
        children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "absolute inset-0 grid grid-cols-1 items-start gap-8 px-8 py-12 md:grid-cols-2 md:px-16 md:py-16", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h3", { className: "font-display text-4xl leading-[1.05] text-white md:text-[56px]", children: ctaHeading }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "font-display text-3xl text-white md:text-right md:text-[44px]", children: ctaSubheading })
        ] })
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("section", { className: "mx-4 rounded-b-3xl bg-lime px-8 py-10 text-lime-foreground md:mx-8 md:px-16", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "flex items-start justify-between gap-8", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Logo, { src: logoSrc, alt: logoAlt, size: "sm" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "flex gap-4", children: socialLinks.map(({ label, href, icon: Icon }) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("a", { href, "aria-label": label, className: "hover:opacity-70", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Icon, { className: "h-5 w-5" }) }, label)) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "mt-10 grid items-end gap-8 md:grid-cols-[1.4fr_2fr_1fr]", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "font-display text-3xl leading-[1.1] md:text-[38px]", children: tagline }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("nav", { "aria-label": navAriaLabel, className: "flex flex-wrap items-end gap-x-10 gap-y-3 text-base font-medium", children: navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Link, { variant: "underline", href: item.href, children: item.label }, item.label)) }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("address", { className: "text-sm not-italic leading-relaxed md:text-right", children: address })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-lime-foreground/20 pt-5 text-xs", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: legalText }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "flex items-center gap-4 opacity-80", children: schemeBadges.map((badge) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "font-bold", children: badge }, badge)) })
      ] })
    ] })
  ] });
}

// src/atoms/Badge/Badge.tsx
var import_class_variance_authority4 = require("class-variance-authority");
var import_jsx_runtime6 = require("react/jsx-runtime");
var badgeVariants = (0, import_class_variance_authority4.cva)(
  "inline-flex items-center transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        eyebrow: "rounded-full bg-muted px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground/70",
        default: "rounded-md border border-transparent bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground shadow hover:bg-primary/80",
        secondary: "rounded-md border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground hover:bg-secondary/80",
        destructive: "rounded-md border border-transparent bg-destructive px-2.5 py-0.5 text-xs font-semibold text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "rounded-md border px-2.5 py-0.5 text-xs font-semibold text-foreground"
      }
    },
    defaultVariants: {
      variant: "eyebrow"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: cn(badgeVariants({ variant }), className), ...props });
}

// src/organisms/HeroVideoSplit/HeroVideoSplit.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
function HeroVideoSplit({ eyebrow, title, subtitle, ctaLabel, ctaHref, videoSrc }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("section", { className: "mx-auto max-w-[1280px] px-6 pt-16 md:pt-24", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "grid items-center gap-10 md:grid-cols-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { children: [
      eyebrow && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "mb-6", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Badge, { variant: "eyebrow", children: eyebrow }) }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h1", { className: "font-display text-[48px] leading-[1.05] tracking-[-0.02em] md:text-[72px]", children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "mt-8 max-w-md text-base leading-relaxed text-muted-foreground md:text-[17px]", children: subtitle }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "mt-10", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Button, { asChild: true, variant: "lime", size: "lg", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("a", { href: ctaHref, children: ctaLabel }) }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("video", { src: videoSrc, autoPlay: true, loop: true, muted: true, playsInline: true, className: "h-auto w-full" }) })
  ] }) });
}

// src/organisms/HeroImageOverlay/HeroImageOverlay.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
function HeroImageOverlay({ layout, image, title, subtitle, primaryCta, secondaryCta }) {
  const ctas = /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex flex-col gap-3 sm:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Button, { asChild: true, variant: "lime", size: "lg", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("a", { href: primaryCta.href, children: primaryCta.label }) }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Button, { asChild: true, variant: "outline-inverse", size: "lg", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("a", { href: secondaryCta.href, children: secondaryCta.label }) })
  ] });
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "px-4 md:px-8", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("section", { className: "relative mx-auto w-full max-w-[1600px] overflow-hidden rounded-3xl bg-foreground", children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("img", { src: image, alt: "", "aria-hidden": "true", loading: "lazy", className: "absolute inset-0 size-full object-cover" }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      "div",
      {
        "aria-hidden": "true",
        className: cn("absolute inset-0", layout === "stacked" ? "bg-gradient-to-r from-foreground via-foreground/75 to-foreground/10" : "bg-foreground/50")
      }
    ),
    layout === "stacked" ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "relative px-6 py-20 text-background sm:px-10 md:px-16 md:py-32 lg:py-40", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "max-w-3xl", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h2", { className: "font-display text-[40px] leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl", children: title }),
      subtitle && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "mt-6 max-w-2xl text-base text-background/80 md:text-xl", children: subtitle }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "mt-9", children: ctas })
    ] }) }) : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "relative px-6 py-20 sm:px-10 md:px-14 md:py-28", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "grid gap-10 md:grid-cols-2 md:items-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h2", { className: "max-w-xl font-display text-[36px] leading-[1.05] text-background md:text-[56px]", children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "md:justify-self-end", children: ctas })
    ] }) })
  ] }) });
}

// src/organisms/TrustedByLogos/TrustedByLogos.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
function TrustedByLogos({ heading, logos }) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("section", { id: "trusted-by", className: "mx-auto mt-32 max-w-[1280px] px-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h2", { className: "text-center font-display text-[32px] md:text-[40px]", children: heading }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "mt-12 flex flex-wrap items-center justify-center gap-x-16 gap-y-10", children: logos.map((l) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      "img",
      {
        src: l.src,
        alt: l.alt,
        className: "h-8 w-auto object-contain md:h-10",
        style: { filter: "grayscale(100%) opacity(0.65)", maxWidth: l.width }
      },
      l.alt
    )) })
  ] });
}

// src/atoms/StepNumber/StepNumber.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
function StepNumber({ className, value, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    "span",
    {
      className: cn(
        "inline-flex size-11 items-center justify-center rounded-xl bg-white/70 text-lg font-bold text-primary",
        className
      ),
      ...props,
      children: value
    }
  );
}

// src/molecules/StepCard/StepCard.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
function StepCard({ className, index, title, body, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("li", { className: cn("p-8", className), ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(StepNumber, { value: index }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h3", { className: "mt-4 font-display text-lg", children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "mt-2 text-sm text-muted-foreground", children: body })
  ] });
}

// src/organisms/FourStepsSection/FourStepsSection.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
function FourStepsSection({ heading, description, image, imageAlt, steps }) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("section", { "aria-labelledby": "four-steps-title", className: "px-5 py-14 md:py-20", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "mx-auto max-w-[1280px]", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "overflow-hidden rounded-3xl bg-gradient-to-br from-[oklch(0.97_0.01_240)] via-[oklch(0.91_0.07_240)] to-[oklch(0.82_0.13_240)]", children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "grid items-center gap-8 px-6 pb-10 pt-10 md:grid-cols-[1.1fr_1fr] md:px-14 md:pb-16 md:pt-14", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h2", { id: "four-steps-title", className: "max-w-2xl font-display text-[32px] leading-[1.05] md:text-[56px]", children: heading }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "mt-6 max-w-xl text-muted-foreground md:text-[17px]", children: description })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("img", { src: image, alt: imageAlt, width: 700, height: 400, loading: "lazy", className: "w-full max-w-[560px] justify-self-end" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("ol", { className: "grid border-t border-primary/20 sm:grid-cols-2 lg:grid-cols-4", children: steps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      StepCard,
      {
        index: i + 1,
        title: step.title,
        body: step.body,
        className: "border-t border-border/40 first:border-t-0 sm:border-l sm:border-t-0 sm:[&:nth-child(odd)]:border-l-0 lg:border-l lg:[&:nth-child(odd)]:border-l"
      },
      step.title
    )) })
  ] }) }) });
}

// src/molecules/IconFeatureItem/IconFeatureItem.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
function IconFeatureItem({
  className,
  icon: Icon,
  title,
  description,
  iconClassName = "text-[oklch(0.6_0.22_255)]",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("li", { className: cn("flex gap-4", className), ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Icon, { className: cn("mt-1 h-5 w-5 shrink-0", iconClassName) }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h4", { className: "font-display text-lg", children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "mt-1 text-sm text-muted-foreground", children: description })
    ] })
  ] });
}

// src/organisms/SingleIntegrationSection/SingleIntegrationSection.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
function SingleIntegrationSection({
  eyebrow,
  heading,
  subheading,
  subheadingCaption,
  features,
  videoSrc
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("section", { id: "platform", className: "mt-32 w-full overflow-hidden bg-white pb-0 pt-24", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "mx-auto max-w-[1280px] px-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Badge, { variant: "eyebrow", children: eyebrow }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h2", { className: "mt-6 font-display text-[44px] leading-[1.05] md:text-[64px]", children: heading })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "mt-20 grid items-end gap-10 md:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "pb-24", children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h3", { className: "font-display text-[28px]", children: subheading }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "mt-2 text-muted-foreground", children: subheadingCaption }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("ul", { className: "mt-10 space-y-8", children: features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(IconFeatureItem, { ...f }, f.title)) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "flex justify-center self-end md:justify-end", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("video", { src: videoSrc, autoPlay: true, muted: true, loop: true, playsInline: true, className: "block h-auto w-full max-w-[720px] object-contain" }) })
    ] })
  ] }) });
}

// src/organisms/PlatformFeatureShowcase/PlatformFeatureShowcase.tsx
var React3 = __toESM(require("react"), 1);
var import_jsx_runtime15 = require("react/jsx-runtime");
function PlatformFeatureShowcase({ features }) {
  const [active, setActive] = React3.useState(features[0]?.key);
  const [hovered, setHovered] = React3.useState(null);
  const shown = hovered ?? active;
  const tabRefs = React3.useRef({});
  const reactId = React3.useId();
  const tabId = (key) => `${reactId}-tab-${key}`;
  const panelId = (key) => `${reactId}-panel-${key}`;
  const onKeyDown = (e, i) => {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp" && e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const dir = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : -1;
    const next = features[(i + dir + features.length) % features.length];
    setActive(next.key);
    setHovered(null);
    tabRefs.current[next.key]?.focus();
  };
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(import_jsx_runtime15.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "flex flex-col gap-6 md:hidden", children: features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "rounded-3xl bg-card p-6 shadow-sm", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h4", { className: "font-display text-xl", children: f.title }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "mt-2 text-[15px] leading-relaxed text-muted-foreground", children: f.desc }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "mt-5 flex items-center justify-center overflow-hidden rounded-lg bg-[oklch(0.97_0.02_240)] p-4", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("video", { src: f.video, autoPlay: true, muted: true, loop: true, playsInline: true, preload: "metadata", className: "w-full max-w-full object-contain" }) })
    ] }, f.key)) }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "hidden items-stretch gap-6 md:grid md:grid-cols-[1.35fr_1fr]", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "flex min-h-[460px] items-center justify-center overflow-hidden rounded-3xl bg-[oklch(0.97_0.02_240)] p-8", children: features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { role: "tabpanel", id: panelId(f.key), "aria-labelledby": tabId(f.key), hidden: shown !== f.key, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        "video",
        {
          src: f.video,
          autoPlay: true,
          muted: true,
          loop: true,
          playsInline: true,
          className: "max-h-[420px] w-auto max-w-full object-contain transition-opacity duration-300"
        }
      ) }, f.key)) }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "flex flex-col gap-5", role: "tablist", "aria-orientation": "vertical", children: features.map((f, i) => {
        const isActive = active === f.key;
        return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
          "button",
          {
            ref: (el) => {
              tabRefs.current[f.key] = el;
            },
            id: tabId(f.key),
            "aria-controls": panelId(f.key),
            type: "button",
            role: "tab",
            "aria-selected": isActive,
            tabIndex: isActive ? 0 : -1,
            onClick: () => {
              setActive(f.key);
              setHovered(null);
            },
            onMouseEnter: () => setHovered(f.key),
            onMouseLeave: () => setHovered(null),
            onFocus: () => setHovered(f.key),
            onBlur: () => setHovered(null),
            onKeyDown: (e) => onKeyDown(e, i),
            className: `flex-1 cursor-pointer rounded-lg p-8 text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-primary ${isActive ? "bg-card shadow-sm" : "bg-muted/60"}`,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "block font-display text-2xl", children: f.title }),
              /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "mt-3 block text-[15px] leading-relaxed text-muted-foreground", children: f.desc })
            ]
          },
          f.key
        );
      }) })
    ] })
  ] });
}

// src/molecules/BulletItem/BulletItem.tsx
var import_jsx_runtime16 = require("react/jsx-runtime");
function BulletItem({ className, children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("li", { className: cn("flex gap-3", className), ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-muted-foreground" }),
    children
  ] });
}

// src/molecules/IconCard/IconCard.tsx
var import_jsx_runtime17 = require("react/jsx-runtime");
function IconCard({ className, icon: Icon, title, bullets, color, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: cn("rounded-3xl bg-card p-8 shadow-sm", className), ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "flex items-start justify-between gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("h3", { className: "font-display text-2xl", children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        "div",
        {
          className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl",
          style: { background: `linear-gradient(135deg, ${color}, color-mix(in oklab, ${color} 40%, white))` },
          children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Icon, { className: "h-5 w-5 text-foreground" })
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("ul", { className: "mt-8 space-y-2 text-muted-foreground", children: bullets.map((bullet) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(BulletItem, { children: bullet }, bullet)) })
  ] });
}

// src/organisms/SecuritySection/SecuritySection.tsx
var import_jsx_runtime18 = require("react/jsx-runtime");
function SecuritySection({ eyebrow, heading, description, schemeBadges, cards }) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("section", { id: "security", className: "mx-auto mt-32 max-w-[1280px] px-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Badge, { variant: "eyebrow", children: eyebrow }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h2", { className: "mt-6 font-display text-[44px] leading-[1.05] md:text-[64px]", children: heading }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "mx-auto mt-6 max-w-2xl text-muted-foreground md:text-[17px]", children: description })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-70 grayscale", children: schemeBadges.map((label) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "text-sm font-bold text-foreground/60", children: label }, label)) }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "mt-12 grid gap-6 md:grid-cols-2", children: cards.map((c) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(IconCard, { ...c }, c.title)) })
  ] });
}

// src/organisms/GlobalCoverageSection/GlobalCoverageSection.tsx
var import_jsx_runtime19 = require("react/jsx-runtime");
function GlobalCoverageSection({ eyebrow, heading, features, floatingBadges }) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("section", { className: "mx-auto mt-32 max-w-[1280px] px-6", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "grid items-center gap-12 md:grid-cols-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Badge, { variant: "eyebrow", children: eyebrow }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h2", { className: "mt-6 font-display text-[44px] leading-[1.05] md:text-[56px]", children: heading }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("ul", { className: "mt-12 space-y-8", children: features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(IconFeatureItem, { ...f }, f.title)) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "relative aspect-square rounded-3xl bg-gradient-to-br from-muted to-background", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "absolute right-8 top-8 grid h-20 w-20 place-items-center rounded-full bg-card shadow-lg", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "h-9 w-6 rounded-t-full bg-[oklch(0.6_0.22_255)]" }) }),
      floatingBadges.map((b) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
        "div",
        {
          className: `absolute grid h-14 w-14 place-items-center rounded-full text-xs font-bold shadow-lg ${b.className}`,
          style: { top: b.top, right: b.right },
          children: b.label
        },
        b.label
      ))
    ] })
  ] }) });
}

// src/organisms/DataLeverageSection/DataLeverageSection.tsx
var import_jsx_runtime20 = require("react/jsx-runtime");
function DataLeverageSection({ eyebrow, heading, description, items, reportingPeriods }) {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("section", { className: "mx-auto mt-32 max-w-[1280px] px-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Badge, { variant: "eyebrow", children: eyebrow }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("h2", { className: "mt-6 font-display text-[44px] leading-[1.05] md:text-[56px]", children: heading }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { className: "mx-auto mt-6 max-w-2xl text-muted-foreground md:text-[17px]", children: description })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "mt-16 grid gap-10 md:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("ul", { className: "divide-y divide-border", children: items.map((d) => /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("li", { className: "py-8 first:pt-0", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("h3", { className: "font-display text-2xl", children: d.title }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground md:text-base", children: d.desc })
      ] }, d.title)) }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "relative min-h-[480px] rounded-3xl bg-gradient-to-br from-[oklch(0.9_0.06_280)] to-[oklch(0.95_0.04_260)] p-6", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "absolute right-6 top-6 w-[85%] rounded-2xl bg-card p-4 shadow-xl", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex items-center justify-between text-[10px] text-muted-foreground", children: [
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "rounded bg-muted px-2 py-1", children: "Number of transactions \u25BE" }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "rounded bg-muted px-2 py-1", children: "Operator" }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "rounded bg-muted px-2 py-1", children: "Method" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("svg", { viewBox: "0 0 300 100", className: "mt-3 h-24 w-full", children: [
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("path", { d: "M0,60 Q40,20 80,50 T160,40 T240,70 T300,30", stroke: "oklch(0.55 0.2 255)", strokeWidth: "2", fill: "none" }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("path", { d: "M0,70 Q40,40 80,60 T160,55 T240,40 T300,60", stroke: "oklch(0.7 0.18 140)", strokeWidth: "2", fill: "none" }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("path", { d: "M0,50 Q40,70 80,45 T160,65 T240,55 T300,45", stroke: "oklch(0.65 0.22 25)", strokeWidth: "2", fill: "none" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "absolute bottom-6 left-6 w-[88%] rounded-2xl bg-card p-4 shadow-xl", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex items-center justify-between border-b border-border pb-2 text-[10px] font-semibold", children: [
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { children: "Autopay" }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "text-muted-foreground", children: "Reporting Periods" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "mt-3 space-y-1.5 text-[9px]", children: reportingPeriods.map((p) => /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex items-center justify-between border-b border-border/50 py-1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { children: p.month }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "rounded-full bg-[oklch(0.92_0.15_85)] px-2 py-0.5 text-[8px] font-medium", children: p.status }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "text-muted-foreground", children: p.date })
          ] }, p.month)) })
        ] })
      ] })
    ] })
  ] });
}

// src/molecules/StatBlock/StatBlock.tsx
var import_jsx_runtime21 = require("react/jsx-runtime");
function StatBlock({ className, eyebrow = "UP TO", value, label, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: cn("bg-transparent pr-6", className), ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "text-[10px] font-semibold uppercase tracking-wider text-muted-foreground", children: eyebrow }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "mt-3 font-display text-[56px] leading-none md:text-[72px]", children: value }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "mt-6 text-sm text-muted-foreground", children: label })
  ] });
}

// src/organisms/StatsSection/StatsSection.tsx
var import_jsx_runtime22 = require("react/jsx-runtime");
function StatsSection({ heading, description, stats }) {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("section", { className: "mx-auto mt-32 max-w-[1280px] px-6", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "overflow-hidden rounded-3xl bg-gradient-to-br from-[oklch(0.93_0.05_240)] via-[oklch(0.88_0.09_240)] to-[oklch(0.82_0.13_240)] p-10 md:p-16", children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("h2", { className: "font-display text-[44px] leading-[1.05] md:text-[56px]", children: heading }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("p", { className: "mt-6 text-muted-foreground md:text-[17px]", children: description })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "mt-16 grid grid-cols-2 gap-px md:grid-cols-4", children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(StatBlock, { ...s }, s.label)) })
  ] }) });
}

// src/molecules/IndustryCard/IndustryCard.tsx
var import_jsx_runtime23 = require("react/jsx-runtime");
function IndustryCard({
  className,
  name,
  description,
  image,
  backgroundColor,
  ctaLabel = "Learn more",
  onCtaClick,
  layout = "grid",
  style,
  ...props
}) {
  const imageBlock = /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
    "div",
    {
      className: cn(
        "bg-cover bg-center",
        layout === "stacked" ? "min-h-[260px] md:min-h-[420px]" : "h-64 transition-transform duration-500 group-hover:scale-105"
      ),
      style: { backgroundImage: `url(${image})` },
      role: "img",
      "aria-label": `${name.replace("\n", " ")} \u2014 use case`
    }
  );
  const content = /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: cn(layout === "stacked" ? "flex flex-col justify-between p-10 md:p-12" : "p-8"), children: [
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
      "h3",
      {
        className: cn(
          "font-display whitespace-pre-line",
          layout === "stacked" ? "text-[32px] leading-[1.05] md:text-[40px]" : "text-[28px] leading-[1.05]"
        ),
        children: name
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: layout === "grid" ? "mt-4" : void 0, children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: cn("max-w-md text-sm leading-relaxed text-foreground/75", layout === "stacked" && "mt-8"), children: description }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
        Button,
        {
          type: "button",
          variant: "outline",
          size: "xs",
          onClick: onCtaClick,
          className: cn("border-foreground/80 hover:bg-foreground hover:text-background", layout === "stacked" ? "mt-8" : "mt-6"),
          children: ctaLabel
        }
      )
    ] })
  ] });
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
    "article",
    {
      className: cn(
        "overflow-hidden shadow-[0_20px_60px_-30px_rgba(0,0,0,0.35)]",
        layout === "stacked" ? "grid items-stretch rounded-3xl md:grid-cols-2" : "group rounded-3xl transition-transform duration-300 hover:-translate-y-1",
        className
      ),
      style: { backgroundColor, ...style },
      ...props,
      children: layout === "stacked" ? /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(import_jsx_runtime23.Fragment, { children: [
        content,
        imageBlock
      ] }) : /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(import_jsx_runtime23.Fragment, { children: [
        imageBlock,
        content
      ] })
    }
  );
}

// src/organisms/IndustriesStackedSection/IndustriesStackedSection.tsx
var import_jsx_runtime24 = require("react/jsx-runtime");
function IndustriesStackedSection({ eyebrow, heading, industries, ctaLabel, onCtaClick }) {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("section", { className: "mt-32 w-full bg-surface", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "mx-auto max-w-[1600px] px-6 py-16 md:px-10 md:py-20", children: [
    /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Badge, { variant: "eyebrow", children: eyebrow }),
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("h2", { className: "mt-6 font-display text-[44px] leading-[1.05] md:text-[56px]", children: heading })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "mt-12", children: industries.map((ind, i) => /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
      IndustryCard,
      {
        layout: "stacked",
        name: ind.name,
        description: ind.description,
        image: ind.image,
        backgroundColor: ind.backgroundColor,
        ctaLabel,
        onCtaClick: () => onCtaClick?.(ind),
        className: "sticky shadow-[0_20px_60px_-30px_rgba(0,0,0,0.35)]",
        style: {
          top: `calc(6rem + ${i * 1.25}rem)`,
          marginBottom: i === industries.length - 1 ? 0 : "2rem",
          zIndex: i + 1
        }
      },
      ind.name
    )) })
  ] }) });
}

// src/organisms/IndustriesGridSection/IndustriesGridSection.tsx
var import_jsx_runtime25 = require("react/jsx-runtime");
function IndustriesGridSection({ eyebrow, heading, industries, ctaLabel, onCtaClick }) {
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("section", { className: "mt-32 w-full bg-surface", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "mx-auto max-w-[1600px] px-6 py-16 md:px-10 md:py-20", children: [
    /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Badge, { variant: "eyebrow", children: eyebrow }),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("h2", { className: "mt-6 font-display text-[44px] leading-[1.05] md:text-[56px]", children: heading })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "mt-12 grid gap-6 md:grid-cols-3", children: industries.map((ind) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
      IndustryCard,
      {
        layout: "grid",
        name: ind.name,
        description: ind.description,
        image: ind.image,
        backgroundColor: ind.backgroundColor,
        ctaLabel,
        onCtaClick: () => onCtaClick?.(ind)
      },
      ind.name
    )) })
  ] }) });
}

// src/molecules/FormField/FormField.tsx
var React5 = __toESM(require("react"), 1);

// src/atoms/Input/Input.tsx
var React4 = __toESM(require("react"), 1);
var import_jsx_runtime26 = require("react/jsx-runtime");
var Input = React4.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
      "input",
      {
        type,
        className: cn(
          "w-full rounded-xl bg-muted px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";

// src/atoms/Label/Label.tsx
var import_jsx_runtime27 = require("react/jsx-runtime");
function Label({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: cn("text-xs text-muted-foreground", className), ...props });
}

// src/molecules/FormField/FormField.tsx
var import_jsx_runtime28 = require("react/jsx-runtime");
var FormField = React5.forwardRef(
  ({ label, id, ...inputProps }, ref) => /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("label", { className: "block", children: [
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Label, { children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Input, { ref, id, className: "mt-2", ...inputProps })
  ] })
);
FormField.displayName = "FormField";

// src/molecules/ConsentCheckboxField/ConsentCheckboxField.tsx
var React7 = __toESM(require("react"), 1);

// src/atoms/Checkbox/Checkbox.tsx
var React6 = __toESM(require("react"), 1);
var import_jsx_runtime29 = require("react/jsx-runtime");
var Checkbox = React6.forwardRef(
  ({ className, type = "checkbox", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("input", { type, className: cn("mt-1", className), ref, ...props })
);
Checkbox.displayName = "Checkbox";

// src/molecules/ConsentCheckboxField/ConsentCheckboxField.tsx
var import_jsx_runtime30 = require("react/jsx-runtime");
var ConsentCheckboxField = React7.forwardRef(
  ({ consentText, controllerText, moreHref = "#", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("label", { className: "flex gap-3 text-xs text-muted-foreground", children: [
    /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Checkbox, { ref, ...props }),
    /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("span", { children: [
      consentText,
      /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("span", { className: "mt-2 block text-[11px]", children: [
        controllerText,
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Link, { variant: "underline", href: moreHref, children: "More" })
      ] })
    ] })
  ] })
);
ConsentCheckboxField.displayName = "ConsentCheckboxField";

// src/organisms/ContactSection/ContactSection.tsx
var import_jsx_runtime31 = require("react/jsx-runtime");
function ContactSection({
  heading,
  description,
  formHeading,
  consentText,
  controllerText,
  submitLabel = "Send",
  onSubmit
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("section", { id: "contact", className: "mx-auto mt-32 max-w-[1280px] px-6", children: /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "grid items-start gap-12 md:grid-cols-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("h2", { className: "font-display text-[44px] leading-[1.05] md:text-[56px]", children: heading }),
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("p", { className: "mt-6 max-w-md text-muted-foreground md:text-[17px]", children: description })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "rounded-3xl bg-card p-8 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.1)] md:p-10", children: [
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("h3", { className: "font-display text-3xl", children: formHeading }),
      /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("form", { className: "mt-6 space-y-5", onSubmit: onSubmit ?? ((e) => e.preventDefault()), children: [
        /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(FormField, { label: "First name", name: "firstName", placeholder: "Jane" }),
          /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(FormField, { label: "Last name", name: "lastName", placeholder: "Doe" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(FormField, { label: "Phone number", name: "phone", placeholder: "123456789" }),
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(FormField, { label: "Business e-mail", name: "email", type: "email", placeholder: "jane@example.com" }),
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(ConsentCheckboxField, { name: "consent", consentText, controllerText }),
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(Button, { type: "submit", variant: "solid", className: "w-full py-4 text-sm", children: submitLabel })
      ] })
    ] })
  ] }) });
}

// src/atoms/Accordion/Accordion.tsx
var React8 = __toESM(require("react"), 1);
var AccordionPrimitive = __toESM(require("@radix-ui/react-accordion"), 1);
var import_lucide_react2 = require("lucide-react");
var import_jsx_runtime32 = require("react/jsx-runtime");
var Accordion = AccordionPrimitive.Root;
var AccordionItem = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(AccordionPrimitive.Item, { ref, className: cn("border-b", className), ...props }));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React8.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_lucide_react2.ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
var AccordionContent = React8.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// src/molecules/FaqItem/FaqItem.tsx
var import_jsx_runtime33 = require("react/jsx-runtime");
function FaqItem({ value, question, answer }) {
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(AccordionItem, { value, className: "rounded-2xl border-0 bg-card px-6 py-1 md:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(AccordionTrigger, { className: "py-6 text-left text-lg font-semibold hover:no-underline md:text-xl [&>svg]:size-5", children: question }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(AccordionContent, { className: "pb-8 pt-2 text-base text-muted-foreground md:text-[17px]", children: answer })
  ] });
}

// src/organisms/FaqAccordionSection/FaqAccordionSection.tsx
var import_jsx_runtime34 = require("react/jsx-runtime");
function FaqAccordionSection({ heading, entries }) {
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("section", { id: "faq", "aria-labelledby": "faq-title", className: "bg-surface px-5 py-14 md:py-20", children: /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "mx-auto max-w-[1280px]", children: [
    /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("h2", { id: "faq-title", className: "font-display text-3xl md:text-4xl", children: heading }),
    /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(Accordion, { type: "single", collapsible: true, className: "mt-8 flex w-full flex-col gap-3", children: entries.map((entry, i) => /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(FaqItem, { value: `item-${i}`, question: entry.question, answer: entry.answer }, entry.question)) })
  ] }) });
}

// src/organisms/PromoCtaSection/PromoCtaSection.tsx
var import_jsx_runtime35 = require("react/jsx-runtime");
function PromoCtaSection({
  backgroundImage,
  heading,
  primaryCta,
  secondaryCta,
  logoSrc,
  logoAlt,
  promoText,
  copyrightText,
  privacyLabel,
  privacyHref
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("section", { className: "bg-surface px-4 pb-6 md:px-8 md:pb-8", children: /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "relative mx-auto w-full max-w-[1600px] overflow-hidden rounded-3xl", children: [
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("img", { src: backgroundImage, alt: "", "aria-hidden": "true", loading: "lazy", className: "absolute inset-0 size-full object-cover" }),
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { "aria-hidden": "true", className: "absolute inset-0 bg-ink/40" }),
    /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "relative px-6 pt-16 sm:px-10 md:px-14 md:pt-24", children: [
      /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "grid gap-10 md:grid-cols-2 md:items-start", children: [
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("h2", { className: "max-w-xl font-display text-3xl text-background md:text-5xl", children: heading }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "flex flex-col gap-3 sm:flex-row md:justify-end", children: [
          /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(Button, { asChild: true, variant: "lime", className: "h-12 px-7 text-base hover:scale-100 hover:bg-lime/90", children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("a", { href: primaryCta.href, children: primaryCta.label }) }),
          /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
            Button,
            {
              asChild: true,
              variant: "outline-inverse",
              className: "h-12 border-background/30 px-7 text-base",
              children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("a", { href: secondaryCta.href, target: secondaryCta.external ? "_blank" : void 0, rel: secondaryCta.external ? "noopener noreferrer" : void 0, children: secondaryCta.label })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "mt-14 rounded-3xl bg-lime p-8 text-lime-foreground md:mt-24 md:p-12", children: [
        /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "flex flex-col gap-6 md:flex-row md:items-center md:gap-10", children: [
          /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(Logo, { src: logoSrc, alt: logoAlt, size: "sm", className: "md:h-8" }),
          /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("p", { className: "font-display text-2xl leading-tight md:text-3xl", children: promoText })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "mt-8 flex flex-col justify-between gap-4 border-t border-lime-foreground/15 pt-6 sm:flex-row sm:items-center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("p", { className: "text-sm text-lime-foreground/70", children: copyrightText }),
          /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
            "a",
            {
              href: privacyHref,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-sm text-lime-foreground/70 underline underline-offset-2 hover:text-lime-foreground",
              children: privacyLabel
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: "h-6 md:h-8" })
    ] })
  ] }) });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ContactSection,
  DataLeverageSection,
  FaqAccordionSection,
  Footer,
  FourStepsSection,
  GlobalCoverageSection,
  HeroImageOverlay,
  HeroVideoSplit,
  IndustriesGridSection,
  IndustriesStackedSection,
  Navbar,
  PlatformFeatureShowcase,
  PromoCtaSection,
  SecuritySection,
  SingleIntegrationSection,
  StatsSection,
  TrustedByLogos
});
//# sourceMappingURL=index.cjs.map
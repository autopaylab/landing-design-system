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

// src/templates/index.ts
var templates_exports = {};
__export(templates_exports, {
  LandingPageTemplate: () => LandingPageTemplate
});
module.exports = __toCommonJS(templates_exports);

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
        /** Brand CTA — observed on every hero and the footer (HomeContent, HeroVariants, CalendarFooter). */
        lime: "bg-lime text-lime-foreground transition-transform hover:scale-[1.02]",
        /** Light outline for use over dark hero-overlay imagery (HeroVariantA/B secondary CTA). */
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
  onLanguageClick
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("header", { className: "sticky top-5 z-40 mx-auto w-full max-w-[1280px] px-6", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex items-center justify-between gap-6 rounded-xl bg-background px-6 py-3 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.12)]", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", { href: homeHref, className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Logo, { src: logoSrc, alt: logoAlt, size: "md" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("nav", { className: "hidden flex-1 items-center justify-center gap-2 md:flex", children: navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Link, { variant: "nav", href: item.href, children: item.label }, item.label)) }),
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
  schemeBadges
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
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("nav", { className: "flex flex-wrap items-end gap-x-10 gap-y-3 text-base font-medium", children: navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Link, { variant: "underline", href: item.href, children: item.label }, item.label)) }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("address", { className: "text-sm not-italic leading-relaxed md:text-right", children: address })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-lime-foreground/20 pt-5 text-xs", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: legalText }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "flex items-center gap-4 opacity-80", children: schemeBadges.map((badge) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "font-bold", children: badge }, badge)) })
      ] })
    ] })
  ] });
}

// src/templates/LandingPageTemplate/LandingPageTemplate.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
function LandingPageTemplate({ navbar, hero, sections, footer }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Navbar, { ...navbar }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("main", { className: "flex-1", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { id: "top" }),
      hero,
      sections
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Footer, { ...footer })
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LandingPageTemplate
});
//# sourceMappingURL=index.cjs.map
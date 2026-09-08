// src/atoms/Accordion/Accordion.tsx
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

// src/lib/cn.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/atoms/Accordion/Accordion.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var Accordion = AccordionPrimitive.Root;
var AccordionItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Item, { ref, className: cn("border-b", className), ...props }));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
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
      /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
var AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// src/atoms/Button/Button.tsx
import * as React2 from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { jsx as jsx2 } from "react/jsx-runtime";
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
var Button = React2.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx2(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";

// src/atoms/Badge/Badge.tsx
import { cva as cva2 } from "class-variance-authority";
import { jsx as jsx3 } from "react/jsx-runtime";
var badgeVariants = cva2(
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
  return /* @__PURE__ */ jsx3("span", { className: cn(badgeVariants({ variant }), className), ...props });
}

// src/atoms/Input/Input.tsx
import * as React3 from "react";
import { jsx as jsx4 } from "react/jsx-runtime";
var Input = React3.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx4(
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
import { jsx as jsx5 } from "react/jsx-runtime";
function Label({ className, ...props }) {
  return /* @__PURE__ */ jsx5("span", { className: cn("text-xs text-muted-foreground", className), ...props });
}

// src/atoms/Checkbox/Checkbox.tsx
import * as React4 from "react";
import { jsx as jsx6 } from "react/jsx-runtime";
var Checkbox = React4.forwardRef(
  ({ className, type = "checkbox", ...props }, ref) => /* @__PURE__ */ jsx6("input", { type, className: cn("mt-1", className), ref, ...props })
);
Checkbox.displayName = "Checkbox";

// src/atoms/Link/Link.tsx
import * as React5 from "react";
import { cva as cva3 } from "class-variance-authority";
import { jsx as jsx7 } from "react/jsx-runtime";
var linkVariants = cva3("transition-colors", {
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
var Link = React5.forwardRef(
  ({ className, variant, ...props }, ref) => /* @__PURE__ */ jsx7("a", { className: cn(linkVariants({ variant }), className), ref, ...props })
);
Link.displayName = "Link";

// src/atoms/Logo/Logo.tsx
import { cva as cva4 } from "class-variance-authority";
import { jsx as jsx8 } from "react/jsx-runtime";
var logoVariants = cva4("w-auto", {
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
  return /* @__PURE__ */ jsx8("img", { src, alt, className: cn(logoVariants({ size }), className), ...props });
}

// src/atoms/StepNumber/StepNumber.tsx
import { jsx as jsx9 } from "react/jsx-runtime";
function StepNumber({ className, value, ...props }) {
  return /* @__PURE__ */ jsx9(
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

// src/molecules/FormField/FormField.tsx
import * as React6 from "react";
import { jsx as jsx10, jsxs as jsxs2 } from "react/jsx-runtime";
var FormField = React6.forwardRef(
  ({ label, id, ...inputProps }, ref) => /* @__PURE__ */ jsxs2("label", { className: "block", children: [
    /* @__PURE__ */ jsx10(Label, { children: label }),
    /* @__PURE__ */ jsx10(Input, { ref, id, className: "mt-2", ...inputProps })
  ] })
);
FormField.displayName = "FormField";

// src/molecules/ConsentCheckboxField/ConsentCheckboxField.tsx
import * as React7 from "react";
import { jsx as jsx11, jsxs as jsxs3 } from "react/jsx-runtime";
var ConsentCheckboxField = React7.forwardRef(
  ({ consentText, controllerText, moreHref = "#", ...props }, ref) => /* @__PURE__ */ jsxs3("label", { className: "flex gap-3 text-xs text-muted-foreground", children: [
    /* @__PURE__ */ jsx11(Checkbox, { ref, ...props }),
    /* @__PURE__ */ jsxs3("span", { children: [
      consentText,
      /* @__PURE__ */ jsxs3("span", { className: "mt-2 block text-[11px]", children: [
        controllerText,
        " ",
        /* @__PURE__ */ jsx11(Link, { variant: "underline", href: moreHref, children: "More" })
      ] })
    ] })
  ] })
);
ConsentCheckboxField.displayName = "ConsentCheckboxField";

// src/molecules/StatBlock/StatBlock.tsx
import { jsx as jsx12, jsxs as jsxs4 } from "react/jsx-runtime";
function StatBlock({ className, eyebrow = "UP TO", value, label, ...props }) {
  return /* @__PURE__ */ jsxs4("div", { className: cn("bg-transparent pr-6", className), ...props, children: [
    /* @__PURE__ */ jsx12("div", { className: "text-[10px] font-semibold uppercase tracking-wider text-muted-foreground", children: eyebrow }),
    /* @__PURE__ */ jsx12("div", { className: "mt-3 font-display text-[56px] leading-none md:text-[72px]", children: value }),
    /* @__PURE__ */ jsx12("div", { className: "mt-6 text-sm text-muted-foreground", children: label })
  ] });
}

// src/molecules/IconFeatureItem/IconFeatureItem.tsx
import { jsx as jsx13, jsxs as jsxs5 } from "react/jsx-runtime";
function IconFeatureItem({
  className,
  icon: Icon,
  title,
  description,
  iconClassName = "text-[oklch(0.6_0.22_255)]",
  ...props
}) {
  return /* @__PURE__ */ jsxs5("li", { className: cn("flex gap-4", className), ...props, children: [
    /* @__PURE__ */ jsx13(Icon, { className: cn("mt-1 h-5 w-5 shrink-0", iconClassName) }),
    /* @__PURE__ */ jsxs5("div", { children: [
      /* @__PURE__ */ jsx13("h4", { className: "font-display text-lg", children: title }),
      /* @__PURE__ */ jsx13("p", { className: "mt-1 text-sm text-muted-foreground", children: description })
    ] })
  ] });
}

// src/molecules/BulletItem/BulletItem.tsx
import { jsx as jsx14, jsxs as jsxs6 } from "react/jsx-runtime";
function BulletItem({ className, children, ...props }) {
  return /* @__PURE__ */ jsxs6("li", { className: cn("flex gap-3", className), ...props, children: [
    /* @__PURE__ */ jsx14("span", { className: "mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-muted-foreground" }),
    children
  ] });
}

// src/molecules/IconCard/IconCard.tsx
import { jsx as jsx15, jsxs as jsxs7 } from "react/jsx-runtime";
function IconCard({ className, icon: Icon, title, bullets, color, ...props }) {
  return /* @__PURE__ */ jsxs7("div", { className: cn("rounded-3xl bg-card p-8 shadow-sm", className), ...props, children: [
    /* @__PURE__ */ jsxs7("div", { className: "flex items-start justify-between gap-4", children: [
      /* @__PURE__ */ jsx15("h3", { className: "font-display text-2xl", children: title }),
      /* @__PURE__ */ jsx15(
        "div",
        {
          className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl",
          style: { background: `linear-gradient(135deg, ${color}, color-mix(in oklab, ${color} 40%, white))` },
          children: /* @__PURE__ */ jsx15(Icon, { className: "h-5 w-5 text-foreground" })
        }
      )
    ] }),
    /* @__PURE__ */ jsx15("ul", { className: "mt-8 space-y-2 text-muted-foreground", children: bullets.map((bullet) => /* @__PURE__ */ jsx15(BulletItem, { children: bullet }, bullet)) })
  ] });
}

// src/molecules/StepCard/StepCard.tsx
import { jsx as jsx16, jsxs as jsxs8 } from "react/jsx-runtime";
function StepCard({ className, index, title, body, ...props }) {
  return /* @__PURE__ */ jsxs8("li", { className: cn("p-8", className), ...props, children: [
    /* @__PURE__ */ jsx16(StepNumber, { value: index }),
    /* @__PURE__ */ jsx16("h3", { className: "mt-4 font-display text-lg", children: title }),
    /* @__PURE__ */ jsx16("p", { className: "mt-2 text-sm text-muted-foreground", children: body })
  ] });
}

// src/molecules/IndustryCard/IndustryCard.tsx
import { Fragment, jsx as jsx17, jsxs as jsxs9 } from "react/jsx-runtime";
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
  const imageBlock = /* @__PURE__ */ jsx17(
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
  const content = /* @__PURE__ */ jsxs9("div", { className: cn(layout === "stacked" ? "flex flex-col justify-between p-10 md:p-12" : "p-8"), children: [
    /* @__PURE__ */ jsx17(
      "h3",
      {
        className: cn(
          "font-display whitespace-pre-line",
          layout === "stacked" ? "text-[32px] leading-[1.05] md:text-[40px]" : "text-[28px] leading-[1.05]"
        ),
        children: name
      }
    ),
    /* @__PURE__ */ jsxs9("div", { className: layout === "grid" ? "mt-4" : void 0, children: [
      /* @__PURE__ */ jsx17("p", { className: cn("max-w-md text-sm leading-relaxed text-foreground/75", layout === "stacked" && "mt-8"), children: description }),
      /* @__PURE__ */ jsx17(
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
  return /* @__PURE__ */ jsx17(
    "article",
    {
      className: cn(
        "overflow-hidden shadow-[0_20px_60px_-30px_rgba(0,0,0,0.35)]",
        layout === "stacked" ? "grid items-stretch rounded-3xl md:grid-cols-2" : "group rounded-3xl transition-transform duration-300 hover:-translate-y-1",
        className
      ),
      style: { backgroundColor, ...style },
      ...props,
      children: layout === "stacked" ? /* @__PURE__ */ jsxs9(Fragment, { children: [
        content,
        imageBlock
      ] }) : /* @__PURE__ */ jsxs9(Fragment, { children: [
        imageBlock,
        content
      ] })
    }
  );
}

// src/molecules/FaqItem/FaqItem.tsx
import { jsx as jsx18, jsxs as jsxs10 } from "react/jsx-runtime";
function FaqItem({ value, question, answer }) {
  return /* @__PURE__ */ jsxs10(AccordionItem, { value, className: "rounded-2xl border-0 bg-card px-6 py-1 md:px-8", children: [
    /* @__PURE__ */ jsx18(AccordionTrigger, { className: "py-6 text-left text-lg font-semibold hover:no-underline md:text-xl [&>svg]:size-5", children: question }),
    /* @__PURE__ */ jsx18(AccordionContent, { className: "pb-8 pt-2 text-base text-muted-foreground md:text-[17px]", children: answer })
  ] });
}

// src/organisms/Navbar/Navbar.tsx
import { ChevronDown as ChevronDown2 } from "lucide-react";
import { jsx as jsx19, jsxs as jsxs11 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx19("header", { className: "sticky top-5 z-40 mx-auto w-full max-w-[1280px] px-6", children: /* @__PURE__ */ jsxs11("div", { className: "flex items-center justify-between gap-6 rounded-xl bg-background px-6 py-3 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.12)]", children: [
    /* @__PURE__ */ jsx19("a", { href: homeHref, className: "flex items-center", children: /* @__PURE__ */ jsx19(Logo, { src: logoSrc, alt: logoAlt, size: "md" }) }),
    /* @__PURE__ */ jsx19("nav", { "aria-label": navAriaLabel, className: "hidden flex-1 items-center justify-center gap-2 md:flex", children: navItems.map((item) => /* @__PURE__ */ jsx19(Link, { variant: "nav", href: item.href, children: item.label }, item.label)) }),
    /* @__PURE__ */ jsxs11("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx19(
        Button,
        {
          type: "button",
          variant: "outline",
          className: "hidden px-6 py-2.5 text-[17px] md:inline-flex",
          onClick: onLoginClick,
          children: loginLabel
        }
      ),
      /* @__PURE__ */ jsx19(Button, { type: "button", variant: "lime", className: "px-6 py-2.5 text-[17px]", onClick: onSignInClick, children: signInLabel }),
      languageLabel && /* @__PURE__ */ jsxs11(
        "button",
        {
          type: "button",
          onClick: onLanguageClick,
          "aria-label": languageButtonAriaLabel,
          className: "hidden items-center gap-1.5 rounded-lg pl-1 pr-2 py-1 text-foreground hover:bg-muted md:inline-flex",
          children: [
            /* @__PURE__ */ jsx19("span", { className: "inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg text-base", children: languageLabel }),
            /* @__PURE__ */ jsx19(ChevronDown2, { className: "h-4 w-4" })
          ]
        }
      )
    ] })
  ] }) });
}

// src/organisms/Footer/Footer.tsx
import { jsx as jsx20, jsxs as jsxs12 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs12("footer", { className: "mt-24", children: [
    /* @__PURE__ */ jsx20("section", { className: "relative mx-4 overflow-hidden rounded-t-3xl md:mx-8", children: /* @__PURE__ */ jsx20(
      "div",
      {
        className: "relative min-h-[420px] bg-cover bg-center md:min-h-[520px]",
        style: { backgroundImage: `linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15)), url('${bannerImage}')` },
        children: /* @__PURE__ */ jsxs12("div", { className: "absolute inset-0 grid grid-cols-1 items-start gap-8 px-8 py-12 md:grid-cols-2 md:px-16 md:py-16", children: [
          /* @__PURE__ */ jsx20("h3", { className: "font-display text-4xl leading-[1.05] text-white md:text-[56px]", children: ctaHeading }),
          /* @__PURE__ */ jsx20("p", { className: "font-display text-3xl text-white md:text-right md:text-[44px]", children: ctaSubheading })
        ] })
      }
    ) }),
    /* @__PURE__ */ jsxs12("section", { className: "mx-4 rounded-b-3xl bg-lime px-8 py-10 text-lime-foreground md:mx-8 md:px-16", children: [
      /* @__PURE__ */ jsxs12("div", { className: "flex items-start justify-between gap-8", children: [
        /* @__PURE__ */ jsx20(Logo, { src: logoSrc, alt: logoAlt, size: "sm" }),
        /* @__PURE__ */ jsx20("div", { className: "flex gap-4", children: socialLinks.map(({ label, href, icon: Icon }) => /* @__PURE__ */ jsx20("a", { href, "aria-label": label, className: "hover:opacity-70", children: /* @__PURE__ */ jsx20(Icon, { className: "h-5 w-5" }) }, label)) })
      ] }),
      /* @__PURE__ */ jsxs12("div", { className: "mt-10 grid items-end gap-8 md:grid-cols-[1.4fr_2fr_1fr]", children: [
        /* @__PURE__ */ jsx20("p", { className: "font-display text-3xl leading-[1.1] md:text-[38px]", children: tagline }),
        /* @__PURE__ */ jsx20("nav", { "aria-label": navAriaLabel, className: "flex flex-wrap items-end gap-x-10 gap-y-3 text-base font-medium", children: navItems.map((item) => /* @__PURE__ */ jsx20(Link, { variant: "underline", href: item.href, children: item.label }, item.label)) }),
        /* @__PURE__ */ jsx20("address", { className: "text-sm not-italic leading-relaxed md:text-right", children: address })
      ] }),
      /* @__PURE__ */ jsxs12("div", { className: "mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-lime-foreground/20 pt-5 text-xs", children: [
        /* @__PURE__ */ jsx20("span", { children: legalText }),
        /* @__PURE__ */ jsx20("div", { className: "flex items-center gap-4 opacity-80", children: schemeBadges.map((badge) => /* @__PURE__ */ jsx20("span", { className: "font-bold", children: badge }, badge)) })
      ] })
    ] })
  ] });
}

// src/organisms/HeroVideoSplit/HeroVideoSplit.tsx
import { jsx as jsx21, jsxs as jsxs13 } from "react/jsx-runtime";
function HeroVideoSplit({ eyebrow, title, subtitle, ctaLabel, ctaHref, videoSrc }) {
  return /* @__PURE__ */ jsx21("section", { className: "mx-auto max-w-[1280px] px-6 pt-16 md:pt-24", children: /* @__PURE__ */ jsxs13("div", { className: "grid items-center gap-10 md:grid-cols-2", children: [
    /* @__PURE__ */ jsxs13("div", { children: [
      eyebrow && /* @__PURE__ */ jsx21("div", { className: "mb-6", children: /* @__PURE__ */ jsx21(Badge, { variant: "eyebrow", children: eyebrow }) }),
      /* @__PURE__ */ jsx21("h1", { className: "font-display text-[48px] leading-[1.05] tracking-[-0.02em] md:text-[72px]", children: title }),
      /* @__PURE__ */ jsx21("p", { className: "mt-8 max-w-md text-base leading-relaxed text-muted-foreground md:text-[17px]", children: subtitle }),
      /* @__PURE__ */ jsx21("div", { className: "mt-10", children: /* @__PURE__ */ jsx21(Button, { asChild: true, variant: "lime", size: "lg", children: /* @__PURE__ */ jsx21("a", { href: ctaHref, children: ctaLabel }) }) })
    ] }),
    /* @__PURE__ */ jsx21("div", { className: "relative", children: /* @__PURE__ */ jsx21("video", { src: videoSrc, autoPlay: true, loop: true, muted: true, playsInline: true, className: "h-auto w-full" }) })
  ] }) });
}

// src/organisms/HeroImageOverlay/HeroImageOverlay.tsx
import { jsx as jsx22, jsxs as jsxs14 } from "react/jsx-runtime";
function HeroImageOverlay({ layout, image, title, subtitle, primaryCta, secondaryCta }) {
  const ctas = /* @__PURE__ */ jsxs14("div", { className: "flex flex-col gap-3 sm:flex-row", children: [
    /* @__PURE__ */ jsx22(Button, { asChild: true, variant: "lime", size: "lg", children: /* @__PURE__ */ jsx22("a", { href: primaryCta.href, children: primaryCta.label }) }),
    /* @__PURE__ */ jsx22(Button, { asChild: true, variant: "outline-inverse", size: "lg", children: /* @__PURE__ */ jsx22("a", { href: secondaryCta.href, children: secondaryCta.label }) })
  ] });
  return /* @__PURE__ */ jsx22("div", { className: "px-4 md:px-8", children: /* @__PURE__ */ jsxs14("section", { className: "relative mx-auto w-full max-w-[1600px] overflow-hidden rounded-3xl bg-foreground", children: [
    /* @__PURE__ */ jsx22("img", { src: image, alt: "", "aria-hidden": "true", loading: "lazy", className: "absolute inset-0 size-full object-cover" }),
    /* @__PURE__ */ jsx22(
      "div",
      {
        "aria-hidden": "true",
        className: cn("absolute inset-0", layout === "stacked" ? "bg-gradient-to-r from-foreground via-foreground/75 to-foreground/10" : "bg-foreground/50")
      }
    ),
    layout === "stacked" ? /* @__PURE__ */ jsx22("div", { className: "relative px-6 py-20 text-background sm:px-10 md:px-16 md:py-32 lg:py-40", children: /* @__PURE__ */ jsxs14("div", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsx22("h2", { className: "font-display text-[40px] leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl", children: title }),
      subtitle && /* @__PURE__ */ jsx22("p", { className: "mt-6 max-w-2xl text-base text-background/80 md:text-xl", children: subtitle }),
      /* @__PURE__ */ jsx22("div", { className: "mt-9", children: ctas })
    ] }) }) : /* @__PURE__ */ jsx22("div", { className: "relative px-6 py-20 sm:px-10 md:px-14 md:py-28", children: /* @__PURE__ */ jsxs14("div", { className: "grid gap-10 md:grid-cols-2 md:items-center", children: [
      /* @__PURE__ */ jsx22("h2", { className: "max-w-xl font-display text-[36px] leading-[1.05] text-background md:text-[56px]", children: title }),
      /* @__PURE__ */ jsx22("div", { className: "md:justify-self-end", children: ctas })
    ] }) })
  ] }) });
}

// src/organisms/TrustedByLogos/TrustedByLogos.tsx
import { jsx as jsx23, jsxs as jsxs15 } from "react/jsx-runtime";
function TrustedByLogos({ heading, logos }) {
  return /* @__PURE__ */ jsxs15("section", { id: "trusted-by", className: "mx-auto mt-32 max-w-[1280px] px-6", children: [
    /* @__PURE__ */ jsx23("h2", { className: "text-center font-display text-[32px] md:text-[40px]", children: heading }),
    /* @__PURE__ */ jsx23("div", { className: "mt-12 flex flex-wrap items-center justify-center gap-x-16 gap-y-10", children: logos.map((l) => /* @__PURE__ */ jsx23(
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

// src/organisms/FourStepsSection/FourStepsSection.tsx
import { jsx as jsx24, jsxs as jsxs16 } from "react/jsx-runtime";
function FourStepsSection({ heading, description, image, imageAlt, steps }) {
  return /* @__PURE__ */ jsx24("section", { "aria-labelledby": "four-steps-title", className: "px-5 py-14 md:py-20", children: /* @__PURE__ */ jsx24("div", { className: "mx-auto max-w-[1280px]", children: /* @__PURE__ */ jsxs16("div", { className: "overflow-hidden rounded-3xl bg-gradient-to-br from-[oklch(0.97_0.01_240)] via-[oklch(0.91_0.07_240)] to-[oklch(0.82_0.13_240)]", children: [
    /* @__PURE__ */ jsxs16("div", { className: "grid items-center gap-8 px-6 pb-10 pt-10 md:grid-cols-[1.1fr_1fr] md:px-14 md:pb-16 md:pt-14", children: [
      /* @__PURE__ */ jsxs16("div", { children: [
        /* @__PURE__ */ jsx24("h2", { id: "four-steps-title", className: "max-w-2xl font-display text-[32px] leading-[1.05] md:text-[56px]", children: heading }),
        /* @__PURE__ */ jsx24("p", { className: "mt-6 max-w-xl text-muted-foreground md:text-[17px]", children: description })
      ] }),
      /* @__PURE__ */ jsx24("img", { src: image, alt: imageAlt, width: 700, height: 400, loading: "lazy", className: "w-full max-w-[560px] justify-self-end" })
    ] }),
    /* @__PURE__ */ jsx24("ol", { className: "grid border-t border-primary/20 sm:grid-cols-2 lg:grid-cols-4", children: steps.map((step, i) => /* @__PURE__ */ jsx24(
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

// src/organisms/SingleIntegrationSection/SingleIntegrationSection.tsx
import { jsx as jsx25, jsxs as jsxs17 } from "react/jsx-runtime";
function SingleIntegrationSection({
  eyebrow,
  heading,
  subheading,
  subheadingCaption,
  features,
  videoSrc
}) {
  return /* @__PURE__ */ jsx25("section", { id: "platform", className: "mt-32 w-full overflow-hidden bg-white pb-0 pt-24", children: /* @__PURE__ */ jsxs17("div", { className: "mx-auto max-w-[1280px] px-6", children: [
    /* @__PURE__ */ jsxs17("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx25(Badge, { variant: "eyebrow", children: eyebrow }),
      /* @__PURE__ */ jsx25("h2", { className: "mt-6 font-display text-[44px] leading-[1.05] md:text-[64px]", children: heading })
    ] }),
    /* @__PURE__ */ jsxs17("div", { className: "mt-20 grid items-end gap-10 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxs17("div", { className: "pb-24", children: [
        /* @__PURE__ */ jsx25("h3", { className: "font-display text-[28px]", children: subheading }),
        /* @__PURE__ */ jsx25("p", { className: "mt-2 text-muted-foreground", children: subheadingCaption }),
        /* @__PURE__ */ jsx25("ul", { className: "mt-10 space-y-8", children: features.map((f) => /* @__PURE__ */ jsx25(IconFeatureItem, { ...f }, f.title)) })
      ] }),
      /* @__PURE__ */ jsx25("div", { className: "flex justify-center self-end md:justify-end", children: /* @__PURE__ */ jsx25("video", { src: videoSrc, autoPlay: true, muted: true, loop: true, playsInline: true, className: "block h-auto w-full max-w-[720px] object-contain" }) })
    ] })
  ] }) });
}

// src/organisms/PlatformFeatureShowcase/PlatformFeatureShowcase.tsx
import * as React8 from "react";
import { Fragment as Fragment2, jsx as jsx26, jsxs as jsxs18 } from "react/jsx-runtime";
function PlatformFeatureShowcase({ features }) {
  const [active, setActive] = React8.useState(features[0]?.key);
  const [hovered, setHovered] = React8.useState(null);
  const shown = hovered ?? active;
  const tabRefs = React8.useRef({});
  const reactId = React8.useId();
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
  return /* @__PURE__ */ jsxs18(Fragment2, { children: [
    /* @__PURE__ */ jsx26("div", { className: "flex flex-col gap-6 md:hidden", children: features.map((f) => /* @__PURE__ */ jsxs18("div", { className: "rounded-3xl bg-card p-6 shadow-sm", children: [
      /* @__PURE__ */ jsx26("h4", { className: "font-display text-xl", children: f.title }),
      /* @__PURE__ */ jsx26("p", { className: "mt-2 text-[15px] leading-relaxed text-muted-foreground", children: f.desc }),
      /* @__PURE__ */ jsx26("div", { className: "mt-5 flex items-center justify-center overflow-hidden rounded-lg bg-[oklch(0.97_0.02_240)] p-4", children: /* @__PURE__ */ jsx26("video", { src: f.video, autoPlay: true, muted: true, loop: true, playsInline: true, preload: "metadata", className: "w-full max-w-full object-contain" }) })
    ] }, f.key)) }),
    /* @__PURE__ */ jsxs18("div", { className: "hidden items-stretch gap-6 md:grid md:grid-cols-[1.35fr_1fr]", children: [
      /* @__PURE__ */ jsx26("div", { className: "flex min-h-[460px] items-center justify-center overflow-hidden rounded-3xl bg-[oklch(0.97_0.02_240)] p-8", children: features.map((f) => /* @__PURE__ */ jsx26("div", { role: "tabpanel", id: panelId(f.key), "aria-labelledby": tabId(f.key), hidden: shown !== f.key, children: /* @__PURE__ */ jsx26(
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
      /* @__PURE__ */ jsx26("div", { className: "flex flex-col gap-5", role: "tablist", "aria-orientation": "vertical", children: features.map((f, i) => {
        const isActive = active === f.key;
        return /* @__PURE__ */ jsxs18(
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
              /* @__PURE__ */ jsx26("span", { className: "block font-display text-2xl", children: f.title }),
              /* @__PURE__ */ jsx26("span", { className: "mt-3 block text-[15px] leading-relaxed text-muted-foreground", children: f.desc })
            ]
          },
          f.key
        );
      }) })
    ] })
  ] });
}

// src/organisms/SecuritySection/SecuritySection.tsx
import { jsx as jsx27, jsxs as jsxs19 } from "react/jsx-runtime";
function SecuritySection({ eyebrow, heading, description, schemeBadges, cards }) {
  return /* @__PURE__ */ jsxs19("section", { id: "security", className: "mx-auto mt-32 max-w-[1280px] px-6", children: [
    /* @__PURE__ */ jsxs19("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx27(Badge, { variant: "eyebrow", children: eyebrow }),
      /* @__PURE__ */ jsx27("h2", { className: "mt-6 font-display text-[44px] leading-[1.05] md:text-[64px]", children: heading }),
      /* @__PURE__ */ jsx27("p", { className: "mx-auto mt-6 max-w-2xl text-muted-foreground md:text-[17px]", children: description })
    ] }),
    /* @__PURE__ */ jsx27("div", { className: "mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-70 grayscale", children: schemeBadges.map((label) => /* @__PURE__ */ jsx27("span", { className: "text-sm font-bold text-foreground/60", children: label }, label)) }),
    /* @__PURE__ */ jsx27("div", { className: "mt-12 grid gap-6 md:grid-cols-2", children: cards.map((c) => /* @__PURE__ */ jsx27(IconCard, { ...c }, c.title)) })
  ] });
}

// src/organisms/GlobalCoverageSection/GlobalCoverageSection.tsx
import { jsx as jsx28, jsxs as jsxs20 } from "react/jsx-runtime";
function GlobalCoverageSection({ eyebrow, heading, features, floatingBadges }) {
  return /* @__PURE__ */ jsx28("section", { className: "mx-auto mt-32 max-w-[1280px] px-6", children: /* @__PURE__ */ jsxs20("div", { className: "grid items-center gap-12 md:grid-cols-2", children: [
    /* @__PURE__ */ jsxs20("div", { children: [
      /* @__PURE__ */ jsx28(Badge, { variant: "eyebrow", children: eyebrow }),
      /* @__PURE__ */ jsx28("h2", { className: "mt-6 font-display text-[44px] leading-[1.05] md:text-[56px]", children: heading }),
      /* @__PURE__ */ jsx28("ul", { className: "mt-12 space-y-8", children: features.map((f) => /* @__PURE__ */ jsx28(IconFeatureItem, { ...f }, f.title)) })
    ] }),
    /* @__PURE__ */ jsxs20("div", { className: "relative aspect-square rounded-3xl bg-gradient-to-br from-muted to-background", children: [
      /* @__PURE__ */ jsx28("div", { className: "absolute right-8 top-8 grid h-20 w-20 place-items-center rounded-full bg-card shadow-lg", children: /* @__PURE__ */ jsx28("div", { className: "h-9 w-6 rounded-t-full bg-[oklch(0.6_0.22_255)]" }) }),
      floatingBadges.map((b) => /* @__PURE__ */ jsx28(
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
import { jsx as jsx29, jsxs as jsxs21 } from "react/jsx-runtime";
function DataLeverageSection({ eyebrow, heading, description, items, reportingPeriods }) {
  return /* @__PURE__ */ jsxs21("section", { className: "mx-auto mt-32 max-w-[1280px] px-6", children: [
    /* @__PURE__ */ jsxs21("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx29(Badge, { variant: "eyebrow", children: eyebrow }),
      /* @__PURE__ */ jsx29("h2", { className: "mt-6 font-display text-[44px] leading-[1.05] md:text-[56px]", children: heading }),
      /* @__PURE__ */ jsx29("p", { className: "mx-auto mt-6 max-w-2xl text-muted-foreground md:text-[17px]", children: description })
    ] }),
    /* @__PURE__ */ jsxs21("div", { className: "mt-16 grid gap-10 md:grid-cols-2", children: [
      /* @__PURE__ */ jsx29("ul", { className: "divide-y divide-border", children: items.map((d) => /* @__PURE__ */ jsxs21("li", { className: "py-8 first:pt-0", children: [
        /* @__PURE__ */ jsx29("h3", { className: "font-display text-2xl", children: d.title }),
        /* @__PURE__ */ jsx29("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground md:text-base", children: d.desc })
      ] }, d.title)) }),
      /* @__PURE__ */ jsxs21("div", { className: "relative min-h-[480px] rounded-3xl bg-gradient-to-br from-[oklch(0.9_0.06_280)] to-[oklch(0.95_0.04_260)] p-6", children: [
        /* @__PURE__ */ jsxs21("div", { className: "absolute right-6 top-6 w-[85%] rounded-2xl bg-card p-4 shadow-xl", children: [
          /* @__PURE__ */ jsxs21("div", { className: "flex items-center justify-between text-[10px] text-muted-foreground", children: [
            /* @__PURE__ */ jsx29("span", { className: "rounded bg-muted px-2 py-1", children: "Number of transactions \u25BE" }),
            /* @__PURE__ */ jsx29("span", { className: "rounded bg-muted px-2 py-1", children: "Operator" }),
            /* @__PURE__ */ jsx29("span", { className: "rounded bg-muted px-2 py-1", children: "Method" })
          ] }),
          /* @__PURE__ */ jsxs21("svg", { viewBox: "0 0 300 100", className: "mt-3 h-24 w-full", children: [
            /* @__PURE__ */ jsx29("path", { d: "M0,60 Q40,20 80,50 T160,40 T240,70 T300,30", stroke: "oklch(0.55 0.2 255)", strokeWidth: "2", fill: "none" }),
            /* @__PURE__ */ jsx29("path", { d: "M0,70 Q40,40 80,60 T160,55 T240,40 T300,60", stroke: "oklch(0.7 0.18 140)", strokeWidth: "2", fill: "none" }),
            /* @__PURE__ */ jsx29("path", { d: "M0,50 Q40,70 80,45 T160,65 T240,55 T300,45", stroke: "oklch(0.65 0.22 25)", strokeWidth: "2", fill: "none" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs21("div", { className: "absolute bottom-6 left-6 w-[88%] rounded-2xl bg-card p-4 shadow-xl", children: [
          /* @__PURE__ */ jsxs21("div", { className: "flex items-center justify-between border-b border-border pb-2 text-[10px] font-semibold", children: [
            /* @__PURE__ */ jsx29("span", { children: "Autopay" }),
            /* @__PURE__ */ jsx29("span", { className: "text-muted-foreground", children: "Reporting Periods" })
          ] }),
          /* @__PURE__ */ jsx29("div", { className: "mt-3 space-y-1.5 text-[9px]", children: reportingPeriods.map((p) => /* @__PURE__ */ jsxs21("div", { className: "flex items-center justify-between border-b border-border/50 py-1", children: [
            /* @__PURE__ */ jsx29("span", { children: p.month }),
            /* @__PURE__ */ jsx29("span", { className: "rounded-full bg-[oklch(0.92_0.15_85)] px-2 py-0.5 text-[8px] font-medium", children: p.status }),
            /* @__PURE__ */ jsx29("span", { className: "text-muted-foreground", children: p.date })
          ] }, p.month)) })
        ] })
      ] })
    ] })
  ] });
}

// src/organisms/StatsSection/StatsSection.tsx
import { jsx as jsx30, jsxs as jsxs22 } from "react/jsx-runtime";
function StatsSection({ heading, description, stats }) {
  return /* @__PURE__ */ jsx30("section", { className: "mx-auto mt-32 max-w-[1280px] px-6", children: /* @__PURE__ */ jsxs22("div", { className: "overflow-hidden rounded-3xl bg-gradient-to-br from-[oklch(0.93_0.05_240)] via-[oklch(0.88_0.09_240)] to-[oklch(0.82_0.13_240)] p-10 md:p-16", children: [
    /* @__PURE__ */ jsxs22("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsx30("h2", { className: "font-display text-[44px] leading-[1.05] md:text-[56px]", children: heading }),
      /* @__PURE__ */ jsx30("p", { className: "mt-6 text-muted-foreground md:text-[17px]", children: description })
    ] }),
    /* @__PURE__ */ jsx30("div", { className: "mt-16 grid grid-cols-2 gap-px md:grid-cols-4", children: stats.map((s) => /* @__PURE__ */ jsx30(StatBlock, { ...s }, s.label)) })
  ] }) });
}

// src/organisms/IndustriesStackedSection/IndustriesStackedSection.tsx
import { jsx as jsx31, jsxs as jsxs23 } from "react/jsx-runtime";
function IndustriesStackedSection({ eyebrow, heading, industries, ctaLabel, onCtaClick }) {
  return /* @__PURE__ */ jsx31("section", { className: "mt-32 w-full bg-surface", children: /* @__PURE__ */ jsxs23("div", { className: "mx-auto max-w-[1600px] px-6 py-16 md:px-10 md:py-20", children: [
    /* @__PURE__ */ jsxs23("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx31(Badge, { variant: "eyebrow", children: eyebrow }),
      /* @__PURE__ */ jsx31("h2", { className: "mt-6 font-display text-[44px] leading-[1.05] md:text-[56px]", children: heading })
    ] }),
    /* @__PURE__ */ jsx31("div", { className: "mt-12", children: industries.map((ind, i) => /* @__PURE__ */ jsx31(
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
import { jsx as jsx32, jsxs as jsxs24 } from "react/jsx-runtime";
function IndustriesGridSection({ eyebrow, heading, industries, ctaLabel, onCtaClick }) {
  return /* @__PURE__ */ jsx32("section", { className: "mt-32 w-full bg-surface", children: /* @__PURE__ */ jsxs24("div", { className: "mx-auto max-w-[1600px] px-6 py-16 md:px-10 md:py-20", children: [
    /* @__PURE__ */ jsxs24("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx32(Badge, { variant: "eyebrow", children: eyebrow }),
      /* @__PURE__ */ jsx32("h2", { className: "mt-6 font-display text-[44px] leading-[1.05] md:text-[56px]", children: heading })
    ] }),
    /* @__PURE__ */ jsx32("div", { className: "mt-12 grid gap-6 md:grid-cols-3", children: industries.map((ind) => /* @__PURE__ */ jsx32(
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

// src/organisms/ContactSection/ContactSection.tsx
import { jsx as jsx33, jsxs as jsxs25 } from "react/jsx-runtime";
function ContactSection({
  heading,
  description,
  formHeading,
  consentText,
  controllerText,
  submitLabel = "Send",
  onSubmit
}) {
  return /* @__PURE__ */ jsx33("section", { id: "contact", className: "mx-auto mt-32 max-w-[1280px] px-6", children: /* @__PURE__ */ jsxs25("div", { className: "grid items-start gap-12 md:grid-cols-2", children: [
    /* @__PURE__ */ jsxs25("div", { children: [
      /* @__PURE__ */ jsx33("h2", { className: "font-display text-[44px] leading-[1.05] md:text-[56px]", children: heading }),
      /* @__PURE__ */ jsx33("p", { className: "mt-6 max-w-md text-muted-foreground md:text-[17px]", children: description })
    ] }),
    /* @__PURE__ */ jsxs25("div", { className: "rounded-3xl bg-card p-8 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.1)] md:p-10", children: [
      /* @__PURE__ */ jsx33("h3", { className: "font-display text-3xl", children: formHeading }),
      /* @__PURE__ */ jsxs25("form", { className: "mt-6 space-y-5", onSubmit: onSubmit ?? ((e) => e.preventDefault()), children: [
        /* @__PURE__ */ jsxs25("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsx33(FormField, { label: "First name", name: "firstName", placeholder: "Jane" }),
          /* @__PURE__ */ jsx33(FormField, { label: "Last name", name: "lastName", placeholder: "Doe" })
        ] }),
        /* @__PURE__ */ jsx33(FormField, { label: "Phone number", name: "phone", placeholder: "123456789" }),
        /* @__PURE__ */ jsx33(FormField, { label: "Business e-mail", name: "email", type: "email", placeholder: "jane@example.com" }),
        /* @__PURE__ */ jsx33(ConsentCheckboxField, { name: "consent", consentText, controllerText }),
        /* @__PURE__ */ jsx33(Button, { type: "submit", variant: "solid", className: "w-full py-4 text-sm", children: submitLabel })
      ] })
    ] })
  ] }) });
}

// src/organisms/FaqAccordionSection/FaqAccordionSection.tsx
import { jsx as jsx34, jsxs as jsxs26 } from "react/jsx-runtime";
function FaqAccordionSection({ heading, entries }) {
  return /* @__PURE__ */ jsx34("section", { id: "faq", "aria-labelledby": "faq-title", className: "bg-surface px-5 py-14 md:py-20", children: /* @__PURE__ */ jsxs26("div", { className: "mx-auto max-w-[1280px]", children: [
    /* @__PURE__ */ jsx34("h2", { id: "faq-title", className: "font-display text-3xl md:text-4xl", children: heading }),
    /* @__PURE__ */ jsx34(Accordion, { type: "single", collapsible: true, className: "mt-8 flex w-full flex-col gap-3", children: entries.map((entry, i) => /* @__PURE__ */ jsx34(FaqItem, { value: `item-${i}`, question: entry.question, answer: entry.answer }, entry.question)) })
  ] }) });
}

// src/organisms/PromoCtaSection/PromoCtaSection.tsx
import { jsx as jsx35, jsxs as jsxs27 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx35("section", { className: "bg-surface px-4 pb-6 md:px-8 md:pb-8", children: /* @__PURE__ */ jsxs27("div", { className: "relative mx-auto w-full max-w-[1600px] overflow-hidden rounded-3xl", children: [
    /* @__PURE__ */ jsx35("img", { src: backgroundImage, alt: "", "aria-hidden": "true", loading: "lazy", className: "absolute inset-0 size-full object-cover" }),
    /* @__PURE__ */ jsx35("div", { "aria-hidden": "true", className: "absolute inset-0 bg-ink/40" }),
    /* @__PURE__ */ jsxs27("div", { className: "relative px-6 pt-16 sm:px-10 md:px-14 md:pt-24", children: [
      /* @__PURE__ */ jsxs27("div", { className: "grid gap-10 md:grid-cols-2 md:items-start", children: [
        /* @__PURE__ */ jsx35("h2", { className: "max-w-xl font-display text-3xl text-background md:text-5xl", children: heading }),
        /* @__PURE__ */ jsxs27("div", { className: "flex flex-col gap-3 sm:flex-row md:justify-end", children: [
          /* @__PURE__ */ jsx35(Button, { asChild: true, variant: "lime", className: "h-12 px-7 text-base hover:scale-100 hover:bg-lime/90", children: /* @__PURE__ */ jsx35("a", { href: primaryCta.href, children: primaryCta.label }) }),
          /* @__PURE__ */ jsx35(
            Button,
            {
              asChild: true,
              variant: "outline-inverse",
              className: "h-12 border-background/30 px-7 text-base",
              children: /* @__PURE__ */ jsx35("a", { href: secondaryCta.href, target: secondaryCta.external ? "_blank" : void 0, rel: secondaryCta.external ? "noopener noreferrer" : void 0, children: secondaryCta.label })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs27("div", { className: "mt-14 rounded-3xl bg-lime p-8 text-lime-foreground md:mt-24 md:p-12", children: [
        /* @__PURE__ */ jsxs27("div", { className: "flex flex-col gap-6 md:flex-row md:items-center md:gap-10", children: [
          /* @__PURE__ */ jsx35(Logo, { src: logoSrc, alt: logoAlt, size: "sm", className: "md:h-8" }),
          /* @__PURE__ */ jsx35("p", { className: "font-display text-2xl leading-tight md:text-3xl", children: promoText })
        ] }),
        /* @__PURE__ */ jsxs27("div", { className: "mt-8 flex flex-col justify-between gap-4 border-t border-lime-foreground/15 pt-6 sm:flex-row sm:items-center", children: [
          /* @__PURE__ */ jsx35("p", { className: "text-sm text-lime-foreground/70", children: copyrightText }),
          /* @__PURE__ */ jsx35(
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
      /* @__PURE__ */ jsx35("div", { className: "h-6 md:h-8" })
    ] })
  ] }) });
}

// src/templates/LandingPageTemplate/LandingPageTemplate.tsx
import { jsx as jsx36, jsxs as jsxs28 } from "react/jsx-runtime";
function LandingPageTemplate({ navbar, hero, sections, footer }) {
  return /* @__PURE__ */ jsxs28("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsx36(Navbar, { ...navbar }),
    /* @__PURE__ */ jsxs28("main", { className: "flex-1", children: [
      /* @__PURE__ */ jsx36("div", { id: "top" }),
      hero,
      sections
    ] }),
    /* @__PURE__ */ jsx36(Footer, { ...footer })
  ] });
}

// src/tokens/index.ts
var colorTokens = {
  background: "oklch(0.985 0.003 60)",
  foreground: "oklch(0.18 0.02 260)",
  ink: "oklch(0.18 0.02 260)",
  surface: "oklch(0.97 0.005 60)",
  surfaceMuted: "oklch(0.94 0.006 250)",
  card: "oklch(1 0 0)",
  primary: "oklch(0.22 0.03 260)",
  primaryForeground: "oklch(0.985 0.003 60)",
  secondary: "oklch(0.94 0.006 250)",
  muted: "oklch(0.94 0.006 250)",
  mutedForeground: "oklch(0.45 0.015 260)",
  accent: "oklch(0.93 0.012 240)",
  destructive: "oklch(0.58 0.22 27)",
  border: "oklch(0.9 0.008 250)",
  input: "oklch(0.92 0.008 250)",
  ring: "oklch(0.7 0.04 250)",
  /** Raw hex — inconsistent with the rest of the palette (OKLCH). See AUDIT.md #6. */
  lime: "#e6ffa0",
  limeForeground: "oklch(0.18 0.02 260)",
  banking: "oklch(0.85 0.12 235)",
  automotive: "oklch(0.92 0.18 100)",
  insurance: "oklch(0.82 0.1 295)",
  healthcare: "oklch(0.88 0.1 155)",
  retail: "oklch(0.88 0.08 20)",
  energy: "oklch(0.78 0.14 35)",
  telecom: "oklch(0.93 0.15 110)"
};
var fontTokens = {
  display: '"Bricolage Grotesque", ui-sans-serif, system-ui, sans-serif',
  sans: '"Open Sans", ui-sans-serif, system-ui, sans-serif'
};
var radiusTokens = {
  base: "0.625rem",
  sm: "calc(0.625rem - 4px)",
  md: "calc(0.625rem - 2px)",
  lg: "0.625rem",
  xl: "calc(0.625rem + 6px)",
  "2xl": "calc(0.625rem + 14px)",
  "3xl": "calc(0.625rem + 22px)"
};
export {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
  BulletItem,
  Button,
  Checkbox,
  ConsentCheckboxField,
  ContactSection,
  DataLeverageSection,
  FaqAccordionSection,
  FaqItem,
  Footer,
  FormField,
  FourStepsSection,
  GlobalCoverageSection,
  HeroImageOverlay,
  HeroVideoSplit,
  IconCard,
  IconFeatureItem,
  IndustriesGridSection,
  IndustriesStackedSection,
  IndustryCard,
  Input,
  Label,
  LandingPageTemplate,
  Link,
  Logo,
  Navbar,
  PlatformFeatureShowcase,
  PromoCtaSection,
  SecuritySection,
  SingleIntegrationSection,
  StatBlock,
  StatsSection,
  StepCard,
  StepNumber,
  TrustedByLogos,
  badgeVariants,
  buttonVariants,
  colorTokens,
  fontTokens,
  linkVariants,
  radiusTokens
};
//# sourceMappingURL=index.js.map
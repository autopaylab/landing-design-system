"use client";
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
import { Slot as Slot2 } from "@radix-ui/react-slot";
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
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot2 : "a";
    return /* @__PURE__ */ jsx7(Comp, { className: cn(linkVariants({ variant }), className), ref, ...props });
  }
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
  headingLevel = "h4",
  ...props
}) {
  const Heading = headingLevel;
  return /* @__PURE__ */ jsxs5("li", { className: cn("flex gap-4", className), ...props, children: [
    /* @__PURE__ */ jsx13(Icon, { className: cn("mt-1 h-5 w-5 shrink-0", iconClassName) }),
    /* @__PURE__ */ jsxs5("div", { children: [
      /* @__PURE__ */ jsx13(Heading, { className: "font-display text-h6", children: title }),
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
      /* @__PURE__ */ jsx15("h3", { className: "font-display text-h4", children: title }),
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
    /* @__PURE__ */ jsx16("h3", { className: "mt-4 font-display text-h6", children: title }),
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

// src/molecules/OverlapCard/OverlapCard.tsx
import { jsx as jsx18, jsxs as jsxs10 } from "react/jsx-runtime";
function OverlapCard({
  className,
  title,
  description,
  image,
  backgroundColor,
  primaryCta,
  secondaryCta,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs10(
    "article",
    {
      className: cn(
        "grid items-stretch overflow-hidden rounded-3xl shadow-[0_20px_60px_-30px_rgba(0,0,0,0.35)] md:grid-cols-2",
        className
      ),
      style: { backgroundColor, ...style },
      ...props,
      children: [
        /* @__PURE__ */ jsxs10("div", { className: "flex flex-col justify-between p-10 md:p-12", children: [
          /* @__PURE__ */ jsx18("h3", { className: "font-display text-h3 whitespace-pre-line", children: title }),
          /* @__PURE__ */ jsxs10("div", { className: "mt-8", children: [
            /* @__PURE__ */ jsx18("p", { className: "max-w-md text-sm leading-relaxed text-foreground/75", children: description }),
            /* @__PURE__ */ jsxs10("div", { className: "mt-8 flex flex-wrap gap-3", children: [
              /* @__PURE__ */ jsx18(Button, { type: "button", variant: "solid", size: "xs", onClick: primaryCta.onClick, children: primaryCta.label }),
              /* @__PURE__ */ jsx18(
                Button,
                {
                  type: "button",
                  variant: "outline",
                  size: "xs",
                  className: "border-foreground/80 hover:bg-foreground hover:text-background",
                  onClick: secondaryCta.onClick,
                  children: secondaryCta.label
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx18(
          "div",
          {
            className: "min-h-[260px] bg-cover bg-center md:min-h-[420px]",
            style: { backgroundImage: `url(${image})` },
            role: "img",
            "aria-label": `${title.replace("\n", " ")} \u2014 promo`
          }
        )
      ]
    }
  );
}

// src/molecules/FaqItem/FaqItem.tsx
import { jsx as jsx19, jsxs as jsxs11 } from "react/jsx-runtime";
function FaqItem({ value, question, answer }) {
  return /* @__PURE__ */ jsxs11(AccordionItem, { value, className: "rounded-2xl border-0 bg-card px-6 py-1 md:px-8", children: [
    /* @__PURE__ */ jsx19(AccordionTrigger, { className: "py-6 text-left text-lg font-semibold hover:no-underline md:text-xl [&>svg]:size-5", children: question }),
    /* @__PURE__ */ jsx19(AccordionContent, { className: "pb-8 pt-2 text-base text-muted-foreground md:text-[17px]", children: answer })
  ] });
}

// src/molecules/PartnerCountBadge/PartnerCountBadge.tsx
import { jsx as jsx20, jsxs as jsxs12 } from "react/jsx-runtime";
function PartnerCountBadge({ className, count, label, ...props }) {
  return /* @__PURE__ */ jsxs12(
    "div",
    {
      className: cn(
        "inline-flex items-center gap-2 rounded-full bg-muted px-4 py-1.5 text-foreground/70",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx20("span", { className: "text-sm font-semibold text-foreground", children: count }),
        /* @__PURE__ */ jsx20("span", { className: "text-xs", children: label })
      ]
    }
  );
}

// src/organisms/Navbar/Navbar.tsx
import * as React8 from "react";
import { ChevronDown as ChevronDown2, Menu, X } from "lucide-react";
import { jsx as jsx21, jsxs as jsxs13 } from "react/jsx-runtime";
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
  const [isMenuOpen, setIsMenuOpen] = React8.useState(false);
  const menuId = React8.useId();
  return /* @__PURE__ */ jsx21("header", { className: "sticky top-5 z-40 mx-auto w-full max-w-[1280px] px-6", children: /* @__PURE__ */ jsxs13("div", { className: "rounded-xl bg-background shadow-[0_10px_40px_-12px_rgba(0,0,0,0.12)]", children: [
    /* @__PURE__ */ jsxs13("div", { className: "flex items-center justify-between gap-6 px-6 py-3", children: [
      /* @__PURE__ */ jsx21("a", { href: homeHref, className: "flex items-center", children: /* @__PURE__ */ jsx21(Logo, { src: logoSrc, alt: logoAlt, size: "md" }) }),
      /* @__PURE__ */ jsx21("nav", { "aria-label": navAriaLabel, className: "hidden flex-1 items-center justify-center gap-2 md:flex", children: navItems.map((item) => /* @__PURE__ */ jsx21(Link, { variant: "nav", href: item.href, children: item.label }, item.label)) }),
      /* @__PURE__ */ jsxs13("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx21(
          Button,
          {
            type: "button",
            variant: "outline",
            className: "hidden px-6 py-2.5 text-[17px] md:inline-flex",
            onClick: onLoginClick,
            children: loginLabel
          }
        ),
        /* @__PURE__ */ jsx21(Button, { type: "button", variant: "lime", className: "hidden px-6 py-2.5 text-[17px] md:inline-flex", onClick: onSignInClick, children: signInLabel }),
        languageLabel && /* @__PURE__ */ jsxs13(
          "button",
          {
            type: "button",
            onClick: onLanguageClick,
            "aria-label": languageButtonAriaLabel,
            className: "hidden items-center gap-1.5 rounded-lg pl-1 pr-2 py-1 text-foreground hover:bg-muted md:inline-flex",
            children: [
              /* @__PURE__ */ jsx21("span", { className: "inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg text-base", children: languageLabel }),
              /* @__PURE__ */ jsx21(ChevronDown2, { className: "h-4 w-4" })
            ]
          }
        ),
        /* @__PURE__ */ jsx21(
          "button",
          {
            type: "button",
            onClick: () => setIsMenuOpen((open) => !open),
            "aria-label": isMenuOpen ? closeMenuAriaLabel : openMenuAriaLabel,
            "aria-expanded": isMenuOpen,
            "aria-controls": menuId,
            className: "inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground hover:bg-muted md:hidden",
            children: isMenuOpen ? /* @__PURE__ */ jsx21(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx21(Menu, { className: "h-5 w-5" })
          }
        )
      ] })
    ] }),
    isMenuOpen && /* @__PURE__ */ jsxs13(
      "nav",
      {
        id: menuId,
        "aria-label": navAriaLabel,
        className: "flex flex-col gap-1 border-t border-border px-6 py-4 md:hidden",
        children: [
          navItems.map((item) => /* @__PURE__ */ jsx21(
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
          /* @__PURE__ */ jsxs13("div", { className: "mt-3 flex flex-col gap-2", children: [
            /* @__PURE__ */ jsx21(Button, { type: "button", variant: "outline", className: "w-full py-2.5 text-[17px]", onClick: onLoginClick, children: loginLabel }),
            /* @__PURE__ */ jsx21(Button, { type: "button", variant: "lime", className: "w-full py-2.5 text-[17px]", onClick: onSignInClick, children: signInLabel })
          ] }),
          languageLabel && /* @__PURE__ */ jsxs13(
            "button",
            {
              type: "button",
              onClick: onLanguageClick,
              "aria-label": languageButtonAriaLabel,
              className: "mt-3 inline-flex items-center gap-1.5 self-start rounded-lg pl-1 pr-2 py-1 text-foreground hover:bg-muted",
              children: [
                /* @__PURE__ */ jsx21("span", { className: "inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg text-base", children: languageLabel }),
                /* @__PURE__ */ jsx21(ChevronDown2, { className: "h-4 w-4" })
              ]
            }
          )
        ]
      }
    )
  ] }) });
}

// src/organisms/Footer/Footer.tsx
import { jsx as jsx22, jsxs as jsxs14 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs14("footer", { className: "mt-24", children: [
    /* @__PURE__ */ jsx22("section", { className: "relative mx-4 overflow-hidden rounded-t-3xl md:mx-8", children: /* @__PURE__ */ jsx22(
      "div",
      {
        className: "relative min-h-[420px] bg-cover bg-center md:min-h-[520px]",
        style: { backgroundImage: `linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15)), url('${bannerImage}')` },
        children: /* @__PURE__ */ jsxs14("div", { className: "absolute inset-0 grid grid-cols-1 items-start gap-8 px-8 py-12 md:grid-cols-2 md:px-16 md:py-16", children: [
          /* @__PURE__ */ jsx22("h3", { className: "font-display text-h2 text-white", children: ctaHeading }),
          /* @__PURE__ */ jsx22("p", { className: "font-display text-3xl text-white md:text-right md:text-[44px]", children: ctaSubheading })
        ] })
      }
    ) }),
    /* @__PURE__ */ jsxs14("section", { className: "mx-4 rounded-b-3xl bg-lime px-8 py-10 text-lime-foreground md:mx-8 md:px-16", children: [
      /* @__PURE__ */ jsxs14("div", { className: "flex items-start justify-between gap-8", children: [
        /* @__PURE__ */ jsx22(Logo, { src: logoSrc, alt: logoAlt, size: "sm" }),
        /* @__PURE__ */ jsx22("div", { className: "flex gap-4", children: socialLinks.map(({ label, href, icon: Icon }) => /* @__PURE__ */ jsx22("a", { href, "aria-label": label, className: "hover:opacity-70", children: /* @__PURE__ */ jsx22(Icon, { className: "h-5 w-5" }) }, label)) })
      ] }),
      /* @__PURE__ */ jsxs14("div", { className: "mt-10 grid items-end gap-8 md:grid-cols-[1.4fr_2fr_1fr]", children: [
        /* @__PURE__ */ jsx22("p", { className: "font-display text-3xl leading-[1.1] md:text-[38px]", children: tagline }),
        /* @__PURE__ */ jsx22("nav", { "aria-label": navAriaLabel, className: "flex flex-wrap items-end gap-x-10 gap-y-3 text-base font-medium", children: navItems.map((item) => /* @__PURE__ */ jsx22(Link, { variant: "underline", href: item.href, children: item.label }, item.label)) }),
        /* @__PURE__ */ jsx22("address", { className: "text-sm not-italic leading-relaxed md:text-right", children: address })
      ] }),
      /* @__PURE__ */ jsxs14("div", { className: "mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-lime-foreground/20 pt-5 text-xs", children: [
        /* @__PURE__ */ jsx22("span", { children: legalText }),
        /* @__PURE__ */ jsx22("div", { className: "flex items-center gap-4 opacity-80", children: schemeBadges.map((badge) => /* @__PURE__ */ jsx22("span", { className: "font-bold", children: badge }, badge)) })
      ] })
    ] })
  ] });
}

// src/organisms/HeroVideoSplit/HeroVideoSplit.tsx
import { jsx as jsx23, jsxs as jsxs15 } from "react/jsx-runtime";
function HeroVideoSplit({ eyebrow, title, subtitle, ctaLabel, ctaHref, videoSrc }) {
  return /* @__PURE__ */ jsx23("section", { className: "mx-auto max-w-[1280px] px-6 pt-16 md:pt-24", children: /* @__PURE__ */ jsxs15("div", { className: "grid items-center gap-10 md:grid-cols-2", children: [
    /* @__PURE__ */ jsxs15("div", { children: [
      eyebrow && /* @__PURE__ */ jsx23("div", { className: "mb-6", children: /* @__PURE__ */ jsx23(Badge, { variant: "eyebrow", children: eyebrow }) }),
      /* @__PURE__ */ jsx23("h1", { className: "font-display text-h1", children: title }),
      /* @__PURE__ */ jsx23("p", { className: "mt-8 max-w-md text-base leading-relaxed text-muted-foreground md:text-[17px]", children: subtitle }),
      /* @__PURE__ */ jsx23("div", { className: "mt-10", children: /* @__PURE__ */ jsx23(Button, { asChild: true, variant: "lime", size: "lg", children: /* @__PURE__ */ jsx23("a", { href: ctaHref, children: ctaLabel }) }) })
    ] }),
    /* @__PURE__ */ jsx23("div", { className: "relative", children: /* @__PURE__ */ jsx23("video", { src: videoSrc, autoPlay: true, loop: true, muted: true, playsInline: true, className: "h-auto w-full" }) })
  ] }) });
}

// src/organisms/HeroImageOverlay/HeroImageOverlay.tsx
import { jsx as jsx24, jsxs as jsxs16 } from "react/jsx-runtime";
function HeroImageOverlay({ layout, image, title, subtitle, primaryCta, secondaryCta }) {
  const ctas = /* @__PURE__ */ jsxs16("div", { className: "flex flex-col gap-3 sm:flex-row", children: [
    /* @__PURE__ */ jsx24(Button, { asChild: true, variant: "lime", size: "lg", children: /* @__PURE__ */ jsx24("a", { href: primaryCta.href, children: primaryCta.label }) }),
    /* @__PURE__ */ jsx24(Button, { asChild: true, variant: "outline-inverse", size: "lg", children: /* @__PURE__ */ jsx24("a", { href: secondaryCta.href, children: secondaryCta.label }) })
  ] });
  return /* @__PURE__ */ jsx24("div", { className: "px-4 md:px-8", children: /* @__PURE__ */ jsxs16("section", { className: "relative mx-auto w-full max-w-[1600px] overflow-hidden rounded-3xl bg-foreground", children: [
    /* @__PURE__ */ jsx24("img", { src: image, alt: "", "aria-hidden": "true", loading: "lazy", className: "absolute inset-0 size-full object-cover" }),
    /* @__PURE__ */ jsx24(
      "div",
      {
        "aria-hidden": "true",
        className: cn("absolute inset-0", layout === "stacked" ? "bg-gradient-to-r from-foreground via-foreground/75 to-foreground/10" : "bg-foreground/50")
      }
    ),
    layout === "stacked" ? /* @__PURE__ */ jsx24("div", { className: "relative px-6 py-20 text-background sm:px-10 md:px-16 md:py-32 lg:py-40", children: /* @__PURE__ */ jsxs16("div", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsx24("h2", { className: "font-display text-h1", children: title }),
      subtitle && /* @__PURE__ */ jsx24("p", { className: "mt-6 max-w-2xl text-base text-background/80 md:text-xl", children: subtitle }),
      /* @__PURE__ */ jsx24("div", { className: "mt-9", children: ctas })
    ] }) }) : /* @__PURE__ */ jsx24("div", { className: "relative px-6 py-20 sm:px-10 md:px-14 md:py-28", children: /* @__PURE__ */ jsxs16("div", { className: "grid gap-10 md:grid-cols-2 md:items-center", children: [
      /* @__PURE__ */ jsx24("h2", { className: "max-w-xl font-display text-h2 text-background", children: title }),
      /* @__PURE__ */ jsx24("div", { className: "md:justify-self-end", children: ctas })
    ] }) })
  ] }) });
}

// src/organisms/TrustedByLogos/TrustedByLogos.tsx
import { jsx as jsx25, jsxs as jsxs17 } from "react/jsx-runtime";
function TrustedByLogos({ heading, logos }) {
  return /* @__PURE__ */ jsxs17("section", { id: "trusted-by", className: "mx-auto mt-16 max-w-[1280px] px-6 md:mt-32", children: [
    /* @__PURE__ */ jsx25("h2", { className: "text-center font-display text-h3", children: heading }),
    /* @__PURE__ */ jsx25("div", { className: "mt-12 flex flex-wrap items-center justify-center gap-x-16 gap-y-10", children: logos.map((l) => /* @__PURE__ */ jsx25(
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
import { jsx as jsx26, jsxs as jsxs18 } from "react/jsx-runtime";
function FourStepsSection({ heading, description, image, imageAlt, steps }) {
  return /* @__PURE__ */ jsx26("section", { "aria-labelledby": "four-steps-title", className: "px-5 py-14 md:py-20", children: /* @__PURE__ */ jsx26("div", { className: "mx-auto max-w-[1280px]", children: /* @__PURE__ */ jsxs18("div", { className: "overflow-hidden rounded-3xl bg-gradient-to-br from-[oklch(0.97_0.01_240)] via-[oklch(0.91_0.07_240)] to-[oklch(0.82_0.13_240)]", children: [
    /* @__PURE__ */ jsxs18("div", { className: "grid items-center gap-8 px-6 pb-10 pt-10 md:grid-cols-[1.1fr_1fr] md:px-14 md:pb-16 md:pt-14", children: [
      /* @__PURE__ */ jsxs18("div", { children: [
        /* @__PURE__ */ jsx26("h2", { id: "four-steps-title", className: "max-w-2xl font-display text-h2", children: heading }),
        /* @__PURE__ */ jsx26("p", { className: "mt-6 max-w-xl text-muted-foreground md:text-[17px]", children: description })
      ] }),
      /* @__PURE__ */ jsx26("img", { src: image, alt: imageAlt, width: 700, height: 400, loading: "lazy", className: "w-full max-w-[560px] justify-self-end" })
    ] }),
    /* @__PURE__ */ jsx26("ol", { className: "grid border-t border-primary/20 sm:grid-cols-2 lg:grid-cols-4", children: steps.map((step, i) => /* @__PURE__ */ jsx26(
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
import { jsx as jsx27, jsxs as jsxs19 } from "react/jsx-runtime";
function SingleIntegrationSection({
  eyebrow,
  heading,
  subheading,
  subheadingCaption,
  features,
  videoSrc
}) {
  return /* @__PURE__ */ jsx27("section", { id: "platform", className: "mt-16 w-full overflow-hidden bg-white pb-0 pt-24 md:mt-32", children: /* @__PURE__ */ jsxs19("div", { className: "mx-auto max-w-[1280px] px-6", children: [
    /* @__PURE__ */ jsxs19("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx27(Badge, { variant: "eyebrow", children: eyebrow }),
      /* @__PURE__ */ jsx27("h2", { className: "mt-6 font-display text-h2", children: heading })
    ] }),
    /* @__PURE__ */ jsxs19("div", { className: "mt-20 grid items-end gap-10 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxs19("div", { className: "pb-24", children: [
        /* @__PURE__ */ jsx27("h3", { className: "font-display text-h4", children: subheading }),
        /* @__PURE__ */ jsx27("p", { className: "mt-2 text-muted-foreground", children: subheadingCaption }),
        /* @__PURE__ */ jsx27("ul", { className: "mt-10 space-y-8", children: features.map((f) => /* @__PURE__ */ jsx27(IconFeatureItem, { ...f }, f.title)) })
      ] }),
      /* @__PURE__ */ jsx27("div", { className: "flex justify-center self-end md:justify-end", children: /* @__PURE__ */ jsx27("video", { src: videoSrc, autoPlay: true, muted: true, loop: true, playsInline: true, className: "block h-auto w-full max-w-[720px] object-contain" }) })
    ] })
  ] }) });
}

// src/organisms/PlatformFeatureShowcase/PlatformFeatureShowcase.tsx
import * as React9 from "react";
import { Fragment as Fragment2, jsx as jsx28, jsxs as jsxs20 } from "react/jsx-runtime";
function PlatformFeatureShowcase({ features }) {
  const [active, setActive] = React9.useState(features[0]?.key);
  const [hovered, setHovered] = React9.useState(null);
  const shown = hovered ?? active;
  const tabRefs = React9.useRef({});
  const reactId = React9.useId();
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
  return /* @__PURE__ */ jsxs20(Fragment2, { children: [
    /* @__PURE__ */ jsx28("div", { className: "flex flex-col gap-6 md:hidden", children: features.map((f) => /* @__PURE__ */ jsxs20("div", { className: "rounded-3xl bg-card p-6 shadow-sm", children: [
      /* @__PURE__ */ jsx28("h4", { className: "font-display text-h5", children: f.title }),
      /* @__PURE__ */ jsx28("p", { className: "mt-2 text-[15px] leading-relaxed text-muted-foreground", children: f.desc }),
      /* @__PURE__ */ jsx28("div", { className: "mt-5 flex items-center justify-center overflow-hidden rounded-lg bg-[oklch(0.97_0.02_240)] p-4", children: /* @__PURE__ */ jsx28("video", { src: f.video, autoPlay: true, muted: true, loop: true, playsInline: true, preload: "metadata", className: "w-full max-w-full object-contain" }) })
    ] }, f.key)) }),
    /* @__PURE__ */ jsxs20("div", { className: "hidden items-stretch gap-6 md:grid md:grid-cols-[1.35fr_1fr]", children: [
      /* @__PURE__ */ jsx28("div", { className: "flex min-h-[460px] items-center justify-center overflow-hidden rounded-3xl bg-[oklch(0.97_0.02_240)] p-8", children: features.map((f) => /* @__PURE__ */ jsx28("div", { role: "tabpanel", id: panelId(f.key), "aria-labelledby": tabId(f.key), hidden: shown !== f.key, children: /* @__PURE__ */ jsx28(
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
      /* @__PURE__ */ jsx28("div", { className: "flex flex-col gap-5", role: "tablist", "aria-orientation": "vertical", children: features.map((f, i) => {
        const isActive = active === f.key;
        return /* @__PURE__ */ jsxs20(
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
              /* @__PURE__ */ jsx28("span", { className: "block font-display text-2xl", children: f.title }),
              /* @__PURE__ */ jsx28("span", { className: "mt-3 block text-[15px] leading-relaxed text-muted-foreground", children: f.desc })
            ]
          },
          f.key
        );
      }) })
    ] })
  ] });
}

// src/organisms/SecuritySection/SecuritySection.tsx
import { jsx as jsx29, jsxs as jsxs21 } from "react/jsx-runtime";
function SecuritySection({ eyebrow, heading, description, schemeBadges, cards }) {
  return /* @__PURE__ */ jsxs21("section", { id: "security", className: "mx-auto mt-16 max-w-[1280px] px-6 md:mt-32", children: [
    /* @__PURE__ */ jsxs21("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx29(Badge, { variant: "eyebrow", children: eyebrow }),
      /* @__PURE__ */ jsx29("h2", { className: "mt-6 font-display text-h2", children: heading }),
      /* @__PURE__ */ jsx29("p", { className: "mx-auto mt-6 max-w-2xl text-muted-foreground md:text-[17px]", children: description })
    ] }),
    /* @__PURE__ */ jsx29("div", { className: "mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-70 grayscale", children: schemeBadges.map((label) => /* @__PURE__ */ jsx29("span", { className: "text-sm font-bold text-foreground/60", children: label }, label)) }),
    /* @__PURE__ */ jsx29("div", { className: "mt-12 grid gap-6 md:grid-cols-2", children: cards.map((c) => /* @__PURE__ */ jsx29(IconCard, { ...c }, c.title)) })
  ] });
}

// src/organisms/GlobalCoverageSection/GlobalCoverageSection.tsx
import { jsx as jsx30, jsxs as jsxs22 } from "react/jsx-runtime";
function GlobalCoverageSection({ eyebrow, heading, features, floatingBadges }) {
  return /* @__PURE__ */ jsx30("section", { className: "mx-auto mt-16 max-w-[1280px] px-6 md:mt-32", children: /* @__PURE__ */ jsxs22("div", { className: "grid items-center gap-12 md:grid-cols-2", children: [
    /* @__PURE__ */ jsxs22("div", { children: [
      /* @__PURE__ */ jsx30(Badge, { variant: "eyebrow", children: eyebrow }),
      /* @__PURE__ */ jsx30("h2", { className: "mt-6 font-display text-h2", children: heading }),
      /* @__PURE__ */ jsx30("ul", { className: "mt-12 space-y-8", children: features.map((f) => (
        // No h3 sits between this list and the section's h2 above (unlike
        // SingleIntegrationSection, which has one), so these need to be h3
        // themselves or heading levels skip -- see AUDIT.md section 6.
        /* @__PURE__ */ jsx30(IconFeatureItem, { headingLevel: "h3", ...f }, f.title)
      )) })
    ] }),
    /* @__PURE__ */ jsxs22("div", { className: "relative aspect-square rounded-3xl bg-gradient-to-br from-muted to-background", children: [
      /* @__PURE__ */ jsx30("div", { className: "absolute right-8 top-8 grid h-20 w-20 place-items-center rounded-full bg-card shadow-lg", children: /* @__PURE__ */ jsx30("div", { className: "h-9 w-6 rounded-t-full bg-[oklch(0.6_0.22_255)]" }) }),
      floatingBadges.map((b) => /* @__PURE__ */ jsx30(
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
import { jsx as jsx31, jsxs as jsxs23 } from "react/jsx-runtime";
function DataLeverageSection({ eyebrow, heading, description, items, reportingPeriods }) {
  return /* @__PURE__ */ jsxs23("section", { className: "mx-auto mt-16 max-w-[1280px] px-6 md:mt-32", children: [
    /* @__PURE__ */ jsxs23("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx31(Badge, { variant: "eyebrow", children: eyebrow }),
      /* @__PURE__ */ jsx31("h2", { className: "mt-6 font-display text-h2", children: heading }),
      /* @__PURE__ */ jsx31("p", { className: "mx-auto mt-6 max-w-2xl text-muted-foreground md:text-[17px]", children: description })
    ] }),
    /* @__PURE__ */ jsxs23("div", { className: "mt-16 grid gap-10 md:grid-cols-2", children: [
      /* @__PURE__ */ jsx31("ul", { className: "divide-y divide-border", children: items.map((d) => /* @__PURE__ */ jsxs23("li", { className: "py-8 first:pt-0", children: [
        /* @__PURE__ */ jsx31("h3", { className: "font-display text-h4", children: d.title }),
        /* @__PURE__ */ jsx31("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground md:text-base", children: d.desc })
      ] }, d.title)) }),
      /* @__PURE__ */ jsxs23("div", { className: "relative min-h-[480px] rounded-3xl bg-gradient-to-br from-[oklch(0.9_0.06_280)] to-[oklch(0.95_0.04_260)] p-6", children: [
        /* @__PURE__ */ jsxs23("div", { className: "absolute right-6 top-6 w-[85%] rounded-2xl bg-card p-4 shadow-xl", children: [
          /* @__PURE__ */ jsxs23("div", { className: "flex items-center justify-between text-[10px] text-muted-foreground", children: [
            /* @__PURE__ */ jsx31("span", { className: "rounded bg-muted px-2 py-1", children: "Number of transactions \u25BE" }),
            /* @__PURE__ */ jsx31("span", { className: "rounded bg-muted px-2 py-1", children: "Operator" }),
            /* @__PURE__ */ jsx31("span", { className: "rounded bg-muted px-2 py-1", children: "Method" })
          ] }),
          /* @__PURE__ */ jsxs23("svg", { viewBox: "0 0 300 100", className: "mt-3 h-24 w-full", children: [
            /* @__PURE__ */ jsx31("path", { d: "M0,60 Q40,20 80,50 T160,40 T240,70 T300,30", stroke: "oklch(0.55 0.2 255)", strokeWidth: "2", fill: "none" }),
            /* @__PURE__ */ jsx31("path", { d: "M0,70 Q40,40 80,60 T160,55 T240,40 T300,60", stroke: "oklch(0.7 0.18 140)", strokeWidth: "2", fill: "none" }),
            /* @__PURE__ */ jsx31("path", { d: "M0,50 Q40,70 80,45 T160,65 T240,55 T300,45", stroke: "oklch(0.65 0.22 25)", strokeWidth: "2", fill: "none" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs23("div", { className: "absolute bottom-6 left-6 w-[88%] rounded-2xl bg-card p-4 shadow-xl", children: [
          /* @__PURE__ */ jsxs23("div", { className: "flex items-center justify-between border-b border-border pb-2 text-[10px] font-semibold", children: [
            /* @__PURE__ */ jsx31("span", { children: "Autopay" }),
            /* @__PURE__ */ jsx31("span", { className: "text-muted-foreground", children: "Reporting Periods" })
          ] }),
          /* @__PURE__ */ jsx31("div", { className: "mt-3 space-y-1.5 text-[9px]", children: reportingPeriods.map((p) => /* @__PURE__ */ jsxs23("div", { className: "flex items-center justify-between border-b border-border/50 py-1", children: [
            /* @__PURE__ */ jsx31("span", { children: p.month }),
            /* @__PURE__ */ jsx31("span", { className: "rounded-full bg-[oklch(0.92_0.15_85)] px-2 py-0.5 text-[8px] font-medium", children: p.status }),
            /* @__PURE__ */ jsx31("span", { className: "text-muted-foreground", children: p.date })
          ] }, p.month)) })
        ] })
      ] })
    ] })
  ] });
}

// src/organisms/StatsSection/StatsSection.tsx
import { jsx as jsx32, jsxs as jsxs24 } from "react/jsx-runtime";
function StatsSection({ heading, description, stats }) {
  return /* @__PURE__ */ jsx32("section", { className: "mx-auto mt-16 max-w-[1280px] px-6 md:mt-32", children: /* @__PURE__ */ jsxs24("div", { className: "overflow-hidden rounded-3xl bg-gradient-to-br from-[oklch(0.93_0.05_240)] via-[oklch(0.88_0.09_240)] to-[oklch(0.82_0.13_240)] p-10 md:p-16", children: [
    /* @__PURE__ */ jsxs24("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsx32("h2", { className: "font-display text-h2", children: heading }),
      /* @__PURE__ */ jsx32("p", { className: "mt-6 text-muted-foreground md:text-[17px]", children: description })
    ] }),
    /* @__PURE__ */ jsx32("div", { className: "mt-16 grid grid-cols-2 gap-px md:grid-cols-4", children: stats.map((s) => /* @__PURE__ */ jsx32(StatBlock, { ...s }, s.label)) })
  ] }) });
}

// src/organisms/IndustriesStackedSection/IndustriesStackedSection.tsx
import { jsx as jsx33, jsxs as jsxs25 } from "react/jsx-runtime";
function IndustriesStackedSection({ eyebrow, heading, industries, ctaLabel, onCtaClick }) {
  return /* @__PURE__ */ jsx33("section", { className: "mt-16 w-full bg-surface md:mt-32", children: /* @__PURE__ */ jsxs25("div", { className: "mx-auto max-w-[1600px] px-6 py-16 md:px-10 md:py-20", children: [
    /* @__PURE__ */ jsxs25("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx33(Badge, { variant: "eyebrow", children: eyebrow }),
      /* @__PURE__ */ jsx33("h2", { className: "mt-6 font-display text-h2", children: heading })
    ] }),
    /* @__PURE__ */ jsx33("div", { className: "mt-12", children: industries.map((ind, i) => /* @__PURE__ */ jsx33(
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
import { jsx as jsx34, jsxs as jsxs26 } from "react/jsx-runtime";
function IndustriesGridSection({ eyebrow, heading, industries, ctaLabel, onCtaClick }) {
  return /* @__PURE__ */ jsx34("section", { className: "mt-16 w-full bg-surface md:mt-32", children: /* @__PURE__ */ jsxs26("div", { className: "mx-auto max-w-[1600px] px-6 py-16 md:px-10 md:py-20", children: [
    /* @__PURE__ */ jsxs26("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx34(Badge, { variant: "eyebrow", children: eyebrow }),
      /* @__PURE__ */ jsx34("h2", { className: "mt-6 font-display text-h2", children: heading })
    ] }),
    /* @__PURE__ */ jsx34("div", { className: "mt-12 grid gap-6 md:grid-cols-3", children: industries.map((ind) => /* @__PURE__ */ jsx34(
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

// src/organisms/OverlappingCardsSection/OverlappingCardsSection.tsx
import { jsx as jsx35, jsxs as jsxs27 } from "react/jsx-runtime";
function OverlappingCardsSection({ eyebrow, heading, cards }) {
  return /* @__PURE__ */ jsx35("section", { className: "mt-16 w-full bg-surface md:mt-32", children: /* @__PURE__ */ jsxs27("div", { className: "mx-auto max-w-[1600px] px-6 py-16 md:px-10 md:py-20", children: [
    /* @__PURE__ */ jsxs27("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx35(Badge, { variant: "eyebrow", children: eyebrow }),
      /* @__PURE__ */ jsx35("h2", { className: "mt-6 font-display text-h2", children: heading })
    ] }),
    /* @__PURE__ */ jsx35("div", { className: "mt-12", children: cards.map((c, i) => /* @__PURE__ */ jsx35(
      OverlapCard,
      {
        title: c.title,
        description: c.description,
        image: c.image,
        backgroundColor: c.backgroundColor,
        primaryCta: c.primaryCta,
        secondaryCta: c.secondaryCta,
        className: "sticky",
        style: {
          top: `calc(6rem + ${i * 1.25}rem)`,
          marginBottom: i === cards.length - 1 ? 0 : "2rem",
          zIndex: i + 1
        }
      },
      c.title
    )) })
  ] }) });
}

// src/organisms/ContactSection/ContactSection.tsx
import { jsx as jsx36, jsxs as jsxs28 } from "react/jsx-runtime";
function ContactSection({
  heading,
  description,
  formHeading,
  consentText,
  controllerText,
  submitLabel = "Send",
  onSubmit
}) {
  return /* @__PURE__ */ jsx36("section", { id: "contact", className: "mx-auto mt-16 max-w-[1280px] px-6 md:mt-32", children: /* @__PURE__ */ jsxs28("div", { className: "grid items-start gap-12 md:grid-cols-2", children: [
    /* @__PURE__ */ jsxs28("div", { children: [
      /* @__PURE__ */ jsx36("h2", { className: "font-display text-h2", children: heading }),
      /* @__PURE__ */ jsx36("p", { className: "mt-6 max-w-md text-muted-foreground md:text-[17px]", children: description })
    ] }),
    /* @__PURE__ */ jsxs28("div", { className: "rounded-3xl bg-card p-8 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.1)] md:p-10", children: [
      /* @__PURE__ */ jsx36("h3", { className: "font-display text-h4", children: formHeading }),
      /* @__PURE__ */ jsxs28("form", { className: "mt-6 space-y-5", onSubmit: onSubmit ?? ((e) => e.preventDefault()), children: [
        /* @__PURE__ */ jsxs28("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsx36(FormField, { label: "First name", name: "firstName", placeholder: "Jane" }),
          /* @__PURE__ */ jsx36(FormField, { label: "Last name", name: "lastName", placeholder: "Doe" })
        ] }),
        /* @__PURE__ */ jsx36(FormField, { label: "Phone number", name: "phone", placeholder: "123456789" }),
        /* @__PURE__ */ jsx36(FormField, { label: "Business e-mail", name: "email", type: "email", placeholder: "jane@example.com" }),
        /* @__PURE__ */ jsx36(ConsentCheckboxField, { name: "consent", consentText, controllerText }),
        /* @__PURE__ */ jsx36(Button, { type: "submit", variant: "solid", className: "w-full py-4 text-sm", children: submitLabel })
      ] })
    ] })
  ] }) });
}

// src/organisms/FaqAccordionSection/FaqAccordionSection.tsx
import { jsx as jsx37, jsxs as jsxs29 } from "react/jsx-runtime";
function FaqAccordionSection({ heading, entries }) {
  return /* @__PURE__ */ jsx37("section", { id: "faq", "aria-labelledby": "faq-title", className: "bg-surface px-5 py-14 md:py-20", children: /* @__PURE__ */ jsxs29("div", { className: "mx-auto max-w-[1280px]", children: [
    /* @__PURE__ */ jsx37("h2", { id: "faq-title", className: "font-display text-h2", children: heading }),
    /* @__PURE__ */ jsx37(Accordion, { type: "single", collapsible: true, className: "mt-8 flex w-full flex-col gap-3", children: entries.map((entry, i) => /* @__PURE__ */ jsx37(FaqItem, { value: `item-${i}`, question: entry.question, answer: entry.answer }, entry.question)) })
  ] }) });
}

// src/organisms/PromoCtaSection/PromoCtaSection.tsx
import { jsx as jsx38, jsxs as jsxs30 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx38("section", { className: "bg-surface px-4 pb-6 md:px-8 md:pb-8", children: /* @__PURE__ */ jsxs30("div", { className: "relative mx-auto w-full max-w-[1600px] overflow-hidden rounded-3xl", children: [
    /* @__PURE__ */ jsx38("img", { src: backgroundImage, alt: "", "aria-hidden": "true", loading: "lazy", className: "absolute inset-0 size-full object-cover" }),
    /* @__PURE__ */ jsx38("div", { "aria-hidden": "true", className: "absolute inset-0 bg-ink/40" }),
    /* @__PURE__ */ jsxs30("div", { className: "relative px-6 pt-16 sm:px-10 md:px-14 md:pt-24", children: [
      /* @__PURE__ */ jsxs30("div", { className: "grid gap-10 md:grid-cols-2 md:items-start", children: [
        /* @__PURE__ */ jsx38("h2", { className: "max-w-xl font-display text-h2 text-background", children: heading }),
        /* @__PURE__ */ jsxs30("div", { className: "flex flex-col gap-3 sm:flex-row md:justify-end", children: [
          /* @__PURE__ */ jsx38(Button, { asChild: true, variant: "lime", className: "h-12 px-7 text-base hover:scale-100 hover:bg-lime/90", children: /* @__PURE__ */ jsx38("a", { href: primaryCta.href, children: primaryCta.label }) }),
          /* @__PURE__ */ jsx38(
            Button,
            {
              asChild: true,
              variant: "outline-inverse",
              className: "h-12 border-background/30 px-7 text-base",
              children: /* @__PURE__ */ jsx38("a", { href: secondaryCta.href, target: secondaryCta.external ? "_blank" : void 0, rel: secondaryCta.external ? "noopener noreferrer" : void 0, children: secondaryCta.label })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs30("div", { className: "mt-14 rounded-3xl bg-lime p-8 text-lime-foreground md:mt-24 md:p-12", children: [
        /* @__PURE__ */ jsxs30("div", { className: "flex flex-col gap-6 md:flex-row md:items-center md:gap-10", children: [
          /* @__PURE__ */ jsx38(Logo, { src: logoSrc, alt: logoAlt, size: "sm", className: "md:h-8" }),
          /* @__PURE__ */ jsx38("p", { className: "font-display text-2xl leading-tight md:text-3xl", children: promoText })
        ] }),
        /* @__PURE__ */ jsxs30("div", { className: "mt-8 flex flex-col justify-between gap-4 border-t border-lime-foreground/15 pt-6 sm:flex-row sm:items-center", children: [
          /* @__PURE__ */ jsx38("p", { className: "text-sm text-lime-foreground/70", children: copyrightText }),
          /* @__PURE__ */ jsx38(
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
      /* @__PURE__ */ jsx38("div", { className: "h-6 md:h-8" })
    ] })
  ] }) });
}

// src/organisms/CookieConsentScript/CookieConsentScript.tsx
import { jsx as jsx39 } from "react/jsx-runtime";
function buildCookieConsentScript({ localeStorageKey = "autopaylab-locale" } = {}) {
  return `
(function () {
  try {
    var storedLocale = window.localStorage.getItem(${JSON.stringify(localeStorageKey)});
    window.cmp_setlang = storedLocale === "pl" ? "PL" : "EN";
  } catch (e) {}
})();
"gdprAppliesGlobally"in window||(window.gdprAppliesGlobally=!0),(!("cmp_id"in window)||window.cmp_id<1)&&(window.cmp_id=0),"cmp_cdid"in window||(window.cmp_cdid="136af463a10ba"),"cmp_params"in window||(window.cmp_params=""),"cmp_host"in window||(window.cmp_host="c.delivery.consentmanager.net"),"cmp_cdn"in window||(window.cmp_cdn="cdn.consentmanager.net"),"cmp_proto"in window||(window.cmp_proto="https:"),"cmp_codesrc"in window||(window.cmp_codesrc="0"),window.cmp_getsupportedLangs=function(){var n=["DE","EN","FR","IT","NO","DA","FI","ES","PT","RO","BG","ET","EL","GA","HR","LV","LT","MT","NL","PL","SV","SK","SL","CS","HU","RU","SR","ZH","TR","UK","AR","BS","JA","CY"];if("cmp_customlanguages"in window)for(var e=0;e<window.cmp_customlanguages.length;e++)n.push(window.cmp_customlanguages[e].l.toUpperCase());return n},window.cmp_getRTLLangs=function(){var n=["AR"];if("cmp_customlanguages"in window)for(var e=0;e<window.cmp_customlanguages.length;e++)"r"in window.cmp_customlanguages[e]&&window.cmp_customlanguages[e].r&&n.push(window.cmp_customlanguages[e].l);return n},window.cmp_getlang=function(n){return"boolean"!=typeof n&&(n=!0),n&&"string"==typeof cmp_getlang.usedlang&&""!==cmp_getlang.usedlang?cmp_getlang.usedlang:window.cmp_getlangs()[0]},window.cmp_extractlang=function(n){return-1!=n.indexOf("cmplang=")?-1!=(n=n.substr(n.indexOf("cmplang=")+8,2).toUpperCase()).indexOf("&")&&(n=n.substr(0,n.indexOf("&"))):n="",n},window.cmp_getlangs=function(){var n=window.cmp_getsupportedLangs(),e=[],t=location.hash,i=location.search,a="cmp_params"in window?window.cmp_params:"";""!=cmp_extractlang(t)?e.push(cmp_extractlang(t)):""!=cmp_extractlang(i)?e.push(cmp_extractlang(i)):""!=cmp_extractlang(a)?e.push(cmp_extractlang(a)):"cmp_setlang"in window&&""!=window.cmp_setlang?e.push(window.cmp_setlang.toUpperCase()):"cmp_langdetect"in window&&1==window.cmp_langdetect?e.push(window.cmp_getPageLang()):e=window.cmp_getBrowserLangs();for(var p=[],c=0;c<e.length;c++){var s=e[c].toUpperCase();s.length<2||(-1!=n.indexOf(s)?p.push(s):(-1!=s.indexOf("-")&&(s=s.substr(0,2)),-1!=n.indexOf(s)&&p.push(s)))}return 0==p.length&&"string"==typeof cmp_getlang.defaultlang&&""!==cmp_getlang.defaultlang?[cmp_getlang.defaultlang.toUpperCase()]:p.length>0?p:["EN"]},window.cmp_getPageLangs=function(){var n=window.cmp_getXMLLang();return(n=(n=""!=n?[n.toUpperCase()]:[]).concat(window.cmp_getLangsFromURL())).length>0?n:["EN"]},window.cmp_getPageLang=function(){var n=window.cmp_getPageLangs();return n.length>0?n[0]:""},window.cmp_getLangsFromURL=function(){var n=window.cmp_getsupportedLangs(),e=location,t="toUpperCase",i=e.hostname[t]()+".",a="/"+e.pathname[t]()+"/";a=(a=(a=a.split("").join("-")).split("//").join("/")).split("//").join("/");for(var p=[],c=0;c<n.length;c++){var s=a.substring(0,n[c].length+2);if(i.substring(0,n[c].length+1)==n[c]+".")p.push(n[c][t]());else if(5==n[c].length){var o=n[c].substring(3,5)+"-"+n[c].substring(0,2);i.substring(0,o.length+1)==o+"."&&p.push(n[c][t]())}else if(s=="/"+n[c]+"/"||s=="/"+n[c]+"-")p.push(n[c][t]());else if(s=="/"+n[c].replace("-","/")+"/"||s=="/"+n[c].replace("-","/")+"/")p.push(n[c][t]());else if(5==n[c].length){o=n[c].substring(3,5)+"-"+n[c].substring(0,2);var d=a.substring(0,o.length+1);d!="/"+o+"/"&&d!="/"+o.replace("-","/")+"/"||p.push(n[c][t]())}}return p},window.cmp_getXMLLang=function(){var n=document.getElementsByTagName("html");if((n=n.length>0?n[0]:document.documentElement)&&n.getAttribute){var e=n.getAttribute("xml:lang");if("string"==typeof e&&""!=e||(e=n.getAttribute("lang")),"string"==typeof e&&""!=e){e=e.split("").join("-").toUpperCase();var t=window.cmp_getsupportedLangs();return-1!=t.indexOf(e)||-1!=t.indexOf(e.substr(0,2))?e:""}return""}},window.cmp_getBrowserLangs=function(){var n="languages"in navigator?navigator.languages:[],e=[];if(n.length>0)for(var t=0;t<n.length;t++)e.push(n[t]);return"language"in navigator&&e.push(navigator.language),"userLanguage"in navigator&&e.push(navigator.userLanguage),e},function(){var n=document,e=window,t="",i="",a="",p=function(e){for(var t="data-cmp-"+e,i=["[data-cmp-id]","[data-cmp-cdid]","[data-cmp-host]","[data-cmp-cdn]"],a=0;a<i.length;a++){var p=n.querySelector(i[a]);if(p&&p.hasAttribute(t))return p.getAttribute(t)}return!1},c=function(n){var t="cmp_"+n,i="",a=(n="cmp"+n+"=").length,p=location,c=p.hash,s=p.search,o=c.indexOf(n),d=s.indexOf(n);if(-1!=o)i=c.substring(o+a,9999);else{if(-1==d)return t in e&&"function"!=typeof e[t]?e[t]:"";i=s.substring(d+a,9999)}var r=i.indexOf("&");return-1!=r&&(i=i.substring(0,r)),i},s=c("lang");if(""!=s)a=t=s;else if("cmp_getlang"in e&&(t=e.cmp_getlang().toLowerCase(),i=e.cmp_getlangs().slice(0,3).join(""),a=e.cmp_getPageLangs().slice(0,3).join(""),"cmp_customlanguages"in e))for(var o=e.cmp_customlanguages,d=0;d<o.length;d++){o[d].l.toLowerCase()==t&&(t="en")}var r="cmp_proto"in e?e.cmp_proto:"https:";"http:"!=r&&"https:"!=r&&(r="https:");var l="cmp_ref"in e?e.cmp_ref:location.href;l.length>300&&(l=l.substring(0,300));var g,m=function(n){var e=document,t=e.createElement("script");t.setAttribute("data-cmp-ab","1"),t.type="text/javascript",t.async=!0,t.src=n;var i=["body","div","span","script","head"],a="currentScript",p="parentElement",c="appendChild",s="body";if(e[a]&&e[a][p])e[a][p][c](t);else if(e[s])e[s][c](t);else for(var o=0;o<i.length;o++){var d=e.getElementsByTagName(i[o]);if(d.length>0){d[0][c](t);break}}},w=c("design"),u=c("regulationkey"),_=c("gppkey"),f=c("att"),h=e.encodeURIComponent;try{g=n.cookie.length>0}catch(n){g=!1}var v=c("darkmode");if("0"==v)v=0;else if("1"==v)v=1;else try{if("matchMedia"in window&&window.matchMedia){var b=window.matchMedia("(prefers-color-scheme: dark)");"matches"in b&&b.matches&&(v=1)}}catch(n){v=0}var y=p("host")||e.cmp_host,L=p("cdn")||e.cmp_cdn,x=r+"//"+y+"/delivery/cmp.php?";if(x+=("cmp_id"in e&&e.cmp_id>0?"id="+e.cmp_id:"")+("cmp_cdid"in e?"&cdid="+e.cmp_cdid:"")+"&h="+h(l),x+=(""!=w?"&cmpdesign="+h(w):"")+(""!=u?"&cmpregulationkey="+h(u):"")+(""!=_?"&cmpgppkey="+h(_):""),x+=(""!=f?"&cmpatt="+h(f):"")+("cmp_params"in e?"&"+e.cmp_params:"")+(g?"&cmpfcc=1":""),m((x+=v>0?"&cmpdarkmode=1":"")+"&l="+h(t)+"&ls="+h(i)+"&lp="+h(a)+"&o="+(new Date).getTime()),!("cmp_quickstub"in window)){var S="js",O=""!=c("debugunminimized")?"":".min";"1"==c("debugcoverage")&&(S="instrumented",O=""),"1"==c("debugtest")&&(S="jstests",O="");var C=new Date;m(r+"//"+L+"/delivery/"+S+"/cmp_final"+O+".js?t="+(C.getFullYear()+"-"+(C.getMonth()+1)+"-"+C.getDate()))}}(),window.cmp_rc=function(n,e){var t;try{t=document.cookie}catch(n){t=""}for(var i="",a=0,p=!1;""!=t&&a<100;){for(a++;" "==t.substr(0,1);)t=t.substr(1,t.length);var c=t.substring(0,t.indexOf("="));if(-1!=t.indexOf(";"))var s=t.substring(t.indexOf("=")+1,t.indexOf(";"));else s=t.substr(t.indexOf("=")+1,t.length);n==c&&(i=s,p=!0);var o=t.indexOf(";")+1;0==o&&(o=t.length),t=t.substring(o,t.length)}return p||"string"!=typeof e||(i=e),i},window.cmp_stub=function(){var n=arguments;if(cmp.a=cmp.a||[],!n.length)return cmp.a;"ping"===n[0]?2===n[1]?n[2]({gdprApplies:gdprAppliesGlobally,cmpLoaded:!1,cmpStatus:"stub",displayStatus:"hidden",apiVersion:"2.3",cmpId:31},!0):n[2](!1,!0):"getTCData"===n[0]||"addEventListener"===n[0]||"removeEventListener"===n[0]?cmp.a.push([].slice.apply(n)):4==n.length&&!1===n[3]?n[2]({},!1):cmp.a.push([].slice.apply(n))},window.cmp_dsastub=function(){var n=arguments;n[0]="dsa."+n[0],window.cmp_gppstub(n)},window.cmp_gppstub=function(){var n=arguments;if(gpp.q=gpp.q||[],!n.length)return gpp.q;var e=n[0],t=n.length>1?n[1]:null,i=n.length>2?n[2]:null,a=null,p=!1;if("ping"===e)a=window.cmp_gpp_ping(),p=!0;else if("addEventListener"===e){gpp.e=gpp.e||[],"lastId"in gpp||(gpp.lastId=0),gpp.lastId++;var c=gpp.lastId;gpp.e.push({id:c,callback:t}),a={eventName:"listenerRegistered",listenerId:c,data:!0,pingData:window.cmp_gpp_ping()},p=!0}else if("removeEventListener"===e){gpp.e=gpp.e||[],a=!1;for(var s=0;s<gpp.e.length;s++)if(gpp.e[s].id==i){gpp.e[s].splice(s,1),a=!0;break}p=!0}else gpp.q.push([].slice.apply(n));null!==a&&"function"==typeof t&&t(a,p)},window.cmp_gpp_ping=function(){return{gppVersion:"1.1",cmpStatus:"stub",cmpDisplayStatus:"hidden",signalStatus:"not ready",supportedAPIs:["2:tcfeuv2","5:tcfcav1","7:usnat","8:usca","9:usva","10:usco","11:usut","12:usct","13:usfl","14:usmt","15:usor","16:ustx","17:usde","18:usia","19:usne","20:usnh","21:usnj","22:ustn","23:usmn","24:usmd","25:usin","26:usky","27:usri"],cmpId:31,sectionList:[],applicableSections:[0],gppString:"",parsedSections:{}}},window.cmp_addFrame=function(n){if(!window.frames[n])if(document.body){var e=document.createElement("iframe");if(e.style.cssText="display:none","cmp_cdn"in window&&"cmp_ultrablocking"in window&&window.cmp_ultrablocking>0){for(var t=window.cmp_cdn,i=["[data-cmp-id]","[data-cmp-cdid]","[data-cmp-host]","[data-cmp-cdn]"],a=0;a<i.length;a++){var p=document.querySelector(i[a]);if(p&&p.hasAttribute("data-cmp-cdn")){t=p.getAttribute("data-cmp-cdn");break}}e.src="//"+t+"/delivery/empty.html"}e.name=n,e.setAttribute("title","Intentionally hidden, please ignore"),e.setAttribute("role","none"),e.setAttribute("tabindex","-1"),document.body.appendChild(e)}else window.setTimeout(window.cmp_addFrame,10,n)},window.cmp_msghandler=function(n){var e="string"==typeof n.data;try{var t=e?JSON.parse(n.data):n.data}catch(n){t=null}if("object"==typeof t&&null!==t&&"cmpCall"in t){var i=t.cmpCall;window.cmp(i.command,i.parameter,function(t,a){var p={cmpReturn:{returnValue:t,success:a,callId:i.callId}};n.source.postMessage(e?JSON.stringify(p):p,"")})}if("object"==typeof t&&null!==t&&"tcfapiCall"in t){i=t.tcfapiCall;window.tcfapi(i.command,i.version,function(t,a){var p={tcfapiReturn:{returnValue:t,success:a,callId:i.callId}};n.source.postMessage(e?JSON.stringify(p):p,"")},i.parameter)}if("object"==typeof t&&null!==t&&"gppCall"in t){i=t.gppCall;window.gpp(i.command,function(t,a){var p={gppReturn:{returnValue:t,success:a,callId:i.callId}};n.source.postMessage(e?JSON.stringify(p):p,"")},"parameter"in i?i.parameter:null,"version"in i?i.version:1)}if("object"==typeof t&&null!==t&&"dsaCall"in t){i=t.dsaCall;window.dsa(i.command,function(t,a){var p={dsaReturn:{returnValue:t,success:a,callId:i.callId}};n.source.postMessage(e?JSON.stringify(p):p,"")},"parameter"in i?i.parameter:null,"version"in i?i.version:1)}},window.cmp_setStub=function(n){n in window&&("function"==typeof window[n]||"object"==typeof window[n]||void 0!==window[n]&&null===window[n])||(window[n]=window.cmp_stub,window[n].msgHandler=window.cmp_msghandler,window.addEventListener("message",window.cmp_msghandler,!1))},window.cmp_setGppStub=function(n){n in window&&("function"==typeof window[n]||"object"==typeof window[n]||void 0!==window[n]&&null===window[n])||(window[n]=window.cmp_gppstub,window[n].msgHandler=window.cmp_msghandler,window.addEventListener("message",window.cmp_msghandler,!1))},"cmp_noiframepixel"in window||window.cmp_addFrame("cmpLocator"),"cmp_disabletcf"in window&&window.cmp_disabletcf||"cmp_noiframepixel"in window||window.cmp_addFrame("tcfapiLocator"),"cmp_disablegpp"in window&&window.cmp_disablegpp||"cmp_noiframepixel"in window||window.cmp_addFrame("gppLocator"),"cmp_disabledsa"in window&&window.cmp_disabledsa||"cmp_noiframepixel"in window||window.cmp_addFrame("dsaLocator"),window.cmp_setStub("cmp"),"cmp_disabletcf"in window&&window.cmp_disabletcf||window.cmp_setStub("tcfapi"),"cmp_disablegpp"in window&&window.cmp_disablegpp||window.cmp_setGppStub("gpp"),"cmp_disabledsa"in window&&window.cmp_disabledsa||window.cmp_setGppStub("dsa");
`;
}
function CookieConsentScript(props = {}) {
  return /* @__PURE__ */ jsx39("script", { dangerouslySetInnerHTML: { __html: buildCookieConsentScript(props) } });
}

// src/templates/LandingPageTemplate/LandingPageTemplate.tsx
import { jsx as jsx40, jsxs as jsxs31 } from "react/jsx-runtime";
function LandingPageTemplate({ navbar, hero, sections, footer }) {
  return /* @__PURE__ */ jsxs31("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsx40(Navbar, { ...navbar }),
    /* @__PURE__ */ jsxs31("main", { className: "flex-1", children: [
      /* @__PURE__ */ jsx40("div", { id: "top" }),
      hero,
      sections
    ] }),
    /* @__PURE__ */ jsx40(Footer, { ...footer })
  ] });
}

// src/tokens/index.ts
var colorTokens = {
  /** Neutral scale harmonized with Autopay DS2's real gray swatches — see
   * AUDIT.md #9 and DS2-HARMONIZATION.md #7. Mirrors tokens.css. */
  background: "#fafafa",
  // Digital Gray 1
  foreground: "#0f0f0f",
  // Dark mode Black
  ink: "#0f0f0f",
  // Dark mode Black
  surface: "#f5f5f5",
  // Digital Gray 2
  surfaceMuted: "#ebebeb",
  // Digital Gray 4
  card: "oklch(1 0 0)",
  primary: "#282828",
  // Mineral Black
  primaryForeground: "#fafafa",
  // Digital Gray 1, matches background
  secondary: "#ebebeb",
  // Digital Gray 4
  muted: "#ebebeb",
  // Digital Gray 4
  mutedForeground: "#4c4c4c",
  // Digital Gray 11
  accent: "#ebebeb",
  // Digital Gray 4
  destructive: "oklch(0.58 0.22 27)",
  border: "#e5e5e5",
  // Digital Gray 5
  input: "#e5e5e5",
  // Digital Gray 5
  /** Not remapped — no DS2 neutral gray is a close match; this token
   * carries real blue chroma the neutral scale doesn't cover. */
  ring: "oklch(0.7 0.04 250)",
  /** Raw hex — inconsistent in representation with the rest of the palette
   * (OKLCH), but the value is correct: an exact match for Autopay DS2's
   * real "Pistachio 500". See AUDIT.md #6 and DS2-HARMONIZATION.md. */
  lime: "#e6ffa0",
  limeForeground: "#0f0f0f",
  // Dark mode Black, matches ink
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
var headingScale = {
  h1: { mobile: { size: 48, lineHeight: 1, letterSpacing: "-0.02em" }, desktop: { size: 64, lineHeight: 1.15, letterSpacing: "-0.02em" } },
  h2: { mobile: { size: 40, lineHeight: 1, letterSpacing: "-0.02em" }, desktop: { size: 56, lineHeight: 1.15, letterSpacing: "-0.02em" } },
  h3: { mobile: { size: 32, lineHeight: 1, letterSpacing: "-0.02em" }, desktop: { size: 48, lineHeight: 1.15, letterSpacing: "-0.02em" } },
  h4: { mobile: { size: 24, lineHeight: 1, letterSpacing: "-0.02em" }, desktop: { size: 32, lineHeight: 1.15, letterSpacing: "-0.02em" } },
  h5: { mobile: { size: 20, lineHeight: 1, letterSpacing: "-0.02em" }, desktop: { size: 24, lineHeight: 1.15, letterSpacing: "-0.01em" } },
  h6: { mobile: { size: 18, lineHeight: 1, letterSpacing: "-0.02em" }, desktop: { size: 20, lineHeight: 1.15, letterSpacing: "-0.01em" } }
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
  CookieConsentScript,
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
  OverlapCard,
  OverlappingCardsSection,
  PartnerCountBadge,
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
  buildCookieConsentScript,
  buttonVariants,
  colorTokens,
  fontTokens,
  headingScale,
  linkVariants,
  radiusTokens
};
//# sourceMappingURL=index.js.map
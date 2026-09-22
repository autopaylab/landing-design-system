"use client";
// src/molecules/FormField/FormField.tsx
import * as React2 from "react";

// src/atoms/Input/Input.tsx
import * as React from "react";

// src/lib/cn.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/atoms/Input/Input.tsx
import { jsx } from "react/jsx-runtime";
var Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
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
import { jsx as jsx2 } from "react/jsx-runtime";
function Label({ className, ...props }) {
  return /* @__PURE__ */ jsx2("span", { className: cn("text-xs text-muted-foreground", className), ...props });
}

// src/molecules/FormField/FormField.tsx
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
var FormField = React2.forwardRef(
  ({ label, id, ...inputProps }, ref) => /* @__PURE__ */ jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsx3(Label, { children: label }),
    /* @__PURE__ */ jsx3(Input, { ref, id, className: "mt-2", ...inputProps })
  ] })
);
FormField.displayName = "FormField";

// src/molecules/TextareaField/TextareaField.tsx
import * as React4 from "react";

// src/atoms/Textarea/Textarea.tsx
import * as React3 from "react";
import { jsx as jsx4 } from "react/jsx-runtime";
var Textarea = React3.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx4(
      "textarea",
      {
        ref,
        className: cn(
          "w-full resize-none rounded-xl bg-muted px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";

// src/molecules/TextareaField/TextareaField.tsx
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
var TextareaField = React4.forwardRef(
  ({ label, id, ...textareaProps }, ref) => /* @__PURE__ */ jsxs2("label", { className: "block", children: [
    /* @__PURE__ */ jsx5(Label, { children: label }),
    /* @__PURE__ */ jsx5(Textarea, { ref, id, className: "mt-2", ...textareaProps })
  ] })
);
TextareaField.displayName = "TextareaField";

// src/molecules/SelectField/SelectField.tsx
import * as React6 from "react";

// src/atoms/Select/Select.tsx
import * as React5 from "react";
import { ChevronDown } from "lucide-react";
import { jsx as jsx6, jsxs as jsxs3 } from "react/jsx-runtime";
var Select = React5.forwardRef(
  ({ className, options, placeholder, children, defaultValue, ...props }, ref) => {
    return /* @__PURE__ */ jsxs3("div", { className: "relative", children: [
      /* @__PURE__ */ jsxs3(
        "select",
        {
          ref,
          defaultValue: defaultValue ?? (placeholder ? "" : void 0),
          className: cn(
            "w-full appearance-none rounded-xl bg-muted px-4 py-3 pr-10 text-sm outline-none focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            className
          ),
          ...props,
          children: [
            placeholder ? /* @__PURE__ */ jsx6("option", { value: "", disabled: true, children: placeholder }) : null,
            options ? options.map((option) => /* @__PURE__ */ jsx6("option", { value: option.value, children: option.label }, option.value)) : children
          ]
        }
      ),
      /* @__PURE__ */ jsx6(ChevronDown, { className: "pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" })
    ] });
  }
);
Select.displayName = "Select";

// src/molecules/SelectField/SelectField.tsx
import { jsx as jsx7, jsxs as jsxs4 } from "react/jsx-runtime";
var SelectField = React6.forwardRef(
  ({ label, id, ...selectProps }, ref) => /* @__PURE__ */ jsxs4("label", { className: "block", children: [
    /* @__PURE__ */ jsx7(Label, { children: label }),
    /* @__PURE__ */ jsx7(Select, { ref, id, className: "mt-2", ...selectProps })
  ] })
);
SelectField.displayName = "SelectField";

// src/molecules/PricingTier/PricingTier.tsx
import { Check } from "lucide-react";

// src/atoms/Badge/Badge.tsx
import { cva } from "class-variance-authority";
import { jsx as jsx8 } from "react/jsx-runtime";
var badgeVariants = cva(
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
  return /* @__PURE__ */ jsx8("span", { className: cn(badgeVariants({ variant }), className), ...props });
}

// src/atoms/Button/Button.tsx
import * as React7 from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva as cva2 } from "class-variance-authority";
import { jsx as jsx9 } from "react/jsx-runtime";
var buttonVariants = cva2(
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
var Button = React7.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx9(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";

// src/molecules/PricingTier/PricingTier.tsx
import { jsx as jsx10, jsxs as jsxs5 } from "react/jsx-runtime";
function PricingTier({
  name,
  price,
  priceSuffix,
  priceNote,
  description,
  features,
  ctaLabel,
  onCtaClick,
  ctaVariant,
  featured = false,
  badgeLabel
}) {
  return /* @__PURE__ */ jsxs5(
    "div",
    {
      className: cn(
        "relative flex flex-col rounded-3xl border bg-card p-8",
        featured ? "border-primary shadow-lg" : "border-border"
      ),
      children: [
        featured && badgeLabel ? /* @__PURE__ */ jsx10(Badge, { className: "absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-primary-foreground", children: badgeLabel }) : null,
        /* @__PURE__ */ jsx10("h3", { className: "font-display text-h5", children: name }),
        /* @__PURE__ */ jsxs5("div", { className: "mt-4 flex items-baseline gap-1", children: [
          /* @__PURE__ */ jsx10("span", { className: "font-display text-h3", children: price }),
          priceSuffix ? /* @__PURE__ */ jsx10("span", { className: "text-muted-foreground", children: priceSuffix }) : null
        ] }),
        priceNote ? /* @__PURE__ */ jsx10("p", { className: "mt-1 text-sm text-muted-foreground", children: priceNote }) : null,
        /* @__PURE__ */ jsx10("p", { className: "mt-4 text-sm text-muted-foreground", children: description }),
        /* @__PURE__ */ jsx10("ul", { className: "mt-6 flex-1 space-y-3", children: features.map((feature) => /* @__PURE__ */ jsxs5("li", { className: "flex items-start gap-2 text-sm", children: [
          /* @__PURE__ */ jsx10(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }),
          /* @__PURE__ */ jsx10("span", { children: feature })
        ] }, feature)) }),
        /* @__PURE__ */ jsx10(Button, { type: "button", variant: ctaVariant ?? (featured ? "lime" : "outline"), className: "mt-8 w-full", onClick: onCtaClick, children: ctaLabel })
      ]
    }
  );
}

// src/molecules/ConsentCheckboxField/ConsentCheckboxField.tsx
import * as React10 from "react";

// src/atoms/Checkbox/Checkbox.tsx
import * as React8 from "react";
import { jsx as jsx11 } from "react/jsx-runtime";
var Checkbox = React8.forwardRef(
  ({ className, type = "checkbox", ...props }, ref) => /* @__PURE__ */ jsx11("input", { type, className: cn("mt-1", className), ref, ...props })
);
Checkbox.displayName = "Checkbox";

// src/atoms/Link/Link.tsx
import * as React9 from "react";
import { Slot as Slot2 } from "@radix-ui/react-slot";
import { cva as cva3 } from "class-variance-authority";
import { jsx as jsx12 } from "react/jsx-runtime";
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
var Link = React9.forwardRef(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot2 : "a";
    return /* @__PURE__ */ jsx12(Comp, { className: cn(linkVariants({ variant }), className), ref, ...props });
  }
);
Link.displayName = "Link";

// src/molecules/ConsentCheckboxField/ConsentCheckboxField.tsx
import { jsx as jsx13, jsxs as jsxs6 } from "react/jsx-runtime";
var ConsentCheckboxField = React10.forwardRef(
  ({ consentText, controllerText, moreHref = "#", ...props }, ref) => /* @__PURE__ */ jsxs6("label", { className: "flex gap-3 text-xs text-muted-foreground", children: [
    /* @__PURE__ */ jsx13(Checkbox, { ref, ...props }),
    /* @__PURE__ */ jsxs6("span", { children: [
      consentText,
      /* @__PURE__ */ jsxs6("span", { className: "mt-2 block text-[11px]", children: [
        controllerText,
        " ",
        /* @__PURE__ */ jsx13(Link, { variant: "underline", href: moreHref, children: "More" })
      ] })
    ] })
  ] })
);
ConsentCheckboxField.displayName = "ConsentCheckboxField";

// src/molecules/StatBlock/StatBlock.tsx
import { jsx as jsx14, jsxs as jsxs7 } from "react/jsx-runtime";
function StatBlock({ className, eyebrow = "UP TO", value, label, ...props }) {
  return /* @__PURE__ */ jsxs7("div", { className: cn("bg-transparent pr-6", className), ...props, children: [
    /* @__PURE__ */ jsx14("div", { className: "text-[10px] font-semibold uppercase tracking-wider text-muted-foreground", children: eyebrow }),
    /* @__PURE__ */ jsx14("div", { className: "mt-3 font-display text-[56px] leading-none md:text-[72px]", children: value }),
    /* @__PURE__ */ jsx14("div", { className: "mt-6 text-sm text-muted-foreground", children: label })
  ] });
}

// src/molecules/IconFeatureItem/IconFeatureItem.tsx
import { jsx as jsx15, jsxs as jsxs8 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs8("li", { className: cn("flex gap-4", className), ...props, children: [
    /* @__PURE__ */ jsx15(Icon, { className: cn("mt-1 h-5 w-5 shrink-0", iconClassName) }),
    /* @__PURE__ */ jsxs8("div", { children: [
      /* @__PURE__ */ jsx15(Heading, { className: "font-display text-h6", children: title }),
      /* @__PURE__ */ jsx15("p", { className: "mt-1 text-sm text-muted-foreground", children: description })
    ] })
  ] });
}

// src/molecules/BulletItem/BulletItem.tsx
import { jsx as jsx16, jsxs as jsxs9 } from "react/jsx-runtime";
function BulletItem({ className, children, ...props }) {
  return /* @__PURE__ */ jsxs9("li", { className: cn("flex gap-3", className), ...props, children: [
    /* @__PURE__ */ jsx16("span", { className: "mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-muted-foreground" }),
    children
  ] });
}

// src/molecules/IconCard/IconCard.tsx
import { jsx as jsx17, jsxs as jsxs10 } from "react/jsx-runtime";
function IconCard({ className, icon: Icon, title, bullets, color, ...props }) {
  return /* @__PURE__ */ jsxs10("div", { className: cn("rounded-3xl bg-card p-8 shadow-sm", className), ...props, children: [
    /* @__PURE__ */ jsxs10("div", { className: "flex items-start justify-between gap-4", children: [
      /* @__PURE__ */ jsx17("h3", { className: "font-display text-h4", children: title }),
      /* @__PURE__ */ jsx17(
        "div",
        {
          className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl",
          style: { background: `linear-gradient(135deg, ${color}, color-mix(in oklab, ${color} 40%, white))` },
          children: /* @__PURE__ */ jsx17(Icon, { className: "h-5 w-5 text-foreground" })
        }
      )
    ] }),
    /* @__PURE__ */ jsx17("ul", { className: "mt-8 space-y-2 text-muted-foreground", children: bullets.map((bullet) => /* @__PURE__ */ jsx17(BulletItem, { children: bullet }, bullet)) })
  ] });
}

// src/atoms/StepNumber/StepNumber.tsx
import { jsx as jsx18 } from "react/jsx-runtime";
function StepNumber({ className, value, ...props }) {
  return /* @__PURE__ */ jsx18(
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
import { jsx as jsx19, jsxs as jsxs11 } from "react/jsx-runtime";
function StepCard({ className, index, title, body, ...props }) {
  return /* @__PURE__ */ jsxs11("li", { className: cn("p-8", className), ...props, children: [
    /* @__PURE__ */ jsx19(StepNumber, { value: index }),
    /* @__PURE__ */ jsx19("h3", { className: "mt-4 font-display text-h6", children: title }),
    /* @__PURE__ */ jsx19("p", { className: "mt-2 text-sm text-muted-foreground", children: body })
  ] });
}

// src/molecules/IndustryCard/IndustryCard.tsx
import { Fragment, jsx as jsx20, jsxs as jsxs12 } from "react/jsx-runtime";
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
  const imageBlock = /* @__PURE__ */ jsx20(
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
  const content = /* @__PURE__ */ jsxs12("div", { className: cn(layout === "stacked" ? "flex flex-col justify-between p-10 md:p-12" : "p-8"), children: [
    /* @__PURE__ */ jsx20(
      "h3",
      {
        className: cn("font-display whitespace-pre-line", layout === "stacked" ? "text-h3" : "text-h4"),
        children: name
      }
    ),
    /* @__PURE__ */ jsxs12("div", { className: layout === "grid" ? "mt-4" : void 0, children: [
      /* @__PURE__ */ jsx20("p", { className: cn("max-w-md text-sm leading-relaxed text-foreground/75", layout === "stacked" && "mt-8"), children: description }),
      /* @__PURE__ */ jsx20(
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
  return /* @__PURE__ */ jsx20(
    "article",
    {
      className: cn(
        "overflow-hidden shadow-[0_20px_60px_-30px_rgba(0,0,0,0.35)]",
        layout === "stacked" ? "grid items-stretch rounded-3xl md:grid-cols-2" : "group rounded-3xl transition-transform duration-300 hover:-translate-y-1",
        className
      ),
      style: { backgroundColor, ...style },
      ...props,
      children: layout === "stacked" ? /* @__PURE__ */ jsxs12(Fragment, { children: [
        content,
        imageBlock
      ] }) : /* @__PURE__ */ jsxs12(Fragment, { children: [
        imageBlock,
        content
      ] })
    }
  );
}

// src/molecules/OverlapCard/OverlapCard.tsx
import { jsx as jsx21, jsxs as jsxs13 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs13(
    "article",
    {
      className: cn(
        "grid items-stretch overflow-hidden rounded-3xl shadow-[0_20px_60px_-30px_rgba(0,0,0,0.35)] md:grid-cols-2",
        className
      ),
      style: { backgroundColor, ...style },
      ...props,
      children: [
        /* @__PURE__ */ jsxs13("div", { className: "flex flex-col justify-between p-10 md:p-12", children: [
          /* @__PURE__ */ jsx21("h3", { className: "font-display text-h3 whitespace-pre-line", children: title }),
          /* @__PURE__ */ jsxs13("div", { className: "mt-8", children: [
            /* @__PURE__ */ jsx21("p", { className: "max-w-md text-sm leading-relaxed text-foreground/75", children: description }),
            /* @__PURE__ */ jsxs13("div", { className: "mt-8 flex flex-wrap gap-3", children: [
              /* @__PURE__ */ jsx21(Button, { type: "button", variant: "solid", size: "xs", onClick: primaryCta.onClick, children: primaryCta.label }),
              /* @__PURE__ */ jsx21(
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
        /* @__PURE__ */ jsx21(
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

// src/atoms/Accordion/Accordion.tsx
import * as React11 from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown as ChevronDown2 } from "lucide-react";
import { jsx as jsx22, jsxs as jsxs14 } from "react/jsx-runtime";
var AccordionItem = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx22(AccordionPrimitive.Item, { ref, className: cn("border-b", className), ...props }));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React11.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx22(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs14(
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
      /* @__PURE__ */ jsx22(ChevronDown2, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
var AccordionContent = React11.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx22(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsx22("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// src/molecules/FaqItem/FaqItem.tsx
import { jsx as jsx23, jsxs as jsxs15 } from "react/jsx-runtime";
function FaqItem({ value, question, answer }) {
  return /* @__PURE__ */ jsxs15(AccordionItem, { value, className: "rounded-2xl border-0 bg-card px-6 py-1 md:px-8", children: [
    /* @__PURE__ */ jsx23(AccordionTrigger, { className: "py-6 text-left text-lg font-semibold hover:no-underline md:text-xl [&>svg]:size-5", children: question }),
    /* @__PURE__ */ jsx23(AccordionContent, { className: "pb-8 pt-2 text-base text-muted-foreground md:text-[17px]", children: answer })
  ] });
}

// src/molecules/PartnerCountBadge/PartnerCountBadge.tsx
import { jsx as jsx24, jsxs as jsxs16 } from "react/jsx-runtime";
function PartnerCountBadge({ className, count, label, ...props }) {
  return /* @__PURE__ */ jsxs16(
    "div",
    {
      className: cn(
        "inline-flex items-center gap-2 rounded-full bg-muted px-4 py-1.5 text-foreground/70",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx24("span", { className: "text-sm font-semibold text-foreground", children: count }),
        /* @__PURE__ */ jsx24("span", { className: "text-xs", children: label })
      ]
    }
  );
}
export {
  BulletItem,
  ConsentCheckboxField,
  FaqItem,
  FormField,
  IconCard,
  IconFeatureItem,
  IndustryCard,
  OverlapCard,
  PartnerCountBadge,
  PricingTier,
  SelectField,
  StatBlock,
  StepCard,
  TextareaField
};
//# sourceMappingURL=index.js.map
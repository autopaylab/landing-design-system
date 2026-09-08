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

// src/molecules/ConsentCheckboxField/ConsentCheckboxField.tsx
import * as React5 from "react";

// src/atoms/Checkbox/Checkbox.tsx
import * as React3 from "react";
import { jsx as jsx4 } from "react/jsx-runtime";
var Checkbox = React3.forwardRef(
  ({ className, type = "checkbox", ...props }, ref) => /* @__PURE__ */ jsx4("input", { type, className: cn("mt-1", className), ref, ...props })
);
Checkbox.displayName = "Checkbox";

// src/atoms/Link/Link.tsx
import * as React4 from "react";
import { cva } from "class-variance-authority";
import { jsx as jsx5 } from "react/jsx-runtime";
var linkVariants = cva("transition-colors", {
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
var Link = React4.forwardRef(
  ({ className, variant, ...props }, ref) => /* @__PURE__ */ jsx5("a", { className: cn(linkVariants({ variant }), className), ref, ...props })
);
Link.displayName = "Link";

// src/molecules/ConsentCheckboxField/ConsentCheckboxField.tsx
import { jsx as jsx6, jsxs as jsxs2 } from "react/jsx-runtime";
var ConsentCheckboxField = React5.forwardRef(
  ({ consentText, controllerText, moreHref = "#", ...props }, ref) => /* @__PURE__ */ jsxs2("label", { className: "flex gap-3 text-xs text-muted-foreground", children: [
    /* @__PURE__ */ jsx6(Checkbox, { ref, ...props }),
    /* @__PURE__ */ jsxs2("span", { children: [
      consentText,
      /* @__PURE__ */ jsxs2("span", { className: "mt-2 block text-[11px]", children: [
        controllerText,
        " ",
        /* @__PURE__ */ jsx6(Link, { variant: "underline", href: moreHref, children: "More" })
      ] })
    ] })
  ] })
);
ConsentCheckboxField.displayName = "ConsentCheckboxField";

// src/molecules/StatBlock/StatBlock.tsx
import { jsx as jsx7, jsxs as jsxs3 } from "react/jsx-runtime";
function StatBlock({ className, eyebrow = "UP TO", value, label, ...props }) {
  return /* @__PURE__ */ jsxs3("div", { className: cn("bg-transparent pr-6", className), ...props, children: [
    /* @__PURE__ */ jsx7("div", { className: "text-[10px] font-semibold uppercase tracking-wider text-muted-foreground", children: eyebrow }),
    /* @__PURE__ */ jsx7("div", { className: "mt-3 font-display text-[56px] leading-none md:text-[72px]", children: value }),
    /* @__PURE__ */ jsx7("div", { className: "mt-6 text-sm text-muted-foreground", children: label })
  ] });
}

// src/molecules/IconFeatureItem/IconFeatureItem.tsx
import { jsx as jsx8, jsxs as jsxs4 } from "react/jsx-runtime";
function IconFeatureItem({
  className,
  icon: Icon,
  title,
  description,
  iconClassName = "text-[oklch(0.6_0.22_255)]",
  ...props
}) {
  return /* @__PURE__ */ jsxs4("li", { className: cn("flex gap-4", className), ...props, children: [
    /* @__PURE__ */ jsx8(Icon, { className: cn("mt-1 h-5 w-5 shrink-0", iconClassName) }),
    /* @__PURE__ */ jsxs4("div", { children: [
      /* @__PURE__ */ jsx8("h4", { className: "font-display text-lg", children: title }),
      /* @__PURE__ */ jsx8("p", { className: "mt-1 text-sm text-muted-foreground", children: description })
    ] })
  ] });
}

// src/molecules/BulletItem/BulletItem.tsx
import { jsx as jsx9, jsxs as jsxs5 } from "react/jsx-runtime";
function BulletItem({ className, children, ...props }) {
  return /* @__PURE__ */ jsxs5("li", { className: cn("flex gap-3", className), ...props, children: [
    /* @__PURE__ */ jsx9("span", { className: "mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-muted-foreground" }),
    children
  ] });
}

// src/molecules/IconCard/IconCard.tsx
import { jsx as jsx10, jsxs as jsxs6 } from "react/jsx-runtime";
function IconCard({ className, icon: Icon, title, bullets, color, ...props }) {
  return /* @__PURE__ */ jsxs6("div", { className: cn("rounded-3xl bg-card p-8 shadow-sm", className), ...props, children: [
    /* @__PURE__ */ jsxs6("div", { className: "flex items-start justify-between gap-4", children: [
      /* @__PURE__ */ jsx10("h3", { className: "font-display text-2xl", children: title }),
      /* @__PURE__ */ jsx10(
        "div",
        {
          className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl",
          style: { background: `linear-gradient(135deg, ${color}, color-mix(in oklab, ${color} 40%, white))` },
          children: /* @__PURE__ */ jsx10(Icon, { className: "h-5 w-5 text-foreground" })
        }
      )
    ] }),
    /* @__PURE__ */ jsx10("ul", { className: "mt-8 space-y-2 text-muted-foreground", children: bullets.map((bullet) => /* @__PURE__ */ jsx10(BulletItem, { children: bullet }, bullet)) })
  ] });
}

// src/atoms/StepNumber/StepNumber.tsx
import { jsx as jsx11 } from "react/jsx-runtime";
function StepNumber({ className, value, ...props }) {
  return /* @__PURE__ */ jsx11(
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
import { jsx as jsx12, jsxs as jsxs7 } from "react/jsx-runtime";
function StepCard({ className, index, title, body, ...props }) {
  return /* @__PURE__ */ jsxs7("li", { className: cn("p-8", className), ...props, children: [
    /* @__PURE__ */ jsx12(StepNumber, { value: index }),
    /* @__PURE__ */ jsx12("h3", { className: "mt-4 font-display text-lg", children: title }),
    /* @__PURE__ */ jsx12("p", { className: "mt-2 text-sm text-muted-foreground", children: body })
  ] });
}

// src/atoms/Button/Button.tsx
import * as React6 from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva as cva2 } from "class-variance-authority";
import { jsx as jsx13 } from "react/jsx-runtime";
var buttonVariants = cva2(
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
var Button = React6.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx13(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";

// src/molecules/IndustryCard/IndustryCard.tsx
import { Fragment, jsx as jsx14, jsxs as jsxs8 } from "react/jsx-runtime";
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
  const imageBlock = /* @__PURE__ */ jsx14(
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
  const content = /* @__PURE__ */ jsxs8("div", { className: cn(layout === "stacked" ? "flex flex-col justify-between p-10 md:p-12" : "p-8"), children: [
    /* @__PURE__ */ jsx14(
      "h3",
      {
        className: cn(
          "font-display whitespace-pre-line",
          layout === "stacked" ? "text-[32px] leading-[1.05] md:text-[40px]" : "text-[28px] leading-[1.05]"
        ),
        children: name
      }
    ),
    /* @__PURE__ */ jsxs8("div", { className: layout === "grid" ? "mt-4" : void 0, children: [
      /* @__PURE__ */ jsx14("p", { className: cn("max-w-md text-sm leading-relaxed text-foreground/75", layout === "stacked" && "mt-8"), children: description }),
      /* @__PURE__ */ jsx14(
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
  return /* @__PURE__ */ jsx14(
    "article",
    {
      className: cn(
        "overflow-hidden shadow-[0_20px_60px_-30px_rgba(0,0,0,0.35)]",
        layout === "stacked" ? "grid items-stretch rounded-3xl md:grid-cols-2" : "group rounded-3xl transition-transform duration-300 hover:-translate-y-1",
        className
      ),
      style: { backgroundColor, ...style },
      ...props,
      children: layout === "stacked" ? /* @__PURE__ */ jsxs8(Fragment, { children: [
        content,
        imageBlock
      ] }) : /* @__PURE__ */ jsxs8(Fragment, { children: [
        imageBlock,
        content
      ] })
    }
  );
}

// src/atoms/Accordion/Accordion.tsx
import * as React7 from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { jsx as jsx15, jsxs as jsxs9 } from "react/jsx-runtime";
var AccordionItem = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx15(AccordionPrimitive.Item, { ref, className: cn("border-b", className), ...props }));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React7.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx15(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs9(
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
      /* @__PURE__ */ jsx15(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
var AccordionContent = React7.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx15(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsx15("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// src/molecules/FaqItem/FaqItem.tsx
import { jsx as jsx16, jsxs as jsxs10 } from "react/jsx-runtime";
function FaqItem({ value, question, answer }) {
  return /* @__PURE__ */ jsxs10(AccordionItem, { value, className: "rounded-2xl border-0 bg-card px-6 py-1 md:px-8", children: [
    /* @__PURE__ */ jsx16(AccordionTrigger, { className: "py-6 text-left text-lg font-semibold hover:no-underline md:text-xl [&>svg]:size-5", children: question }),
    /* @__PURE__ */ jsx16(AccordionContent, { className: "pb-8 pt-2 text-base text-muted-foreground md:text-[17px]", children: answer })
  ] });
}
export {
  BulletItem,
  ConsentCheckboxField,
  FaqItem,
  FormField,
  IconCard,
  IconFeatureItem,
  IndustryCard,
  StatBlock,
  StepCard
};
//# sourceMappingURL=index.js.map
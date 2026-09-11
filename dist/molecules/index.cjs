"use client";
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

// src/molecules/index.ts
var molecules_exports = {};
__export(molecules_exports, {
  BulletItem: () => BulletItem,
  ConsentCheckboxField: () => ConsentCheckboxField,
  FaqItem: () => FaqItem,
  FormField: () => FormField,
  IconCard: () => IconCard,
  IconFeatureItem: () => IconFeatureItem,
  IndustryCard: () => IndustryCard,
  PartnerCountBadge: () => PartnerCountBadge,
  StatBlock: () => StatBlock,
  StepCard: () => StepCard
});
module.exports = __toCommonJS(molecules_exports);

// src/molecules/FormField/FormField.tsx
var React2 = __toESM(require("react"), 1);

// src/atoms/Input/Input.tsx
var React = __toESM(require("react"), 1);

// src/lib/cn.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/atoms/Input/Input.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
var import_jsx_runtime2 = require("react/jsx-runtime");
function Label({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: cn("text-xs text-muted-foreground", className), ...props });
}

// src/molecules/FormField/FormField.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var FormField = React2.forwardRef(
  ({ label, id, ...inputProps }, ref) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("label", { className: "block", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Label, { children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Input, { ref, id, className: "mt-2", ...inputProps })
  ] })
);
FormField.displayName = "FormField";

// src/molecules/ConsentCheckboxField/ConsentCheckboxField.tsx
var React5 = __toESM(require("react"), 1);

// src/atoms/Checkbox/Checkbox.tsx
var React3 = __toESM(require("react"), 1);
var import_jsx_runtime4 = require("react/jsx-runtime");
var Checkbox = React3.forwardRef(
  ({ className, type = "checkbox", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("input", { type, className: cn("mt-1", className), ref, ...props })
);
Checkbox.displayName = "Checkbox";

// src/atoms/Link/Link.tsx
var React4 = __toESM(require("react"), 1);
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority = require("class-variance-authority");
var import_jsx_runtime5 = require("react/jsx-runtime");
var linkVariants = (0, import_class_variance_authority.cva)("transition-colors", {
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
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? import_react_slot.Slot : "a";
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Comp, { className: cn(linkVariants({ variant }), className), ref, ...props });
  }
);
Link.displayName = "Link";

// src/molecules/ConsentCheckboxField/ConsentCheckboxField.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var ConsentCheckboxField = React5.forwardRef(
  ({ consentText, controllerText, moreHref = "#", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("label", { className: "flex gap-3 text-xs text-muted-foreground", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Checkbox, { ref, ...props }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { children: [
      consentText,
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { className: "mt-2 block text-[11px]", children: [
        controllerText,
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Link, { variant: "underline", href: moreHref, children: "More" })
      ] })
    ] })
  ] })
);
ConsentCheckboxField.displayName = "ConsentCheckboxField";

// src/molecules/StatBlock/StatBlock.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
function StatBlock({ className, eyebrow = "UP TO", value, label, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: cn("bg-transparent pr-6", className), ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "text-[10px] font-semibold uppercase tracking-wider text-muted-foreground", children: eyebrow }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "mt-3 font-display text-[56px] leading-none md:text-[72px]", children: value }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "mt-6 text-sm text-muted-foreground", children: label })
  ] });
}

// src/molecules/IconFeatureItem/IconFeatureItem.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("li", { className: cn("flex gap-4", className), ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Icon, { className: cn("mt-1 h-5 w-5 shrink-0", iconClassName) }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Heading, { className: "font-display text-h6", children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "mt-1 text-sm text-muted-foreground", children: description })
    ] })
  ] });
}

// src/molecules/BulletItem/BulletItem.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
function BulletItem({ className, children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("li", { className: cn("flex gap-3", className), ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-muted-foreground" }),
    children
  ] });
}

// src/molecules/IconCard/IconCard.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
function IconCard({ className, icon: Icon, title, bullets, color, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: cn("rounded-3xl bg-card p-8 shadow-sm", className), ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex items-start justify-between gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h3", { className: "font-display text-h4", children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        "div",
        {
          className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl",
          style: { background: `linear-gradient(135deg, ${color}, color-mix(in oklab, ${color} 40%, white))` },
          children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Icon, { className: "h-5 w-5 text-foreground" })
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("ul", { className: "mt-8 space-y-2 text-muted-foreground", children: bullets.map((bullet) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(BulletItem, { children: bullet }, bullet)) })
  ] });
}

// src/atoms/StepNumber/StepNumber.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
function StepNumber({ className, value, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
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
var import_jsx_runtime12 = require("react/jsx-runtime");
function StepCard({ className, index, title, body, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("li", { className: cn("p-8", className), ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(StepNumber, { value: index }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h3", { className: "mt-4 font-display text-h6", children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "mt-2 text-sm text-muted-foreground", children: body })
  ] });
}

// src/atoms/Button/Button.tsx
var React6 = __toESM(require("react"), 1);
var import_react_slot2 = require("@radix-ui/react-slot");
var import_class_variance_authority2 = require("class-variance-authority");
var import_jsx_runtime13 = require("react/jsx-runtime");
var buttonVariants = (0, import_class_variance_authority2.cva)(
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
var Button = React6.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? import_react_slot2.Slot : "button";
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";

// src/molecules/IndustryCard/IndustryCard.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
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
  const imageBlock = /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
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
  const content = /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: cn(layout === "stacked" ? "flex flex-col justify-between p-10 md:p-12" : "p-8"), children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      "h3",
      {
        className: cn(
          "font-display whitespace-pre-line",
          layout === "stacked" ? "text-[32px] leading-[1.05] md:text-[40px]" : "text-[28px] leading-[1.05]"
        ),
        children: name
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: layout === "grid" ? "mt-4" : void 0, children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: cn("max-w-md text-sm leading-relaxed text-foreground/75", layout === "stacked" && "mt-8"), children: description }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    "article",
    {
      className: cn(
        "overflow-hidden shadow-[0_20px_60px_-30px_rgba(0,0,0,0.35)]",
        layout === "stacked" ? "grid items-stretch rounded-3xl md:grid-cols-2" : "group rounded-3xl transition-transform duration-300 hover:-translate-y-1",
        className
      ),
      style: { backgroundColor, ...style },
      ...props,
      children: layout === "stacked" ? /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, { children: [
        content,
        imageBlock
      ] }) : /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, { children: [
        imageBlock,
        content
      ] })
    }
  );
}

// src/atoms/Accordion/Accordion.tsx
var React7 = __toESM(require("react"), 1);
var AccordionPrimitive = __toESM(require("@radix-ui/react-accordion"), 1);
var import_lucide_react = require("lucide-react");
var import_jsx_runtime15 = require("react/jsx-runtime");
var AccordionItem = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(AccordionPrimitive.Item, { ref, className: cn("border-b", className), ...props }));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React7.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_lucide_react.ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
var AccordionContent = React7.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// src/molecules/FaqItem/FaqItem.tsx
var import_jsx_runtime16 = require("react/jsx-runtime");
function FaqItem({ value, question, answer }) {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(AccordionItem, { value, className: "rounded-2xl border-0 bg-card px-6 py-1 md:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(AccordionTrigger, { className: "py-6 text-left text-lg font-semibold hover:no-underline md:text-xl [&>svg]:size-5", children: question }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(AccordionContent, { className: "pb-8 pt-2 text-base text-muted-foreground md:text-[17px]", children: answer })
  ] });
}

// src/molecules/PartnerCountBadge/PartnerCountBadge.tsx
var import_jsx_runtime17 = require("react/jsx-runtime");
function PartnerCountBadge({ className, count, label, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
    "div",
    {
      className: cn(
        "inline-flex items-center gap-2 rounded-full bg-muted px-4 py-1.5 text-foreground/70",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "text-sm font-semibold text-foreground", children: count }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "text-xs", children: label })
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BulletItem,
  ConsentCheckboxField,
  FaqItem,
  FormField,
  IconCard,
  IconFeatureItem,
  IndustryCard,
  PartnerCountBadge,
  StatBlock,
  StepCard
});
//# sourceMappingURL=index.cjs.map
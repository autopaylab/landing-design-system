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

// src/atoms/index.ts
var atoms_exports = {};
__export(atoms_exports, {
  Accordion: () => Accordion,
  AccordionContent: () => AccordionContent,
  AccordionItem: () => AccordionItem,
  AccordionTrigger: () => AccordionTrigger,
  Badge: () => Badge,
  Button: () => Button,
  Checkbox: () => Checkbox,
  Input: () => Input,
  Label: () => Label,
  Link: () => Link,
  Logo: () => Logo,
  StepNumber: () => StepNumber,
  badgeVariants: () => badgeVariants,
  buttonVariants: () => buttonVariants,
  linkVariants: () => linkVariants
});
module.exports = __toCommonJS(atoms_exports);

// src/atoms/Accordion/Accordion.tsx
var React = __toESM(require("react"), 1);
var AccordionPrimitive = __toESM(require("@radix-ui/react-accordion"), 1);
var import_lucide_react = require("lucide-react");

// src/lib/cn.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/atoms/Accordion/Accordion.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Accordion = AccordionPrimitive.Root;
var AccordionItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionPrimitive.Item, { ref, className: cn("border-b", className), ...props }));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
var AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// src/atoms/Button/Button.tsx
var React2 = __toESM(require("react"), 1);
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority = require("class-variance-authority");
var import_jsx_runtime2 = require("react/jsx-runtime");
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
var Button = React2.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? import_react_slot.Slot : "button";
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";

// src/atoms/Badge/Badge.tsx
var import_class_variance_authority2 = require("class-variance-authority");
var import_jsx_runtime3 = require("react/jsx-runtime");
var badgeVariants = (0, import_class_variance_authority2.cva)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: cn(badgeVariants({ variant }), className), ...props });
}

// src/atoms/Input/Input.tsx
var React3 = __toESM(require("react"), 1);
var import_jsx_runtime4 = require("react/jsx-runtime");
var Input = React3.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
var import_jsx_runtime5 = require("react/jsx-runtime");
function Label({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: cn("text-xs text-muted-foreground", className), ...props });
}

// src/atoms/Checkbox/Checkbox.tsx
var React4 = __toESM(require("react"), 1);
var import_jsx_runtime6 = require("react/jsx-runtime");
var Checkbox = React4.forwardRef(
  ({ className, type = "checkbox", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("input", { type, className: cn("mt-1", className), ref, ...props })
);
Checkbox.displayName = "Checkbox";

// src/atoms/Link/Link.tsx
var React5 = __toESM(require("react"), 1);
var import_class_variance_authority3 = require("class-variance-authority");
var import_jsx_runtime7 = (
  // eslint-disable-next-line jsx-a11y/anchor-has-content -- `children` is part of `...props` (LinkProps extends AnchorHTMLAttributes), the rule can't see through the spread on this passthrough atom.
  require("react/jsx-runtime")
);
var linkVariants = (0, import_class_variance_authority3.cva)("transition-colors", {
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
  ({ className, variant, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("a", { className: cn(linkVariants({ variant }), className), ref, ...props })
);
Link.displayName = "Link";

// src/atoms/Logo/Logo.tsx
var import_class_variance_authority4 = require("class-variance-authority");
var import_jsx_runtime8 = require("react/jsx-runtime");
var logoVariants = (0, import_class_variance_authority4.cva)("w-auto", {
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
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("img", { src, alt, className: cn(logoVariants({ size }), className), ...props });
}

// src/atoms/StepNumber/StepNumber.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
function StepNumber({ className, value, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
  Button,
  Checkbox,
  Input,
  Label,
  Link,
  Logo,
  StepNumber,
  badgeVariants,
  buttonVariants,
  linkVariants
});
//# sourceMappingURL=index.cjs.map
import type { Meta, StoryObj } from "@storybook/react";
import { PromoCtaSection } from "./PromoCtaSection";

const meta: Meta<typeof PromoCtaSection> = {
  title: "Organisms/PromoCtaSection",
  component: PromoCtaSection,
};
export default meta;
type Story = StoryObj<typeof PromoCtaSection>;

const placeholderImage =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080'%3E%3Crect width='1920' height='1080' fill='%23444'/%3E%3C/svg%3E";
const placeholderLogo =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='94' height='24'%3E%3Crect width='94' height='24' fill='%23222'/%3E%3C/svg%3E";

export const Default: Story = {
  args: {
    backgroundImage: placeholderImage,
    heading: "Ready to put your workflow on autopilot?",
    primaryCta: { label: "Create an account", href: "#contact" },
    secondaryCta: { label: "See a live demo", href: "https://example.com/demo", external: true },
    logoSrc: placeholderLogo,
    logoAlt: "Nimbus",
    promoText: "Flexible tools. Efficient growth.",
    copyrightText: `© ${new Date().getFullYear()} Nimbus`,
    privacyLabel: "Privacy Policy",
    privacyHref: "#",
  },
};

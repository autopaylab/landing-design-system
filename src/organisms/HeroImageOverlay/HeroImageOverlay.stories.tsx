import type { Meta, StoryObj } from "@storybook/react";
import { HeroImageOverlay } from "./HeroImageOverlay";

const meta: Meta<typeof HeroImageOverlay> = {
  title: "Organisms/HeroImageOverlay",
  component: HeroImageOverlay,
};
export default meta;
type Story = StoryObj<typeof HeroImageOverlay>;

const placeholderImage =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='700'%3E%3Crect width='1600' height='700' fill='%23333'/%3E%3C/svg%3E";

export const Stacked: Story = {
  args: {
    layout: "stacked",
    image: placeholderImage,
    title: "You don't pay commission on your own customers.",
    subtitle:
      "Nimbus is an online booking system that stays with you, no takeover of your customers and no fee per visit.",
    primaryCta: { label: "Join early access", href: "#contact" },
    secondaryCta: { label: "See a demo", href: "#platform" },
  },
};

export const Split: Story = {
  args: {
    layout: "split",
    image: placeholderImage,
    title: "Ready for your bookings to run themselves?",
    primaryCta: { label: "Leave your email", href: "#contact" },
    secondaryCta: { label: "See a live demo", href: "#platform" },
  },
};

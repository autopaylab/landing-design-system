import type { Meta, StoryObj } from "@storybook/react";
import { OverlappingCardsSection } from "./OverlappingCardsSection";

const meta: Meta<typeof OverlappingCardsSection> = {
  title: "Organisms/OverlappingCardsSection",
  component: OverlappingCardsSection,
};
export default meta;
type Story = StoryObj<typeof OverlappingCardsSection>;

const placeholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='500'%3E%3Crect width='800' height='500' fill='%23999'/%3E%3C/svg%3E";

export const Default: Story = {
  args: {
    eyebrow: "Payments in practice",
    heading: (
      <>
        Scroll-activated promos that
        <br />
        layer as you go
      </>
    ),
    cards: [
      {
        title: "Instant payouts,\nzero friction",
        description: "Give customers a way to pay now and explore later, without leaving the checkout flow.",
        image: placeholder,
        backgroundColor: "var(--retail)",
        primaryCta: { label: "Buy now" },
        secondaryCta: { label: "See more" },
      },
      {
        title: "One dashboard,\nevery market",
        description: "Reconcile settlements across regions from a single, real-time view.",
        image: placeholder,
        backgroundColor: "var(--banking)",
        primaryCta: { label: "Get started" },
        secondaryCta: { label: "Learn more" },
      },
    ],
  },
};

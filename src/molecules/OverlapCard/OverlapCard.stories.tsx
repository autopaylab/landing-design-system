import type { Meta, StoryObj } from "@storybook/react";
import { OverlapCard } from "./OverlapCard";

const meta: Meta<typeof OverlapCard> = {
  title: "Molecules/OverlapCard",
  component: OverlapCard,
};
export default meta;
type Story = StoryObj<typeof OverlapCard>;

const placeholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='500'%3E%3Crect width='800' height='500' fill='%23999'/%3E%3C/svg%3E";

export const Default: Story = {
  args: {
    title: "Instant payouts,\nzero friction",
    description: "Give customers a way to pay now and explore later, without leaving the checkout flow.",
    image: placeholder,
    backgroundColor: "var(--retail)",
    primaryCta: { label: "Buy now" },
    secondaryCta: { label: "See more" },
  },
};

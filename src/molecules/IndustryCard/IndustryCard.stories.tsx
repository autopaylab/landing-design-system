import type { Meta, StoryObj } from "@storybook/react";
import { IndustryCard } from "./IndustryCard";

const meta: Meta<typeof IndustryCard> = {
  title: "Molecules/IndustryCard",
  component: IndustryCard,
};
export default meta;
type Story = StoryObj<typeof IndustryCard>;

const banking = {
  name: "Banking",
  description:
    "Banking real-time capabilities depends on integrating with legacy infrastructure, enabling instant settlement across local payment networks and emerging digital rails.",
  image: "/industries/is1338737959.jpg",
  backgroundColor: "var(--banking)",
};

export const Grid: Story = { args: { ...banking, layout: "grid" } };
export const Stacked: Story = { args: { ...banking, layout: "stacked" } };

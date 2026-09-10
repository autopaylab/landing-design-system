import type { Meta, StoryObj } from "@storybook/react";
import { PartnerCountBadge } from "./PartnerCountBadge";

const meta: Meta<typeof PartnerCountBadge> = {
  title: "Molecules/PartnerCountBadge",
  component: PartnerCountBadge,
};
export default meta;
type Story = StoryObj<typeof PartnerCountBadge>;

export const Default: Story = {
  args: {
    count: "+40",
    label: "payment providers",
  },
};

export const Merchants: Story = {
  args: {
    count: "50K+",
    label: "merchants online",
  },
};

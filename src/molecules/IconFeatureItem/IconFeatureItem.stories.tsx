import type { Meta, StoryObj } from "@storybook/react";
import { Zap, Globe } from "lucide-react";
import { IconFeatureItem } from "./IconFeatureItem";

const meta: Meta<typeof IconFeatureItem> = {
  title: "Molecules/IconFeatureItem",
  component: IconFeatureItem,
};
export default meta;
type Story = StoryObj<typeof IconFeatureItem>;

export const Default: Story = {
  args: {
    icon: Zap,
    title: "Faster time-to-market",
    description: "One integration for all PSPs",
  },
  render: (args) => (
    <ul>
      <IconFeatureItem {...args} />
    </ul>
  ),
};
export const GlobalCoverage: Story = {
  args: {
    icon: Globe,
    title: "Direct access to regional and international PSPs",
    description: "No extra integrations needed.",
  },
  render: (args) => (
    <ul>
      <IconFeatureItem {...args} />
    </ul>
  ),
};

import type { Meta, StoryObj } from "@storybook/react";
import { StatBlock } from "./StatBlock";

const meta: Meta<typeof StatBlock> = {
  title: "Molecules/StatBlock",
  component: StatBlock,
};
export default meta;
type Story = StoryObj<typeof StatBlock>;

export const Percentage: Story = { args: { value: "16%", label: "higher conversion" } };
export const Multiplier: Story = { args: { value: "3x faster", label: "go-to-market per region" } };

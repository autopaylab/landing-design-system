import type { Meta, StoryObj } from "@storybook/react";
import { StatsSection } from "./StatsSection";

const meta: Meta<typeof StatsSection> = {
  title: "Organisms/StatsSection",
  component: StatsSection,
};
export default meta;
type Story = StoryObj<typeof StatsSection>;

export const Default: Story = {
  args: {
    heading: (
      <>
        Optimize global
        <br />
        payment performance
      </>
    ),
    description:
      "Drive margin improvement through smarter routing, operational automation and unified payment infrastructure — without expanding internal resources.",
    stats: [
      { value: "16%", label: "higher conversion" },
      { value: "21%", label: "lower processing costs" },
      { value: "3x faster", label: "go-to-market per region" },
      { value: "59%", label: "reduction in manual reconciliation time" },
    ],
  },
};

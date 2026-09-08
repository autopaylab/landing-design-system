import type { Meta, StoryObj } from "@storybook/react";
import { StepCard } from "./StepCard";

const meta: Meta<typeof StepCard> = {
  title: "Molecules/StepCard",
  component: StepCard,
};
export default meta;
type Story = StoryObj<typeof StepCard>;

export const Default: Story = {
  args: {
    index: 1,
    title: "Create your account and set up your profile",
    body: "Add your business details, opening hours, logo and photos. Profile ready in minutes.",
  },
  render: (args) => (
    <ol>
      <StepCard {...args} />
    </ol>
  ),
};

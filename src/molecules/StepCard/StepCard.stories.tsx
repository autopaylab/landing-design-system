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
    title: "Załóż konto i skonfiguruj swój profil",
    body: "Podaj dane swojej firmy, godziny otwarcia, logo i zdjęcia. Profil gotowy w kilka minut.",
  },
  render: (args) => (
    <ol>
      <StepCard {...args} />
    </ol>
  ),
};

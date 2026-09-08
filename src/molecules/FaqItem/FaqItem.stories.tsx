import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "@/atoms/Accordion";
import { FaqItem } from "./FaqItem";

const meta: Meta<typeof FaqItem> = {
  title: "Molecules/FaqItem",
  component: FaqItem,
};
export default meta;
type Story = StoryObj<typeof FaqItem>;

export const Default: Story = {
  args: {
    value: "item-0",
    question: "Will my customers need to pay a deposit online?",
    answer:
      "You decide whether to require a deposit, and how much. Starting with a small amount is usually enough to reduce no-shows.",
  },
  render: (args) => (
    <Accordion type="single" collapsible className="flex w-full max-w-lg flex-col gap-3">
      <FaqItem {...args} />
    </Accordion>
  ),
};

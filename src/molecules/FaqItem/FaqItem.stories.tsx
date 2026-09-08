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
    question: "Czy moi klienci będą musieli płacić zaliczkę online?",
    answer:
      "To Ty decydujesz, czy i jaką kwotę zaliczki wymagać przy rezerwacji. Możesz zacząć od symbolicznej kwoty.",
  },
  render: (args) => (
    <Accordion type="single" collapsible className="flex w-full max-w-lg flex-col gap-3">
      <FaqItem {...args} />
    </Accordion>
  ),
};

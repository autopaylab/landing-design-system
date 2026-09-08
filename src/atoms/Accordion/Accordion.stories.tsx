import type { Meta, StoryObj } from "@storybook/react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Atoms/Accordion",
  component: Accordion,
};
export default meta;
type Story = StoryObj<typeof Accordion>;

export const Single: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-full max-w-lg">
      <AccordionItem value="item-1">
        <AccordionTrigger>Will my customers need to pay a deposit online?</AccordionTrigger>
        <AccordionContent>
          You decide whether to require a deposit, and how much.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

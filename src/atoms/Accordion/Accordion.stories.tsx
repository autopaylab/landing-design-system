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
        <AccordionTrigger>Czy moi klienci będą musieli płacić zaliczkę online?</AccordionTrigger>
        <AccordionContent>
          To Ty decydujesz, czy i jaką kwotę zaliczki wymagać przy rezerwacji.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

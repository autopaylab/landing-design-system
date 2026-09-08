import type { Meta, StoryObj } from "@storybook/react";
import { ContactSection } from "./ContactSection";

const meta: Meta<typeof ContactSection> = {
  title: "Organisms/ContactSection",
  component: ContactSection,
};
export default meta;
type Story = StoryObj<typeof ContactSection>;

export const Default: Story = {
  args: {
    heading: (
      <>
        Build a smarter,
        <br />
        more profitable
        <br />
        payment strategy
      </>
    ),
    description:
      "Let's discuss how Autopay can help you optimize payment processes, reduce costs and scale efficiently across regions.",
    formHeading: "Schedule a consultation",
    consentText:
      "I consent to the processing of my personal data contained in the contact form for the purposes of processing the request by Autopay Global sp. z o.o.",
    controllerText: "The personal data controller is Autopay Global sp z o. o.",
  },
};

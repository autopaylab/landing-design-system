import type { Meta, StoryObj } from "@storybook/react";
import { ConsentCheckboxField } from "./ConsentCheckboxField";

const meta: Meta<typeof ConsentCheckboxField> = {
  title: "Molecules/ConsentCheckboxField",
  component: ConsentCheckboxField,
};
export default meta;
type Story = StoryObj<typeof ConsentCheckboxField>;

export const Default: Story = {
  args: {
    consentText:
      "I consent to the processing of my personal data contained in the contact form for the purposes of processing the request by [Company] sp. z o.o.",
    controllerText: "The personal data controller is [Company] sp z o. o.",
  },
};

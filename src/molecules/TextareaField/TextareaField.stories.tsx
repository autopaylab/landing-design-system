import type { Meta, StoryObj } from "@storybook/react";
import { TextareaField } from "./TextareaField";

const meta: Meta<typeof TextareaField> = {
  title: "Molecules/TextareaField",
  component: TextareaField,
};
export default meta;
type Story = StoryObj<typeof TextareaField>;

export const Message: Story = { args: { label: "Wiadomość", placeholder: "Twoja wiadomość...", rows: 4 } };

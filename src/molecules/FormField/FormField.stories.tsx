import type { Meta, StoryObj } from "@storybook/react";
import { FormField } from "./FormField";

const meta: Meta<typeof FormField> = {
  title: "Molecules/FormField",
  component: FormField,
};
export default meta;
type Story = StoryObj<typeof FormField>;

export const FirstName: Story = { args: { label: "First name", placeholder: "Jane" } };
export const Email: Story = { args: { label: "Business e-mail", type: "email", placeholder: "jane@example.com" } };

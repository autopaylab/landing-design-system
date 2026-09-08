import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = { args: { placeholder: "Jane" } };
export const Email: Story = { args: { type: "email", placeholder: "jane@example.com" } };
export const Disabled: Story = { args: { placeholder: "Jane", disabled: true } };

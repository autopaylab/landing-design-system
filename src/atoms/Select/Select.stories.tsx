import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "Atoms/Select",
  component: Select,
};
export default meta;
type Story = StoryObj<typeof Select>;

const marketOptions = [
  { value: "pl", label: "Polska" },
  { value: "de", label: "Niemcy" },
  { value: "fr", label: "Francja" },
];

export const Default: Story = { args: { placeholder: "Wybierz…", options: marketOptions } };
export const Disabled: Story = { args: { placeholder: "Wybierz…", options: marketOptions, disabled: true } };

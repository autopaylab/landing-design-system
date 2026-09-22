import type { Meta, StoryObj } from "@storybook/react";
import { SelectField } from "./SelectField";

const meta: Meta<typeof SelectField> = {
  title: "Molecules/SelectField",
  component: SelectField,
};
export default meta;
type Story = StoryObj<typeof SelectField>;

export const Market: Story = {
  args: {
    label: "Główny rynek",
    placeholder: "Wybierz…",
    options: [
      { value: "pl", label: "Polska" },
      { value: "de", label: "Niemcy" },
      { value: "fr", label: "Francja" },
    ],
  },
};

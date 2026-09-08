import type { Meta, StoryObj } from "@storybook/react";
import { StepNumber } from "./StepNumber";

const meta: Meta<typeof StepNumber> = {
  title: "Atoms/StepNumber",
  component: StepNumber,
};
export default meta;
type Story = StoryObj<typeof StepNumber>;

export const One: Story = { args: { value: 1 } };
export const Four: Story = { args: { value: 4 } };

import type { Meta, StoryObj } from "@storybook/react";
import { BulletItem } from "./BulletItem";

const meta: Meta<typeof BulletItem> = {
  title: "Molecules/BulletItem",
  component: BulletItem,
};
export default meta;
type Story = StoryObj<typeof BulletItem>;

export const Default: Story = {
  args: { children: "PCI DSS-compliant infrastructure" },
  render: (args) => (
    <ul>
      <BulletItem {...args} />
    </ul>
  ),
};

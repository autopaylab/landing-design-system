import type { Meta, StoryObj } from "@storybook/react";
import { HeroVideoSplit } from "./HeroVideoSplit";

const meta: Meta<typeof HeroVideoSplit> = {
  title: "Organisms/HeroVideoSplit",
  component: HeroVideoSplit,
};
export default meta;
type Story = StoryObj<typeof HeroVideoSplit>;

export const Default: Story = {
  args: {
    title: (
      <>
        One platform.
        <br />
        Full control over
        <br />
        global payments.
      </>
    ),
    subtitle:
      "Increase revenue, reduce costs and ensure seamless compliance — through a single integration. Simplify payment operations across multiple markets.",
    ctaLabel: "Contact us",
    ctaHref: "#contact",
    videoSrc: "/hero.webm",
  },
};

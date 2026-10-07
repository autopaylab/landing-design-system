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

/** Without `videoSrc`: a single text column. */
export const TextOnly: Story = {
  args: {
    title: "One platform. Full control over global payments.",
    subtitle: "Increase revenue, reduce costs and ensure seamless compliance through a single integration.",
    ctaLabel: "Contact us",
    ctaHref: "#contact",
  },
};

/** With a recording labelled as a demo. */
export const WithMediaCaption: Story = {
  args: {
    ...Default.args,
    mediaCaption: "Demo",
  },
};

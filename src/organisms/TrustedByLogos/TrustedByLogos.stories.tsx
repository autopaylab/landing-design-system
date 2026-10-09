import type { Meta, StoryObj } from "@storybook/react";
import { TrustedByLogos } from "./TrustedByLogos";

const meta: Meta<typeof TrustedByLogos> = {
  title: "Organisms/TrustedByLogos",
  component: TrustedByLogos,
};
export default meta;
type Story = StoryObj<typeof TrustedByLogos>;

const placeholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='32'%3E%3Crect width='120' height='32' fill='%23888'/%3E%3C/svg%3E";

export const Default: Story = {
  args: {
    heading: "Trusted by industry leaders worldwide",
    logos: [
      { src: placeholder, alt: "Allianz", width: 120 },
      { src: placeholder, alt: "Crédit Agricole", width: 140 },
      { src: placeholder, alt: "Erste Bank", width: 120 },
      { src: placeholder, alt: "Shoper", width: 110 },
      { src: placeholder, alt: "Orange", width: 100 },
      { src: placeholder, alt: "VTEX", width: 100 },
    ],
  },
};

/** A few named partners in full colour, with an intro and a taller stacked mark. */
export const PartnersWithDescription: Story = {
  args: {
    heading: "Who is already building with us",
    description: "A short paragraph introducing the partners shown below.",
    logoTone: "original",
    logos: [
      { src: placeholder, alt: "Stacked partner mark", width: 160, height: 96 },
      { src: placeholder, alt: "Wide partner wordmark", width: 320 },
    ],
  },
};

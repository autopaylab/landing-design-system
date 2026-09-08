import type { Meta, StoryObj } from "@storybook/react";
import { CalendarCtaSection } from "./CalendarCtaSection";

const meta: Meta<typeof CalendarCtaSection> = {
  title: "Organisms/CalendarCtaSection",
  component: CalendarCtaSection,
};
export default meta;
type Story = StoryObj<typeof CalendarCtaSection>;

const placeholderImage =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080'%3E%3Crect width='1920' height='1080' fill='%23444'/%3E%3C/svg%3E";
const placeholderLogo =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='94' height='24'%3E%3Crect width='94' height='24' fill='%23222'/%3E%3C/svg%3E";

export const Default: Story = {
  args: {
    backgroundImage: placeholderImage,
    heading: "Gotowy, żeby Twój kalendarz zaczął pracować za Ciebie?",
    primaryCta: { label: "Załóż konto", href: "#contact" },
    secondaryCta: { label: "Zobacz demo na żywo", href: "https://calendar.autopay.pl/showcase/strefa-piekna", external: true },
    logoSrc: placeholderLogo,
    logoAlt: "Autopay",
    promoText: "Elastyczne rozwiązania. Efektywny rozwój.",
    copyrightText: `© ${new Date().getFullYear()} Autopay Calendar`,
    privacyLabel: "Polityka prywatności",
    privacyHref: "#",
  },
};

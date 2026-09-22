import type { Meta, StoryObj } from "@storybook/react";
import { PricingSection } from "./PricingSection";

const meta: Meta<typeof PricingSection> = {
  title: "Organisms/PricingSection",
  component: PricingSection,
};
export default meta;
type Story = StoryObj<typeof PricingSection>;

export const Default: Story = {
  args: {
    heading: "Przejrzysty cennik",
    tiers: [
      {
        name: "Starter",
        price: "29,99 zł",
        priceSuffix: "/m-c",
        priceNote: "przy płatności rocznej",
        description: "Idealny dla sklepów rozpoczynających",
        features: ["Prowizja 0% do obrotu 5 500 zł / m-c", "Prowizja 1,1% powyżej 5 500 zł / m-c"],
        ctaLabel: "Zacznij już teraz",
      },
      {
        name: "Standard",
        price: "1,19%",
        priceSuffix: "+ 0,34 zł",
        description: "Idealny dla sklepów z regularnym obrotem",
        features: ["Płacisz, gdy korzystasz", "Niska prowizja", "Dopasowany do potrzeb"],
        ctaLabel: "Zacznij już teraz",
        featured: true,
        badgeLabel: "NAJPOPULARNIEJSZY",
      },
      {
        name: "Indywidualny",
        price: "Dopasowany",
        description: "Dla sklepów z dużymi obrotami",
        features: ["Dopasowany do Twoich potrzeb"],
        ctaLabel: "Skontaktuj się z nami",
      },
    ],
    footnotes: [
      { value: "49 zł", label: "aktywacja (działalność zarejestrowana)" },
      { value: "199 zł", label: "aktywacja (niezarejestrowana)" },
      { value: "0 zł", label: "zwroty" },
      { value: "0 zł", label: "wypłaty" },
    ],
  },
};

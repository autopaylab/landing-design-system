import type { Meta, StoryObj } from "@storybook/react";
import { PricingTier } from "./PricingTier";

const meta: Meta<typeof PricingTier> = {
  title: "Molecules/PricingTier",
  component: PricingTier,
};
export default meta;
type Story = StoryObj<typeof PricingTier>;

export const Starter: Story = {
  args: {
    name: "Starter",
    price: "29,99 zł",
    priceSuffix: "/m-c",
    priceNote: "przy płatności rocznej",
    description: "Idealny dla sklepów rozpoczynających",
    features: ["Prowizja 0% do obrotu 5 500 zł / m-c", "Prowizja 1,1% powyżej 5 500 zł / m-c"],
    ctaLabel: "Zacznij już teraz",
  },
};

export const Featured: Story = {
  args: {
    name: "Standard",
    price: "1,19%",
    priceSuffix: "+ 0,34 zł",
    description: "Idealny dla sklepów z regularnym obrotem",
    features: ["Płacisz, gdy korzystasz", "Niska prowizja", "Dopasowany do potrzeb"],
    ctaLabel: "Zacznij już teraz",
    featured: true,
    badgeLabel: "NAJPOPULARNIEJSZY",
  },
};

export const Custom: Story = {
  args: {
    name: "Indywidualny",
    price: "Dopasowany",
    description: "Dla sklepów z dużymi obrotami",
    features: ["Dopasowany do Twoich potrzeb"],
    ctaLabel: "Skontaktuj się z nami",
  },
};

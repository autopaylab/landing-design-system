import type { Meta, StoryObj } from "@storybook/react";
import { AudienceScenariosSection } from "./AudienceScenariosSection";

const meta: Meta<typeof AudienceScenariosSection> = {
  title: "Organisms/AudienceScenariosSection",
  component: AudienceScenariosSection,
};
export default meta;
type Story = StoryObj<typeof AudienceScenariosSection>;

export const Default: Story = {
  args: {
    eyebrow: "Dla kogo jest Autopay",
    heading: "Wybierz scenariusz, który najbardziej pasuje do Twojego biznesu",
    scenarios: [
      {
        title: "Masz już sklep",
        description:
          "Masz obecnego dostawcę płatności i chcesz porównać warunki albo dodać metody, których brakuje. Pokażemy Ci konkretne koszty i rekomendację metod dla Twojego sklepu.",
      },
      {
        title: "Startujesz z nowym sklepem",
        description:
          "Otwierasz sklep i potrzebujesz pierwszej bramki płatności. Mamy gotowe wtyczki do popularnych platform e-commerce. Łatwe wdrożenie bez kodu.",
      },
      {
        title: "Skalujesz biznes",
        description:
          "Szukasz dodatkowych funkcji jak płatności cykliczne, elastycznych warunków cenowych albo indywidualnej oferty. Negocjujemy stawki indywidualnie.",
      },
    ],
  },
};

/** Light blue rounded surface (PlatformFeatureShowcase's tint), e.g. to break up a run of white sections. */
export const Tinted: Story = {
  args: {
    ...Default.args,
    tone: "tinted",
  },
};

/** Dark rounded surface (RequirementsChecklistSection's), with translucent cards and light text. */
export const Dark: Story = {
  args: {
    ...Default.args,
    tone: "dark",
  },
};

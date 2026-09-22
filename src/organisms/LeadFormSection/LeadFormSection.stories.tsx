import type { Meta, StoryObj } from "@storybook/react";
import { LeadFormSection } from "./LeadFormSection";

const meta: Meta<typeof LeadFormSection> = {
  title: "Organisms/LeadFormSection",
  component: LeadFormSection,
};
export default meta;
type Story = StoryObj<typeof LeadFormSection>;

/** Matches autopay.pl/lp/platnosci-online-1's contact form: name/email/phone/NIP/message. */
export const ContactWithNipAndMessage: Story = {
  args: {
    heading: "Sprawdź koszty płatności dla swojego sklepu",
    description: "Zostaw kontakt — wrócimy z konkretną kalkulacją kosztów, rekomendacją metod płatności i realnym czasem wdrożenia.",
    formHeading: "Wolisz porozmawiać?",
    fields: [
      { kind: "text", name: "name", label: "Imię i nazwisko" },
      { kind: "text", name: "email", label: "Email", type: "email" },
      { kind: "text", name: "phone", label: "Numer telefonu" },
      { kind: "text", name: "nip", label: "NIP" },
      { kind: "textarea", name: "message", label: "Wiadomość" },
    ],
    consentText: "Wyrażam zgodę na przetwarzanie przez Autopay S.A. moich danych osobowych zawartych w formularzu kontaktowym.",
    controllerText: "Administratorem danych osobowych jest Autopay S.A.",
  },
};

/** Matches autopay.pl/lp/payfac-08's lead form: name/email/company/phone plus 4 dropdowns. */
export const PayFacLeadForm: Story = {
  args: {
    heading: "Umów 20-minutową rozmowę",
    description: "Powiedz nam, na jakim jesteś etapie. Potwierdzimy dopasowanie i najszybszą drogę do działania jako PayFac w EOG.",
    formHeading: "Porozmawiaj z naszym zespołem PayFac",
    fields: [
      { kind: "text", name: "name", label: "Imię i nazwisko", required: true },
      { kind: "text", name: "email", label: "Email służbowy", type: "email", required: true },
      { kind: "text", name: "company", label: "Firma" },
      { kind: "text", name: "phone", label: "Numer telefonu" },
      {
        kind: "select",
        name: "licenseStatus",
        label: "Status licencji",
        placeholder: "Wybierz…",
        options: [
          { value: "licensed", label: "PI / EMI z licencją" },
          { value: "applying", label: "W trakcie aplikacji" },
          { value: "assessing", label: "Na etapie analizy" },
        ],
      },
      {
        kind: "select",
        name: "currentModel",
        label: "Obecny model",
        placeholder: "Wybierz…",
        options: [
          { value: "iso", label: "ISO" },
          { value: "psp", label: "PSP / gateway" },
          { value: "acquirer", label: "Acquirer" },
          { value: "other", label: "Inny" },
        ],
      },
      {
        kind: "select",
        name: "volume",
        label: "Szacowany miesięczny wolumen kartowy",
        placeholder: "Wybierz…",
        options: [
          { value: "lt1m", label: "< 1 mln €" },
          { value: "1to10m", label: "1–10 mln €" },
          { value: "10to50m", label: "10–50 mln €" },
          { value: "50mplus", label: "50+ mln €" },
        ],
      },
      {
        kind: "select",
        name: "market",
        label: "Główny rynek",
        placeholder: "Wybierz…",
        options: [
          { value: "pl", label: "Polska" },
          { value: "de", label: "Niemcy" },
          { value: "fr", label: "Francja" },
        ],
      },
      { kind: "textarea", name: "notes", label: "Dodatkowe informacje" },
    ],
    consentText: "Wyrażam zgodę, aby Autopay kontaktował się ze mną w sprawie tego zapytania.",
    submitLabel: "Umów 20-min rozmowę",
  },
};

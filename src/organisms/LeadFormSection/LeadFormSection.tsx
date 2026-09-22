"use client";

import * as React from "react";

import { Button } from "@/atoms/Button";
import type { SelectOption } from "@/atoms/Select";
import { FormField } from "@/molecules/FormField";
import { TextareaField } from "@/molecules/TextareaField";
import { SelectField } from "@/molecules/SelectField";
import { ConsentCheckboxField } from "@/molecules/ConsentCheckboxField";

export type LeadFormField =
  | { kind: "text"; name: string; label: string; type?: string; placeholder?: string; required?: boolean }
  | { kind: "textarea"; name: string; label: string; placeholder?: string; rows?: number; required?: boolean }
  | { kind: "select"; name: string; label: string; placeholder?: string; options: SelectOption[]; required?: boolean };

/**
 * A composable lead-generation form — unlike `ContactSection` (a faithful,
 * fixed-field extraction of one specific source form, see AUDIT.md #17/#21),
 * this renders whatever `fields` you pass. Built because real autopay.pl
 * forms vary a lot: /lp/platnosci-online-1 has name/email/phone/NIP/message,
 * /lp/payfac-08 has name/email/company/phone plus 4 dropdowns — neither
 * fits ContactSection's hardcoded 4 fields, and retrofitting that organism
 * would blur the line between "faithful extraction" and "new capability".
 * All fields render full-width, single-column — every real form audited
 * uses that layout (not a first-name/last-name split row).
 */
export interface LeadFormSectionProps {
  heading: React.ReactNode;
  description?: string;
  formHeading: string;
  fields: LeadFormField[];
  consentText: React.ReactNode;
  controllerText?: React.ReactNode;
  submitLabel?: string;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

export function LeadFormSection({
  heading,
  description,
  formHeading,
  fields,
  consentText,
  controllerText,
  submitLabel = "Wyślij",
  onSubmit,
}: LeadFormSectionProps) {
  return (
    <section className="mx-auto mt-16 max-w-[1280px] px-6 md:mt-32">
      <div className="grid items-start gap-12 md:grid-cols-2">
        <div>
          <h2 className="font-display text-h2">{heading}</h2>
          {description ? <p className="mt-6 max-w-md text-muted-foreground md:text-[17px]">{description}</p> : null}
        </div>
        <div className="rounded-3xl bg-card p-8 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.1)] md:p-10">
          <h3 className="font-display text-h4">{formHeading}</h3>
          <form className="mt-6 space-y-5" onSubmit={onSubmit ?? ((e) => e.preventDefault())}>
            {fields.map((field) => {
              if (field.kind === "textarea") {
                return (
                  <TextareaField
                    key={field.name}
                    label={field.label}
                    name={field.name}
                    placeholder={field.placeholder}
                    rows={field.rows ?? 4}
                    required={field.required}
                  />
                );
              }
              if (field.kind === "select") {
                return (
                  <SelectField
                    key={field.name}
                    label={field.label}
                    name={field.name}
                    placeholder={field.placeholder}
                    options={field.options}
                    required={field.required}
                  />
                );
              }
              return (
                <FormField
                  key={field.name}
                  label={field.label}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  required={field.required}
                />
              );
            })}
            <ConsentCheckboxField name="consent" consentText={consentText} controllerText={controllerText} required />
            <Button type="submit" variant="solid" className="w-full py-4 text-sm">
              {submitLabel}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

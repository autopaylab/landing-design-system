import * as React from "react";

import { Button } from "@/atoms/Button";
import { FormField } from "@/molecules/FormField";
import { ConsentCheckboxField } from "@/molecules/ConsentCheckboxField";

/**
 * HomeContent.tsx Contact section + form (lines 433-473). The source form is
 * uncontrolled and calls `e.preventDefault()` with no real submit logic —
 * `onSubmit` here defaults to the same no-op, matching the source rather
 * than inventing a submission flow that was never there. See AUDIT.md #8.
 */
export interface ContactSectionProps {
  heading: React.ReactNode;
  description: string;
  formHeading: string;
  consentText: React.ReactNode;
  controllerText: React.ReactNode;
  submitLabel?: string;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

export function ContactSection({
  heading,
  description,
  formHeading,
  consentText,
  controllerText,
  submitLabel = "Send",
  onSubmit,
}: ContactSectionProps) {
  return (
    <section id="contact" className="mx-auto mt-32 max-w-[1280px] px-6">
      <div className="grid items-start gap-12 md:grid-cols-2">
        <div>
          <h2 className="font-display text-[44px] leading-[1.05] md:text-[56px]">{heading}</h2>
          <p className="mt-6 max-w-md text-muted-foreground md:text-[17px]">{description}</p>
        </div>
        <div className="rounded-3xl bg-card p-8 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.1)] md:p-10">
          <h3 className="font-display text-3xl">{formHeading}</h3>
          <form className="mt-6 space-y-5" onSubmit={onSubmit ?? ((e) => e.preventDefault())}>
            <div className="grid grid-cols-2 gap-4">
              <FormField label="First name" name="firstName" placeholder="Jane" />
              <FormField label="Last name" name="lastName" placeholder="Doe" />
            </div>
            <FormField label="Phone number" name="phone" placeholder="123456789" />
            <FormField label="Business e-mail" name="email" type="email" placeholder="jane@example.com" />
            <ConsentCheckboxField name="consent" consentText={consentText} controllerText={controllerText} />
            <Button type="submit" variant="solid" className="w-full py-4 text-sm">
              {submitLabel}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

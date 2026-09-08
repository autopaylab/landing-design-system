import * as React from "react";

import { Input } from "@/atoms/Input";
import { Label } from "@/atoms/Label";

/** Label + Input, matching the contact-form fields in HomeContent.tsx. */
export interface FormFieldProps extends React.ComponentProps<"input"> {
  label: string;
}

export const FormField = React.forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, id, ...inputProps }, ref) => (
    <label className="block">
      <Label>{label}</Label>
      <Input ref={ref} id={id} className="mt-2" {...inputProps} />
    </label>
  ),
);
FormField.displayName = "FormField";

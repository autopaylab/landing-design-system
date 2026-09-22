import * as React from "react";

import { Select, type SelectProps } from "@/atoms/Select";
import { Label } from "@/atoms/Label";

/** Label + Select, mirroring FormField (Label + Input). */
export interface SelectFieldProps extends SelectProps {
  label: string;
}

export const SelectField = React.forwardRef<HTMLSelectElement, SelectFieldProps>(
  ({ label, id, ...selectProps }, ref) => (
    <label className="block">
      <Label>{label}</Label>
      <Select ref={ref} id={id} className="mt-2" {...selectProps} />
    </label>
  ),
);
SelectField.displayName = "SelectField";

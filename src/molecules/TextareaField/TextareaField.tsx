import * as React from "react";

import { Textarea } from "@/atoms/Textarea";
import { Label } from "@/atoms/Label";

/** Label + Textarea, mirroring FormField (Label + Input). Contributed back from autopaylab-landing. */
export interface TextareaFieldProps extends React.ComponentProps<"textarea"> {
  label: string;
}

export const TextareaField = React.forwardRef<HTMLTextAreaElement, TextareaFieldProps>(
  ({ label, id, ...textareaProps }, ref) => (
    <label className="block">
      <Label>{label}</Label>
      <Textarea ref={ref} id={id} className="mt-2" {...textareaProps} />
    </label>
  ),
);
TextareaField.displayName = "TextareaField";

import type { DatacablesFieldRender } from "datacables";
import { HTMLAttributes } from "react";

export interface CheckboxInputFieldProps extends HTMLAttributes<HTMLInputElement>, DatacablesFieldRender { }

export function CheckboxInputField({

}: CheckboxInputFieldProps) {
  return <input {...props} type="checkbox" />;
}

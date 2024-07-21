import { DatacablesField } from "datacables";
import { HTMLAttributes } from "react";

export interface FileInputFieldProps extends HTMLAttributes<HTMLInputElement>, DatacablesField { }

export function FileInputField({
  name,
  label,
  default: defaultValue,
  attributes: {
    is_null: disabled,
    is_required: required,
  } = {
    is_null: false,
    is_required: false,
  },
  render: {
    input: inputMode,
    placeholder,
  } = {
    input: "file",
    placeholder: "",
  },
  choices,
  validators,
  ...props
}: FileInputFieldProps) {
  return <input
    {...{ name, inputMode, placeholder, defaultValue, required, disabled }}
    {...props}
    type="file"
  />;
}

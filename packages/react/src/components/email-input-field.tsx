import { DatacablesField } from "datacables";

export interface EmailInputFieldProps extends React.HTMLAttributes<HTMLInputElement>, DatacablesField { }

export function EmailInputField({
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
    input: "email",
    placeholder: "",
  },
  choices,
  validators,
  ...props
}: EmailInputFieldProps) {
  return <input
    {...{ name, inputMode, placeholder, defaultValue, required, disabled }}
    {...props}
    type="email"
  />;
}

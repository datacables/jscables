import { DatacablesField } from "datacables";

export interface DateInputFieldProps extends React.HTMLAttributes<HTMLInputElement>, DatacablesField { }

export function DateInputField({
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
    input: "date",
    placeholder: "",
  },
  choices,
  validators,
  ...props
}: DateInputFieldProps) {
  return <>
    <label htmlFor={name}>{label}</label>
    <input
      {...{ name, inputMode, placeholder, defaultValue, required, disabled }}
      {...props}
      type="date"
    />
  </>
}

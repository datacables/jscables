import { DatacablesField as FieldType, Form } from "datacables";
import { } from "./radio-input-field"
import { useDatacables } from "../contexts";

export { RadioInputField, type RadioInputFieldProps } from './radio-input-field'
export { PasswordInputField, type PasswordInputFieldProps } from './password-input-field'
export { NumberInputField, type NumberInputFieldProps } from './number-input-field'
export { SelectInputField, type SelectInputFieldProps } from './select-input-field'
export { TextInputField, type TextInputFieldProps } from './text-input-field'
export { DateInputField, type DateInputFieldProps } from './date-input-field'
export { FileInputField, type FileInputFieldProps } from './file-input-field'
export { EmailInputField, type EmailInputFieldProps } from './email-input-field'
export { CheckboxInputField, type CheckboxInputFieldProps } from './checkbox-input-field'


export interface DatacablesFieldProps extends FieldType { }

export type DatacablesFieldComponent<T extends keyof JSX.IntrinsicElements> = React.FC<JSX.IntrinsicElements[T]>;

export function DatacablesField({
  name,
  label,
  choices,
  attributes: {
    is_null: disabled,
    is_required: required,
  } = {
    is_null: false,
    is_required: false,
  },
  validators,
  type,
  render: { placeholder, input } = {
    input: "text",
  },
  default: defaultValue,
  ...props
}: DatacablesFieldProps) {
  const Fields = useDatacables();

  const Field = Fields[type].render;

  return <>
    <label htmlFor={name}>{label}</label>
    <Field {...{ name, type, placeholder, defaultValue, input, disabled, required }} {...props} />
  </>
}

export function Datacables({ fields }: Form) {
  return <>{fields.map(props => <DatacablesField {...props} />)}</>;
}


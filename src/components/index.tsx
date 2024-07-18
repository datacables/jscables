import { DatacablesField } from "datacables";
import { } from "./radio-input-field"

export { RadioInputField, type RadioInputFieldProps } from './radio-input-field'
export { PasswordInputField, type PasswordInputFieldProps } from './password-input-field'
export { NumberInputField, type NumberInputFieldProps } from './number-input-field'
export { SelectInputField, type SelectInputFieldProps } from './select-input-field'
export { TextInputField, type TextInputFieldProps } from './text-input-field'
export { DateInputField, type DateInputFieldProps } from './date-input-field'
export { FileInputField, type FileInputFieldProps } from './file-input-field'
export { EmailInputField, type EmailInputFieldProps } from './email-input-field'
export { CheckboxInputField, type CheckboxInputFieldProps } from './checkbox-input-field'


export interface DatacablesProps extends DatacablesField { }

export type DatacablesFieldComponent<T extends keyof JSX.IntrinsicElements> = React.FC<JSX.IntrinsicElements[T]>;

export function Datacables({
  name,
  type,
  render: { placeholder, input } = {
    input: "text",
  },
  default: defaultValue,
  //   ...extraFieldProps
}: DatacablesProps) {
  return null
  // const Field = fields[type]!;

  // return <Field {...{ name, type, placeholder, defaultValue, input }} />;
}

// export const fields: Record<DatacablesProps['type'], any> = {
//   password: PasswordInputField,
//   number: NumberInputField,
//   radio: RadioInputField,
//   select: SelectInputField,
//   checkbox: PasswordInputField,
//   text: PasswordInputField,
//   date: PasswordInputField,
//   file: PasswordInputField,
//   email: PasswordInputField,
// };

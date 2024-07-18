import { DatacablesFieldRender } from "datacables";

export type TextInputFieldProps = JSX.IntrinsicElements["input"] & DatacablesFieldRender & {
}

export function TextInputField(props: TextInputFieldProps) {
  return <input {...props} type="text" />;
}

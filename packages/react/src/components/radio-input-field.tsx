import { DatacablesFieldRender } from "datacables";

export type RadioInputFieldProps = JSX.IntrinsicElements["input"] & DatacablesFieldRender & {
}

export function RadioInputField(props: RadioInputFieldProps) {
  return <input {...props} type="radio" />;
}

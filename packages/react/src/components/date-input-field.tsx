import { DatacablesFieldRender } from "datacables";

export type DateInputFieldProps = JSX.IntrinsicElements["input"] & DatacablesFieldRender & {
}

export function DateInputField(props: DateInputFieldProps) {
  return <input {...props} type="date" />;
}

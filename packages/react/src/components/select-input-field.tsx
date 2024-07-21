import { DatacablesFieldRender } from "datacables";

export type SelectInputFieldProps = JSX.IntrinsicElements["select"] & DatacablesFieldRender & {
}

export function SelectInputField(props: SelectInputFieldProps) {
  return <select {...props} />;
}

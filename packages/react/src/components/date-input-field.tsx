import { DatacablesField } from "datacables";

export interface DateInputFieldProps extends React.HTMLAttributes<HTMLInputElement>, DatacablesField { }

export function DateInputField(props: DateInputFieldProps) {
  return <input {...props} type="date" />;
}

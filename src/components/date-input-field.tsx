import { DatacablesFieldRender } from "datacables";

export interface DateInputFieldProps extends React.HTMLAttributes<HTMLInputElement>, DatacablesFieldRender { }

export function DateInputField(props: DateInputFieldProps) {
  return <input {...props} type="date" />;
}

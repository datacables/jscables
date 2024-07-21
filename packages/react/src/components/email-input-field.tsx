import { DatacablesField } from "datacables";

export interface EmailInputFieldProps extends React.HTMLAttributes<HTMLInputElement>, DatacablesField { }

export function EmailInputField(props: EmailInputFieldProps) {
  return <input {...props} type="email" />;
}

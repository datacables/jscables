import { DatacablesFieldRender } from "datacables";

export interface EmailInputFieldProps extends React.HTMLAttributes<HTMLInputElement>, DatacablesFieldRender { }

export function EmailInputField(props: EmailInputFieldProps) {
  return <input {...props} type="email" />;
}

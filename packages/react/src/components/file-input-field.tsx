import { DatacablesField } from "datacables";
import { HTMLAttributes } from "react";

export interface FileInputFieldProps extends HTMLAttributes<HTMLInputElement>, DatacablesField { }

export function FileInputField(props: FileInputFieldProps) {
  return <input {...props} type="file" />;
}

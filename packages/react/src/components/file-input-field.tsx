import { DatacablesFieldRender } from "datacables";
import { HTMLAttributes } from "react";

export interface FileInputFieldProps extends HTMLAttributes<HTMLInputElement>, DatacablesFieldRender { }

export function FileInputField(props: FileInputFieldProps) {
  return <input {...props} type="file" />;
}

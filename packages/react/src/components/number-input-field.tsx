import { DatacablesFieldRender } from "datacables";
import { HTMLAttributes } from "react";

export interface NumberInputFieldProps extends HTMLAttributes<HTMLInputElement>, DatacablesFieldRender {
}

export function NumberInputField(props: any) {
  return <input {...props} type="number" />;
}


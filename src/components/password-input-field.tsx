"use client";

import { DatacablesFieldRender } from "datacables";

export type PasswordInputFieldProps = JSX.IntrinsicElements["input"] & DatacablesFieldRender & {
}

export function PasswordInputField(props: PasswordInputFieldProps) {
  return <input {...props} type="password" />;
}


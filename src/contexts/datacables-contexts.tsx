import { DatacablesFieldRender, DatacablesFieldType } from "datacables";
import React from "react";
import { defaultFieldOptions } from "../lib/options/default-field-options";

// valid if true
export type Validator<Params extends Record<string, unknown> = Record<string, unknown>> = {
  function: string;
  message: string;
  params?: Params;
  validator: (params: Params) => boolean | undefined;
}

export type FieldOptions = {
  [K in DatacablesFieldType]: {
    render?: (props: DatacablesFieldRender) => React.ReactNode;
    validators?: Validator[];
  }
}

// TODO(AbhiShake1): make this the const source of truth for `FieldType`
export const DatacablesContext = React.createContext(defaultFieldOptions);

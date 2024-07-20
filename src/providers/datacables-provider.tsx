import React from "react";
import { DatacablesContext } from "../contexts/datacables-contexts";
import { defaultFieldOptions, FieldOptions } from "../lib/options/default-field-options";
import { Validator } from "../lib/options/default-validators";
import { DatacablesValidatorContext } from "../contexts";
import { defaultValidators } from "../lib/options/default-validators";

export interface DatacablesProviderProps {
  children: React.ReactNode;
  fieldOptions?: Partial<FieldOptions>;
  validators: Validator[];
}

export function DatacablesProvider({ children, fieldOptions, validators }: DatacablesProviderProps) {
  return <DatacablesValidatorContext.Provider value={{
    ...defaultValidators,
    ...validators,
  }}>
    <DatacablesContext.Provider
      value={{
        ...fieldOptions,
        ...defaultFieldOptions,
      }}>{children}</DatacablesContext.Provider>;

  </DatacablesValidatorContext.Provider>
}

export default DatacablesProvider;

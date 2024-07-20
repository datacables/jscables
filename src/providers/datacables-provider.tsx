import React from "react";
import { DatacablesContext } from "../contexts/datacables-contexts";
import { defaultFieldOptions, FieldOptions } from "../lib/options/default-field-options";

export interface DatacablesProviderProps {
  children: React.ReactNode;
  fieldOptions?: Partial<FieldOptions>;
}

export function DatacablesProvider({ children, fieldOptions }: DatacablesProviderProps) {
  return <DatacablesContext.Provider
    value={{
      ...fieldOptions,
      ...defaultFieldOptions,
    }}>{children}</DatacablesContext.Provider>;
}

export default DatacablesProvider;

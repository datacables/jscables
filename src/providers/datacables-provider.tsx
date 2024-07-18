import type { DatacablesFieldType } from "datacables";
import React from "react";
import { DatacablesContext, FieldOptions } from "../contexts/datacables-contexts";
import { defaultFieldOptions } from "../lib/options/default-field-options";

export interface DatacablesProviderOptions {
  render: {
    [K in keyof DatacablesFieldType]: React.ReactNode
  },
  /// string shows error and undefined is valid
  validators: (value: string) => string | undefined
}

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

export function useDatacables() {
  return React.useContext(DatacablesContext);
}

// interface DatacablesContextProps {
//   datacables: Record<string, any>;
// }


export default DatacablesProvider;

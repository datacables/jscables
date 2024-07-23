import React, { useMemo } from "react";
import { DatacablesContext } from "../contexts/datacables-contexts";
import { defaultFieldOptions, FieldOptions } from "../lib/options/default-field-options";
import { _toInternal, Validator } from "../lib/options/default-validators";
import { DatacablesValidatorContext } from "../contexts";
import { defaultValidators } from "../lib/options/default-validators";

export interface DatacablesProviderProps {
  children: React.ReactNode;
  fieldOptions?: Partial<FieldOptions>;
  validators: Validator[];
}

export function DatacablesProvider({ children, fieldOptions, validators }: DatacablesProviderProps) {
  const _validators = useMemo(() => _toInternal(validators), [validators]);
  const _datacablesValidators = React.useMemo(() => ({
    ...defaultValidators,
    ..._validators,
  }), [defaultValidators, _validators])

  return <DatacablesValidatorContext.Provider value={_datacablesValidators}>
    <DatacablesContext.Provider
      value={{
        ...fieldOptions,
        ...defaultFieldOptions,
      }}>
      {children}
    </DatacablesContext.Provider>
  </DatacablesValidatorContext.Provider>
}

export default DatacablesProvider;

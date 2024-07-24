import React from "react";
import { _toInternal, defaultValidators } from "../lib/options/default-validators";

export const DatacablesValidatorContext = React.createContext(defaultValidators);

export function useDatacablesValidators() {
  return React.useContext(DatacablesValidatorContext);
}

export function useDatacablesValidator(
  validator: keyof typeof DatacablesValidatorContext
) {
  const validators = useDatacablesValidators();
  return validators[validator as keyof typeof defaultValidators] ?? validators.required;
}

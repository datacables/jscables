import React from "react";
import { defaultValidators, Validator } from "../lib/options/default-validators";

export const DatacablesValidatorContext = React.createContext<Validator[]>(defaultValidators);

export function useDatacablesValidators() {
  return React.useContext(DatacablesValidatorContext);
}

export function useDatacablesValidator(
  validator: NonNullable<ReturnType<typeof useDatacablesValidators>>[number]['function']
) {
  const validators = useDatacablesValidators();
  return validators.find(v => v.function === validator);
}


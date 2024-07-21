import React from "react";
import { defaultValidators } from "../lib/options/default-validators";

export const DatacablesValidatorContext = React.createContext(defaultValidators);

export function useDatacablesValidators() {
  return React.useContext(DatacablesValidatorContext);
}

export function useDatacablesValidator(
  validator: NonNullable<ReturnType<typeof useDatacablesValidators>>[number]['function']
) {
  const validators = useDatacablesValidators();
  return validators.find(v => v.function === validator);
}


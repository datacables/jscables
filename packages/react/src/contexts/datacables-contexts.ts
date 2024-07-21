import React from "react";
import { defaultFieldOptions } from "../lib/options/default-field-options";

export const DatacablesContext = React.createContext(defaultFieldOptions);

export function useDatacables() {
  return React.useContext(DatacablesContext);
}

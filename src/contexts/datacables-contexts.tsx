import { DatacablesFieldRender, DatacablesFieldType } from "datacables";
import React from "react";
import { CheckboxInputField, DateInputField, EmailInputField, FileInputField, NumberInputField, PasswordInputField, RadioInputField, SelectInputField, TextInputField } from "../components";

export type ValidatorFn = (value: string) => string | undefined;

export type FieldOptions = {
  [K in DatacablesFieldType]: {
    render?: (props: DatacablesFieldRender) => React.ReactNode;
    validators?: ValidatorFn[];
  }
}

// TODO(AbhiShake1): make this the const source of truth for `FieldType`
export const DatacablesContext = React.createContext<FieldOptions>({
  date: {
    render: (props) => <DateInputField {...props} />,
    validators: [],
  },
  file: {
    render: (props) => <FileInputField {...props} />,
    validators: [],
  },
  number: {
    render: (props) => <NumberInputField {...props} />,
    validators: [],
  },
  text: {
    render: (props) => <TextInputField {...props} />,
    validators: [],
  },
  email: {
    render: (props) => <EmailInputField {...props} />,
    validators: [],
  },
  radio: {
    render: (props) => <RadioInputField {...props} />,
    validators: [],
  },
  checkbox: {
    render: (props) => <CheckboxInputField {...props} />,
    validators: [],
  },
  select: {
    render: (props) => <SelectInputField {...props} />,
    validators: [],
  },
  password: {
    render: (props) => <PasswordInputField {...props} />,
    validators: [],
  },
});

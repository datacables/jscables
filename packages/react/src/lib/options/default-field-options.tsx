import { CheckboxInputField, DateInputField, EmailInputField, FileInputField, NumberInputField, PasswordInputField, RadioInputField, SelectInputField, TextInputField } from "../../components";
import type { DatacablesFieldRender, DatacablesFieldType } from "datacables";
import { Validator } from "./default-validators";

export interface RendererAndValidators {
  render?: (props: DatacablesFieldRender) => React.ReactNode;
  validators?: Validator[];
}

export type FieldOptions = {
  [K in DatacablesFieldType]: RendererAndValidators;
} & {
  $default: RendererAndValidators;
}

// TODO(AbhiShake1): make this the const source of truth for `FieldType`
export const defaultFieldOptions = {
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
  $default: {
    render: (props) => <TextInputField {...props} />,
  },
} satisfies FieldOptions;


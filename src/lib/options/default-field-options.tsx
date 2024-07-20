import { CheckboxInputField, DateInputField, EmailInputField, FileInputField, NumberInputField, PasswordInputField, RadioInputField, SelectInputField, TextInputField } from "../../components";
import { FieldOptions, Validator } from "../../contexts/datacables-contexts";

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
    validators: [
      {
        function: "regex",
        validator: ({ value, regex } = {}) => new RegExp(regex as string).test(value as string),
        message: "Pattern does not match",
        params: {
          regex: "abc.+",
          value: "__this__.value",
        }
      }
    ],
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
} satisfies FieldOptions;

const defaultValidators: Validator[] = [
  {
    function: "regex",
    validator: ({ value, regex } = {}) => new RegExp(regex as string).test(value as string),
    message: "Pattern does not match",
    params: {
      regex: "abc.+",
      value: "__this__.value",
    }
  },
  {
    function: "required",
    message: "This field is required",
    params: {},
    validator: ({ value } = {}) => value !== undefined,
  }
];

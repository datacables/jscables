import { DatacablesFieldValidator } from "datacables";

export type Validator<F extends string = string, Params extends Record<F, any> = Record<string, any>> = DatacablesFieldValidator & {
  function: F;
  params?: Params;
  validator: (params: Params & { value: any }) => boolean | undefined;
}

export const defaultValidators = _toInternal([
  {
    function: 'required',
    message: 'This field is required',
    validator: (params) => !!params.value,
  },
  {
    function: 'minLength',
    message: 'This field must be at least {min} characters',
    params: {
      min: 0,
    },
    validator: (params) =>
      params.value &&
      params.value.toString().length >= (params.min ?? 0),
  },
  {
    function: 'maxLength',
    message: 'This field must be at most {max} characters',
    params: {
      max: 0,
    },
    validator: (params) => params.value?.length <= (params.max ?? 0),
  },
  {
    function: 'min',
    message: 'This field must be greater than or equal to {min}',
    params: {
      min: 0,
    },
    validator: (params) => params.value >= (params.min ?? 0),
  },
  {
    function: 'max',
    message: 'This field must be less than or equal to {max}',
    params: {
      max: 0,
    },
    validator: (params) => params.value <= (params.max ?? 0),
  },
  {
    function: 'email',
    message: 'This field must be a valid email',
    validator: (params) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(params.value),
  },
  {
    function: 'url',
    message: 'This field must be a valid url',
    validator: (params) =>
      /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(params.value.toString()),
  },
  {
    function: 'number',
    message: 'This field must be a valid number',
    validator: (params) => !isNaN(Number(params.value)),
  },
  {
    function: 'integer',
    message: 'This field must be a valid integer',
    validator: (params) => Number.isInteger(Number(params.value)),
  },
  {
    function: 'float',
    message: 'This field must be a valid float',
    validator: (params) => Number.isFinite(Number(params.value)),
  },
  {
    function: 'date',
    message: 'This field must be a valid date',
    validator: (params) => params.value instanceof Date,
  },
  {
    function: 'dateISO',
    message: 'This field must be a valid date (ISO)',
    validator: ({ value }) => value instanceof Date,
  },
  {
    function: 'dateAfter',
    message: 'This field must be a date after {date}',
    params: {
      date: new Date(),
    },
    validator: (params) => params.value instanceof Date
      && params.date instanceof Date
      && params.value > params.date,
  },
  {
    function: 'dateBefore',
    message: 'This field must be a date before {date}',
    params: {
      date: new Date(),
    },
    validator: (params) => params.value instanceof Date
      && params.date instanceof Date
      && params.value < params.date,
  },
  {
    function: 'dateBetween',
    message: 'This field must be a date between {min} and {max}',
    params: {
      min: new Date(),
      max: new Date(),
    },
    validator: (params) => params.value instanceof Date
      && params.min instanceof Date
      && params.max instanceof Date
      && params.value >= params.min
      && params.value <= params.max,
  },
])

export function _toInternal<F extends string, T extends Record<string, any>>(validators: Validator<F, T>[]) {
  type Acc = { [fn in typeof validators[number]['function']]: fn }
  return validators.reduce((acc, v) => {
    const _acc = acc as Acc
    return { [v.function]: v, ..._acc };
  }, {} as Acc);
}


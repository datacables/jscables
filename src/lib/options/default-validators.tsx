export type Validator<Params extends Record<string, any> = Record<string, any>> = {
  function: string;
  message: string;
  params?: Params;
  validator: (params: Params) => boolean | undefined;
}

export const defaultValidators = [
  {
    function: 'required',
    message: 'This field is required',
    validator: (params) => params.value !== undefined,
  },
  {
    function: 'minLength',
    message: 'This field must be at least {min} characters',
    params: {
      min: 0,
    },
    validator: (params) =>
      params.value &&
      params.value.toString().length >= params.min,
  },
  {
    function: 'maxLength',
    message: 'This field must be at most {max} characters',
    params: {
      max: 0,
    },
    validator: (params) => params.value?.length <= params.max,
  },
  {
    function: 'min',
    message: 'This field must be greater than or equal to {min}',
    params: {
      min: 0,
    },
    validator: (params) => params.value >= params.min,
  },
  {
    function: 'max',
    message: 'This field must be less than or equal to {max}',
    params: {
      max: 0,
    },
    validator: (params) => params.value <= params.max,
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
] satisfies Validator[]

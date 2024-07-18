declare module "datacables/field" {
  interface DatacablesField extends MainSchema {
    name: string;
    label?: string;
    type: DatacablesFieldType;
    default?: string;
    attributes?: DatacablesFieldAttribute;
    render?: DatacablesFieldRender;
    choices?: (FieldDetail | string)[];
    validators?: FieldValidator[];
  }

  // TODO(AbhiShake1): pull keys from actual html elements once everything is compatible
  type DatacablesFieldType =
    "checkbox"
    | "text"
    | "email"
    | "password"
    | "number"
    | "select"
    | "radio"
    | "date"
    | "file"
    ;


  interface DatacablesFieldAttribute {
    is_required: boolean
    is_null: boolean
  }

  interface DatacablesFieldRender {
    input: FieldType;
    placeholder?: string;
  }

  interface DatacablesFieldDetail {
    label: string;
    value: string;
  }

  interface DatacablesFieldValidator {
    function: string;
    message: string;
    params: Record<string, any>;
  }
}

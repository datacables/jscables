type $Default = Record<string, any>;

declare module "datacables" {
  export interface MainSchema {
    meta: $Default;
    form: $Default;
    extras: $Default;
  }

  export type * from "datacables/field"
  export type * from "datacables/form"
  export type * from "datacables/rules"
  export type * from "datacables/layout"
}

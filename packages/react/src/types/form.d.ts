declare module "datacables/form" {
  import type { DatacablesField } from "datacables";

  interface Form extends MainSchema {
    fields: DatacablesField[];
  }
}

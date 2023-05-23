import { DefinitionWhereInput } from "./DefinitionWhereInput";
import { DefinitionOrderByInput } from "./DefinitionOrderByInput";

export type DefinitionFindManyArgs = {
  where?: DefinitionWhereInput;
  orderBy?: Array<DefinitionOrderByInput>;
  skip?: number;
  take?: number;
};

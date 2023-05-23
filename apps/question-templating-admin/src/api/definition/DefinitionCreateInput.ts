import { RatingCreateNestedManyWithoutDefinitionsInput } from "./RatingCreateNestedManyWithoutDefinitionsInput";

export type DefinitionCreateInput = {
  description: number;
  rate: number;
  ratings?: RatingCreateNestedManyWithoutDefinitionsInput;
};

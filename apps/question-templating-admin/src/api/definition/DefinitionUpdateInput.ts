import { RatingUpdateManyWithoutDefinitionsInput } from "./RatingUpdateManyWithoutDefinitionsInput";

export type DefinitionUpdateInput = {
  description?: number;
  rate?: number;
  ratings?: RatingUpdateManyWithoutDefinitionsInput;
};

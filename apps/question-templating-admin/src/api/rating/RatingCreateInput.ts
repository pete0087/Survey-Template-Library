import { DefinitionCreateNestedManyWithoutRatingsInput } from "./DefinitionCreateNestedManyWithoutRatingsInput";

export type RatingCreateInput = {
  definition?: DefinitionCreateNestedManyWithoutRatingsInput;
  description: string;
  rateFrom: number;
  rateTo: number;
};

import { DefinitionUpdateManyWithoutRatingsInput } from "./DefinitionUpdateManyWithoutRatingsInput";

export type RatingUpdateInput = {
  definition?: DefinitionUpdateManyWithoutRatingsInput;
  description?: string;
  rateFrom?: number;
  rateTo?: number;
};

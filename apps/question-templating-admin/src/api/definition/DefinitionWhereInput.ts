import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { RatingListRelationFilter } from "../rating/RatingListRelationFilter";

export type DefinitionWhereInput = {
  description?: IntFilter;
  id?: StringFilter;
  rate?: IntFilter;
  ratings?: RatingListRelationFilter;
};

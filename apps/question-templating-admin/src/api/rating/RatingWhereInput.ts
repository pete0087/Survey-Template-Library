import { DefinitionListRelationFilter } from "../definition/DefinitionListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";

export type RatingWhereInput = {
  definition?: DefinitionListRelationFilter;
  description?: StringFilter;
  id?: StringFilter;
  rateFrom?: IntFilter;
  rateTo?: IntFilter;
};

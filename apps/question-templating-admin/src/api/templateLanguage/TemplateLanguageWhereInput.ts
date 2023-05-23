import { StringFilter } from "../../util/StringFilter";
import { LanguageListRelationFilter } from "../language/LanguageListRelationFilter";
import { TemplateListRelationFilter } from "../template/TemplateListRelationFilter";

export type TemplateLanguageWhereInput = {
  id?: StringFilter;
  language?: LanguageListRelationFilter;
  template?: TemplateListRelationFilter;
};

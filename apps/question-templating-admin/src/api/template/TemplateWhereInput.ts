import { ContentListRelationFilter } from "../content/ContentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { TemplateLanguageListRelationFilter } from "../templateLanguage/TemplateLanguageListRelationFilter";

export type TemplateWhereInput = {
  content?: ContentListRelationFilter;
  description?: StringFilter;
  id?: StringFilter;
  templateLanguages?: TemplateLanguageListRelationFilter;
};

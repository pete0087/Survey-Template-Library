import { StringFilter } from "../../util/StringFilter";
import { ContentListRelationFilter } from "../content/ContentListRelationFilter";
import { TemplateLanguageListRelationFilter } from "../templateLanguage/TemplateLanguageListRelationFilter";

export type LanguageWhereInput = {
  code?: StringFilter;
  description?: StringFilter;
  id?: StringFilter;
  questionTemplateContents?: ContentListRelationFilter;
  templateLanguages?: TemplateLanguageListRelationFilter;
};

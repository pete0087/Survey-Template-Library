import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LanguageWhereUniqueInput } from "../language/LanguageWhereUniqueInput";
import { TemplateListRelationFilter } from "../template/TemplateListRelationFilter";

export type ContentWhereInput = {
  content?: StringNullableFilter;
  contentType?: "Audio" | "Text" | "Html";
  id?: StringFilter;
  language?: LanguageWhereUniqueInput;
  questionTemplates?: TemplateListRelationFilter;
  status?: "Active" | "Inactive" | "Locked" | "Deleted" | "Archived";
};

import { LanguageWhereUniqueInput } from "../language/LanguageWhereUniqueInput";
import { TemplateCreateNestedManyWithoutContentsInput } from "./TemplateCreateNestedManyWithoutContentsInput";

export type ContentCreateInput = {
  audioLink?: string | null;
  content?: string | null;
  contentType: "Audio" | "Text" | "Html";
  language: LanguageWhereUniqueInput;
  questionTemplates?: TemplateCreateNestedManyWithoutContentsInput;
  status: "Active" | "Inactive" | "Locked" | "Deleted" | "Archived";
};

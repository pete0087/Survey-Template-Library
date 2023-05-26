import { LanguageWhereUniqueInput } from "../language/LanguageWhereUniqueInput";
import { TemplateUpdateManyWithoutContentsInput } from "./TemplateUpdateManyWithoutContentsInput";

export type ContentUpdateInput = {
  audioLink?: string | null;
  content?: string | null;
  contentType?: "Audio" | "Text" | "Html";
  language?: LanguageWhereUniqueInput;
  questionTemplates?: TemplateUpdateManyWithoutContentsInput;
  status?: "Active" | "Inactive" | "Locked" | "Deleted" | "Archived";
};

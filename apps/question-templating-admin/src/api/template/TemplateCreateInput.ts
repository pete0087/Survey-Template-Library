import { ContentCreateNestedManyWithoutTemplatesInput } from "./ContentCreateNestedManyWithoutTemplatesInput";
import { TemplateLanguageCreateNestedManyWithoutTemplatesInput } from "./TemplateLanguageCreateNestedManyWithoutTemplatesInput";

export type TemplateCreateInput = {
  content?: ContentCreateNestedManyWithoutTemplatesInput;
  description: string;
  templateLanguages?: TemplateLanguageCreateNestedManyWithoutTemplatesInput;
};

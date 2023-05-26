import { LanguageCreateNestedManyWithoutTemplateLanguagesInput } from "./LanguageCreateNestedManyWithoutTemplateLanguagesInput";
import { TemplateCreateNestedManyWithoutTemplateLanguagesInput } from "./TemplateCreateNestedManyWithoutTemplateLanguagesInput";

export type TemplateLanguageCreateInput = {
  language?: LanguageCreateNestedManyWithoutTemplateLanguagesInput;
  template?: TemplateCreateNestedManyWithoutTemplateLanguagesInput;
};

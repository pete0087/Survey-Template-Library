import { ContentCreateNestedManyWithoutLanguagesInput } from "./ContentCreateNestedManyWithoutLanguagesInput";
import { TemplateLanguageCreateNestedManyWithoutLanguagesInput } from "./TemplateLanguageCreateNestedManyWithoutLanguagesInput";

export type LanguageCreateInput = {
  code: string;
  description: string;
  questionTemplateContents?: ContentCreateNestedManyWithoutLanguagesInput;
  templateLanguages?: TemplateLanguageCreateNestedManyWithoutLanguagesInput;
};

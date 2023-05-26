import { ContentUpdateManyWithoutLanguagesInput } from "./ContentUpdateManyWithoutLanguagesInput";
import { TemplateLanguageUpdateManyWithoutLanguagesInput } from "./TemplateLanguageUpdateManyWithoutLanguagesInput";

export type LanguageUpdateInput = {
  code?: string;
  description?: string;
  questionTemplateContents?: ContentUpdateManyWithoutLanguagesInput;
  templateLanguages?: TemplateLanguageUpdateManyWithoutLanguagesInput;
};

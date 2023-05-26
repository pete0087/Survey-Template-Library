import { LanguageUpdateManyWithoutTemplateLanguagesInput } from "./LanguageUpdateManyWithoutTemplateLanguagesInput";
import { TemplateUpdateManyWithoutTemplateLanguagesInput } from "./TemplateUpdateManyWithoutTemplateLanguagesInput";

export type TemplateLanguageUpdateInput = {
  language?: LanguageUpdateManyWithoutTemplateLanguagesInput;
  template?: TemplateUpdateManyWithoutTemplateLanguagesInput;
};

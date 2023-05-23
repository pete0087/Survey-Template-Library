import { ContentUpdateManyWithoutTemplatesInput } from "./ContentUpdateManyWithoutTemplatesInput";
import { TemplateLanguageUpdateManyWithoutTemplatesInput } from "./TemplateLanguageUpdateManyWithoutTemplatesInput";

export type TemplateUpdateInput = {
  content?: ContentUpdateManyWithoutTemplatesInput;
  description?: string;
  templateLanguages?: TemplateLanguageUpdateManyWithoutTemplatesInput;
};

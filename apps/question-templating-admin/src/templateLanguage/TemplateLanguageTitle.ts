import { TemplateLanguage as TTemplateLanguage } from "../api/templateLanguage/TemplateLanguage";

export const TEMPLATELANGUAGE_TITLE_FIELD = "id";

export const TemplateLanguageTitle = (record: TTemplateLanguage): string => {
  return record.id || String(record.id);
};

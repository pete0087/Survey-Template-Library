import { Language as TLanguage } from "../api/language/Language";

export const LANGUAGE_TITLE_FIELD = "code";

export const LanguageTitle = (record: TLanguage): string => {
  return record.code || String(record.id);
};

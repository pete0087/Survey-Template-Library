import { Language } from "../language/Language";
import { Template } from "../template/Template";

export type TemplateLanguage = {
  createdAt: Date;
  id: string;
  language?: Array<Language>;
  template?: Array<Template>;
  updatedAt: Date;
};

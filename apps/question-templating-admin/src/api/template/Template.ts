import { Content } from "../content/Content";
import { TemplateLanguage } from "../templateLanguage/TemplateLanguage";

export type Template = {
  content?: Array<Content>;
  createdAt: Date;
  description: string;
  id: string;
  templateLanguages?: Array<TemplateLanguage>;
  updatedAt: Date;
};

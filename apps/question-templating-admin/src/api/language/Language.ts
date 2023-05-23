import { Content } from "../content/Content";
import { TemplateLanguage } from "../templateLanguage/TemplateLanguage";

export type Language = {
  code: string;
  createdAt: Date;
  description: string;
  id: string;
  questionTemplateContents?: Array<Content>;
  templateLanguages?: Array<TemplateLanguage>;
  updatedAt: Date;
};

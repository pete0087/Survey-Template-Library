import { Template as TTemplate } from "../api/template/Template";

export const TEMPLATE_TITLE_FIELD = "description";

export const TemplateTitle = (record: TTemplate): string => {
  return record.description || String(record.id);
};

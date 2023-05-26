import { Definition as TDefinition } from "../api/definition/Definition";

export const DEFINITION_TITLE_FIELD = "id";

export const DefinitionTitle = (record: TDefinition): string => {
  return record.id || String(record.id);
};

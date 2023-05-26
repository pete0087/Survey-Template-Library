import { Content as TContent } from "../api/content/Content";

export const CONTENT_TITLE_FIELD = "audioLink";

export const ContentTitle = (record: TContent): string => {
  return record.audioLink || String(record.id);
};

import { SortOrder } from "../../util/SortOrder";

export type ContentOrderByInput = {
  audioLink?: SortOrder;
  content?: SortOrder;
  contentType?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  languageId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};

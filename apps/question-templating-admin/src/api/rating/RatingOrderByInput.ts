import { SortOrder } from "../../util/SortOrder";

export type RatingOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  rateFrom?: SortOrder;
  rateTo?: SortOrder;
  updatedAt?: SortOrder;
};

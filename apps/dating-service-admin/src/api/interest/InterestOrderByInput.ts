import { SortOrder } from "../../util/SortOrder";

export type InterestOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  category?: SortOrder;
  interestName?: SortOrder;
};

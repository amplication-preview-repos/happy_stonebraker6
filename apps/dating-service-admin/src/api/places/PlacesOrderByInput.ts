import { SortOrder } from "../../util/SortOrder";

export type PlacesOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  title?: SortOrder;
  createdBy?: SortOrder;
  image?: SortOrder;
};

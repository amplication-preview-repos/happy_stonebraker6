import { SortOrder } from "../../util/SortOrder";

export type UserMatchesOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  isMatch?: SortOrder;
  matchDate?: SortOrder;
  user1?: SortOrder;
  user2?: SortOrder;
};

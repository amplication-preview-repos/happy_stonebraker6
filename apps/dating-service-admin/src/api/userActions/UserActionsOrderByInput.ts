import { SortOrder } from "../../util/SortOrder";

export type UserActionsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  actionType?: SortOrder;
  timestamp?: SortOrder;
  userId?: SortOrder;
  fromUserId?: SortOrder;
  toUserId?: SortOrder;
};

import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserActionsCreateInput = {
  actionType?: "Option1" | null;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
  fromUserId?: string | null;
  toUserId?: string | null;
};

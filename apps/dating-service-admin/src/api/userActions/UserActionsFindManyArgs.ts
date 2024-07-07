import { UserActionsWhereInput } from "./UserActionsWhereInput";
import { UserActionsOrderByInput } from "./UserActionsOrderByInput";

export type UserActionsFindManyArgs = {
  where?: UserActionsWhereInput;
  orderBy?: Array<UserActionsOrderByInput>;
  skip?: number;
  take?: number;
};

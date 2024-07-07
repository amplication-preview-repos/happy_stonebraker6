import { UserBubblesWhereInput } from "./UserBubblesWhereInput";
import { UserBubblesOrderByInput } from "./UserBubblesOrderByInput";

export type UserBubblesFindManyArgs = {
  where?: UserBubblesWhereInput;
  orderBy?: Array<UserBubblesOrderByInput>;
  skip?: number;
  take?: number;
};

import { UserMatchesWhereInput } from "./UserMatchesWhereInput";
import { UserMatchesOrderByInput } from "./UserMatchesOrderByInput";

export type UserMatchesFindManyArgs = {
  where?: UserMatchesWhereInput;
  orderBy?: Array<UserMatchesOrderByInput>;
  skip?: number;
  take?: number;
};

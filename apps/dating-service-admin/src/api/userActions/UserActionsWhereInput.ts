import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserActionsWhereInput = {
  id?: StringFilter;
  actionType?: "Option1";
  timestamp?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
  fromUserId?: StringNullableFilter;
  toUserId?: StringNullableFilter;
};

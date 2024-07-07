import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserMatchesWhereInput = {
  id?: StringFilter;
  isMatch?: BooleanNullableFilter;
  matchDate?: DateTimeNullableFilter;
  user1?: StringNullableFilter;
  user2?: StringNullableFilter;
};

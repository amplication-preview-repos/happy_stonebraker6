import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type InterestWhereInput = {
  id?: StringFilter;
  category?: StringNullableFilter;
  interestName?: StringNullableFilter;
};

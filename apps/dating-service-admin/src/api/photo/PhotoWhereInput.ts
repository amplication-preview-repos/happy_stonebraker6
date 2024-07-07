import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PhotoWhereInput = {
  id?: StringFilter;
  imageName?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};

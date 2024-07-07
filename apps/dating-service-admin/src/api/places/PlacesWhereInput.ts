import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type PlacesWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  title?: StringNullableFilter;
  createdBy?: StringNullableFilter;
  image?: StringNullableFilter;
  user?: UserListRelationFilter;
};

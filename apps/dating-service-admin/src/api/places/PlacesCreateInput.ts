import { UserCreateNestedManyWithoutPlacesItemsInput } from "./UserCreateNestedManyWithoutPlacesItemsInput";

export type PlacesCreateInput = {
  description?: string | null;
  title?: string | null;
  createdBy?: string | null;
  image?: string | null;
  user?: UserCreateNestedManyWithoutPlacesItemsInput;
};

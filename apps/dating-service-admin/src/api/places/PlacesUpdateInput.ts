import { UserUpdateManyWithoutPlacesItemsInput } from "./UserUpdateManyWithoutPlacesItemsInput";

export type PlacesUpdateInput = {
  description?: string | null;
  title?: string | null;
  createdBy?: string | null;
  image?: string | null;
  user?: UserUpdateManyWithoutPlacesItemsInput;
};

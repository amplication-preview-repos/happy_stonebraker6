import { PlacesWhereInput } from "./PlacesWhereInput";
import { PlacesOrderByInput } from "./PlacesOrderByInput";

export type PlacesFindManyArgs = {
  where?: PlacesWhereInput;
  orderBy?: Array<PlacesOrderByInput>;
  skip?: number;
  take?: number;
};

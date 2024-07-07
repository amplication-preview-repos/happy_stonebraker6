import { Places as TPlaces } from "../api/places/Places";

export const PLACES_TITLE_FIELD = "title";

export const PlacesTitle = (record: TPlaces): string => {
  return record.title?.toString() || String(record.id);
};

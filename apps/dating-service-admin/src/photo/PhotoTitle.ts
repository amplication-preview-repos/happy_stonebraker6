import { Photo as TPhoto } from "../api/photo/Photo";

export const PHOTO_TITLE_FIELD = "imageName";

export const PhotoTitle = (record: TPhoto): string => {
  return record.imageName?.toString() || String(record.id);
};

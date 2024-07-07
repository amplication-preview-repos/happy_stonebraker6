import { UserBubbles as TUserBubbles } from "../api/userBubbles/UserBubbles";

export const USERBUBBLES_TITLE_FIELD = "id";

export const UserBubblesTitle = (record: TUserBubbles): string => {
  return record.id?.toString() || String(record.id);
};

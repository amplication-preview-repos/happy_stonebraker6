import { UserMatches as TUserMatches } from "../api/userMatches/UserMatches";

export const USERMATCHES_TITLE_FIELD = "user1";

export const UserMatchesTitle = (record: TUserMatches): string => {
  return record.user1?.toString() || String(record.id);
};

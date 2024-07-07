import { UserActions as TUserActions } from "../api/userActions/UserActions";

export const USERACTIONS_TITLE_FIELD = "fromUserId";

export const UserActionsTitle = (record: TUserActions): string => {
  return record.fromUserId?.toString() || String(record.id);
};

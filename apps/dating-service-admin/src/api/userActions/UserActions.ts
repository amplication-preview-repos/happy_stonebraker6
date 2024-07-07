import { User } from "../user/User";

export type UserActions = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  actionType?: "Option1" | null;
  timestamp: Date | null;
  user?: User | null;
  fromUserId: string | null;
  toUserId: string | null;
};

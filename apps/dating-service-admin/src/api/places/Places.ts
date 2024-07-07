import { User } from "../user/User";

export type Places = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  title: string | null;
  createdBy: string | null;
  image: string | null;
  user?: Array<User>;
};

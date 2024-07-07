import { User } from "../user/User";

export type Photo = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  imageName: string | null;
  user?: User | null;
};

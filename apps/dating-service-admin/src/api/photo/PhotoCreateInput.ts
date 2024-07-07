import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PhotoCreateInput = {
  imageName?: string | null;
  user?: UserWhereUniqueInput | null;
};

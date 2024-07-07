import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PhotoUpdateInput = {
  imageName?: string | null;
  user?: UserWhereUniqueInput | null;
};

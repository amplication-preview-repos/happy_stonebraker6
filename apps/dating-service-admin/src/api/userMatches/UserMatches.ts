export type UserMatches = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  isMatch: boolean | null;
  matchDate: Date | null;
  user1: string | null;
  user2: string | null;
};

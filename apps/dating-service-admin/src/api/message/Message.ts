export type Message = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  sender: string | null;
  receiver: string | null;
};

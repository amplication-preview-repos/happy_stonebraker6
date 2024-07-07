import { Interest as TInterest } from "../api/interest/Interest";

export const INTEREST_TITLE_FIELD = "interestName";

export const InterestTitle = (record: TInterest): string => {
  return record.interestName?.toString() || String(record.id);
};

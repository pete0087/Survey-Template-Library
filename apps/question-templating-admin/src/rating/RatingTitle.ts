import { Rating as TRating } from "../api/rating/Rating";

export const RATING_TITLE_FIELD = "description";

export const RatingTitle = (record: TRating): string => {
  return record.description || String(record.id);
};

import { Rating } from "../rating/Rating";

export type Definition = {
  createdAt: Date;
  description: number;
  id: string;
  rate: number;
  ratings?: Array<Rating>;
  updatedAt: Date;
};

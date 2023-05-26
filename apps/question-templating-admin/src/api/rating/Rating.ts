import { Definition } from "../definition/Definition";

export type Rating = {
  createdAt: Date;
  definition?: Array<Definition>;
  description: string;
  id: string;
  rateFrom: number;
  rateTo: number;
  updatedAt: Date;
};

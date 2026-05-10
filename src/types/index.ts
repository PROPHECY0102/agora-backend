import { Shape } from "../db/schema";

export type InsertStatus = {
  message: string;
  hasInserted: boolean;
  shapes: Shape[];
};

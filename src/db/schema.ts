import { InferSelectModel } from "drizzle-orm";
import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const shapeTable = pgTable("shape", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  color: varchar({ length: 255 }).default("blue"),
});

export type Shape = InferSelectModel<typeof shapeTable>;

import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { eq } from "drizzle-orm";
import { Shape, shapeTable } from "../db/schema";
import { InsertStatus } from "../types";

const db = drizzle(process.env.DATABASE_URL!);

const ShapeModel = {
  async fetchAllShape() {
    const shapes = await db.select().from(shapeTable);
    return shapes;
  },

  async insertRandomShape() {
    const shapeNames = [
      "Square",
      "Circle",
      "Rhombus",
      "Triangle",
      "Rectangle",
      "Diamond",
      "Star",
      "Cube",
      "Pyramid",
      "Sphere",
      "Cone",
      "Dome",
    ];
    const shapeColors = [
      "Red",
      "Blue",
      "Green",
      "Yellow",
      "Purple",
      "Pink",
      "Magenta",
      "Cyan",
      "Orange",
      "Black",
      "White",
    ];
    const randomShape: typeof shapeTable.$inferInsert = {
      name: shapeNames[Math.floor(Math.random() * shapeNames.length)],
      color: shapeColors[Math.floor(Math.random() * shapeColors.length)],
    };

    const insertStatus: InsertStatus = {
      message: "Successfully Inserted Shape!",
      hasInserted: true,
      shapes: [],
    };

    try {
      const insertedShapes = await db
        .insert(shapeTable)
        .values(randomShape)
        .returning();
      insertStatus.shapes = insertedShapes;
    } catch (error) {
      if (error instanceof Error) {
        insertStatus.message = `Insertion failed: ${error.message}`;
      } else {
        insertStatus.message = `Insertion failed for Shape: ${randomShape.name}, ${randomShape.color}`;
      }
      insertStatus.hasInserted = false;
    }

    return insertStatus;
  },

  async createShape(props: typeof shapeTable.$inferInsert) {
    const insertStatus: InsertStatus = {
      message: "Successfully Inserted Shape!",
      hasInserted: true,
      shapes: [],
    };

    try {
      const insertedShapes = await db
        .insert(shapeTable)
        .values(props)
        .returning();
      insertStatus.shapes = insertedShapes;
    } catch (error) {
      if (error instanceof Error) {
        insertStatus.message = `This Shape is Unable to be Created. Error: ${error.message}`;
      } else {
        insertStatus.message = `This Shape is Unable to be Created. Shape: ${props.name}, ${props.color}`;
      }
      insertStatus.hasInserted = false;
    }

    return insertStatus;
  },
};

export default ShapeModel;

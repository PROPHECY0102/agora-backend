import type { Request, Response } from "express";
import ShapeModel from "../models/ShapeModel";

const Shapes = {
  async getShapes(req: Request, res: Response) {
    const shapes = await ShapeModel.fetchAllShape();
    res.json({ shapes: shapes, totalQuery: shapes.length });
  },

  async insertRandomShape(req: Request, res: Response) {
    const insertStatus = await ShapeModel.insertRandomShape();
    res.json(insertStatus);
  },
};

export default Shapes;

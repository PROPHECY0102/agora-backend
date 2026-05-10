import type { Request, Response } from "express";
import ShapeModel from "../models/ShapeModel";
import { shapeTable } from "../db/schema";

const Shapes = {
  async getShapes(req: Request, res: Response) {
    const shapes = await ShapeModel.fetchAllShape();
    res.json({ shapes: shapes, totalQuery: shapes.length });
  },

  async insertRandomShape(req: Request, res: Response) {
    const insertStatus = await ShapeModel.insertRandomShape();
    res.json(insertStatus);
  },

  async createNewShape(req: Request, res: Response) {
    const props = req.body.props;

    ShapeModel.createShape(props);
  },
};

export default Shapes;

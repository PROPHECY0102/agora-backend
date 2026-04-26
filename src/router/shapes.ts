import { Router } from "express";
import Shapes from "../controllers/Shapes";
const router = Router();

router.get("/", Shapes.getShapes);
router.get("/insertRandom", Shapes.insertRandomShape);

export default router;

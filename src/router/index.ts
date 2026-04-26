import { Router } from "express";
import type { Request, Response } from "express";

import postsRoutes from "./posts";
import shapesRoutes from "./shapes";

const router = Router();
router.use("/posts", postsRoutes);
router.use("/shapes", shapesRoutes);

router.get("/", (req: Request, res: Response) => {
  res.json({ message: "Project Agora API" });
});

export default router;

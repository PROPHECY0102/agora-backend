import { Router } from "express";
import type { Request, Response } from "express";
const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json({
    posts: [
      { id: 1, content: "example" },
      { id: 2, content: "another example" },
    ],
  });
});

router.get("/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  if (!Array.isArray(id)) {
    res.json({ post: { id: id, content: `content from post ID of ${id}` } });
  } else {
    const firstID = id[0];
    res.json({
      post: { id: firstID, content: `content from post ID of ${firstID}` },
    });
  }
});

export default router;

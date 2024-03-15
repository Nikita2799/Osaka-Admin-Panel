import { Request, Response, NextFunction } from "express";
import { BlogWorker } from "../../Database/Workers/BlogWorker";

const blogWorker = new BlogWorker();

export const update = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const update_date = req.body;
    const blog = await blogWorker.update(update_date);
    res.status(201).json(blog);
  } catch (err) {
    next(err);
  }
};

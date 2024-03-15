import { Request, Response, NextFunction } from "express";
import { BrandWorker } from "../../Database/Workers/BrandWorker";
import { BlogWorker } from "../../Database/Workers/BlogWorker";

const blogWorker = new BlogWorker();

export const get_all = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const blog_list = await blogWorker.get_all();
    res.status(200).json(blog_list);
  } catch (err) {
    next(err);
  }
};

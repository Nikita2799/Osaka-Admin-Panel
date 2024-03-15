import { Request, Response, NextFunction } from "express";
import { BlogWorker } from "../../Database/Workers/BlogWorker";

const blogWorker = new BlogWorker();

export const update = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { images }: any = req.files;

    const update_date = req.body;
    if (images.length < 1) {
      update_date.images = images.map((e: any) => e.filename);
    }
    const blog = await blogWorker.update(update_date);
    res.status(200).json(blog);
  } catch (err) {
    next(err);
  }
};

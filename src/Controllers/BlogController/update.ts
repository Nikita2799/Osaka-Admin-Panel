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

    const update_data = req.body;
    if (images.length < 1) {
      update_data.images = images.map((e: any) => e.filename);
    } else {
      delete update_data.images;
    }
    const blog = await blogWorker.update(update_data);
    res.status(200).json(blog);
  } catch (err) {
    next(err);
  }
};

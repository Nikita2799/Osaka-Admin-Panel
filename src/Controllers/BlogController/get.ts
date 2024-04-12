import { Request, Response, NextFunction } from "express";
import { BrandWorker } from "../../Database/Workers/BrandWorker";
import { BlogWorker } from "../../Database/Workers/BlogWorker";

const blogWorker = new BlogWorker();

export const get = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.query;
    const blog = await blogWorker.get_one({ id: +id! });
    console.log(blog);

    res.status(201).json(blog);
  } catch (err) {
    next(err);
  }
};

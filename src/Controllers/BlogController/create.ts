import { Request, Response, NextFunction } from "express";
import { BlogWorker } from "../../Database/Workers/BlogWorker";
import { BlogAttributes, BlogResponse } from "../../Types/blog";

const blogHandler = new BlogWorker();

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(req.files);

    const { images }: any = req.files;
    const data = <BlogResponse>req.body;

    data.images = images.map((e: any) => e.filename);
    const data_create = create_data(data);
    console.log(data_create);

    await blogHandler.create(data_create);

    res.status(201).json("ok");
  } catch (err) {
    next(err);
  }
};

const create_data = (params: BlogResponse): BlogAttributes => {
  const data: any = {};
  for (let key in params) {
    if (key === "lang") continue;
    data[key] = params[key];
  }
  return data;
};

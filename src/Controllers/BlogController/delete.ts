import { Request, Response, NextFunction } from "express";
import { BlogWorker } from "../../Database/Workers/BlogWorker";

const blogHandler = new BlogWorker();

export const delete_brand = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    await blogHandler.delete(id);

    res.status(200).json("ok");
  } catch (err) {
    next(err);
  }
};

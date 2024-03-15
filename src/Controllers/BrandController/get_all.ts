import { Request, Response, NextFunction } from "express";
import { BrandWorker } from "../../Database/Workers/BrandWorker";

const brandWorker = new BrandWorker();

export const get_all = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const brand_list = await brandWorker.get_all();
    res.status(200).json(brand_list);
  } catch (err) {
    next(err);
  }
};

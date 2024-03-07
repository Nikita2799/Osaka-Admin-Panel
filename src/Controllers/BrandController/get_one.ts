import { Request, Response, NextFunction } from "express";
import { BrandWorker } from "../../Database/Workers/BrandWorker";
import { BrandAttributes } from "../../Types/brand";

const brandWorker = new BrandWorker();

export const get_one = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const search_parmas = <BrandAttributes>req.body;
    const brand_list = await brandWorker.get_one(search_parmas);
    res.status(201).json(brand_list);
  } catch (err) {
    next(err);
  }
};

import { Request, Response, NextFunction } from "express";
import { BrandWorker } from "../../Database/Workers/BrandWorker";

const brandWorker = new BrandWorker();

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { brand } = req.body;
    const result = await brandWorker.create_or_get({ brand });
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

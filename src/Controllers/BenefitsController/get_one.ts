import { Request, Response, NextFunction } from "express";
import { BenefitWorker } from "../../Database/Workers/BenefitWorker";

const benefitWorker = new BenefitWorker();

export const get_one = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const param = req.query;

    const benefit = await benefitWorker.get_one(param);

    res.status(200).json(benefit);
  } catch (err) {
    next(err);
  }
};

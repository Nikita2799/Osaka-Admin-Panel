import { Request, Response, NextFunction } from "express";
import { BenefitWorker } from "../../Database/Workers/BenefitWorker";

const benefitWorker = new BenefitWorker();

export const get_all = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const param = req.query;

    const benefits = await benefitWorker.get_all(param);

    res.status(200).json(benefits);
  } catch (err) {
    next(err);
  }
};

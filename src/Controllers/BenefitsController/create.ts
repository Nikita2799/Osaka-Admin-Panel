import { Request, Response, NextFunction } from "express";
import { BenefitWorker } from "../../Database/Workers/BenefitWorker";

const benefitWorker = new BenefitWorker();

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const benefit_params = req.body;

    await benefitWorker.create(benefit_params);

    res.status(200).json("Ok");
  } catch (err) {
    next(err);
  }
};

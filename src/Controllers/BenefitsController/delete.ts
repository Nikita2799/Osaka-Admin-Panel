import { Request, Response, NextFunction } from "express";
import { BenefitWorker } from "../../Database/Workers/BenefitWorker";

const benefitWorker = new BenefitWorker();

export const delete_benefits = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    await benefitWorker.delete(id);
    res.status(200).json("OK");
  } catch (err) {
    next(err);
  }
};

import { Request, Response, NextFunction } from "express";
import { BenefitWorker } from "../../Database/Workers/BenefitWorker";

const benefitWorker = new BenefitWorker();

export const update = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { images }: any = req.files;
    console.log(images);

    const { index } = req.body;

    let benefit: any = await benefitWorker.get_all({});

    benefit[0].images[index] = images[0].filename;

    const benefits = await benefitWorker.update(1, benefit[0]);

    res.status(200).json(benefits);
  } catch (err) {
    next(err);
  }
};

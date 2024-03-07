import { Request, Response, NextFunction } from "express";
import { CarWorker } from "../../Database/Workers/CarWorker";
import { CarAttributes } from "../../Types/car";

const carWorker = new CarWorker();

export const get_all = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const car_parmas = <CarAttributes>req.body;
    const car_list = await carWorker.get_all(car_parmas);
    res.status(200).json(car_list);
  } catch (err) {
    next(err);
  }
};

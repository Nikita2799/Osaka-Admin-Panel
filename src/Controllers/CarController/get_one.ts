import { Request, Response, NextFunction } from "express";
import { CarWorker } from "../../Database/Workers/CarWorker";
import { CarAttributes } from "../../Types/car";

const carWorker = new CarWorker();

export const get_one = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const car_parmas = <CarAttributes>req.body;
    const car = await carWorker.get_all(car_parmas);

    car
      ? res.status(200).json(car)
      : res.status(404).json({ message: "Wrong Params" });
  } catch (err) {
    console.log("🚀 ~ err:", err);
    next(err);
  }
};

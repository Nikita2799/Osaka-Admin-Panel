import { Request, Response, NextFunction } from "express";
import { CarWorker } from "../../Database/Workers/CarWorker";

const carWorker = new CarWorker();

export const delete_car = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    await carWorker.delete(+id);
  } catch (err) {
    next(err);
  }
};

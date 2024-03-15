import { Request, Response, NextFunction } from "express";
import { CarWorker } from "../../Database/Workers/CarWorker";
import { CarAttributes } from "../../Types/car";

const carWorker = new CarWorker();

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { images }: any = req.files;
    const imagesBase64 = images.map((image: any) => {
      return image.buffer.toString("base64");
    });

    const car = <CarAttributes>req.body;
    car.images = imagesBase64;
    const result = await carWorker.create(car);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

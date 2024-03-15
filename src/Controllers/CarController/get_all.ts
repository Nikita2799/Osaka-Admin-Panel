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
    const car_parmas = req.query;
    const sort_type = car_parmas["sorted_by"];
    const clear_params = filter_params(car_parmas);
    console.log(clear_params);
    const car_list = await carWorker.get_all(clear_params!);
    res.status(200).json(car_list);
  } catch (err) {
    next(err);
  }
};

const filter_params = (car_params: any) => {
  delete car_params["all"];
  delete car_params["sorted_by"];

  for (let key in car_params) {
    console.log(key);

    if (car_params[key] === null || car_params[key] === "") {
      console.log(car_params[key]);

      delete car_params[key];
      continue;
    }
  }
  return car_params;
};

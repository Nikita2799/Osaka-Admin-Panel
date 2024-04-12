import { Request, Response, NextFunction } from "express";
import { ImportWorker } from "../../Database/Workers/ImportWorker";

const importWorker = new ImportWorker();

export const update = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const params = req.body;

    await importWorker.update(params);

    res.status(200).json("ok");
  } catch (err) {
    next(err);
  }
};

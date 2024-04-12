import { Request, Response, NextFunction } from "express";
import { ImportWorker } from "../../Database/Workers/ImportWorker";

const importWorker = new ImportWorker();

export const get = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const param = req.query;

    const import_regal = await importWorker.get(param);

    res.status(200).json(import_regal);
  } catch (err) {
    next(err);
  }
};

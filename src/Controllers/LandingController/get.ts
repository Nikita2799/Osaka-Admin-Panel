import { Request, Response, NextFunction } from "express";
import fs from "fs";

export const get = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const file = fs.readFileSync("../../../page.json");
    res.status(200).json(file.toJSON());
  } catch (err) {
    next(err);
  }
};

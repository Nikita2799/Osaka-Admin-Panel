import { Request, Response, NextFunction } from "express";
import fs from "fs";

export const update = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;
    const json_data = JSON.stringify(data);
    fs.writeFileSync("../../../page.json", data);
    res.status(200).json(json_data);
  } catch (err) {
    next(err);
  }
};

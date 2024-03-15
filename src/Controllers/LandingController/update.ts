import { Request, Response, NextFunction } from "express";
import fs from "fs";
import path from "path";

export const update = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;

    const json_data = JSON.stringify(data, null, 2);

    // console.log(typeof json_data);
    const buffer_file = new Buffer(json_data);
    const file_path = path.join(__dirname, "..", "..", "..", "page.json");
    fs.writeFileSync(file_path, buffer_file);
    res.status(200).json("");
  } catch (err) {
    next(err);
  }
};

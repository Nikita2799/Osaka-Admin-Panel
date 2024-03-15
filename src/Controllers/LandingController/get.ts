import { Request, Response, NextFunction } from "express";
import fs from "fs";
import path from "path";
import { BlogWorker } from "../../Database/Workers/BlogWorker";

const blogWorker = new BlogWorker();

export const get = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const file_path = path.join(__dirname, "..", "..", "..", "page.json");
    const file: any = fs.readFileSync(file_path, "utf-8");
    const data = JSON.parse(file);
    const blogs = await blogWorker.get_all();

    data["en"]["updates_blog"] = blogs.map((e) => {
      return { id: e.id, title: e.title_en, img: e.images };
    });
    data["ja"]["updates_blog"] = blogs.map((e) => {
      return { id: e.id, title: e.title_ja, img: e.images };
    });

    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

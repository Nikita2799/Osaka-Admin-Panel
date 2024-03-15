import { Request, Response, NextFunction } from "express";
import fs from "fs";
import path from "path";
import { BlogWorker } from "../../Database/Workers/BlogWorker";
import { BrandWorker } from "../../Database/Workers/BrandWorker";

const blogWorker = new BlogWorker();
const brandWorker = new BrandWorker();

export const main_get = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { lang }: any = req.query;
    const file_path = path.join(__dirname, "..", "..", "..", "page.json");
    const file: any = fs.readFileSync(file_path, "utf-8");
    const data = JSON.parse(file);

    const blogs = await blogWorker.get_all();
    const brands = await brandWorker.get_all();
    const selected_blogs = data["selected_blogs"];
    const selected_brands = data["car_brands"]["selected_brands"];

    data[lang]["updates_blog"] = blogs.map((e) => {
      return selected_blogs.find((blog: any) => {
        if (!blog) return false;
        return e.id === blog.id ? true : false;
      });
    });

    data[lang]["brand_block"]["brands"] = brands.map((e) => {
      return selected_brands.find((brand: any) => {
        if (!brand) return false;
        return e.id === brand.id ? true : false;
      });
    });

    res.status(200).json(data[lang]);
  } catch (err) {
    next(err);
  }
};

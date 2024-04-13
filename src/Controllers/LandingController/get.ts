import { Request, Response, NextFunction } from "express";
import fs from "fs";
import path from "path";
import { BlogWorker } from "../../Database/Workers/BlogWorker";
import { BenefitWorker } from "../../Database/Workers/BenefitWorker";

const blogWorker = new BlogWorker();
const benefit = new BenefitWorker();

export const get = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const file_path = path.join(__dirname, "..", "..", "..", "page.json");
    const file: any = fs.readFileSync(file_path, "utf-8");
    const data = JSON.parse(file);

    const benefit_image: any = await benefit.get_all({});
    const blogs = await blogWorker.get_all();

    data["en"]["updates_blog"]["blogs"] = blogs.map((e) => {
      return e;
    });
    data["ja"]["updates_blog"]["blogs"] = blogs.map((e) => {
      return e;
    });

    data["ja"]["privilegeBlock"]["blocks"] = data["ja"]["privilegeBlock"][
      "blocks"
    ].map((e: any, i: any) => {
      return {
        ...e,
        img_url: benefit_image[0].images[i],
      };
    });

    data["en"]["privilegeBlock"]["blocks"] = data["en"]["privilegeBlock"][
      "blocks"
    ].map((e: any, i: any) => {
      return {
        ...e,
        img_url: benefit_image[0].images[i],
      };
    });

    res.status(200).json(data);
  } catch (err) {
    console.log(err);

    next(err);
  }
};

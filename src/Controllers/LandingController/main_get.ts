import { Request, Response, NextFunction } from "express";
import fs from "fs";
import path from "path";
import { BlogWorker } from "../../Database/Workers/BlogWorker";
import { BrandWorker } from "../../Database/Workers/BrandWorker";
import { BenefitWorker } from "../../Database/Workers/BenefitWorker";

const blogWorker = new BlogWorker();
const brandWorker = new BrandWorker();
const benefit = new BenefitWorker();

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
    const benefit_image: any = await benefit.get_all({});

    data["en"]["updates_blog"] = blogs.map((e) => {
      return selected_blogs.find((blog: any) => {
        if (!blog) return false;
        return e.id === blog.id ? true : false;
      });
    });
    console.log(data["en"]["updates_blog"]);

    // data["en"]["brand_block"]["brands"] = brands.map((e) => {
    //   return selected_brands.find((brand: any) => {
    //     if (!brand) return false;
    //     return e.id === brand.id ? true : false;
    //   });
    // });
    console.log(data["ja"]["updates_blog"]);

    data["ja"]["updates_blog"] = blogs.map((e) => {
      return selected_blogs.find((blog: any) => {
        if (!blog) return false;
        return e.id === blog.id ? true : false;
      });
    });

    data["ja"]["privilegeBlock"] = data["ja"]["privilegeBlock"].map(
      (e: any, i: any) => {
        return {
          ...e,
          img_url: benefit_image[0].images[i],
        };
      }
    );
    data["en"]["privilegeBlock"] = data["en"]["privilegeBlock"].map(
      (e: any, i: any) => {
        return {
          ...e,
          img_url: benefit_image[0].images[i],
        };
      }
    );
    // data["ja"]["brand_block"]["brands"] = brands.map((e) => {
    //   return selected_brands.find((brand: any) => {
    //     if (!brand) return false;
    //     return e.id === brand.id ? true : false;
    //   });
    // });

    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

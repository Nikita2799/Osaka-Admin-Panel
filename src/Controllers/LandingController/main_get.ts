import { Request, Response, NextFunction } from "express";
import fs from "fs";
import path from "path";
import { BlogWorker } from "../../Database/Workers/BlogWorker";
import { BrandWorker } from "../../Database/Workers/BrandWorker";
import { BenefitWorker } from "../../Database/Workers/BenefitWorker";
import { CurrencyWorker } from "../../Database/Workers/CurrencyWorker";

const blogWorker = new BlogWorker();
const brandWorker = new BrandWorker();
const benefit = new BenefitWorker();
const currencyWorker = new CurrencyWorker();

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
    const currency: any = await currencyWorker.get({});

    data["currency"] = currency.jpy;

    data["en"]["updates_blog"]["blogs"] = selected_blogs.map((e: any) => {
      return blogs.find((blog: any) => {
        if (!e) return false;

        return blog.id === e ? true : false;
      });
    });
    // data["en"]["brand_block"]["brands"] = brands.map((e) => {
    //   return selected_brands.find((brand: any) => {
    //     if (!brand) return false;
    //     return e.id === brand.id ? true : false;
    //   });
    // });

    data["ja"]["updates_blog"]["blogs"] = selected_blogs.map((e: any) => {
      return blogs.find((blog: any) => {
        if (!e) return false;

        return blog.id === e ? true : false;
      });
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

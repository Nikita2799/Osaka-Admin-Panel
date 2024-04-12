import { Request, Response, NextFunction } from "express";
import { BlogWorker } from "../../Database/Workers/BlogWorker";
import { BlogAttributes, BlogResponse } from "../../Types/blog";

const blogHandler = new BlogWorker();

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(req.files);

    // const { images }: any = req.files;
    let data = req.body;
    let main_picture: string | undefined;
    let first_pic: string | undefined;
    let second_pic: string | undefined;
    let third_pic: string | undefined;
    let blog_pic: string | undefined;

    let images = {};
    // Проверка наличия ключей в объекте req.files
    if ("main_picture" in req.files!) {
      main_picture = req.files["main_picture"][0].filename;
      images = {
        ...images,
        main_picture,
      };
    }
    if ("first_pic" in req.files!) {
      first_pic = req.files["first_pic"][0].filename;
      images = {
        ...images,
        first_pic,
      };
    }
    if ("second_pic" in req.files!) {
      second_pic = req.files["second_pic"][0].filename;
      images = {
        ...images,
        second_pic,
      };
    }
    if ("third_pic" in req.files!) {
      third_pic = req.files["third_pic"][0].filename;
      images = {
        ...images,
        third_pic,
      };
    }
    if ("images" in req.files!) {
      blog_pic = req.files["images"][0].filename;
      images = {
        ...images,
        blog_pic,
      };
    }

    data.article_img = images;
    for (let key in data) {
      if ("article_img" === key) continue;
      data[key] = JSON.parse(data[key]);
    }

    const data_create = create_data(data);

    await blogHandler.create(data_create);

    res.status(201).json("ok");
  } catch (err) {
    next(err);
  }
};

const create_data = (params: BlogResponse): BlogAttributes => {
  const data: any = {};
  for (let key in params) {
    if (key === "lang") continue;
    data[key] = params[key];
  }
  return data;
};

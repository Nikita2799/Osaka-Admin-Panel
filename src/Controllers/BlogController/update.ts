import { Request, Response, NextFunction } from "express";
import { BlogWorker } from "../../Database/Workers/BlogWorker";

const blogWorker = new BlogWorker();

export const update = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(req.files);

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

    const update_data: any = req.body;

    for (let key in update_data) {
      if ("article_img" === key) continue;
      update_data[key] = JSON.parse(update_data[key]);
    }

    const blog_one: any = await blogWorker.get_one({ id: update_data.id });
    update_data.article_img = {
      ...blog_one.article_img,
      ...images,
    };

    const blog = await blogWorker.update(update_data);
    res.status(200).json(blog);
  } catch (err) {
    next(err);
  }
};

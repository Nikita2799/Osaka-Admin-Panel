import { Router } from "express";
import AuthenticationMiddelware from "../../Middelwares/auth.middelware";
import { MulterService } from "../../Services/MulterService";
import { create } from "../../Controllers/BlogController/create";
import { get_all } from "../../Controllers/BlogController/get_all";
import { delete_brand } from "../../Controllers/BlogController/delete";
import { get } from "../../Controllers/BlogController/get";
import { update } from "../../Controllers/BlogController/update";

class BlogRouter {
  private router: Router;
  private multer;
  private upload;

  constructor() {
    this.multer = new MulterService();
    this.upload = this.multer.get_upload();
    this.router = Router();
    this.setupRoutes();
  }

  private setupRoutes() {
    this.router.post(
      "/blog",
      AuthenticationMiddelware.isLogin,
      this.upload.fields([{ name: "images" }]),
      create
    );
    this.router.get("/blog", AuthenticationMiddelware.isLogin, get_all);
    this.router.patch(
      "/blog",
      AuthenticationMiddelware.isLogin,
      this.upload.fields([{ name: "images" }]),
      update
    );
    this.router.get("/blog_one", AuthenticationMiddelware.isLogin, get);
    this.router.delete(
      "/blog/:id",
      AuthenticationMiddelware.isLogin,
      delete_brand
    );
  }

  getRouter() {
    return this.router;
  }
}

export default BlogRouter;

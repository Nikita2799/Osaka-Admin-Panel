import { Router } from "express";
import { create } from "../../Controllers/CarController/create";
import { get_all } from "../../Controllers/CarController/get_all";
import { get_one } from "../../Controllers/CarController/get_one";
import AuthenticationMiddelware from "../../Middelwares/auth.middelware";
import { MulterService } from "../../Services/MulterService";
import { delete_car } from "../../Controllers/CarController/delete";

class CarRouter {
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
      "/car",
      AuthenticationMiddelware.isLogin,
      this.upload.fields([{ name: "images" }]),
      create
    );
    this.router.get("/car", AuthenticationMiddelware.isLogin, get_all);
    this.router.get("/car_one", AuthenticationMiddelware.isLogin, get_one);
    this.router.delete(
      "/car/:id",
      AuthenticationMiddelware.isLogin,
      delete_car
    );
  }

  getRouter() {
    return this.router;
  }
}

export default CarRouter;

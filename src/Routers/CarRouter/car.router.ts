import { Router } from "express";
import { create } from "../../Controllers/CarController/create";
import { get_all } from "../../Controllers/CarController/get_all";
import { get_one } from "../../Controllers/CarController/get_one";
import AuthenticationMiddelware from "../../Middelwares/auth.middelware";

class CarRouter {
  private router: Router;

  constructor() {
    this.router = Router();
    this.setupRoutes();
  }

  private setupRoutes() {
    this.router.post("/car", AuthenticationMiddelware.isLogin, create);
    this.router.get("/car", AuthenticationMiddelware.isLogin, get_all);
    this.router.get("/car_one", AuthenticationMiddelware.isLogin, get_one);
    this.router.delete("/car/:id", AuthenticationMiddelware.isLogin, get_one);
  }

  getRouter() {
    return this.router;
  }
}

export default CarRouter;

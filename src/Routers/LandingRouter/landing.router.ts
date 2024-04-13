import { Router } from "express";
import AuthenticationMiddelware from "../../Middelwares/auth.middelware";
import { update } from "../../Controllers/LandingController/update";
import { get } from "../../Controllers/LandingController/get";
import { main_get } from "../../Controllers/LandingController/main_get";

class UserRouter {
  private router: Router;

  constructor() {
    this.router = Router();
    this.setupRoutes();
  }

  private setupRoutes() {
    this.router.get("/landing", AuthenticationMiddelware.isLogin, get);
    this.router.get("/main_landing", main_get);
    this.router.patch("/landing", AuthenticationMiddelware.isLogin, update);
  }

  getRouter() {
    return this.router;
  }
}

export default UserRouter;

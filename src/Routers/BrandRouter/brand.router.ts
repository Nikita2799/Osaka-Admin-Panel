import { Router } from "express";
import AuthenticationMiddelware from "../../Middelwares/auth.middelware";
import { create } from "../../Controllers/BrandController/create";
import { get_all } from "../../Controllers/BrandController/get_all";

class BrandRouter {
  private router: Router;

  constructor() {
    this.router = Router();
    this.setupRoutes();
  }

  private setupRoutes() {
    this.router.post("/brand", AuthenticationMiddelware.isLogin, create);
    this.router.get("/brand", AuthenticationMiddelware.isLogin, get_all);
    // this.router.get('/brand')
  }

  getRouter() {
    return this.router;
  }
}

export default BrandRouter;

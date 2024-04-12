import { Router } from "express";
import { update } from "../../Controllers/ImportController/update";
import { get } from "../../Controllers/ImportController/get";
import AuthenticationMiddelware from "../../Middelwares/auth.middelware";

class AuthRouter {
  private router: Router;

  constructor() {
    this.router = Router();
    this.setupRoutes();
  }

  private setupRoutes() {
    this.router.patch("/import", AuthenticationMiddelware.isLogin, update);
    this.router.get("/import", AuthenticationMiddelware.isLogin, get);
  }

  getRouter() {
    return this.router;
  }
}

export default AuthRouter;

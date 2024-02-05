import { Router } from "express";
import { sign_in } from "../../Controllers/AuthenticationController/sign_in";
import { sign_up } from "../../Controllers/AuthenticationController/sign_up";

class AuthRouter {
  private router: Router;

  constructor() {
    this.router = Router();
    this.setupRoutes();
  }

  private setupRoutes() {
    this.router.post("/sign_in", sign_in);
    this.router.post("/sign_up", sign_up);
  }

  getRouter() {
    return this.router;
  }
}

export default AuthRouter;

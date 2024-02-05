import { Router } from "express";

class UserRouter {
  private router: Router;

  constructor() {
    this.router = Router();
    this.setupRoutes();
  }

  private setupRoutes() {}

  getRouter() {
    return this.router;
  }
}

export default UserRouter;

import express from "express";
import router from "../../config/main_router/router";

class ExpressService {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(express.static("uploads"));
    this.app.use("/api", router);
  }

  public getApp(): express.Application {
    return this.app;
  }
}

export default ExpressService;

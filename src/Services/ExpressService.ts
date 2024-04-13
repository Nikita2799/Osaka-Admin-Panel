import express from "express";
import router from "../../config/main_router/router";
import { CronService } from "./CronService";

class ExpressService {
  private app: express.Application;
  private cron = new CronService();
  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use("/api/images", express.static("uploads"));
    this.app.use("/api", router);
    this.cron.start_cron();
  }

  public getApp(): express.Application {
    return this.app;
  }
}

export default ExpressService;

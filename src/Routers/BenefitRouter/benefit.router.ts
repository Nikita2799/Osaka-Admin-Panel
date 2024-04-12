import { Router } from "express";
import AuthenticationMiddelware from "../../Middelwares/auth.middelware";
import { create } from "../../Controllers/BenefitsController/create";
import { get_one } from "../../Controllers/BenefitsController/get_one";
import { get_all } from "../../Controllers/BenefitsController/get_all";
import { update } from "../../Controllers/BenefitsController/update";
import { delete_benefits } from "../../Controllers/BenefitsController/delete";
import { MulterService } from "../../Services/MulterService";

class BenefitRouter {
  private router: Router;
  private multer: MulterService;
  private upload;

  constructor() {
    this.multer = new MulterService();
    this.upload = this.multer.get_upload();
    this.router = Router();
    this.setupRoutes();
  }

  private setupRoutes() {
    this.router.post("/benefit", AuthenticationMiddelware.isLogin, create);
    this.router.get("/benefit", AuthenticationMiddelware.isLogin, get_one);
    this.router.get("/benefit_all", AuthenticationMiddelware.isLogin, get_all);
    this.router.patch(
      "/benefit",
      AuthenticationMiddelware.isLogin,
      this.upload.fields([{ name: "images" }]),
      update
    );
    this.router.delete(
      "/benefit/:id",
      AuthenticationMiddelware.isLogin,
      delete_benefits
    );
  }

  getRouter() {
    return this.router;
  }
}

export default BenefitRouter;

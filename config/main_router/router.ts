import { Router } from "express";
import { corsSettings } from "./cors";
import { glob } from "glob";
import { isExpressRouter } from "../../src/Utils/Express/isExpressRouter";
import path from "path";

const router = Router();
router.use(corsSettings);

const importRouters = () => {
  const routerFiles = glob.sync(
    path.resolve(__dirname, "../../src/Routers/**/*.router.js")
  );
  console.log(routerFiles);

  routerFiles.forEach((routerFile) => {
    const routerModule = require(routerFile);
    if (routerModule.default && typeof routerModule.default === "function") {
      const routerInstance = new routerModule.default();
      if (isExpressRouter(routerInstance.getRouter())) {
        router.use(routerInstance.getRouter());
      } else {
        console.error(`Invalid router module in file: ${routerFile}`);
      }
    } else {
      console.error(`Invalid router module in file: ${routerFile}`);
    }
  });
};

importRouters();

router.options("*", corsSettings);

export default router;

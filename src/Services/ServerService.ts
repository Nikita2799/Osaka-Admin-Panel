import * as http from "http";
import ExpressService from "../Services/ExpressService";

class ServerService {
  private server: http.Server;
  private expressService: ExpressService;

  constructor(port: number) {
    this.expressService = new ExpressService();
    this.server = http.createServer(this.expressService.getApp());

    this.server.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
}

export default ServerService;

import multer from "multer";

export class MulterService {
  private upload;
  private storage;

  constructor() {
    this.storage = multer.memoryStorage();
    this.upload = multer({ storage: this.storage });
  }

  get_upload() {
    return this.upload;
  }
}

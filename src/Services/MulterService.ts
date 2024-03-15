import multer from "multer";
import path from "path";
import uuid from "short-uuid";

export class MulterService {
  private upload;
  private storage;

  constructor() {
    this.storage = this.get_storage();
    this.upload = multer({ storage: this.storage });
  }

  private get_storage() {
    const path_image = path.join(__dirname, "..", "..", "uploads");
    const short_uuid = uuid();

    return multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, path_image);
      },
      filename: function (req, file, cb) {
        const extension = path.extname(file.originalname);
        const name = short_uuid.new();
        cb(null, `${name}` + extension);
      },
    });
  }

  get_upload() {
    return this.upload;
  }
}

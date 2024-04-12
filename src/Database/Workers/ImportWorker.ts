import { ImportRegal } from "../Models/Import";

export class ImportWorker {
  private import;

  constructor() {
    this.import = ImportRegal;
  }

  async update(param: any) {
    return await this.import.update({ ...param }, { where: param.code });
  }

  async get(code: any) {
    return await this.import.findOne({ where: code, raw: true });
  }
}

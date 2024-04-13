import { ImportRegal } from "../Models/Import";

export class ImportWorker {
  private import;

  constructor() {
    this.import = ImportRegal;
  }

  async update(param: any) {
    console.log(param);

    return await this.import.update(
      { ...param },
      { where: { code: param.code } }
    );
  }

  async get(code: any) {
    return await this.import.findOne({ where: code, raw: true });
  }
}

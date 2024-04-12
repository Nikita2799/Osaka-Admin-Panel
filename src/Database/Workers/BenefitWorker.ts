import { Benefit } from "../Models/Benefit";

export class BenefitWorker {
  private benefit;

  constructor() {
    this.benefit = Benefit;
  }

  async create(benefit_params: any) {
    return await this.benefit.create(...benefit_params);
  }

  async get_one(param: any) {
    return await this.benefit.findOne({ where: param });
  }

  async get_all(params: any) {
    return await this.benefit.findAll({ where: params, raw: true });
  }

  async update(id: any, update_params: any) {
    return await this.benefit.update(
      { ...update_params },
      { where: { id: 1 } }
    );
  }

  async delete(id: any) {
    return await this.benefit.destroy({ where: id });
  }
}

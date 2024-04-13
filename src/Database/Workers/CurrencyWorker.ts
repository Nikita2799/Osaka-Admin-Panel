import { Currency } from "../Models/Currency";

export class CurrencyWorker {
  private currency;
  constructor() {
    this.currency = Currency;
  }
  async update(params: any) {
    return await this.currency.update({ ...params }, { where: { id: 1 } });
  }
  async get(params: any) {
    return await this.currency.findOne({ where: { id: 1 }, raw: true });
  }
}

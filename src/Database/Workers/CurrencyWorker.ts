import { Currency } from "../Models/Currency";

export class CurrencyWorker {
  private currency;
  constructor() {
    this.currency = Currency;
  }
  async update(params: any) {
    return await this.currency.update({ ...params }, { where: { id: 1 } });
  }
}

import { BrandInstance, BrandAttributes } from "../../Types/brand";
import { Brand } from "../Models/Brand";

export class BrandWorker {
  private brand;

  constructor() {
    this.brand = Brand;
  }

  async create_or_get(brand_params: BrandAttributes) {
    const brand = await this.get_one({ brand: brand_params.brand });
    console.log(brand ? true : false);

    return brand ? brand : await this.brand.create({ ...brand_params });
  }

  async get_one(param: Partial<BrandAttributes> = {}) {
    return await this.brand.findOne({ where: { ...param }, raw: true });
  }

  async get_all() {
    return await this.brand.findAll({ raw: true });
  }
}

import { Col } from "sequelize/types/utils";
import { CarAttributes, CarInstance } from "../../Types/car";
import { Brand } from "../Models/Brand";
import { Car } from "../Models/Car";
import { BrandWorker } from "./BrandWorker";
import { Sequelize } from "sequelize";

export class CarWorker {
  private car;
  private brand;
  private brandWorker;

  constructor() {
    this.car = Car;
    this.brand = Brand;
    this.brandWorker = new BrandWorker();
  }

  async create(car_params: CarAttributes) {
    const brand = await this.brandWorker.create_or_get({
      brand: car_params.brand!,
    });

    car_params.brand_id = brand.id!;
    delete car_params.brand;

    return await this.car.create({ ...car_params });
  }

  async get_one(param: Partial<CarAttributes> = {}) {
    return await this.car.findOne({
      where: { ...param },
      include: [
        {
          model: this.brand,
          as: "brand",
          attributes: [],
        },
      ],
      attributes: ["*", [Sequelize.col("brand"), "brand"]],
      raw: true,
    });
  }

  async get_all(param: Partial<CarAttributes> = {}) {
    return await this.car.findAll({
      where: { ...param },
      include: [
        {
          model: this.brand,
          as: "brand",
          attributes: [],
        },
      ],
      attributes: ["*", [Sequelize.col("brand"), "brand"]],
      raw: true,
    });
  }

  async delete(id: number) {
    return await this.car.destroy({ where: { id } });
  }
}

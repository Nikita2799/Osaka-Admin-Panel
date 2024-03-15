import { Model, Optional } from "sequelize";

export interface CarAttributes {
  id?: number;
  record_id: string;
  brand?: string;
  brand_id: number;
  model: string;
  price: string;
  mileage: number;
  description: string;
  images: Array<string>;
  createdAt?: Date;
  updatedAt?: Date;
}

interface CarCreationAttributes extends Optional<CarAttributes, "id"> {}

export interface CarInstance
  extends Model<CarAttributes, CarCreationAttributes>,
    CarAttributes {}

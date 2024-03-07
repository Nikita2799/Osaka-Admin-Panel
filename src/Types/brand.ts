import { Model, Optional } from "sequelize";

export interface BrandAttributes {
  id?: number;
  brand: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface BrandCreationAttributes extends Optional<BrandAttributes, "id"> {}

export interface BrandInstance
  extends Model<BrandCreationAttributes, BrandCreationAttributes>,
    BrandAttributes {}

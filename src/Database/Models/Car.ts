import { DataTypes } from "sequelize";
import { connection } from "../../../config/database/connect";
import { CarInstance } from "../../Types/car";
import { Brand } from "./Brand";

export const Car = connection.define<CarInstance>(
  "cars",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    brand_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    model: { type: DataTypes.STRING },
    price: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    mileage: { type: DataTypes.INTEGER },
    img: { type: DataTypes.STRING },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: connection.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: connection.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
    },
  },
  {
    modelName: "Car",
  }
);

Car.hasOne(Brand, { foreignKey: "brand_id" });
connection.sync();

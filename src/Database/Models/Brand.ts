import { DataTypes } from "sequelize";
import { connection } from "../../../config/database/connect";
import { BrandInstance } from "../../Types/brand";
import { Car } from "./Car";

export const Brand = connection.define<BrandInstance>(
  "brands",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
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
    modelName: "Brand",
  }
);
// Brand.hasMany(Car, { foreignKey: "id" });
connection.sync();

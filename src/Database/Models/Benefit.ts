import { DataTypes } from "sequelize";
import { connection } from "../../../config/database/connect";

export const Benefit = connection.define(
  "benefits",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    images: { type: DataTypes.ARRAY(DataTypes.STRING) },
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
    modelName: "Benefit",
  }
);

connection.sync();

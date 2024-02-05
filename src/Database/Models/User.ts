import { DataTypes } from "sequelize";
import { connection } from "../../../config/database/connect";
import { UserInstance } from "../../Types/user";

export const User = connection.define<UserInstance>(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },

    login: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
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
    modelName: "User",
  }
);

connection.sync();

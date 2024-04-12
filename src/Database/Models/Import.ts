import { DataTypes } from "sequelize";
import { connection } from "../../../config/database/connect";

export const ImportRegal = connection.define(
  "imports",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    code: { type: DataTypes.STRING },
    title_en: { type: DataTypes.STRING },
    title_ja: { type: DataTypes.STRING },
    isTable: { type: DataTypes.BOOLEAN },
    table: { type: DataTypes.ARRAY(DataTypes.JSONB) },
    main_block: { type: DataTypes.ARRAY(DataTypes.JSONB) },
    references: { type: DataTypes.ARRAY(DataTypes.JSONB) },
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

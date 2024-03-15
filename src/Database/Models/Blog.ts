import { DataTypes } from "sequelize";
import { connection } from "../../../config/database/connect";
import { BlogInstance } from "../../Types/blog";

export const Blog = connection.define<BlogInstance>(
  "blogs",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    title_en: { type: DataTypes.STRING },
    title_ja: { type: DataTypes.STRING },
    text_en: { type: DataTypes.JSONB },
    text_ja: { type: DataTypes.JSONB },
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
    modelName: "Blog",
  }
);

connection.sync();

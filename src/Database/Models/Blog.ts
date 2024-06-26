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
    title: { type: DataTypes.JSONB },
    text_block_first: { type: DataTypes.JSONB },
    text_block_second: { type: DataTypes.JSONB },
    text_block_third: { type: DataTypes.JSONB },
    text_block_fourth: { type: DataTypes.JSONB },
    text_block_fifth: { type: DataTypes.JSONB },
    article_img: { type: DataTypes.JSONB },
    caption: { type: DataTypes.JSONB },
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

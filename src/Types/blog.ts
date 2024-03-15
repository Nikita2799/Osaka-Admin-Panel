import { Model, Optional } from "sequelize";

export interface BlogAttributes {
  id?: number;
  title_en: string;
  title_ja: string;
  text_en?: any;
  text_ja?: any;
  images?: any;
  lang?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface BlogResponse {
  [key: string]: string;
  title: string;
  text: string;
  images: string;
  lang: string;
}

interface BlogCreationAttributes extends Optional<BlogAttributes, "id"> {}

export interface BlogInstance
  extends Model<BlogCreationAttributes, BlogCreationAttributes>,
    BlogAttributes {}

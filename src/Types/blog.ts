import { Model, Optional } from "sequelize";

export interface BlogAttributes {
  id?: number;
  title: any;
  text_block_first: any;
  text_block_second: any;
  text_block_third: any;
  text_block_fourth: any;
  text_block_fifth: any;
  article_img: any;
  caption: any;
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

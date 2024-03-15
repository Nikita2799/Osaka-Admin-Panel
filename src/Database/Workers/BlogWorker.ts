import { BlogAttributes } from "../../Types/blog";
import { Blog } from "../Models/Blog";

export class BlogWorker {
  private blog;

  constructor() {
    this.blog = Blog;
  }

  async create(params: BlogAttributes) {
    return await this.blog.create(params);
  }

  async get_one(param: Partial<BlogAttributes> = {}) {
    return await this.blog.findOne({ where: { ...param }, raw: true });
  }

  async update(param: Partial<BlogAttributes> = {}) {
    return await this.blog.update({ ...param }, { where: { id: param.id } });
  }

  async get_all() {
    return await this.blog.findAll({ raw: true });
  }

  async delete(id: any) {
    return await this.blog.destroy({ where: id });
  }
}

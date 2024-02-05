import { UserAttributes, UserInstance } from "../../Types/user";
import { User } from "../Models/User";

export class UserWorker {
  private user;

  constructor() {
    this.user = User;
  }

  async create(user_params: UserAttributes) {
    await this.user.create({ ...user_params });
  }

  async get_one(
    param: Partial<UserAttributes> = {}
  ): Promise<UserInstance | null> {
    return await this.user.findOne({ where: { ...param }, raw: true });
  }

  async get_all(param: Partial<UserAttributes> = {}): Promise<UserInstance[]> {
    return await this.user.findAll({ where: { ...param }, raw: true });
  }
}

import { Sequelize } from "sequelize";
import config from "../../config/config";

export const connection = new Sequelize(
  config.database.name!,
  config.database.user!,
  config.database.password!,
  {
    host: config.database.host,
    dialect: "postgres",
    port: +config.database.port! | 5432,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 22000,
    },
  }
);

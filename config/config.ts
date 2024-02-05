require("dotenv").config();

export const config = {
  server: {
    HOST: process.env.HOST || "localhost",
    PORT: process.env.PORT || 8000,
    PREFIX: "/api",
  },
  auth: {
    access_token: process.env.ACCESS_TOKEN,
  },
  database: {
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  },
};

export default config;

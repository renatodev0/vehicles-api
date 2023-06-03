import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize({
  database: process.env.DB_NAME || "",
  username: process.env.DB_USERNAME || "",
  password: process.env.DB_PASSWORD || "",
  host: process.env.DB_HOST || "",
  port: Number(process.env.DB_PORT) || 5432,
  ssl: true,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
    },
  },
  models: [__dirname + "/../models"],
});

export default sequelize;

import { Sequelize } from "sequelize";
import initModels from "../models/init-models.mjs";
import dotenv from "dotenv";
dotenv.config();

const host = process.env.DB_HOST;
const user = process.env.DB_USERNAME ?? "";
const password = process.env.DB_PASSWORD ?? "";
const database = process.env.DB_DATABASE ?? "";
const sequelizeInstance = new Sequelize(database, user, password, {
  host,
  dialect: "mysql",
  port: Number(process.env.DB_PORT) ?? 3306,
  pool: { max: 5, min: 0, idle: 10000 },
  dialectOptions: {
    multipleStatements: true,
  },
});

// async function connectToDatabase() {
try {
  await sequelizeInstance.authenticate();
  console.log("------------------- DataBase Connected ---------------------");
} catch (error) {
  console.log(error);
}
// }

const db = (() => {
  return initModels(sequelizeInstance);
})();

export { db, sequelizeInstance };

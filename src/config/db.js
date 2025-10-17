import { Sequelize } from "sequelize";
import config from "./index.js";

const sequelize = new Sequelize(
    config.DATBASE_NAME,
    config.DATABASE_USERNAME,
    config.DATABASE_PASSWORD,
    {
        dialect: config.DATABASE_DIALECT,
        host: config.DATABASE_HOST,
        port: config.DATABASE_PORT,
        logging: (msg) => console.log(msg),
    }
);

export const connection = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ alter: true });
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Unable to connect to the database:", error);
    }
};    
export default sequelize;
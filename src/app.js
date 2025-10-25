import express from "express";
import config from "./config/index.js";
import sequelize, {connection} from "./config/db.js"
import models from "./models/index.js";


// init express app
const app = express();


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// routes
app.get("/health", (req, res) => {
    res.json({ status: "API is running smoothly"});
})


// start server 
await sequelize.sync({ alter: true });
await connection();
app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`);
});
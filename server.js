import express from "express";
import connectMongoDB from "./config/dbconfig";
 import router from "./routes";
 import dotenv from "dotenv";
 dotenv.config();
const app = express();
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
// create db_nodejs in MongoDB
connectMongoDB("mongodb://127.0.0.1:27017/db_asm2_nodejs");
app.use("/", router);
export const viteNodeApp = app;

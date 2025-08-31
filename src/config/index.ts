import dotenv from "dotenv";
import path from "path";
dotenv.config({path: path.join(__dirname, "../../.env")});

export default {
    logDir: process.env.LOG_DIR,
    isDev: process.env.NODE_ENV,
}
import mongoose from "mongoose";
import { envConfig } from "./config/appConfig.js";
import { logger } from "./utility/logger.js";

const mongoDb = mongoose.connection;

// Connection
if (envConfig.mongoUser !== "" && envConfig.mongoPass !== "") {
  mongoose.connect(
    `mongodb://${envConfig.mongoUser}:${envConfig.mongoPass}@${envConfig.dbHost}:${envConfig.dbPort}/${envConfig.database}`
  );
} else {
  mongoose.connect(
    `mongodb://${envConfig.dbHost}:${envConfig.dbPort}/${envConfig.database}`
  );
}

//  Error checking
mongoDb.on("error", (err) => {
  //   logger.log("Connection error with database.", { error: err });
});

// On connect
mongoDb.once("open", () => {
  console.log("ready");
  logger.log("info", "Connected to databse 🍀 ");

  //   logger.log("Connected with MongoDB");
});

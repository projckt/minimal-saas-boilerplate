import mongoose from "mongoose";
import { mongoURI, mongoConfig } from "./config";
import { appConfig } from "./config";
import app from "./app";

(async () => {
  mongoose.set("useCreateIndex", true);
  await mongoose.connect(mongoURI, mongoConfig, () => {
    console.log("Connected to Mongo");
  });
  app.listen(appConfig.port, () => {
    console.log(`Server is running on port: ${appConfig.port}`);
  });
})();

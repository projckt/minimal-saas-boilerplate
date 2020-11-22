import mongoose from "mongoose";
import app from "./app";

import { appConfig, mongoUri, mongoConfig } from "./config";

(async () => {
  mongoose.set("useCreateIndex", true);
  await mongoose.connect(mongoUri, mongoConfig, () => {
    console.log(`Connected to Mongo`);
  });

  app.listen(appConfig.port, () => {
    console.log(`Server is running on port: ${appConfig.port}`);
  });
})();

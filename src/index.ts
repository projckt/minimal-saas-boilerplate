import mongoose from "mongoose";
import app from "./app";

import { nodeConfig, mongoUri, mongoConfig } from "./config";

(async () => {
  mongoose.set("useCreateIndex", true);
  await mongoose.connect(mongoUri, mongoConfig, () => {
    console.log(`Connected to Mongo`);
  });

  app.listen(nodeConfig.port, () => {
    console.log(`Server is running on port: ${nodeConfig.port}`);
  });
})();

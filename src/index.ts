import app from "./app";
import mongoose from "mongoose";
import { mongoURI, mongoConfig } from "./config";

import { appConfig } from "./config";

// app.listen(3000, () => console.log(`Listening on 3000`));

(async () => {
  mongoose.set("useCreateIndex", true);
  await mongoose.connect(mongoURI, mongoConfig, () => {
    console.log(`Connected to Mongo`);
  });
  app.listen(appConfig.port, () => {
    console.log(`Server is running on port: ${appConfig.port}`);
  });
})();

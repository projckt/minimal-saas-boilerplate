import express from "express";
import session from "express-session";
import connectRedis from "connect-redis";
import Redis from "ioredis";
import mongoose from "mongoose";
import cors from "cors";

import { login, logout, home } from "./routes";
import {
  appConfig,
  redisConfig,
  expressSessionConfig,
  mongoUri,
  mongoConfig,
} from "./config";

(async () => {
  mongoose.set("useCreateIndex", true);
  await mongoose.connect(mongoUri, mongoConfig, () => {
    console.log(`Connected to Mongo`);
  });
  const redisStore = connectRedis(session);
  const client = new Redis(redisConfig);
  const app = express();
  app.use(express.json());
  app.use(
    session({
      ...expressSessionConfig,
      store: new redisStore({ client }),
    })
  );
  const corsOptions = {
    origin: ["http://localhost:3333", "https://app.particle.systems"],
    credentials: true,
  };

  app.use(express.static(__dirname + "/www"));

  app.use(login);
  app.use(logout);
  app.use(home);

  app.listen(appConfig.port, () => {
    console.log(`Server is running on port: ${appConfig.port}`);
  });
})();

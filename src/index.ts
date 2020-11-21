import express from "express";
import session from "express-session";
import connectRedis from "connect-redis";
import Redis from "ioredis";
import mongoose from "mongoose";
import cors from "cors";

import { login, logout } from "./routes";
import {
  APP_OPTIONS,
  REDIS_OPTIONS,
  SESSION_OPTIONS,
  MONGO_URI,
  MONGO_OPTIONS,
} from "./config";

(async () => {
  mongoose.set("useCreateIndex", true);
  await mongoose.connect(MONGO_URI, MONGO_OPTIONS, () => {
    console.log(`Connected to Mongo`);
  });
  const redisStore = connectRedis(session);
  const client = new Redis(REDIS_OPTIONS);
  const app = express();
  app.use(express.json());
  app.use(
    session({
      ...SESSION_OPTIONS,
      store: new redisStore({ client }),
    })
  );
  const corsOptions = {
    origin: ["http://localhost:3693"],
    credentials: true,
  };
  app.use(cors(corsOptions));

  app.use(login);
  app.use(logout);

  app.listen(APP_OPTIONS.port, () => {
    console.log(`Server is running on port: ${APP_OPTIONS.port}`);
  });
})();

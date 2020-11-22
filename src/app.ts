import express from "express";
import session from "express-session";
import connectRedis from "connect-redis";
import Redis from "ioredis";
import cors from "cors";
import * as allRoutesObj from "./components/allRoutes";

import { expressSessionConfig, redisConfig, corsConfig } from "./config";

const app = express();
const redisStore = connectRedis(session);
const redisClient = new Redis(redisConfig);
app.use(express.json());
app.use(
  session({
    ...expressSessionConfig,
    store: new redisStore({ client: redisClient }),
  })
);
app.use(cors(corsConfig));

const routeArr = Object.values(allRoutesObj);
routeArr.forEach((route) => {
  app.use(route);
});
app.get("/", (req, res) => res.json({ message: "Billo" }));

export default app;

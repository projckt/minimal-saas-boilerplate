import express from "express";
import session from "express-session";
import connectRedis from "connect-redis";
import Redis from "ioredis";
import cors from "cors";
import * as allRoutesObj from "./components/allRoutes";
import { expressSessionConfig, redisConfig, corsConfig } from "./config";

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
app.use(cors(corsConfig));

const routeArr = Object.values(allRoutesObj);
routeArr.forEach((route) => {
  app.use(route);
});

export default app;

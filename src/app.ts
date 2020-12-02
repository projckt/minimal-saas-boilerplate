import express from "express";
import session from "express-session";
import connectRedis from "connect-redis";
import Redis from "ioredis";
import cors from "cors";
import { getRoutePaths } from "./helpers/getAllRoutes";
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
getRoutePaths().then((pathArr) => {
  pathArr.forEach((path) => {
    import("./" + path).then((route) => {
      app.use(route.default);
    });
  });
});

export default app;

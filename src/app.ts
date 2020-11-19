import express from "express";
import session from "express-session";
import connectRedis from "connect-redis";
import Redis from "ioredis";
import cors from "cors";
import * as path from "path";

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
app.use(express.static(__dirname + "/www"));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/www/index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});
app.get("/", (req, res) => res.json({ message: "Billo" }));

export default app;

import { SessionOptions } from "express-session";
import dotenv from "dotenv";
dotenv.config();

const IS_PROD = process.env.NODE_ENV === "production";

export const expressSessionConfig: SessionOptions = {
  secret: process.env.EXPRESS_SESSION_SECRET!,
  name: process.env.EXPRESS_SESSION_NAME,
  cookie: {
    maxAge: +process.env.EXPRESS_SESSION_IDLE_TIMEOUT!,
    secure: IS_PROD,
    sameSite: true,
  },
  resave: false,
  saveUninitialized: false,
};

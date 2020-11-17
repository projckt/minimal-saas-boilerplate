import { SessionOptions } from "express-session";
import dotenv from "dotenv";
dotenv.config();

let isSecure: boolean = false;
if (process.env.NODE_ENV === "prod") {
  isSecure = true;
}

export const SESSION_OPTIONS: SessionOptions = {
  secret: process.env.EXPRESS_SESSION_SECRET!,
  name: process.env.EXPRESS_SESSION_NAME,
  cookie: {
    maxAge: +process.env.EXPRESS_SESSION_IDLE_TIMEOUT!,
    secure: isSecure,
    sameSite: true,
  },
  resave: false,
  saveUninitialized: false,
};

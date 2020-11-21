import dotenv from "dotenv";
dotenv.config();

export const APP_OPTIONS = {
  env: process.env.NODE_ENV,
  port: process.env.NODE_PORT_NUMBER,
};

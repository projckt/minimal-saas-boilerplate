import dotenv from "dotenv";
dotenv.config();

export const corsConfig = {
  origin: process.env.CORS_ORIGIN?.split(","),
  credentials: true,
};

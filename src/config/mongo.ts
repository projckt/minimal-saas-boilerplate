import { ConnectionOptions } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const { MONGO_HOST_NAME, MONGO_DATABASE_NAME } = process.env;
export const MONGO_URI = `mongodb://${MONGO_HOST_NAME}/${MONGO_DATABASE_NAME}`;
export const MONGO_OPTIONS: ConnectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

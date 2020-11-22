import { ConnectionOptions } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const { MONGO_HOSTNAME, MONGO_DATABASE_NAME } = process.env;
export const mongoUri = `mongodb://${MONGO_HOSTNAME}/${MONGO_DATABASE_NAME}`;
export const mongoConfig: ConnectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

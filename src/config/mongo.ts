import dotenv from "dotenv";
import { ConnectionOptions } from "mongoose";
dotenv.config();

const mongoHostName = process.env.MONGO_HOST_NAME;
const mongoDatabaseName = process.env.MONGO_DATABASE_NAME;
export const mongoURI = `mongodb://${mongoHostName}/${mongoDatabaseName}`;
export const mongoConfig: ConnectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

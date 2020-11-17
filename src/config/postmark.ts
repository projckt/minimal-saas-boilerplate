import dotenv from "dotenv";
dotenv.config();

export const postMarkConfig = {
  serverToken: process.env.POSTMARK_SERVER_TOKEN,
};

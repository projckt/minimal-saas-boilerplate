import dotenv from "dotenv";
dotenv.config();

export const cookieConfig = {
  isLogged: process.env.COOKIE_ISLOGGED_NAME,
};

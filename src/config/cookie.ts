import dotenv from "dotenv";
dotenv.config();

export const cookieConfig = {
  isLogged: {
    name: process.env.COOKIE_ISLOGGED_NAME,
    maxAge: +process.env.EXPRESS_SESSION_IDLE_TIMEOUT!,
  },
};

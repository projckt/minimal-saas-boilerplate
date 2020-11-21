import { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

export const loginUser = (req: Request, res: Response, userId: string) => {
  // req.session.userId = userId;
  let isLoggedCookieName: string = process.env.IS_AUTHENTICATED_COOKIE_NAME!;
  res.cookie(isLoggedCookieName, true, {
    expires: new Date(Date.now() + 31556952000),
    httpOnly: false,
  });
};

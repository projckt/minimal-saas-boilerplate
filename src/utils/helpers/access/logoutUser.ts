import { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

export const logoutUser = (req: Request, res: Response) => {
  new Promise((resolve, reject) => {
    req.session!.destroy((error: Error) => {
      if (error) reject(error);
      res.clearCookie(process.env.EXPRESS_SESSION_NAME!);
      res.clearCookie(process.env.IS_AUTHENTICATED_COOKIE_NAME!);
      resolve();
      res.send("User Logout");
    });
  });
};

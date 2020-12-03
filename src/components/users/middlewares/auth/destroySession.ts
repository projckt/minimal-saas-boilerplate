import { Request, Response, NextFunction } from "express";
import { expressSessionConfig, cookieConfig } from "../../../../config";

const middleware = (req: Request, res: Response, next: NextFunction) => {
  new Promise((resolve, reject) => {
    req.session!.destroy((err: Error) => {
      if (err) reject(err);
      res.clearCookie(expressSessionConfig.name!);
      res.clearCookie(cookieConfig.isLogged.name!);
      resolve();
      let resp = {
        status: "success",
        message: "User logged out",
      };
      res.json(resp);
    });
  });
};

export default middleware;

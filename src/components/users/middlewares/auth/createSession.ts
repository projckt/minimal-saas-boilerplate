import { Request, Response, NextFunction } from "express";
import { cookieConfig } from "../../../../config";

const middleware = (req: Request, res: Response, next: NextFunction) => {
  req.session!.userId = "1234";
  res.cookie(cookieConfig.isLogged.name!, true, {
    expires: new Date(Date.now() + cookieConfig.isLogged.maxAge),
    httpOnly: true,
  });
  let resp = {
    status: "success",
    msg: "Account Created",
  };
  res.json(resp);
};

export default middleware;

import { Request, Response, NextFunction } from "express";
import { cookieConfig } from "../../../../config";

const middleware = (req: Request, res: Response, next: NextFunction) => {
  if (res.locals.isUserCreated) {
    req.session!.userId = res.locals.userId;
    res.cookie(cookieConfig.isLogged.name!, true, {
      expires: new Date(Date.now() + cookieConfig.isLogged.maxAge),
      httpOnly: true,
    });
    let resp = {
      status: "success",
      msg: "Account Created",
    };
    res.json(resp);
  } else {
    let resp = {
      status: "failed",
      msg: "User signup failed",
    };
    res.json(resp);
  }
};

export default middleware;

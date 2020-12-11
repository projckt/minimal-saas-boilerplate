import { Request, Response, NextFunction } from "express";
import { destroyUserSession } from "../dal";

const controller = async (req: Request, res: Response, next: NextFunction) => {
  let userId = req.session!.userId;
  let isUserLoggedOut = await destroyUserSession(userId);

  if (isUserLoggedOut) {
    next();
  } else {
    console.log(`[Failed] To logout`);
    let resp = {
      status: "failed",
      message: "Could not logout user",
    };
    res.json(resp);
  }
};

export default controller;

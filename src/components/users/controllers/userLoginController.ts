import { Request, Response, NextFunction } from "express";
import { userLoginCheck } from "../dal";

const controller = async (req: Request, res: Response, next: NextFunction) => {
  let userLoginObj: any = await userLoginCheck(res.locals.validatedLoginInputs);
  res.locals.userId = userLoginObj.userId;

  if (userLoginObj.isUserSignedUp && userLoginObj.isPasswordVerified) {
    next();
  } else {
    console.log(`[Failed] To login`);
    let resp = {
      status: "failed",
      message: "User not found or invalid login credentials",
    };
    res.json(resp);
  }
};

export default controller;

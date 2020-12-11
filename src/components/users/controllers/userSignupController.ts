import { NextFunction, Request, Response } from "express";
import { createUserDocument } from "../dal";

const controller = async (req: Request, res: Response, next: NextFunction) => {
  let userSignupObj: any = await createUserDocument(
    res.locals.validatedSignupInputs
  );

  res.locals.userId = userSignupObj.userId;

  if (userSignupObj.isUserCreated) {
    next();
  } else {
    console.log(`[Failed] To signup and create user`);
    let resp = {
      status: "failed",
      message: "User signup failed",
    };
    res.json(resp);
  }
};

export default controller;

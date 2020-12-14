import { NextFunction, Request, Response } from "express";
import { createUserDocument } from "../dal";
import { sendEmailVerificationLink } from "../helpers";

const controller = async (req: Request, res: Response, next: NextFunction) => {
  let userSignupObj: any = await createUserDocument(
    res.locals.validatedSignupInputs
  );

  res.locals.userId = userSignupObj.userId;

  if (userSignupObj.isUserCreated) {
    let isEmailVerificationMailSent: boolean = await sendEmailVerificationLink(
      userSignupObj
    );
    if (isEmailVerificationMailSent) {
      next();
    } else {
      console.log(`[Failed] To send email verification link`);
      let resp = {
        status: "failed",
        message: "Unable to send email verification link",
      };
      res.json(resp);
    }
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

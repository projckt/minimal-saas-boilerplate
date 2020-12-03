import { NextFunction, Request, Response } from "express";

const controller = async (req: Request, res: Response, next: NextFunction) => {
  /* Return Success Payload */
  // let payload = {
  //   email: res.locals.sanitizedSignupInputs.email,
  //   userSignupStatus: userSignupStatus,
  // };
  // return res.json({
  //   status: "success",
  //   message: "Signup successful",
  //   payload: payload,
  // });
  next();
};

export default controller;

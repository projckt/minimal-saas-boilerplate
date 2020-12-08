import { NextFunction, Request, Response } from "express";
import { createUserDocument } from "../dal";

const controller = async (req: Request, res: Response, next: NextFunction) => {
  let newUserObj: any = await createUserDocument(
    res.locals.validatedSignupInputs
  );

  res.locals.isUserCreated = newUserObj.isUserCreated;
  res.locals.userId = newUserObj.userId;

  next();
};

export default controller;

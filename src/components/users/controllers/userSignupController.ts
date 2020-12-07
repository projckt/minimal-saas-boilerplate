import { NextFunction, Request, Response } from "express";
import { createUserDocument } from "../dal";

const controller = async (req: Request, res: Response, next: NextFunction) => {
  let isUserCreated: any = await createUserDocument(
    res.locals.validatedSignupInputs
  );
  res.locals.isUserCreated = isUserCreated;
  next();
};

export default controller;

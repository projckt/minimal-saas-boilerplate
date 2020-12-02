import { Request, Response, NextFunction } from "express";

const middleware = (req: Request, res: Response, next: NextFunction) => {
  let { email } = req.body;
  email = email.toString().trim().toLowerCase();

  let sanitizedSignupInputs = {
    email: email,
  };

  res.locals.sanitizedSignupInputs = sanitizedSignupInputs;
  next();
};

export default middleware;

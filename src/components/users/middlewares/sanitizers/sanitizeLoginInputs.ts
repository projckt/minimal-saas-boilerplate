import { Request, Response, NextFunction } from "express";

const middleware = (req: Request, res: Response, next: NextFunction) => {
  let { email, pswd } = req.body;

  if (!email || !pswd) {
    let resp = {
      status: "failed",
      message: "Invalid login inputs",
    };
    res.json(resp);
  }

  email = email.toString().trim().toLowerCase();
  pswd = pswd.toString().trim();

  let sanitizedLoginInputs = {
    email: email,
    pswd: pswd,
  };

  res.locals.sanitizedLoginInputs = sanitizedLoginInputs;
  next();
};

export default middleware;

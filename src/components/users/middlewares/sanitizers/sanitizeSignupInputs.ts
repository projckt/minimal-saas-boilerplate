import { Request, Response, NextFunction } from "express";

const middleware = (req: Request, res: Response, next: NextFunction) => {
  let { firstName, middleName, lastName, email, pswd } = req.body;

  if (!firstName || !email || !pswd) {
    let resp = {
      status: "failed",
      message: "Invalid signup inputs",
    };
    res.json(resp);
  }

  firstName = firstName.toString().trim();
  middleName = middleName.toString().trim();
  lastName = lastName.toString().trim();
  email = email.toString().trim().toLowerCase();
  pswd = pswd.toString().trim();

  let sanitizedSignupInputs = {
    firstName: firstName,
    middleName: middleName,
    lastName: lastName,
    email: email,
    pswd: pswd,
  };

  res.locals.sanitizedSignupInputs = sanitizedSignupInputs;
  next();
};

export default middleware;

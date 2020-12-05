import { Request, Response, NextFunction } from "express";

const middleware = (req: Request, res: Response, next: NextFunction) => {
  let { firstName, middleName, lastName, email, pswd } = req.body;

  firstName = firstName.toString().trim().toLowerCase();
  middleName = middleName.toString().trim().toLowerCase();
  lastName = lastName.toString().trim().toLowerCase();
  email = email.toString().trim().toLowerCase();
  pswd = pswd.toString().trim().toLowerCase();

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

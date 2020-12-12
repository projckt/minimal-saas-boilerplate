import { Request, Response, NextFunction } from "express";
import { userSignupCheck } from "../../components/users/dal";

const middleware = async (req: Request, res: Response, next: NextFunction) => {
  let isUserSignedUp: boolean = await userSignupCheck(
    res.locals.sanitizedLoginInputs.email
  );

  if (isUserSignedUp) {
    next();
  } else {
    return res.json({
      status: "failed",
      message: "You are not registered",
    });
  }
};

export default middleware;

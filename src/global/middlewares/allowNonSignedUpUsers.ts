import { Request, Response, NextFunction } from "express";
import { userSignupCheck } from "../../components/users/dal";

const middleware = async (req: Request, res: Response, next: NextFunction) => {
  let isUserSignedUp: boolean = await userSignupCheck(
    res.locals.sanitizedSignupInputs.email
  );

  if (isUserSignedUp) {
    return res.json({
      status: "failed",
      message: "A user is already registered with this email",
    });
  } else {
    next();
  }
};

export default middleware;

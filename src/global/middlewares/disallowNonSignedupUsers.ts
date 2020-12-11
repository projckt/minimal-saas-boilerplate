import { Request, Response, NextFunction } from "express";
import { userSignupCheck } from "../../components/users/dal";

const middleware = async (req: Request, res: Response, next: NextFunction) => {
  const userSignupStatus = await userSignupCheck(
    res.locals.sanitizedLoginInputs.email
  );
  if (!userSignupStatus.isUserSignedUp) {
    return res.json({
      status: "failed",
      message: "User not found",
    });
  } else {
    next();
  }
};

export default middleware;

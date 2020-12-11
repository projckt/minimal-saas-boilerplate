import { Request, Response, NextFunction } from "express";
import { cookieConfig } from "../../../../config";
import { saveUserSession } from "../../dal";

const middleware = async (req: Request, res: Response, next: NextFunction) => {
  let userId = res.locals.userId;
  let isLoggedCookieName: string = cookieConfig.isLogged.name!;
  let sessionMaxAge: number = cookieConfig.isLogged.maxAge;
  req.session!.userId = userId;
  res.cookie(isLoggedCookieName, true, {
    expires: new Date(Date.now() + sessionMaxAge),
    httpOnly: true,
  });

  let sessionId = req.sessionID;
  let isSessionMetaSaved = await saveUserSession(
    userId,
    sessionId,
    sessionMaxAge
  );

  if (isSessionMetaSaved) {
    console.log(`[Success] Updated session meta of ${userId}`);
    let resp = {
      status: "success",
      message: "Account Created",
    };
    res.json(resp);
  } else {
    console.log(`[Failed] Updating session meta of ${userId}`);
    let resp = {
      status: "success",
      message: "Account Creation Failed",
    };
    res.json(resp);
  }
};

export default middleware;

import { Request, Response, NextFunction } from "express";
import { cookieConfig } from "../../../../config";
import { saveUserSession } from "../../dal";

const middleware = async (req: Request, res: Response, next: NextFunction) => {
  if (res.locals.isUserCreated) {
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
      console.log(`[Success] Created new user ${userId}`);
      console.log(`[Success] Updated session meta of ${userId}`);
      let resp = {
        status: "success",
        msg: "Account Created",
      };
      res.json(resp);
    } else {
      console.log(`[Success] Created new user ${userId}`);
      console.log(`[Failed] Updating session meta of ${userId}`);
      let resp = {
        status: "success",
        msg: "Account Creation Failed",
      };
      res.json(resp);
    }
  } else {
    console.log(`[Failed] To signup and create user`);
    let resp = {
      status: "failed",
      msg: "User signup failed",
    };
    res.json(resp);
  }
};

export default middleware;

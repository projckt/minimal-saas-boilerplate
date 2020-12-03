import { Request, Response, NextFunction } from "express";

const middleware = async (req: Request, res: Response, next: NextFunction) => {
  let isUserLogged = !!req.session!.userId;
  if (isUserLogged) {
    res.json({
      status: "failed",
      message: "You are already logged in",
    });
  } else {
    next();
  }
};

export default middleware;

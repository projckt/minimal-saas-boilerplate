import { Request, Response, NextFunction } from "express";

const middleware = async (req: Request, res: Response, next: NextFunction) => {
  let isUserLogged = !!req.session!.userId;
  if (isUserLogged) {
    next();
  } else {
    res.json({
      status: "failed",
      message: "You are not logged in",
    });
  }
};

export default middleware;

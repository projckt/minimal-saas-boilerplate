import { Request, Response, NextFunction } from "express";

const middleware = async (req: Request, res: Response, next: NextFunction) => {
  let userId = !!req.session!.userId;
  if (userId) {
    res.json({
      status: "failed",
      message: "You are already logged in",
    });
  } else {
    next();
  }
};

export default middleware;

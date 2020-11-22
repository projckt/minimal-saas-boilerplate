import { Request, Response, NextFunction } from "express";

export const isUserLogged = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let isUserLogged = !!req.session!.userId;
  res.locals.isUserLogged = isUserLogged;
  next();
};

export const getUserID = (req: Request, res: Response, next: NextFunction) => {
  let userID = req.session!.userId;
  res.locals.userID = userID;
  next();
};

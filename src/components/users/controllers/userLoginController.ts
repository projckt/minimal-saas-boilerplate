import { Request, Response, NextFunction } from "express";

const controller = async (req: Request, res: Response, next: NextFunction) => {
  req.session!.userId = "1234";
  res.cookie("is_logged", true, {
    expires: new Date(Date.now() + 31556952000),
    httpOnly: false,
  });
  res.send("Inside login, controller");
  next();
};

export default controller;

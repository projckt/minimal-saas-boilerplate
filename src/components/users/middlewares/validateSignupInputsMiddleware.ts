import { Request, Response, NextFunction } from "express";
import { emailValidatior } from "../../../utils/validators";

const controller = (req: Request, res: Response, next: NextFunction) => {
  console.log("middleware: validate signup inputs");
  let { error } = emailValidatior(req.body);
  if (error) {
    let resp = {
      status: "failed",
      msg: error.message,
    };
    return res.send(resp);
  }
  next();
};

export default controller;

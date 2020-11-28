import { Request, Response } from "express";
import { emailValidatior } from "../../../utils/validators/";

const controller = async (req: Request, res: Response) => {
  let { error } = emailValidatior(req.body);
  if (error) {
    let resp = {
      status: "failed",
      msg: error.message,
    };
    return res.send(resp);
  }
  req.session!.userId = "1234";
  res.cookie("is_logged", true, {
    expires: new Date(Date.now() + 31556952000),
    httpOnly: false,
  });
  res.send("Inside Signup, controller");
};

export default controller;

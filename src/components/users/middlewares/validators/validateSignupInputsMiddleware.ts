import { Request, Response, NextFunction } from "express";
import Joi from "@hapi/joi";

const controller = (req: Request, res: Response, next: NextFunction) => {
  const emailSchema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .min(5)
      .max(128)
      .lowercase()
      .trim()
      .required(),
  });

  let { error } = emailSchema.validate(req.body);
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

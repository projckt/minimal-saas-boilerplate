import Joi from "@hapi/joi";
import { Request } from "express";

export const emailValidatior = (reqBody: Request) => {
  const emailSchema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .min(5)
      .max(128)
      .lowercase()
      .trim()
      .required(),
  });
  return emailSchema.validate(reqBody);
};

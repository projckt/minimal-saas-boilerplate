import Joi from "@hapi/joi";
import { Request } from "express";

const validateEmail = (reqBody: Request) => {
  const schema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .min(5)
      .max(128)
      .lowercase()
      .trim()
      .required(),
  });
  return schema.validate(reqBody);
};

export default validateEmail;

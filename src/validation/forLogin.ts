import Joi from "@hapi/joi";
import { Request } from "express";

const validateLoginInputs = (reqBody: Request) => {
  const schema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .min(5)
      .max(128)
      .lowercase()
      .trim()
      .required(),
    password: Joi.string().min(8).max(1024).required(),
    isRememberMe: Joi.boolean().required(),
  });
  return schema.validate(reqBody);
};

export default validateLoginInputs;

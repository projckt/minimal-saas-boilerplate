import Joi from "@hapi/joi";
import { Request } from "express";

const validateResendPasswordResetCodeInputs = (reqBody: Request) => {
  const schema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .min(5)
      .max(128)
      .lowercase()
      .trim()
      .required(),
    resetSessionID: Joi.string().min(8).max(512).required(),
  });
  return schema.validate(reqBody);
};

export default validateResendPasswordResetCodeInputs;

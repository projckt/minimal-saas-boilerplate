import Joi from "@hapi/joi";
import { Request } from "express";

const validateEmailVerificationCodeResetInputs = (reqBody: Request) => {
  const schema = Joi.object({
    checkpointID: Joi.string().min(8).max(512).required(),
  });
  return schema.validate(reqBody);
};

export default validateEmailVerificationCodeResetInputs;

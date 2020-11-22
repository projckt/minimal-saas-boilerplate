import Joi from "@hapi/joi";
import { Request } from "express";

const validateEmailVerificationInputs = (reqBody: Request) => {
  const schema = Joi.object({
    emailVerificationCode: Joi.number()
      .integer()
      .min(1000)
      .max(9999)
      .required(),
    checkpointID: Joi.string().min(8).max(512).required(),
  });
  return schema.validate(reqBody);
};

export default validateEmailVerificationInputs;

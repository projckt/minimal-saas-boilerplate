import Joi from "@hapi/joi";
import { Request } from "express";

const isSettingsInputValid = (reqBody: Request) => {
  const schema = Joi.object({
    name: Joi.string().lowercase().trim().required(),
    type: Joi.string(),
    val1: Joi.string(),
    val2: Joi.string(),
  });
  return schema.validate(reqBody);
};

export default isSettingsInputValid;

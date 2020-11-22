import Joi from "@hapi/joi";
import { Request } from "express";

const validateRegistrationInputs = (reqBody: Request) => {
  const userSchema = Joi.object({
    firstName: Joi.string().min(1).trim().required(),
    lastName: Joi.string().min(1).trim(),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .min(5)
      .max(128)
      .lowercase()
      .trim()
      .required(),
    password: Joi.string().min(8).max(1024).required(),
    isdCode: Joi.string().min(1).required().allow(""),
    mobileCountry: Joi.string().min(2).required().allow(""),
    mobileNumber: Joi.string().min(8).required().allow(""),
  });
  return userSchema.validate(reqBody);
};

export default validateRegistrationInputs;

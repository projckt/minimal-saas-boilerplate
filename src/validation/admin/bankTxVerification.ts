import Joi from "@hapi/joi";
import { Request } from "express";

const validateBankTxInputs = (reqBody: Request) => {
  const schema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .min(5)
      .max(128)
      .lowercase()
      .trim()
      .required(),
    bankTxCode: Joi.string().min(1).max(1024).required(),
    orderID: Joi.string().min(1).max(1024).required(),
  });
  return schema.validate(reqBody);
};

export default validateBankTxInputs;

import Joi from "@hapi/joi";
import { Request } from "express";

const validateCartTotalInputs = (reqBody: Request) => {
  const schema = Joi.object({
    paymentGateway: Joi.string().min(1).trim().required(),
  });
  return schema.validate(reqBody);
};

export default validateCartTotalInputs;

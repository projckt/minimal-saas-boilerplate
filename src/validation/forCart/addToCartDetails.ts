import Joi from "@hapi/joi";
import { Request } from "express";

const validateAddToCartInputs = (reqBody: Request) => {
  const schema = Joi.object({
    ticketID: Joi.string().min(1).trim().required(),
  });
  return schema.validate(reqBody);
};

export default validateAddToCartInputs;

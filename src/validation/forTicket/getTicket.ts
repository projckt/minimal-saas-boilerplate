import Joi from "@hapi/joi";
import { Request } from "express";

const validateGetTicketDetails = (reqBody: Request) => {
  const schema = Joi.object({
    type: Joi.string().min(1).trim().required(),
  });
  return schema.validate(reqBody);
};

export default validateGetTicketDetails;

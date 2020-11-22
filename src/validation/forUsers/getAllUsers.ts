import Joi from "@hapi/joi";
import { Request } from "express";

const validateGetTicketDetails = (reqBody: Request) => {
  const schema = Joi.object({
    categoryFilter: Joi.string().min(1).trim().required().allow(""),
    membershipFilter: Joi.string().min(1).trim().required().allow(""),
    purchaseStatusFilter: Joi.string().min(1).trim().required().allow(""),
  });
  return schema.validate(reqBody);
};

export default validateGetTicketDetails;

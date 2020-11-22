import Joi from "@hapi/joi";
import { Request } from "express";

const isMember = (reqBody: Request) => {
  const schema = Joi.object({
    membershipID: Joi.string().min(1).max(25).required(),
  });
  return schema.validate(reqBody);
};

export default isMember;

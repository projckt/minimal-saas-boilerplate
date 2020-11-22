import Joi from "@hapi/joi";
import { Request } from "express";

const validateAccountSetupInputs = (reqBody: Request) => {
  const schema = Joi.object({
    occupation: Joi.string().min(1).trim().required(),
    orgInsti: Joi.string().min(1).required(),
    jobDegree: Joi.string().min(1).required(),
    country: Joi.string().min(1).required(),
    currency: Joi.string().min(1).required(),
    isHCIPAIMember: Joi.boolean().required(),
    checkpointID: Joi.string().min(1).required(),
    isGSTInvoicePreferred: Joi.boolean().required(),
    businessName: Joi.string().allow(""),
    taxID: Joi.string().allow(""),
    taxJurisdiction: Joi.string().min(1).required(),
    billingAddressLine1: Joi.string().min(1).allow(""),
    billingAddressLine2: Joi.string().min(1).allow(""),
    billingAddressLine3: Joi.string().min(1).allow(""),
  });
  return schema.validate(reqBody);
};

export default validateAccountSetupInputs;

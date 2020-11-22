import Joi from "@hapi/joi";

const isInvoicePrefValid = (invoicePrefInputs: any) => {
  const schema = Joi.object({
    isGSTInvoicePreferred: Joi.boolean().required(),
    businessName: Joi.string().allow(""),
    taxID: Joi.string().allow(""),
    taxJurisdiction: Joi.string().min(1).required(),
    billingAddressLine1: Joi.string().min(1).allow(""),
    billingAddressLine2: Joi.string().min(1).allow(""),
    billingAddressLine3: Joi.string().min(1).allow(""),
  });

  return schema.validate(invoicePrefInputs);
};

export default isInvoicePrefValid;

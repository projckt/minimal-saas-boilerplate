import Joi from "@hapi/joi";
import { Request } from "express";

const validateRazorpayPaymentDetails = (reqBody: Request) => {
  const schema = Joi.object({
    paymentGateway: Joi.string().min(1).valid("Razorpay").trim().required(),
  });
  return schema.validate(reqBody);
};

export default validateRazorpayPaymentDetails;

import { Request, Response, NextFunction } from "express";
import { appConfig } from "../../../../config";
import Joi from "joi";

const middleware = (req: Request, res: Response, next: NextFunction) => {
  const emailSchema = Joi.object({
    firstName: Joi.string()
      .min(appConfig.user.account.holder.name.minLength)
      .trim()
      .required(),
    middleName: Joi.string()
      .min(appConfig.user.account.holder.name.minLength)
      .trim()
      .allow(""),
    lastName: Joi.string()
      .min(appConfig.user.account.holder.name.minLength)
      .trim()
      .allow(""),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .min(appConfig.user.account.holder.email.value.minLength)
      .lowercase()
      .trim()
      .required(),
    pswd: Joi.string()
      .min(appConfig.user.account.holder.authentication.pswd.value.minLength)
      .required()
      .messages({
        "string.min": `"Password" should have a minimum length of {#limit}`,
      }),
  });

  let { error } = emailSchema.validate(res.locals.sanitizedSignupInputs);

  if (error) {
    let resp = {
      status: "failed",
      msg: error.message,
    };
    return res.send(resp);
  } else {
    res.locals.validatedSignupInputs = res.locals.sanitizedSignupInputs;
    next();
  }
};

export default middleware;

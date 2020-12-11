import { Request, Response, NextFunction } from "express";
import { appConfig } from "../../../../config";
import Joi from "joi";

const middleware = (req: Request, res: Response, next: NextFunction) => {
  const loginInputsSchema = Joi.object({
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

  let { error } = loginInputsSchema.validate(res.locals.sanitizedLoginInputs);

  if (error) {
    let resp = {
      status: "failed",
      message: error.message,
    };
    return res.send(resp);
  } else {
    res.locals.validatedLoginInputs = res.locals.sanitizedLoginInputs;
    next();
  }
};

export default middleware;

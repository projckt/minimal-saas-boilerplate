import Joi from "@hapi/joi";

const validateNewPassword = (confirmPasswordDetails: object) => {
  const schema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .min(5)
      .max(128)
      .lowercase()
      .trim()
      .required(),
    resetSessionID: Joi.string().min(8).max(512).required(),
    passwordResetPublicCode: Joi.number()
      .integer()
      .min(1000)
      .max(9999)
      .required(),
    newPassword: Joi.string().min(8).max(1024).required(),
    confirmNewPassword: Joi.any().valid(Joi.ref("newPassword")).required(),
  });

  return schema.validate(confirmPasswordDetails);
};

export default validateNewPassword;

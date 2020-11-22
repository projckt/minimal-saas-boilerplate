import Joi from "@hapi/joi";

const isEmailValid = (obj: any) => {
  const schema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .min(5)
      .max(128)
      .lowercase()
      .trim()
      .required(),
  });

  return schema.validate(obj);
};

export default isEmailValid;

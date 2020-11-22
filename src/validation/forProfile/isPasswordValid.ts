import Joi from "@hapi/joi";

const isPasswordValid = (obj: any) => {
  const schema = Joi.object({
    password: Joi.string().min(8).max(1024).required(),
  });
  return schema.validate(obj);
};

export default isPasswordValid;

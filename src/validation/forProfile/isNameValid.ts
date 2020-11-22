import Joi from "@hapi/joi";

const isNameValid = (obj: any) => {
  const schema = Joi.object({
    firstName: Joi.string().min(1).trim().required(),
    lastName: Joi.string().min(1).trim().required(),
  });

  return schema.validate(obj);
};

export default isNameValid;

import Joi from "@hapi/joi";

const isProfileUpdateInputsValid = (reqBody: Request) => {
  const schema = Joi.object({
    item: Joi.string().trim().min(1).max(1024).required(),
    value: Joi.object().min(1).required(),
  });
  return schema.validate(reqBody);
};

export default isProfileUpdateInputsValid;

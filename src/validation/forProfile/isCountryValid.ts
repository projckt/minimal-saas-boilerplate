import Joi from "@hapi/joi";

const isCountryValid = (obj: any) => {
  const schema = Joi.object({
    country: Joi.string().trim().min(1).max(1024).required(),
  });

  return schema.validate(obj);
};

export default isCountryValid;

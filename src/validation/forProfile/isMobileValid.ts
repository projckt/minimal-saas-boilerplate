import Joi from "@hapi/joi";

const isMobileValid = (obj: any) => {
  const schema = Joi.object({
    isdCode: Joi.string().min(1).required(),
    mobileCountry: Joi.string().min(2).required(),
    mobileNumber: Joi.string().min(9).required(),
  });

  return schema.validate(obj);
};

export default isMobileValid;

import Joi from "@hapi/joi";

const isProfileInfoStringValid = (obj: any) => {
  const schema = Joi.object({
    profileInfoString: Joi.string().trim().min(1).max(1024).required(),
  });
  return schema.validate(obj);
};

export default isProfileInfoStringValid;

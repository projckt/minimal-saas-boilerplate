import { userModel } from "../../models/userModel";
import { getSignupInputs } from "../../helpers";

const dal = async (validatedSignupInputs: object) => {
  let newUserObj: any = await getSignupInputs(validatedSignupInputs);
  let isUserCreated = await userModel.create(newUserObj);

  if (isUserCreated._id) {
    return {
      isUserCreated: true,
      userId: newUserObj.account.id,
      firstName: newUserObj.account.holder.name.first,
      email: newUserObj.account.holder.email.primary.value,
      verificationString:
        newUserObj.account.holder.email.primary.verificationString.value,
    };
  } else {
    return { isUserCreated: false, userId: "" };
  }
};

export default dal;

import { userModel } from "../../models/userModel";
import { getSignupInputs } from "../../helpers";

const dal = async (validatedSignupInputs: object) => {
  let newUserObj: any = await getSignupInputs(validatedSignupInputs);
  let isUserCreated: any = await userModel.create(newUserObj);
  if (isUserCreated._id) {
    return true;
  } else {
    return false;
  }
};

export default dal;

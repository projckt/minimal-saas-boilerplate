import { userModel } from "../../models/userModel";

const dal = async (email: string) => {
  const userDoc: any = await userModel.findOne({
    "account.holder.email.primary.value": email,
  });

  if (userDoc) {
    return true;
  } else {
    return false;
  }
};

export default dal;

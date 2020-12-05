import { userModel } from "../../models/userModel";

const dal = async (email: string) => {
  const userDoc: any = await userModel.findOne({
    "account.holder.email": email,
  });

  let obj = {
    isUserSignedUp: false,
    userDoc: "",
  };

  if (userDoc) {
    obj.isUserSignedUp = true;
  } else {
    obj.isUserSignedUp = false;
    obj.userDoc = userDoc;
  }

  return obj;
};

export default dal;

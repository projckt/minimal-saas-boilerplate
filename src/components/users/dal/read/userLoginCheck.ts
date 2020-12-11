import { userModel } from "../../models/userModel";

const dal = async (validatedLoginInputs: any) => {
  let email = validatedLoginInputs.email;
  let pswd = validatedLoginInputs.pswd;
  let userDoc: any = await userModel.findOne({
    "account.holder.email.primary.value": email,
  });

  let isPasswordVerified = await userDoc.pswdVerification(pswd);

  if (!userDoc || !isPasswordVerified) {
    let loginObj = {
      isUserSignedUp: false,
      isPasswordVerified: false,
      userId: "",
    };
    return loginObj;
  } else {
    let loginObj = {
      isUserSignedUp: true,
      isPasswordVerified: true,
      userId: userDoc.account.id,
    };
    return loginObj;
  }
};

export default dal;

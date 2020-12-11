import { userModel } from "../../models/userModel";
import { getDestroySessionMeta } from "../../helpers";

const dal = async (userId: string) => {
  let sessionMetaObj: any = await getDestroySessionMeta();
  let sessionLastDestroyedOn: string = sessionMetaObj.lastDestroyedOn;
  let sessionExpiresOn: string = sessionMetaObj.expiresOn;
  let sessionIsActive: string = sessionMetaObj.isActive;

  let filterObj = { "account.id": userId };
  let updateObj = {
    "session.meta.timestamp.lastDestroyedOn": sessionLastDestroyedOn,
    "session.meta.timestamp.expiresOn": sessionExpiresOn,
    "session.id": "",
    "session.isActive": sessionIsActive,
  };
  let updatedUserDoc: any = await userModel.findOneAndUpdate(
    filterObj,
    updateObj,
    {
      new: true,
    }
  );

  let sessionLastDestroyedOnUpdated: string =
    updatedUserDoc.session.meta.timestamp.lastDestroyedOn;
  let sessionExpiresOnUpdated: string =
    updatedUserDoc.session.meta.timestamp.expiresOn;
  let sessionIsActiveUpdated: string = updatedUserDoc.session.isActive;

  if (
    sessionLastDestroyedOn === sessionLastDestroyedOnUpdated &&
    sessionExpiresOn === sessionExpiresOnUpdated &&
    sessionIsActive === sessionIsActiveUpdated
  ) {
    return true;
  } else {
    return false;
  }
};

export default dal;

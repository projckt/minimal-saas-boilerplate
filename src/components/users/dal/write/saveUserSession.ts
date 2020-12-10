import { userModel } from "../../models/userModel";
import { getSessionMeta } from "../../helpers";

const dal = async (userId: string, sessionId: string, sessionMaxAge: any) => {
  let sessionMetaObj: any = await getSessionMeta(sessionMaxAge);
  let sessionLastCreatedOn: string = sessionMetaObj.lastCreatedOn;
  let sessionLastDestroyedOn: string = sessionMetaObj.lastDestroyedOn;
  let sessionExpiresOn: string = sessionMetaObj.expiresOn;
  let sessionIsActive: string = sessionMetaObj.isActive;
  let filterObj = { "account.id": userId };
  let updateObj = {
    "session.meta.timestamp.lastCreatedOn": sessionLastCreatedOn,
    "session.meta.timestamp.lastDestroyedOn": sessionLastDestroyedOn,
    "session.meta.timestamp.expiresOn": sessionExpiresOn,
    "session.id": sessionId,
    "session.isActive": sessionIsActive,
  };

  let updatedUserDoc: any = await userModel.findOneAndUpdate(
    filterObj,
    updateObj,
    {
      new: true,
    }
  );

  let sessionLastCreatedOnUpdated: string =
    updatedUserDoc.session.meta.timestamp.lastCreatedOn;
  let sessionLastDestroyedOnUpdated: string =
    updatedUserDoc.session.meta.timestamp.lastDestroyedOn;
  let sessionExpiresOnUpdated: string =
    updatedUserDoc.session.meta.timestamp.expiresOn;
  let sessionIsActiveUpdated: string = updatedUserDoc.session.isActive;
  let sessionIdUpdated: string = updatedUserDoc.session.id;

  if (
    sessionLastCreatedOn === sessionLastCreatedOnUpdated &&
    sessionLastDestroyedOn === sessionLastDestroyedOnUpdated &&
    sessionExpiresOn === sessionExpiresOnUpdated &&
    sessionId === sessionIdUpdated &&
    sessionIsActive === sessionIsActiveUpdated
  ) {
    return true;
  } else {
    return false;
  }
};

export default dal;

import moment from "moment";

const preprocessor = async (sessionMaxAge: number) => {
  let sessionLastCreatedOn: string = moment().toISOString();
  let sessionExpiresOn: string = new Date(sessionMaxAge).toISOString();
  let isSessionActive: boolean = true;

  let obj = {
    lastCreatedOn: sessionLastCreatedOn,
    lastDestroyedOn: "",
    expiresOn: sessionExpiresOn,
    isActive: isSessionActive,
  };

  return obj;
};

export default preprocessor;

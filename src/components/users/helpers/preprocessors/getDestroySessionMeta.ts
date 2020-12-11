import moment from "moment";

const preprocessor = async () => {
  let sessionLastDestroyedOn: string = moment().toISOString();
  let isSessionActive: boolean = false;

  let obj = {
    lastDestroyedOn: sessionLastDestroyedOn,
    expiresOn: "",
    isActive: isSessionActive,
  };

  return obj;
};

export default preprocessor;

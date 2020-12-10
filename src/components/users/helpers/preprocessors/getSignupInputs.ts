import { v4 as uuidv4 } from "uuid";
import * as argon2 from "argon2";
import moment from "moment";

const preprocessor = async (validatedSignupInputs: any) => {
  let firstName = validatedSignupInputs.firstName;
  let middleName = validatedSignupInputs.middleName;
  let lastName = validatedSignupInputs.lastName;
  let email = validatedSignupInputs.email;
  let pswd = validatedSignupInputs.pswd;
  let accountId: string = await uuidv4();
  let emailVerificationSring: string = await uuidv4();
  let hashedPswd: string = await argon2.hash(pswd, {
    type: argon2.argon2id,
  });
  let accountCreationTimestamp = moment().toISOString();

  let account: object = {
    id: accountId,
    holder: {
      name: {
        first: firstName,
        middle: middleName,
        last: lastName,
      },
      email: {
        primary: {
          value: email,
          isVerified: false,
          isUnderVerification: true,
          verificationString: {
            value: emailVerificationSring,
            isActive: true,
          },
        },
      },
      authentication: {
        pswd: {
          value: hashedPswd,
          isResetting: false,
          resetCode: {
            value: "",
            isActive: false,
          },
        },
      },
      mobile: {
        primary: {
          country: "",
          isdCode: "",
          msisdn: "",
          iso2digitCode: "",
          iso3digitCode: "",
        },
      },
      address: { line1: "", line2: "", state: "", country: "", pinCode: "" },
    },
    meta: {
      status: {
        completion: {
          isComplete: false,
          perc: "0",
        },
        isMarkedForDeletion: false,
      },
      timestamp: {
        createdOn: accountCreationTimestamp,
        lastAccessedOn: "",
      },
    },
  };

  let billing: object = {
    name: { first: "", middle: "", last: "" },
    address: { line1: "", line2: "", state: "", country: "", pinCode: "" },
    currency: { country: "", isoCode: "", name: "", symbol: "" },
    tax: {
      india: {
        gst: {
          isGstInvoicePreferred: false,
          gstin: "",
        },
      },
    },
  };

  let session: object = {
    value: "",
    isActive: false,
    meta: {
      timestamp: { lastCreatedOn: "", lastDestroyedOn: "", expiresOn: "" },
    },
  };

  let obj = {
    account: account,
    billing: billing,
    session: session,
  };

  return obj;
};

export default preprocessor;

import { boolean } from "@hapi/joi";
import { Schema } from "mongoose";
import { appConfig } from "../../../../config";
import { accountActivityLogSchema } from "./accountActivityLogSchema";

export const userSchema: Schema = new Schema(
  {
    account: {
      id: {
        type: String,
        required: true,
        unique: true,
        min: appConfig.minLength.accountID,
      },
      holder: {
        name: {
          first: {
            type: String,
            required: true,
            min: appConfig.minLength.accountUserName,
          },
          middle: {
            type: String,
            required: true,
            min: appConfig.minLength.accountUserName,
          },
          last: {
            type: String,
            required: true,
            min: appConfig.minLength.accountUserName,
          },
        },
        email: {
          primary: {
            value: {
              type: String,
              required: true,
              unique: true,
              min: appConfig.minLength.accountEmail,
            },
            isVerified: {
              type: Boolean,
            },
            isUnderReset: {
              type: Boolean,
            },
            resetCode: {
              value: {
                type: String,
                min: appConfig.minLength.accountEmailResetCode,
                max: appConfig.maxLength.accountEmailResetCode,
              },
              isActive: {
                type: Boolean,
              },
            },
          },
        },
        pswd: {
          value: {
            type: String,
            required: true,
            min: appConfig.minLength.accountPswd,
          },
          isUnderReset: {
            type: Boolean,
          },
          resetCode: {
            value: {
              type: String,
              min: appConfig.minLength.accountPswdResetCode,
              max: appConfig.maxLength.accountPswdResetCode,
            },
            isActive: {
              type: Boolean,
            },
          },
        },
        mobile: {
          primary: {
            country: {
              type: String,
              min: appConfig.minLength.accountMobile.country,
            },
            isdCode: {
              type: String,
              min: appConfig.minLength.accountMobile.isdCode,
            },
            msisdn: {
              type: String,
              min: appConfig.minLength.accountMobile.msisdn,
            },
            iso2digitCode: {
              type: String,
              min: appConfig.minLength.accountMobile.iso2digitCode,
              max: appConfig.maxLength.accountMobile.iso3digitCode,
            },
            iso3digitCode: {
              type: String,
              min: appConfig.minLength.accountMobile.iso3digitCode,
              max: appConfig.maxLength.accountMobile.iso3digitCode,
            },
          },
        },
        address: {
          line1: { type: String, min: appConfig.minLength.accountAddressInfo },
          line2: { type: String, min: appConfig.minLength.accountAddressInfo },
          state: { type: String, min: appConfig.minLength.accountAddressInfo },
          country: {
            type: String,
            min: appConfig.minLength.accountAddressInfo,
          },
          pinCode: {
            type: String,
            min: appConfig.minLength.accountAddressInfo,
          },
        },
      },
    },
    billing: {
      address: {
        line1: {
          type: String,
          min: appConfig.minLength.accountBillingAddressInfo,
        },
        line2: {
          type: String,
          min: appConfig.minLength.accountBillingAddressInfo,
        },
        state: {
          type: String,
          min: appConfig.minLength.accountBillingAddressInfo,
        },
        country: {
          type: String,
          min: appConfig.minLength.accountBillingAddressInfo,
        },
        pinCode: {
          type: String,
          min: appConfig.minLength.accountBillingAddressInfo,
        },
      },
      billTo: {
        type: String,
        min: appConfig.minLength.accountBillingAddressInfo,
      },
      currency: {
        country: { type: String, min: appConfig.minLength.accountCurrencyInfo },
        isoCode: { type: String, min: appConfig.minLength.accountCurrencyInfo },
        name: { type: String, min: appConfig.minLength.accountCurrencyInfo },
        symbol: { type: String, min: appConfig.minLength.accountCurrencyInfo },
      },
      tax: {
        india: {
          gst: {
            isGstInvoicePreferred: { type: Boolean },
            gstin: {
              type: String,
              min: appConfig.minLength.accountBillingInfo,
            },
          },
        },
      },
    },
    meta: {
      accountCreationTimestamp: {
        type: String,
        min: appConfig.minLength.accountMetaInfo,
      },
      accountLastAccessTimestamp: {
        type: String,
        min: appConfig.minLength.accountMetaInfo,
      },
      accountSession: {
        isSessionActive: {
          type: String,
          min: appConfig.minLength.accountMetaInfo,
        },
        currentSessionId: {
          type: String,
          min: appConfig.minLength.accountMetaInfo,
        },
      },
      accountActivityLog: [accountActivityLogSchema],
      accountStatus: {
        isDeleted: {
          type: Boolean,
        },
      },
    },
  },
  { timestamps: true }
);

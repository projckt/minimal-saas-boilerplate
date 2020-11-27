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
          type: String,
          required: true,
          unique: true,
          min: appConfig.minLength.accountEmail,
        },
      },
      pswd: {
        type: String,
        required: true,
        min: appConfig.minLength.accountPswd,
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
    },
    billing: {
      address: {
        line1: { type: String, min: appConfig.minLength.accountBillingInfo },
        line2: { type: String, min: appConfig.minLength.accountBillingInfo },
        state: { type: String, min: appConfig.minLength.accountBillingInfo },
        country: { type: String, min: appConfig.minLength.accountBillingInfo },
        pinCode: { type: String, min: appConfig.minLength.accountBillingInfo },
      },
      billTo: { type: String, min: appConfig.minLength.accountBillingInfo },
      taxByCountry: {
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
      accountCreation: {
        type: String,
        min: appConfig.minLength.accountMetaInfo,
      },
      accountLastAccess: {
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
    },
  },
  { timestamps: true }
);

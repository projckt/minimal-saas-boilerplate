import { boolean } from "@hapi/joi";
import { Schema } from "mongoose";
import { appConfig } from "../../../../config";
import { userAccountActivityLogSchema } from "./userAccountActivityLogSchema";

export const userSchema: Schema = new Schema(
  {
    account: {
      id: {
        type: String,
        required: true,
        unique: true,
        min: appConfig.user.account.id.minLength,
      },
      holder: {
        name: {
          first: {
            type: String,
            required: true,
            min: appConfig.user.account.holder.name.minLength,
          },
          middle: {
            type: String,
            min: appConfig.user.account.holder.name.minLength,
          },
          last: {
            type: String,
            required: true,
            min: appConfig.user.account.holder.name.minLength,
          },
        },
        email: {
          primary: {
            value: {
              type: String,
              required: true,
              unique: true,
              min: appConfig.user.account.holder.email.value.minLength,
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
                min: appConfig.user.account.holder.email.resetCode.minLength,
                max: appConfig.user.account.holder.email.resetCode.maxLength,
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
            min: appConfig.user.account.holder.pswd.value.minLength,
          },
          isUnderReset: {
            type: Boolean,
          },
          resetCode: {
            value: {
              type: String,
              min: appConfig.user.account.holder.pswd.resetCode.minLength,
              max: appConfig.user.account.holder.pswd.resetCode.maxLength,
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
              min: appConfig.user.account.holder.mobile.country.minLength,
            },
            isdCode: {
              type: String,
              min: appConfig.user.account.holder.mobile.isdCode.minLength,
            },
            msisdn: {
              type: String,
              min: appConfig.user.account.holder.mobile.msisdn.minLength,
            },
            iso2digitCode: {
              type: String,
              min: appConfig.user.account.holder.mobile.iso2digitCode.minLength,
              max: appConfig.user.account.holder.mobile.iso2digitCode.maxLength,
            },
            iso3digitCode: {
              type: String,
              min: appConfig.user.account.holder.mobile.iso3digitCode.minLength,
              max: appConfig.user.account.holder.mobile.iso3digitCode.maxLength,
            },
          },
        },
        address: {
          line1: {
            type: String,
            min: appConfig.user.account.holder.address.minLength,
          },
          line2: {
            type: String,
            min: appConfig.user.account.holder.address.minLength,
          },
          state: {
            type: String,
            min: appConfig.user.account.holder.address.minLength,
          },
          country: {
            type: String,
            min: appConfig.user.account.holder.address.minLength,
          },
          pinCode: {
            type: String,
            min: appConfig.user.account.holder.address.minLength,
          },
        },
      },
    },
    billing: {
      address: {
        line1: {
          type: String,
          min: appConfig.user.billing.address.minLength,
        },
        line2: {
          type: String,
          min: appConfig.user.billing.address.minLength,
        },
        state: {
          type: String,
          min: appConfig.user.billing.address.minLength,
        },
        country: {
          type: String,
          min: appConfig.user.billing.address.minLength,
        },
        pinCode: {
          type: String,
          min: appConfig.user.billing.address.minLength,
        },
      },
      billTo: {
        type: String,
        min: appConfig.user.billing.info.minLength,
      },
      currency: {
        country: { type: String, min: appConfig.user.billing.info.minLength },
        isoCode: { type: String, min: appConfig.user.billing.info.minLength },
        name: { type: String, min: appConfig.user.billing.info.minLength },
        symbol: { type: String, min: appConfig.user.billing.info.minLength },
      },
      tax: {
        india: {
          gst: {
            isGstInvoicePreferred: { type: Boolean },
            gstin: {
              type: String,
              min: appConfig.user.billing.info.minLength,
            },
          },
        },
      },
    },
    meta: {
      accountCreationTimestamp: {
        type: String,
        min: appConfig.user.meta.info.minLength,
      },
      accountLastAccessTimestamp: {
        type: String,
        min: appConfig.minLength.accountMetaInfo,
      },
      accountSession: {
        isSessionActive: {
          type: String,
          min: appConfig.user.meta.info.minLength,
        },
        currentSessionId: {
          type: String,
          min: appConfig.user.meta.info.minLength,
        },
      },
      accountActivityLog: [userAccountActivityLogSchema],
      accountStatus: {
        isDeleted: {
          type: Boolean,
        },
      },
    },
  },
  { timestamps: true }
);

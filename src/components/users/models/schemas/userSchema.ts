import { Schema } from "mongoose";
import app from "../../../../app";
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
            isUnderVerification: {
              type: Boolean,
            },
            verificationString: {
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
        authentication: {
          pswd: {
            value: {
              type: String,
              min:
                appConfig.user.account.holder.authentication.pswd.value
                  .minLength,
            },
            isResetting: {
              type: Boolean,
            },
            resetCode: {
              value: {
                type: String,
                min:
                  appConfig.user.account.holder.authentication.pswd.resetCode
                    .minLength,
                max:
                  appConfig.user.account.holder.authentication.pswd.resetCode
                    .maxLength,
              },
              isActive: {
                type: Boolean,
              },
            },
          },
          loginCode: {
            value: {
              type: String,
              min:
                appConfig.user.account.holder.authentication.loginCode
                  .minLength,
              max:
                appConfig.user.account.holder.authentication.loginCode
                  .maxLength,
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
      timestamp: {
        createdOn: {
          type: String,
          min: appConfig.user.meta.info.minLength,
        },
        lastAccessedOn: {
          type: String,
          min: appConfig.user.meta.info.minLength,
        },
      },
      session: {
        isSessionActive: {
          type: String,
          min: appConfig.user.meta.info.minLength,
        },
        currentSessionId: {
          type: String,
          min: appConfig.user.meta.info.minLength,
        },
      },
      activityLog: [userAccountActivityLogSchema],
      status: {
        isEmailVerified: {
          type: Boolean,
          required: true,
        },
        isAccountComplete: {
          type: Boolean,
          required: true,
        },
        isDeleted: {
          type: Boolean,
        },
      },
    },
  },
  { timestamps: true }
);
